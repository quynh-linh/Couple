'use client';

import React, { ReactNode, useRef } from 'react';
import { Provider } from 'react-redux';
import { AppStore, store } from './store';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
export interface ReduxProviderProps {
    children: ReactNode;
}
const queryClient = new QueryClient();
export default function ReduxProvider({ children }: ReduxProviderProps) {
    const storeRef = useRef<AppStore>();

    if (!storeRef.current) {
        storeRef.current = store();
    }

    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={storeRef.current}>{children}</Provider>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}
