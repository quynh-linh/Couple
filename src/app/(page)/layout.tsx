'use client';
import BackToTopButton from '@/components/BackToTop/BackToTop';
import Footer from '@/components/common/Footer/Footer';
import Header from '@/components/common/Header/page';
import HeartCreator from '@/components/Home/HeartCreator';
import { useAppDispatch, useAppSelector } from '@/libs/hook';
import { initHearts } from '@/redux/features/heartSlice';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function ComponentConnectLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const selector = useAppSelector((state) => state.heart);
    const dispatch = useAppDispatch();
    const isRemoveHearts = localStorage.getItem('isRemoved');

    useEffect(() => {
        if (isRemoveHearts === null && isRemoveHearts !== 'true') {
            dispatch(initHearts({ status: true }));
        }
    }, []);

    return (
        <div className=" w-full h-full">
            {pathname === '/albums' ? (
                children
            ) : (
                <>
                    <Header />
                    {children}
                    {selector.status ? <HeartCreator /> : ''}
                    <BackToTopButton />
                    <Footer />
                </>
            )}
        </div>
    );
}
