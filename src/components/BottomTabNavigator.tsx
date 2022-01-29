
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootTabParamList, RootTabScreenProps } from '../constants/Types';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import React, { useContext } from 'react';
import RegisterOrLogin from '../screens/RegisterOrLogin';
import Settings from '../screens/Settings';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { Pressable } from 'react-native';
import TabBarIcon from './TabBarIcon';
import { FontAwesome } from '@expo/vector-icons';
import { loginContext } from '../context/LoginContext';

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

export default function BottomTabNavigator() {
    const colorScheme = useColorScheme();
    const { loggedIn } = useContext(loginContext);

    return (
        <BottomTab.Navigator
            initialRouteName="TabTwo"
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme].tint,
            }}>
            <BottomTab.Screen
                name="TabOne"
                component={TabOneScreen}
                options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
                    title: 'Tab One',
                    tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
                    headerRight: () => (
                        <Pressable
                            onPress={() => navigation.navigate('Modal')}
                            style={({ pressed }) => ({
                                opacity: pressed ? 0.5 : 1,
                            })}>
                            <FontAwesome
                                name="info-circle"
                                size={25}
                                color={Colors[colorScheme].text}
                                style={{ marginRight: 15 }}
                            />
                        </Pressable>
                    ),
                })}
            />
            <BottomTab.Screen
                name="TabTwo"
                component={TabTwoScreen}
                options={{
                    title: 'Tab Two',
                    headerShown: false,
                    tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
                }}
            />
            {
                loggedIn ? <BottomTab.Screen
                    name='RegisterOrLogin'
                    component={RegisterOrLogin}
                    options={{
                        title: 'Profile',
                    }} /> :
                    <BottomTab.Screen
                        name='RegisterOrLogin'
                        component={RegisterOrLogin}
                        options={{
                            title: 'Sign in/Sign up',
                            tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
                        }}
                    />
            }
            <BottomTab.Screen
                component={Settings}
                name='Settings'
                options={{
                    title: 'Settings',
                    tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
                    headerShown: false,
                }}/>
        </BottomTab.Navigator>
    );
}
