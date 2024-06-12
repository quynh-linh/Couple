import Sidebar from '@/components/Albums/SideBar/Sidebar';
import Header from '@/components/common/Header/page';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Tập ảnh',
};

export default function AlbumsLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header position='Sidebar'/>
            <Sidebar/>
            {children}
        </>
    );
}