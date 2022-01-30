
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootTabParamList } from '../constants/Types';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import React from 'react';
import Settings from '../screens/Settings';
import CategoriesScreen from '../screens/CategoriesScreen';
import TabBarIcon from './TabBarIcon';

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

export default function BottomTabNavigator() {
    const colorScheme = useColorScheme();
    const BottomTab = createBottomTabNavigator<RootTabParamList>();

    return (
        <BottomTab.Navigator
            initialRouteName="Categories"
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme].tint,
            }}>
            <BottomTab.Screen
                name="Categories"
                component={CategoriesScreen}
                options={{
                    title: 'Categories',
                    headerShown: false,
                    tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
                }}
            />
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
