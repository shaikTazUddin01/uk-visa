import Link from "next/link";
import React from "react";

const DefinedCOSPage = () => {
  const informations = [
    {
      title: "Apply for defined CoS",
      description: ["Apply for the number of CoS you require"],
      help_link: "Help (opens in a new window)",
      link:"#"
    },
    {
      title: "Apply for defined CoS based on a previous application",
      description: [
        "Use and edit the data from a previous application to create a new application",
      ],
      help_link: "Help (opens in a new window)",
      link:"#"
    },
    {
      title: "View applications that are awaiting a decision",
      description: [
        "View applications that are currently pending or under review",
        "Withdraw any applications that you no longer wish to be considered",
      ],
      help_link: "Help (opens in a new window)",
      link:"#"
    },
    {
      title: "Granted applications - create and assign defined CoS",
      description: [
        "Create and assign defined CoS",
        "View returned and reclaimed defined CoS",
      ],
      help_link: "Help (opens in a new window)",
      link:"/graanted-application"
    },
    {
      title: "View previously refused, withdrawn or rejected applications",
      description: [
        "View applications that you have withdrawn",
        "View applications that were not granted",
      ],
      help_link: "Help (opens in a new window)",
      link:"#"
    },
  ];

  return (
    <div className="max-w-2xl mx-auto text-[6px] md:text-xs">
      <h1 className="text-[6px] md:text-lg text-blue-950 font-bold mt-3">
        Apply for defined CoS
      </h1>

      <p className="mt-1 mb-3">
        This section allows you to make applications for defined CoS. You can
        also review applications for which you are awaiting decisions, create
        CoS from granted applications and review previously refused, rejected
        and withdrawn applications.
      </p>

      {informations?.map((info, index) => (
        <section key={index} className="mb-1 text-[6px] md:text-xs">
          <Link
            href={info?.link}
            className="text-[6px] md:text-xs font-bold text-blue-950 underline cursor-pointer mb-2"
          >
            {info?.title}
          </Link>
          <ul className="list-[square] list-inside text-[6px] md:text-xs">
            {info?.description?.map((item, index) => (
              <li key={index} className="my-2">{item}</li>
            ))}
          </ul>
          <Link
            href="#"
            className="text-blue-950 font-semibold text-[6px] md:text-xs underline"
          >
            {info.help_link}
          </Link>
        </section>
      ))}
    </div>
  );
};

export default DefinedCOSPage;
