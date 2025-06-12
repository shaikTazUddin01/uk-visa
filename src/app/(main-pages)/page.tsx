import Link from "next/link";


export default function Home() {
  return (
    <div>
      <p className="text-blue-950 text-[7px] md:text-base font-bold">
        Sponsorship management system (SMS)
      </p>
      <p className="text-[6px] md:text-xs my-1 md:my-2">
        Welcome to SMS. You must hold a sponsor licence to be able to log in to
        SMS. If you do not hold a licence, or you want to add a route to an
        existing licence, please use the{" "}
        <span className="underline text-blue-950 cursor-pointer">
          sponsor application.
        </span>
      </p>

      <Link
        href={"/login"}
        className="text-blue-950 underline text-[6px] md:text-xs font-bold "
      >
        Login
      </Link>
      <p className="text-[6px] md:text-xs  md:mt-2 ">
        Log in to SMS using your assigned user ID and password.
      </p>

      <p className="underline text-[6px] md:text-[13px] text-blue-950 cursor-pointer mt-1 md:mt-3">
        Help (opens in a new window)
      </p>
    </div>
  );
}
