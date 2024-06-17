'use client';
import BackToTopButton from '@/components/BackToTop/BackToTop';
import Footer from '@/components/common/Footer/Footer';
import Header from '@/components/common/Header/page';
import HeartCreator from '@/components/Home/HeartCreator';
import LoadingPage from '@/components/Loader/LoadingPage';
import { useAppDispatch, useAppSelector } from '@/libs/hook';
import { initHearts } from '@/redux/features/heartSlice';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ComponentConnectLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const selector = useAppSelector((state) => state.heart);
    const dispatch = useAppDispatch();
    const [isOpenPage, setOpenPage] = useState(false);
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const isRemoveHearts = localStorage.getItem('isRemoved');
            if (isRemoveHearts === null && isRemoveHearts !== 'true') {
                dispatch(initHearts({ status: true }));
            }
        }
    }, [dispatch]);

    useEffect(() => {
        if (pathname === '/albums') document.body.style.backgroundColor = 'white';
    }, [pathname]);

    return pathname === '/albums' ? (
        children
    ) : (
        <LoadingPage
            isState={(e) => {
                setOpenPage(e);
            }}
        >
            {isOpenPage && (
                <>
                    <Header />
                    {children}
                    {selector.status ? <HeartCreator /> : ''}
                    <BackToTopButton />
                    <Footer />
                </>
            )}
        </LoadingPage>
    );
}
