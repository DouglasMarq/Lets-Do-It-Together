/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { ColorSchemeName } from 'react-native';

import BottomTabNavigator from '../components/BottomTabNavigator';
import ModalScreen from './ModalScreen';
import NotFoundScreen from './NotFoundScreen';
import { RootStackParamList } from '../constants/Types';
import LinkingConfiguration from './LinkingConfiguration';
import { loginContext } from '../context/LoginContext';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
    const [loggedIn, setLogin] = useState(false);

    /**
     * A root stack navigator is often used for displaying modals on top of all other content.
     * https://reactnavigation.org/docs/modal
     */
    const Stack = createNativeStackNavigator<RootStackParamList>();

    useEffect(() => {
        console.log(`Login Changed to ${loggedIn}!`);
    }, [loggedIn]);

    return (
        <NavigationContainer
            linking={LinkingConfiguration}
            theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <loginContext.Provider value={{ loggedIn }}>
                <Stack.Navigator>
                    <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
                    <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
                    <Stack.Group screenOptions={{ presentation: 'modal' }}>
                        <Stack.Screen name="Modal" component={ModalScreen} />
                    </Stack.Group>
                </Stack.Navigator>
            </loginContext.Provider>
        </NavigationContainer>
    );
}
