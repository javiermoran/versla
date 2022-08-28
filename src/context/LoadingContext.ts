import { createContext } from 'react';

const LoadingContext = createContext<any>({ global: false });

export default LoadingContext;
