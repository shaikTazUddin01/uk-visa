"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";


const LoginClient = () => {
  const router = useRouter();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (userId === "" || password === "") {
      setError(
        "Sorry, the details you've entered don't match our records. User IDs and passwords are both case-sensitive; plus, if you're copying and pasting your user ID and/or password, please ensure that you don't include spaces at the end."
      );
      return;
    }
    const data = {
      userId,
      password,
    };

    localStorage.setItem("loginData", JSON.stringify(data));
    // window.location.reload();
    router.push("/home");
    setTimeout(() => {
      window.location.reload(); // Reload after navigation
    }, 100); // Delay to allow navigation to take effect
  };
  return (
    <div className="min-h-screen text-[6px] md:text-xs lg:px-4">
      <div className="w-full max-w-2xl bg-white  ">
        {/* Title */}
        <h2 className="text-[5px] md:text-base lg:text-lg text-blue-900 font-bold">SMS log in</h2>

        {/* Description */}
        <p className="mt-1 text-[5px] md:text-xs">
          You must hold a sponsor licence to be able to log into SMS.
        </p>
        <p className="text-[5px] md:text-xs  mt-1 md:mt-2">
          If you don&apos;t hold a licence or want to add a route to an existing
          licence, please use the{" "}
          <a href="#" className="text-blue-950 underline">
            sponsor application
          </a>
          .
        </p>

        <p className="text-[5px] md:text-xs  mt-1 md:mt-2">
          To log into SMS, enter your SMS user ID and password. You <strong className="text-blue-900">MUST</strong> be an appointed Level 1 or 2 user to access SMS and to use any functions in the system. Misuse of SMS user IDs may lead to action being taken against you.
        </p>

        <p className="text-[5px] md:text-xs  mt-1 md:mt-2">
          If you are copying and pasting your user ID and/or password, please
          ensure that spaces are not included at the end. If you enter an
          incorrect user ID or password three times, your account will be locked
          for approximately 20 minutes. If this occurs, you should try again
          later.
        </p>
        <p className="text-[5px] md:text-xs   mt-1 md:mt-2">
          You must have Javascript enabled on your browser and a PDF viewer
          installed to use some functions in SMS.
        </p>
        <p className="text-[5px] md:text-xs mt-3 font-semibold text-blue-950">
          You must never share your SMS user ID and/or password with another
          person. Misuse of SMS user IDs and/or passwords may lead to action
          being taken against you.
        </p>

        {error && (
          <p className="text-red-500 text-[5px] md:text-xs mt-1 font-semibold">{error}</p>
        )}

        {/* Forgot Password */}
        <a
          href="#"
          className="text-blue-950  text-[5px] md:text-xs underline  mt-1 md:mt-2 inline-block"
        >
          Forgotten your password?
        </a>

        {/* Login Form */}
        <div className=" mt-1 md:mt-2 border border-gray-300 bg-gray-100">
          <h3 className="text-[5px] md:text-xs font-bold bg-gray-200 p-1">SMS log in</h3>

          <div className=" px-1 flex relative items-center">
            <label className="block text-[5px] md:text-xs w-[20%]">User ID: </label>
            <input
              type="text"
              required
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              className="w-[35%] mx-auto border border-gray-400  mt-1"
            />
          </div>

          <div className="px-1 flex relative pb-3 items-center">
            <label className="block text-[5px] md:text-xs w-[20%]">Password:</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className=" w-[35%] mx-auto border border-gray-400  mt-1"
            />
          </div>
        </div>
        {/* Buttons */}
        <div className=" mt-1 md:mt-2 flex justify-end gap-2">
          <Link
            href={"/"}
            className="p-1 bg-gradient-to-t from-[#10254E] to-[#496192] text-white text-[5px] md:text-xs font-semibold"
          >
            Cancel
          </Link>
          <button
            onClick={handleLogin}
            className="p-1 bg-gradient-to-t from-[#10254E] to-[#496192] text-white text-[5px] md:text-xs font-semibold"
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginClient;
