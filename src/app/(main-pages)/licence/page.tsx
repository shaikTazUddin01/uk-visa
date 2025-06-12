import Link from "next/link";
import React from "react";
import { FaSquare } from "react-icons/fa";

const List = ({ items }: { items: string[] }) => (
  <ul className="text-[6px] md:text-[13px] mt-2 text-gray-800">
    {items.map((item, idx) => (
      <li key={idx} className="flex items-start gap-3 space-y-[2px]">
        <span className="text-[5px] mt-2">
          <FaSquare />
        </span>
        <span className="w-[75%] tracking-wide">{item}</span>
      </li>
    ))}
  </ul>
);

const LicencePage = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-[6px] md:text-lg text-blue-900 font-medium my-3">
        Licence summary, applications and services
      </h1>

      <section className="mb-1 text-[6px] md:text-[13px]">
        <h2 className="text-[6px] md:text-[13px] font-medium text-blue-900 underline cursor-pointer mb-2">
          Manage Level 1 and 2 users
        </h2>
        <List items={["Add and deactivate SMS users", "Edit SMS user profiles"]} />
        <Link
          href="#"
          className="text-blue-900 font-semibold text-[6px] md:text-[13px] underline mt-6"
        >
          Help (opens in a new window)
        </Link>
      </section>

      <section className="mb-1 text-[6px] md:text-[13px]">
        <h2 className="text-[6px] md:text-[13px] font-medium text-blue-900 underline cursor-pointer mb-2">
          Request changes to licence details
        </h2>
        <List
          items={[
            "Change your circumstances, including organisation details, accreditation or registration status",
            "Amend organisation structure details",
            "Amend key personnel details",
            "View recent and outstanding change requests",
          ]}
        />
        <Link
          href="#"
          className="text-blue-900 font-semibold text-[6px] md:text-[13px] underline mt-6"
        >
          Help (opens in a new window)
        </Link>
      </section>

      <section className="mb-1 text-[6px] md:text-[13px]">
        <h2 className="text-[6px] md:text-[13px] font-medium text-blue-900 underline cursor-pointer mb-2">
          Licence summary
        </h2>
        <List
          items={[
            "View organisation details",
            "View your sponsor licence number (SLN)",
            "View licence start, expiry and renewal dates",
            "View details of Key Contact, Authorising Officer and Representative (if applicable)",
            "View details of licensed routes",
            "View Student Sponsor status start/end dates and Basic Compliance Assessment application / renewal dates (if applicable)",
            "View Premium customer service start, end and renewal dates (if applicable)",
            "View licence ratings",
            "View CoS and CAS allocations (limit, used and remaining)",
          ]}
        />
        <Link
          href="#"
          className="text-blue-900 font-semibold text-[6px] md:text-[13px] underline mt-6"
        >
          Help (opens in a new window)
        </Link>
      </section>

      <section className="mb-1 text-[6px] md:text-[13px]">
        <h2 className="text-[6px] md:text-[13px] font-medium text-blue-900 underline cursor-pointer mb-2">
          PAYE References
        </h2>
        <List
          items={[
            "View existing references, who added them and when",
            "Add a new PAYE Reference",
            "Delete an existing PAYE Reference",
          ]}
        />
        <Link
          href="#"
          className="text-blue-900 font-semibold text-[6px] md:text-[13px] underline mt-6"
        >
          Help (opens in a new window)
        </Link>
      </section>

      <section className="mb-1 text-[6px] md:text-[13px]">
        <h2 className="text-[6px] md:text-[13px] font-medium text-blue-900 underline cursor-pointer mb-2">
          Request CoS/CAS allocation increase
        </h2>
        <List
          items={[
            "Request an increase to your current allocation of CoS or CAS",
            "Withdraw outstanding requests for an increase to your current allocation of CoS or CAS",
          ]}
        />
        <Link
          href="#"
          className="text-blue-900 font-semibold text-[6px] md:text-[13px] underline mt-6"
        >
          Help (opens in a new window)
        </Link>
      </section>

      <section className="mb-1 text-[6px] md:text-[13px]">
        <h2 className="text-[6px] md:text-[13px] font-medium text-blue-900 underline cursor-pointer mb-2">
          Request renewal of annual CoS/CAS allocations
        </h2>
        <List
          items={[
            "Request the renewal of next year's annual allocation(s) of CoS or CAS",
            "Withdraw outstanding requests for an increase to your current allocation of CoS or CASView outstanding requests for the renewal of next year's annual allocation(s) of CoS or CAS",
            "View automatically renewed allocations of next year's annual allocation(s) of CoS or CAS (if applicable)",
          ]}
        />
        <Link
          href="#"
          className="text-blue-900 font-semibold text-[6px] md:text-[13px] underline mt-6"
        >
          Help (opens in a new window)
        </Link>
      </section>

      <section className="mb-1 text-[6px] md:text-[13px]">
        <h2 className="text-[6px] md:text-[13px] font-medium text-blue-900 underline cursor-pointer mb-2">
          Action plan details
        </h2>
        <List
          items={[
            "Make a payment or decline to make a payment for an action plan",
            "View completed action plan payments",
          ]}
        />
        <Link
          href="#"
          className="text-blue-900 font-semibold text-[6px] md:text-[13px] underline mt-6"
        >
          Help (opens in a new window)
        </Link>
      </section>

      <section className="mb-1 text-[6px] md:text-[13px]">
        <h2 className="text-[6px] md:text-[13px] font-medium text-blue-900 underline cursor-pointer mb-2">
          Apply for or renew Worker Sponsor Premium customer service
        </h2>
        <List
          items={[
            "Apply for premium customer service",
            "Apply to renew premium customer service",
          ]}
        />
        <Link
          href="#"
          className="text-blue-900 font-semibold text-[6px] md:text-[13px] underline mt-6"
        >
          Help (opens in a new window)
        </Link>
      </section>

      <section className="mb-1 text-[6px] md:text-[13px]">
        <h2 className="text-[6px] md:text-[13px] font-medium text-blue-900 underline cursor-pointer mb-2">
          Apply for Basic Compliance Assessment
        </h2>
        <List items={["Apply for a Basic Compliance Assessment"]} />
        <Link
          href="#"
          className="text-blue-900 font-semibold text-[6px] md:text-[13px] underline mt-6"
        >
          Help (opens in a new window)
        </Link>
      </section>

      <section className="mb-1">
        <h2 className="text-[6px] md:text-[13px] font-medium text-blue-900 underline cursor-pointer mb-2">
          Applications and renewals tracking
        </h2>
        <List
          items={[
            "View the status of the following application types:",
            "Licence renewal",
            "Premium customer service",
            "Basic Compliance Assessment",
          ]}
        />
        <Link
          href="#"
          className="text-blue-900 font-semibold text-[6px] md:text-[13px] underline mt-6"
        >
          Help (opens in a new window)
        </Link>
      </section>

      <section className="mb-1">
        <h2 className="text-[6px] md:text-[13px] font-medium text-blue-900 underline cursor-pointer mb-2">
          SMS message board
        </h2>
        <List
          items={[
            "View active messages that have not reached their expiry date",
            "View archived messages that have expired",
          ]}
        />
        <Link
          href="#"
          className="text-blue-900 font-semibold text-[6px] md:text-[13px] underline mt-6"
        >
          Help (opens in a new window)
        </Link>
      </section>

      <section className="mb-3">
        <h2 className="text-[6px] md:text-[13px] font-medium text-blue-900 underline cursor-pointer mb-2">
          Premium service contact details
        </h2>
        <List
          items={[
            "View details of your Licence manager (if applicable)",
            "View details of your Senior account manager (if applicable)",
          ]}
        />
        <Link
          href="#"
          className="text-blue-900 font-semibold text-[6px] md:text-[13px] underline mt-6"
        >
          Help (opens in a new window)
        </Link>
      </section>
    </div>
  );
};

export default LicencePage;
