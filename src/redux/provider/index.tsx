'use client';

import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { SessionProvider } from 'next-auth/react';
import store from './store';

export interface ReduxProviderProps {
    children: ReactNode;
}

export default function ReduxProvider({ children }: ReduxProviderProps) {
    return (
        // <SessionProvider>
            <Provider store={store}>{children}</Provider>
        // </SessionProvider>
    );
}