'use client';

import React, { ReactNode, useRef } from 'react';
import { Provider } from 'react-redux';
import { SessionProvider } from 'next-auth/react';
import { AppStore , store } from './store';

export interface ReduxProviderProps {
    children: ReactNode;
}

export default function ReduxProvider({ children }: ReduxProviderProps) {
    const storeRef = useRef<AppStore>();
    
    if (!storeRef.current) {
        storeRef.current = store();
    }
    
    return (
        <Provider store={storeRef.current}>{children}</Provider>
    );
}