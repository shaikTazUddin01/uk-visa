import Link from "next/link";
import React from "react";

const worksData = [
  {
    title: "Create and assign CoS",
    link:'/creat-assign',
    items: [
      "Create single CoS",
      "Create group CoS",
      "Create batches of CoS",
      "Amend information on a CoS before it is assigned",
      "Assign CoS to migrants",
    ],
  },
  {
    title: "Defined CoS",
    link:'/defined-cos',
    items: [
      "Apply for defined CoS",
      "Apply for a defined CoS based on a previous request",
      "View pending defined CoS applications",
      "Create and assign granted defined CoS applications",
      "View refused defined CoS applications",
    ],
  },
  {
    title: "View CoS",
    link:'/views-cos',
    items: [
      "View CoS",
      "Print CoS",
      "View status and activity history of CoS",
      "Transfer CoS, batches and groups between users (where user permissions allow)",
    ],
  },
  {
    title: "Sponsorship duties",
    link:'/sponsorship-duties',
    items: [
      "Report migrant activity, for example, absences from work",
      "Cancel sponsorship of a migrant",
      "Manage active CoS, for example, cancelling a CoS before the migrant has applied for a visa",
    ],
  },
  {
    title: "Manage work addresses",
    link:'/manage-work-addresses',
    items: ["Add, amend and delete work addresses"],
  },
];

const WorkerPage = () => {
  return (
    <div className="max-w-2xl mx-auto  text-[6px] md:text-xs">
      <h1 className=" text-[6px] md:text-lg text-blue-950 font-bold mt-3">Workers</h1>

      <p className="mt-1 mb-3">
        Select the function you wish to perform. Details of each function can be
        found under each link and additional information can be obtained from
        the <strong>Help</strong> links. You may also use the menu left-hand
        side of the screen.
      </p>

      {worksData?.map((work, index) => (
        <section key={index} className="mb-1  text-[6px] md:text-xs">
          <Link href={work?.link} className="tex text-[6px] md:text-xs font-bold text-blue-950 underline cursor-pointer mb-2">
            {work?.title}
          </Link>
          <ul className="list-[square] list-inside mb-4  text-[6px] md:text-xs">
            {work?.items?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <Link
            href="#"
            className="text-blue-950 font-semibold  text-[6px] md:text-xs underline mt-6"
          >
            Help (opens in a new window)
          </Link>
        </section>
      ))}
    </div>
  );
};

export default WorkerPage;
