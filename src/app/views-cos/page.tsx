import Link from "next/link";
import React from "react";

const ViewsCOSPage = () => {
  const informations = [
    {
      "title": "Search for CoS",
      "description": [
        "Find a CoS using migrant details",
        "Conduct an advanced search for CoS using a range of parameters"
      ],
      "help_link": "Help (opens in a new window)"
    },
    {
      "title": "Search for batch(es) of CoS",
      "description": [
        "Find a batch of CoS using batch details"
      ],
      "help_link": "Help (opens in a new window)"
    },
    {
      "title": "Search for groups of CoS",
      "description": [
        "Find a group of CoS using group details"
      ],
      "help_link": "Help (opens in a new window)"
    },
    {
      "title": "Transfer group of CoS",
      "description": [
        "Transfer a group of CoS to a different user"
      ],
      "help_link": "Help (opens in a new window)"
    }
  ]
  

  return (
    <div className="max-w-2xl mx-auto text-[8px] md:text-xs">
      <h1 className="text-[8px] md:text-lg text-blue-950 font-bold mt-3">
      View CoS
      </h1>

      <p className="mt-1 mb-3 text-[8px] md:text-xs">
      Choose an option below to find an individual, batch or group of CoS or choose <strong className="text-blue-950">Transfer group of CoS</strong> to transfer a group to another user (only Level 1 users can transfer CoS).
      <br />
      <strong className="text-blue-900">Please note</strong>, Level 2 users can only view CoS that they own.
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
              <li key={index} className="my-2">{item}</li>
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
