import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Tập ảnh',
};

export default function AlbumsLayout({ children }: { children: React.ReactNode }) {
    return children;
}