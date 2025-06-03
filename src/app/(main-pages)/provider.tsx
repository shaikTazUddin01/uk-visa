'use client'
import React from 'react';
import { usePathname } from 'next/navigation';
import Navbar from '@/components/navbar/navbar';
import SideNavbar from '@/components/leftSideNavbar/leftSideNavbar';
import Image from 'next/image';
import { FcCollapse } from 'react-icons/fc';

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
        className={`antialiased max-w-[1020px] w-[300px] md:w-[500px] lg:w-[860px] xl:w-[1020px] xl:px-5 mx-auto`}
      >
        <Navbar />
        <div className="max-w-screen-xl mx-auto grid grid-cols-4">
          {/* Left Sidebar */}
          <SideNavbar />

          {/* Main Content */}
          <main className="col-span-2 w-full mx-auto p-1 min-h-screen">
            {children}
          </main>

          {/* Right Sidebar */}
         
          <aside className="md:col-span-1  min-h-screen">
            <div className="mr-2">
              <h2 className=" text-[5px] md:text-xs font-bold uppercase px-1  md:p-1 bg-gradient-to-b from-white to-[#E5E5E5] flex justify-between">
                See Also
                <Image
                  src={"/icon1.png"}
                  className="w-2 md:w-4"
                  width={20}
                  height={10}
                  alt="icon"
                />
              </h2>
              <ul className=" text-[5px] md:text-xs bg-[#EDF8FC] pr-[2px] lg:p-2 border-t border-blue-200">
                <li>
                  <a
                    href="#"
                    className="flex gap-1 text-blue-950 lg:font-medium text-[5px] md:text-[10px] lg:text-xs pt-1 hover:underline"
                  >
                    <FcCollapse className="w-4 rotate-90 mt-1" />
                    <p>SMS user guides (Open in a new window)</p>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex gap-1 text-blue-950 lg:font-medium text-[5px] md:text-[10px] lg:text-xs pt-1 hover:underline"
                  >
                    <FcCollapse className="w-4 rotate-90 mt-1" />
                    <p>Information for sponsors (Open in a new window)</p>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex gap-1 text-blue-950 lg:font-medium text-[5px] md:text-[10px] lg:text-xs pt-1 hover:underline"
                  >
                    <FcCollapse className="w-4 rotate-90 mt-1" />
                    <p>Accessibility Statement (Open in a new window)</p>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex gap-1 text-blue-950 lg:font-medium text-[5px] md:text-[10px] lg:text-xs pt-1 hover:underline"
                  >
                    <FcCollapse className="w-4 rotate-90 mt-1" />
                    <p>Cookie Statement (Open in a new window)</p>
                  </a>
                </li>
              </ul>
            </div>
          </aside>

        </div>
      </body>
    </html>
  );
};

export default Provider;