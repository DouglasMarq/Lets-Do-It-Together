import { createContext } from 'react';
import { Login } from '../constants/Interface';

export const LoginContext = createContext<Login | null>(null);
