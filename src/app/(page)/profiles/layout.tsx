import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Profile',
};
export default function ProfilesLayout({ children }: { children: React.ReactNode }) {
    return children;
}