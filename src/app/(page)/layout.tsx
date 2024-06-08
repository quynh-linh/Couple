'use client'
import BackToTopButton from "@/components/BackToTop/BackToTop";
import Footer from "@/components/common/Footer/Footer";
import Header from "@/components/common/Header/page";
import HeartCreator from "@/components/Home/HeartCreator";
import { usePathname } from "next/navigation";

export default function ComponentConnectLayout({ children }: { children: React.ReactNode }) {
     const pathname = usePathname();
     return(
          <div className=" w-full h-full">
               {pathname === '/albums'? (
                    children
               ) : (
                    <>
                    <Header/>
                    {children}
                    <HeartCreator/>
                    <BackToTopButton/>
                    <Footer/>
                    </>
               )}
          </div>
     )
}