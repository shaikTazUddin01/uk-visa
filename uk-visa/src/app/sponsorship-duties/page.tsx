import Link from "next/link";
import React from "react";

const ViewsCOSPage = () => {
  const informations = [
    {
      title: "Report migrant activity",
      description: [
        "Includes absences from work, invalid permission to stay, disciplinary actions or withdrawal of sponsorship",
      ],
      help_link: "Help (opens in a new window)",
    },
    {
      title: "Manage live CoS",
      description: ["Withdraw an unused CoS", "Add or amend a sponsor note"],
      help_link: "Help (opens in a new window)",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto text-[8px] md:text-xs">
      <h1 className="text-[8px] md:text-lg text-blue-950 font-bold mt-3">
        Sponsorship duties
      </h1>

      <p className="mt-1 mb-3 text-[8px] md:text-xs">
        As a sponsor, you have responsibilities to manage the migrants to whom
        you have assigned CoS. This section allows you to fulfil these
        responsibilities by reporting migrant activity and managing live CoS.
        <br />
        <strong className="text-blue-900">Please note</strong>, Level 2 users
        can only report on CoS which they own.
      </p>

      {informations?.map((info, index) => (
        <section key={index} className="mb-1 text-[8px] md:text-xs">
          <Link
            href={"#"}
            className="text-[8px] md:text-xs font-bold text-blue-950 underline cursor-pointer mb-2"
          >
            {info?.title}
          </Link>
          <ul className="list-[square] list-inside text-[8px] md:text-xs">
            {info?.description?.map((item, index) => (
              <li key={index} className="my-2">
                {item}
              </li>
            ))}
          </ul>
          <Link
            href="#"
            className="text-blue-950 font-semibold text-[8px] md:text-xs underline"
          >
            {info.help_link}
          </Link>
        </section>
      ))}
    </div>
  );
};

export default ViewsCOSPage;
