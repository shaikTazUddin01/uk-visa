import Link from "next/link";
import React from "react";

const LicencePage = () => {
  return (
    <div className="max-w-2xl mx-auto ">
      <h1 className="text-[6px] md:text-lg text-blue-950 font-bold my-3">
        Licence summary, applications and services
      </h1>

      <section className="mb-1 text-[6px] md:text-xs">
        <h2 className="text-[6px] md:text-xs font-bold text-blue-950 underline cursor-pointer mb-2">
          Manage Level 1 and 2 users
        </h2>
        <ul className="list-[square] list-inside mb-4 text-[6px] md:text-xs">
          <li>Add and deactivate SMS users</li>
          <li>Edit SMS user profiles</li>
        </ul>
        <Link
          href="#"
          className="text-blue-950 font-semibold  text-[6px] md:text-xs underline mt-6"
        >
          Help (opens in a new window)
        </Link>
      </section>

      <section className="mb-1 text-[6px] md:text-xs">
        <h2 className="text-[6px] md:text-xs font-bold text-blue-950 underline cursor-pointer mb-2">
          Request changes to licence details
        </h2>
        <ul className="list-[square] list-inside mb-4 text-[6px] md:text-xs">
          <li>
            Change your circumstances, including organisation details,
            accreditation or registration status
          </li>
          <li>Amend organisation structure details</li>
          <li>Amend key personnel details</li>
          <li>View recent and outstanding change requests</li>
        </ul>
        <Link
          href="#"
          className="text-blue-950 font-semibold  text-[6px] md:text-xs underline mt-6"
        >
          Help (opens in a new window)
        </Link>
      </section>

      <section className="mb-1 text-[6px] md:text-xs">
        <h2 className="text-[6px] md:text-xs font-bold text-blue-950 underline cursor-pointer mb-2">
          Licence summary
        </h2>
        <ul className="list-[square] list-inside mb-4 text-[6px] md:text-xs">
          <li>View organisation details</li>
          <li>View your sponsor licence number (SLN)</li>
          <li>View licence start, expiry and renewal dates</li>
          <li>
            View details of Key Contact, Authorising Officer and Representative
            (if applicable)
          </li>
          <li>View details of licensed routes</li>
          <li>
            View Student Sponsor status start/end dates and Basic Compliance
            Assessment application / renewal dates (if applicable)
          </li>
          <li>
            View Premium customer service start, end and renewal dates (if
            applicable)
          </li>
          <li>View licence ratings</li>
          <li>View CoS and CAS allocations (limit, used and remaining)</li>
        </ul>
        <Link
          href="#"
          className="text-blue-950 font-semibold  text-[6px] md:text-xs underline mt-6"
        >
          Help (opens in a new window)
        </Link>
      </section>

      <section className="mb-1 text-[6px] md:text-xs">
        <h2 className="text-[6px] md:text-xs font-bold text-blue-950 underline cursor-pointer mb-2">
          PAYE References
        </h2>
        <ul className="list-[square] list-inside mb-4 text-[6px] md:text-xs">
          <li>View existing references, who added them and when</li>
          <li>Add a new PAYE Reference</li>
          <li>Delete an existing PAYE Reference</li>
        </ul>
        <Link
          href="#"
          className="text-blue-950 font-semibold  text-[6px] md:text-xs underline mt-6"
        >
          Help (opens in a new window)
        </Link>
      </section>

      <section className="mb-1 text-[6px] md:text-xs">
        <h2 className="text-[6px] md:text-xs font-bold text-blue-950 underline cursor-pointer mb-2">
          Request CoS/CAS allocation increase
        </h2>
        <ul className="list-[square] list-inside mb-4 text-[6px] md:text-xs">
          <li>Request an increase to your current allocation of CoS or CAS</li>
          <li>
            Withdraw outstanding requests for an increase to your current
            allocation of CoS or CAS
          </li>
        </ul>
        <Link
          href="#"
          className="text-blue-950 font-semibold  text-[6px] md:text-xs underline mt-6"
        >
          Help (opens in a new window)
        </Link>
      </section>

      <section className="mb-1 text-[6px] md:text-xs">
        <h2 className="text-[6px] md:text-xs font-bold text-blue-950 underline cursor-pointer mb-2">
          Request renewal of annual CoS/CAS allocations
        </h2>
        <ul className="list-[square] list-inside mb-4 text-[6px] md:text-xs">
          <li>
            Request the renewal of next year&apos;s annual allocation(s) of CoS
            or CAS
          </li>
          <li>
            Withdraw outstanding requests for an increase to your current
            allocation of CoS or CASView outstanding requests for the renewal of
            next year&apos;s annual allocation(s) of CoS or CAS
          </li>
          <li>
            View automatically renewed allocations of next year&apos;s annual
            allocation(s) of CoS or CAS (if applicable)
          </li>
        </ul>
        <Link
          href="#"
          className="text-blue-950 font-semibold  text-[6px] md:text-xs underline mt-6"
        >
          Help (opens in a new window)
        </Link>
      </section>

      <section className="mb-1 text-[6px] md:text-xs">
        <h2 className="text-[6px] md:text-xs font-bold text-blue-950 underline cursor-pointer mb-2">
          Action plan details
        </h2>
        <ul className="list-[square] list-inside mb-4 text-[6px] md:text-xs">
          <li>
            Make a payment or decline to make a payment for an action plan
          </li>
          <li>View completed action plan payments</li>
        </ul>
        <Link
          href="#"
          className="text-blue-950 font-semibold  text-[6px] md:text-xs underline mt-6"
        >
          Help (opens in a new window)
        </Link>
      </section>

      <section className="mb-1 text-[6px] md:text-xs">
        <h2 className="text-[6px] md:text-xs font-bold text-blue-950 underline cursor-pointer mb-2">
          Apply for or renew Worker Sponsor Premium customer service
        </h2>
        <ul className="list-[square] list-inside mb-4 text-[6px] md:text-xs">
          <li>Apply for premium customer service</li>
          <li>Apply to renew premium customer service</li>
        </ul>
        <Link
          href="#"
          className="text-blue-950 font-semibold  text-[6px] md:text-xs underline mt-6"
        >
          Help (opens in a new window)
        </Link>
      </section>

      <section className="mb-1 text-[6px] md:text-xs">
        <h2 className="text-[6px] md:text-xs font-bold text-blue-950 underline cursor-pointer mb-2">
          Apply for Basic Compliance Assessment
        </h2>
        <ul className="list-[square] list-inside mb-4 text-[6px] md:text-xs">
          <li>Apply for a Basic Compliance Assessment</li>
        </ul>
        <Link
          href="#"
          className="text-blue-950 font-semibold  text-[6px] md:text-xs underline mt-6"
        >
          Help (opens in a new window)
        </Link>
      </section>

      <section className="mb-1">
        <h2 className="text-[6px] md:text-xs font-bold text-blue-950 underline cursor-pointer mb-2">
          Applications and renewals tracking
        </h2>
        <ul className="list-[square] list-inside mb-4 text-[6px] md:text-xs">
          <li>View the status of the following application types:</li>
          <li>Licence renewal</li>
          <li>Premium customer service</li>
          <li>Basic Compliance Assessment</li>
        </ul>
        <Link
          href="#"
          className="text-blue-950 font-semibold  text-[6px] md:text-xs underline mt-6"
        >
          Help (opens in a new window)
        </Link>
      </section>

      <section className="mb-1">
        <h2 className="text-[6px] md:text-xs font-bold text-blue-950 underline cursor-pointer mb-2">
          SMS message board
        </h2>
        <ul className="list-[square] list-inside mb-4 text-[6px] md:text-xs">
          <li>View active messages that have not reached their expiry date</li>
          <li>View archived messages that have expired</li>
        </ul>
        <Link
          href="#"
          className="text-blue-950 font-semibold  text-[6px] md:text-xs underline mt-6"
        >
          Help (opens in a new window)
        </Link>
      </section>

      <section className="mb-3">
        <h2 className="text-[6px] md:text-xs font-bold text-blue-950 underline cursor-pointer mb-2">
          Premium service contact details
        </h2>
        <ul className="list-[square] list-inside mb-4 text-[6px] md:text-xs">
          <li>View details of your Licence manager (if applicable)</li>
          <li>View details of your Senior account manager (if applicable)</li>
        </ul>
        <Link
          href="#"
          className="text-blue-950 font-semibold  text-[6px] md:text-xs underline mt-6"
        >
          Help (opens in a new window)
        </Link>
      </section>
    </div>
  );
};

export default LicencePage;
