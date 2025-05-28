import Link from "next/link";
import React from "react";

const HomePage = () => {
   
  return (
    <div>
      <p className="text-blue-950 text-[6px] md:text-base font-bold">
        Sponsorship management system (SMS)
      </p>
      <p className="text-[6px] md:text-xs my-2">
        Welcome to SMS. You must hold a sponsor licence to be able to log in to
        SMS. If you do not hold a licence, or you want to add a route to an
        existing licence, please use the{" "}
        <span className="underline text-blue-950 cursor-pointer">
          sponsor application.
        </span>
      </p>

      <Link
        href={"/login"}
        className="text-blue-950 underline text-[6px] md:text-xs font-bold"
      >
        Login
      </Link>
      <p className="text-[6px] md:text-xs mt-2">
        Log in to SMS using your assigned user ID and password.
      </p>

      <p className="underline text-[6px] md:text-xs text-blue-950 cursor-pointer mt-3">
        Help (opens in a new window)sponsor application.
      </p>
    </div>
  );
};

export default HomePage;
