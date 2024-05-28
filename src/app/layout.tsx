import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import images from "@/assets/images";
const inter = Inter({ subsets: ["latin"] });
import Favicon from '../../public/favicon.ico';
export const metadata: Metadata = {
  // metadataBase: new URL(`${process.env.NEXTAUTH_URL}`),
  title: {
      default: 'Linh & Yen',
      template: `%s | Linh & Yen`,
  },
  description:
      'Linh & Yen',
  icons: [{ rel: 'icon', url: Favicon.src }],
  robots: {
      index: true,
      follow: true,
      googleBot: {
          index: true,
          follow: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
      },
  },
  keywords: 'Linh & Yen',
  applicationName: 'Linh & Yen',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
