import Link from "next/link";
import React from "react";
import { FaSquare } from "react-icons/fa";

const HomePage = () => {
  return (
    <div>
      <p className="text-blue-950 text-[6px] md:text-base font-bold">
        Sponsorship management system (SMS)
      </p>
      <p className="text-[6px] md:text-xs my-1 md:my-2">
        Welcome to SMS. If you are a Level 1 user, you can view all applicable
        menu items. Level 2 users are unable to view the &apos;Licence summary,
        applications and services&apos; menu item or group of functions.
      </p>
      <Link
        href={"#"}
        className="text-blue-900 underline text-[6px] md:text-[13px] font-bold tracking-wide"
      >
        Licence summary, applications and services
      </Link>
      <ul className="text-[6px] md:text-[13px] list-none space-y-1 mt-1.5">
        <li className="flex items-start gap-1 md:gap-3">
          <span className="text-[3px] md:text-[5px] mt-[3px] md:mt-2">
            <FaSquare />
          </span>
          <span>
            View your licence details, including registered users, key
            personnel, addresses, allocations and key dates
          </span>
        </li>
        <li className="flex items-start gap-1 md:gap-3">
          <span className="text-[3px] md:text-[5px] mt-[3px] md:mt-2">
            <FaSquare />
          </span>
          <span>
            Change your licence details, including registered users, key
            personnel and addresses
          </span>
        </li>
        <li className="flex items-start gap-1 md:gap-3">
          <span className="text-[3px] md:text-[5px] mt-[3px] md:mt-2">
            <FaSquare />
          </span>
          <span>Request an increase in your allocation of CoS or CAS</span>
        </li>
        <li className="flex items-start gap-1 md:gap-3">
          <span className="text-[3px] md:text-[5px] mt-[3px] md:mt-2">
            <FaSquare />
          </span>
          <span>Request renewal of your annual allocation of CoS or CAS</span>
        </li>
        <li className="flex items-start gap-1 md:gap-3">
          <span className="text-[3px] md:text-[5px] mt-[3px] md:mt-2">
            <FaSquare />
          </span>
          <span>Pay for and view status of action plans</span>
        </li>
        <li className="flex items-start gap-1 md:gap-3">
          <span className="text-[3px] md:text-[5px] mt-[3px] md:mt-2">
            <FaSquare />
          </span>
          <span>Apply for Premium customer service</span>
        </li>
        <li className="flex items-start gap-1 md:gap-3">
          <span className="text-[3px] md:text-[5px] mt-[3px] md:mt-2">
            <FaSquare />
          </span>
          <span>Apply for a Basic Compliance Assessment</span>
        </li>
        <li className="flex items-start gap-1 md:gap-3">
          <span className="text-[3px] md:text-[5px] mt-[3px] md:mt-2">
            <FaSquare />
          </span>
          <span>
            View your Premium customer service contact details (if applicable)
          </span>
        </li>
        <li className="flex items-start gap-1 md:gap-3">
          <span className="text-[3px] md:text-[5px] mt-[3px] md:mt-2">
            <FaSquare />
          </span>
          <span>View the status of applications you have submitted</span>
        </li>
      </ul>
      <p className="underline text-[6px] md:text-[13px] text-blue-950 cursor-pointer mt-2 md:mt-[14px]">
        Help (opens in a new window)
      </p>
      <p className="underline text-[6px] md:text-[14px] text-blue-950 cursor-pointer mt-0 font-semibold">
        Workers
      </p>
      <ul className="text-[6px] md:text-[13px] mt-1 md:mt-2">
        <li className="flex items-center gap-1 md:gap-3">
          <span className="text-[3px] md:text-[5px]">
            <FaSquare />
          </span>
          <span>Manage the sponsorship of workers</span>
        </li>
      </ul>
      <p className="underline text-[6px] md:text-[13px] text-blue-950 cursor-pointer mt-2 md:mt-4">
        Help (opens in a new window)
      </p>
    </div>
  );
};

export default HomePage;
