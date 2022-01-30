/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../constants/Types';

const linking: LinkingOptions<RootStackParamList> = {
    prefixes: [Linking.createURL('/')],
    config: {
        screens: {
            Root: {
                screens: {
                    Categories: {
                        screens: {
                            CategoriesScreen: 'CategoriesScreen',
                        },
                    },
                    RegisterOrLogin: {
                        screens: {
                            RegisterOrLogin: 'RegisterOrLogin',
                        },
                    },
                    Settings: {
                        screens: {
                            Settings: 'Settings',
                        },
                    },
                    PrincipleQuestions: {
                        screens: {
                            PrincipleQuestions: 'PrincipleQuestions',
                        },
                    },
                },
            },
            Modal: 'modal',
            NotFound: '*',
        },
    },
};

export default linking;
