'use client'
import BackToTopButton from "@/components/BackToTop/BackToTop";
import Footer from "@/components/common/Footer/Footer";
import Header from "@/components/common/Header/page";
import HeartCreator from "@/components/Home/HeartCreator";

export default function ComponentConnectLayout({ children }: { children: React.ReactNode }) {
     return(
          <div className=" w-full h-full">
               <Header/>
               {children}
               <HeartCreator/>
               <BackToTopButton/>
               <Footer/>
          </div>
     )
}