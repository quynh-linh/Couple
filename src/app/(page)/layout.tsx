import Header from "@/components/common/Header/page";

export default function ComponentConnectLayout({ children }: { children: React.ReactNode }) {
     return(
          <div className=" w-full h-full">
               <Header/>
               {children}
          </div>
     )
}