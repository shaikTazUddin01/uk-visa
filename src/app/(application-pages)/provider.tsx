'use client'
import React from 'react';
import { usePathname } from 'next/navigation';
import Navbar from '@/components/navbar/navbar';
import SideNavbar from '@/components/leftSideNavbar/leftSideNavbar';


const Provider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
     const pathname = usePathname();
   console.log(pathname);
  return (
    <html lang="en">
      <body
        className={`antialiased max-w-[960px] w-[300px] md:w-[500px] lg:w-[860px] xl:w-[950px] xl:px-5 mx-auto`}
      >
        <Navbar />
        <div className="max-w-screen-xl mx-auto grid grid-cols-4">
          {/* Left Sidebar */}
          <SideNavbar />

          {/* Main Content */}
          <main className="col-span-3 w-full mx-auto p-1 min-h-screen">
            {children}
          </main>

         

        </div>
      </body>
    </html>
  );
};

export default Provider;