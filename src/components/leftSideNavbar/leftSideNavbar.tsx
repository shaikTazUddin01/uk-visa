/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ImArrowDownRight } from "react-icons/im";
import { MdChevronRight } from "react-icons/md";
interface MenuItem {
  href: string;
  label: string;
  subMenu?: MenuItem[];
}

let menuItems: MenuItem[] = [{ href: "/home", label: "Home" }];

const SideNavbar = () => {
  const router = useRouter();
  const [user, setUser] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("loginData");
    if (user) {
      setUser(user);
      menuItems.push(
        {
          href: "/licence",
          label: "Licence summary, applications and services",
          subMenu: [
            {
              href: "/licence",
              label: "Manage Level 1 and 2 users",
            },
            {
              href: "/licence",
              label: "Request changes to licence details",
            },
            { href: "/licence", label: "Licence summary" },
            { href: "/licence", label: "PAYE References" },
            {
              href: "/licence",
              label: "Request CoS/CAS allocation increase",
            },
            {
              href: "/licence",
              label: "Request renewal of annual CoS/CAS allocations",
            },
            { href: "/licence", label: "Action plan details" },
            {
              href: "/licence",
              label:
                "Apply for or renew Worker Sponsor Premium customer service",
            },
            {
              href: "/licence",
              label: "Apply for Basic Compliance Assessment",
            },
            {
              href: "/licence",
              label: "Applications and renewals tracking",
            },
            { href: "/licence", label: "SMS message board" },
            {
              href: "/licence",
              label: "Premium service contact details",
            },
          ],
        },
        {
          href: "/workers",
          label: "Workers",
          subMenu: [
            {
              href: "/creat-assign",
              label: "Create and assign",
            },
            {
              href: "/defined-cos",
              label: "Defined CoS",
            },
            { href: "/views-cos", label: "View CoS" },
            { href: "/sponsorship-duties", label: "Sponsorship duties" },
            {
              href: "/manage-work-addresses",
              label: "Manage work addresses",
            },
          ],
        }
      );
    }
  }, []);

  const [activeMenu, setActiveMenu] = useState<any>(1);

  const handleMenuClick = (index: any) => {
    if (menuItems[index].subMenu) {
      setActiveMenu(activeMenu === index ? null : index);
      router.push(menuItems[index].href);
    } else {
      setActiveMenu(null);
      router.push(menuItems[index].href);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("loginData");
    router.push("/login");
    menuItems = [{ href: "/home", label: "Home" }];
    setTimeout(() => {
      window.location.reload(); // Reload after navigation
    }, 100); // Delay to allow navigation to take effect
  };
  return (
    <div>
      <aside className="col-span-1 md:p-4 md:min-h-screen">
        <nav>
          <ul>
            {menuItems.map((item, index) => (
              <li key={index}>
                <div
                  onClick={() => handleMenuClick(index)}
                  className="group flex items-center gap-1 pt-1 md:p-1 md:pt-0 text-[5px]  md:text-[8px] lg:text-xs cursor-pointer hover:underline hover:text-violet-600"
                >
                  <p>
                    <ImArrowDownRight className="text-blue-400 transition text-[5px] md:text-[8px] lg:text-xs group-hover:text-violet-600" />
                  </p>
                  <p>{item.label}</p>
                </div>

                {activeMenu === index && item.subMenu && (
                  <ul className="lg:pl-4 bg-slate-100">
                    {item.subMenu.map((subItem, index) => (
                      <li
                        key={index}
                        className="group flex items-center gap-1 p-0 m-0 border border-[#F4F4F4]"
                      >
                        <p>
                          <MdChevronRight className=" text-[blue-400] transition text-xs group-hover:text-violet-600" />
                        </p>
                        <Link
                          href={subItem.href}
                          className="text-[5px] md:text-[8px] lg:text-xs hover:underline hover:text-violet-600 "
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}

            {user ? (
              <>
                <Link
                  href={"#"}
                  className="group flex items-center gap-1 pt-1 md:p-1 md:pt-0 text-[5px] md:text-[8px] lg:text-xs hover:underline hover:text-violet-600"
                >
                  <ImArrowDownRight className="text-blue-400 transition md:text-[8px] lg:text-xs group-hover:text-violet-600" />
                  Change Password
                </Link>
                <Link
                  href={"#"}
                  className="group flex items-center gap-1 pt-1 md:p-1 md:pt-0 text-[5px] md:text-[8px] lg:text-xs hover:underline hover:text-violet-600"
                >
                  <ImArrowDownRight className="text-blue-400 transition md:text-[8px] lg:text-xs group-hover:text-violet-600" />
                  Contact
                </Link>
                <button
                  onClick={handleLogout}
                  className="group flex items-center gap-1 pt-1 md:p-1 md:pt-0 text-[5px] md:text-[8px] lg:text-xs hover:underline hover:text-violet-600"
                >
                  <ImArrowDownRight className="text-blue-400 transition md:text-[8px] lg:text-xs group-hover:text-violet-600" />
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href={"/login"}
                  className="group flex items-center gap-1 pt-1 md:p-1 md:pt-0  text-[5px] md:text-[8px] lg:text-xs hover:underline hover:text-violet-600"
                >
                  <ImArrowDownRight className="text-blue-400 transition md:text-[8px] lg:text-xs group-hover:text-violet-600" />
                  Login
                </Link>
                <Link
                  href={"#"}
                  className="group flex items-center gap-1 pt-1 md:p-1 md:pt-0  text-[5px] md:text-[8px] lg:text-xs hover:underline hover:text-violet-600"
                >
                  <ImArrowDownRight className="text-blue-400 transition md:text-[8px] lg:text-xs group-hover:text-violet-600" />
                  Contact
                </Link>
              </>
            )}
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default SideNavbar;
