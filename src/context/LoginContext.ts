import { createContext } from 'react';
import { Login } from '../constants/Interface';

export const loginContext = createContext<Login | null>(null);
