'use client';
import BackToTopButton from '@/components/BackToTop/BackToTop';
import Footer from '@/components/common/Footer/Footer';
import Header from '@/components/common/Header/page';
import HeartCreator from '@/components/Home/HeartCreator';
import { useAppSelector } from '@/libs/hook';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function ComponentConnectLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const selector = useAppSelector((state) => state.heart);

    return (
        <div className=" w-full h-full">
            {pathname === '/albums' ? (
                children
            ) : (
                <>
                    <Header />
                    {children}
                    {selector.status ? '' : <HeartCreator />}
                    <BackToTopButton />
                    <Footer />
                </>
            )}
        </div>
    );
}
