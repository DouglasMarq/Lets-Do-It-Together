/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { ColorSchemeName } from 'react-native';

import BottomTabNavigator from '../components/BottomTabNavigator';
import ModalScreen from './ModalScreen';
import NotFoundScreen from './NotFoundScreen';
import { RootStackParamList } from '../constants/types';
import LinkingConfiguration from './LinkingConfiguration';
import PrincipleQuestions from './PrincipleQuestions';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
    /**
     * A root stack navigator is often used for displaying modals on top of all other content.
     * https://reactnavigation.org/docs/modal
     */
    const Stack = createNativeStackNavigator<RootStackParamList>();

    return (
        <NavigationContainer
            linking={LinkingConfiguration}
            theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <Stack.Navigator>
                <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
                <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
                <Stack.Group screenOptions={{ presentation: 'modal' }}>
                    <Stack.Screen name="Modal" component={ModalScreen} />
                </Stack.Group>
                <Stack.Group>
                    <Stack.Screen
                        name="PrincipleQuestions"
                        component={PrincipleQuestions}
                        options={{
                            title: `PrincipleQuestions`,
                            headerShown: true,
                        }}
                    />
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
