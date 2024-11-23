import Navbar from "@/components/Navbar/Navbar";

export default function HomeLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
     <div className="flex h-screen flex-col ">
        <Navbar/>
      <div className=" p-16">
      {children}
      </div>
     </div>
          
         
      
    );
  }
  