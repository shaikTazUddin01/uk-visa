'use client'
import "./style.css";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CoSApplications = () => {
  const router = useRouter();
  const applications = [
    {
      grantedDate: "25/03/2025",
      requestNumber: "DCS04847615",
      useByDate: "25/06/2025",
      submittedBy: "POHRIB, GHEORGHIITA (pk2boiV3ar)",
      route: "Skilled Worker (New hires - defined)",
      jobType: "5316 Carpenters and joiners",
      numberGranted: 2,
      applicationStatus: "GRANTED",
    },
  ];

   const [selectedApplicationIndex, setSelectedApplicationIndex] =useState<null|number>(null);

  const handleRadioChange = (index:number) => {
    setSelectedApplicationIndex(index);
  };


  const handleBack = () => {
     router.push("/workers");
  };

  const handleNext = () => {
    router.push("/cos-details");
  };

  return (
    <>
    

      <div className="min-h-screen p-2">
        <div className="bg-white px-5 max-w-6xl w-full">
          <h2 className="font-bold mb-2 text-gray-800  text-[8px] lg:text-xl">
            Granted applications - create and assign defined CoS
          </h2>
          <div className="mb-3 text-[8px] lg:text-[13px] text-gray-800 leading-relaxed space-y-1 font-medium ">
            <p>The table below shows:</p>
            <li className="list-[square]">
               All applications made that have been granted and are still valid
            </li>
            <li className="list-[square]">
               All applications granted, but where some or all of the defined
              CoS have been reclaimed or returned.
            </li>
            <p className="mt-4">
              Where the status is shown as{" "}
              <strong className="font-bold">Granted</strong> you can select the
              application to create and assign defined CoS.
            </p>
            <p>
              You cannot create and assign CoS that have been reclaimed or
              returned.
            </p>
            <p className="mt-4">
              Choose <strong className="font-bold text-blue-950">Next</strong> to continue or
              choose <strong className="font-bold text-blue-950">Back</strong> to return to
              the previous screen.
            </p>
          </div>

          <div className="overflow-x-auto border  rounded-md px-2 bg-gray-100">
            <p className="text-6px md:text-[13px] mb-1">Defined CoS applications</p>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-white">
                <tr className="">
                  <th className=" text-left text-[6px] lg:text-xs font-medium  uppercase tracking-wider"></th>
                  <th className="px-1 py-0 text-left text-[6px] lg:text-xs font-medium  uppercase tracking-wider">
                    Granted date
                  </th>
                  <th className="px-1 py-0 text-left text-[6px] lg:text-xs font-medium  uppercase tracking-wider">
                    Request Number
                  </th>
                  <th className="px-1 py-0 text-left text-[6px] lg:text-xs font-medium  uppercase tracking-wider">
                    Use by date
                  </th>
                  <th className="px-1 py-0 text-left text-[6px] lg:text-xs font-medium  uppercase tracking-wider">
                    Submitted by
                  </th>
                  <th className="px-1 py-0 text-left text-[6px] lg:text-xs font-medium  uppercase tracking-wider">
                    Route
                  </th>
                  <th className="px-1 py-0 text-left text-[6px] lg:text-xs font-medium  uppercase tracking-wider">
                    Job type
                  </th>
                  <th className="px-1 py-0 text-left text-[6px] lg:text-xs font-medium  uppercase tracking-wider">
                    Number of CoS granted
                  </th>
                  <th className="px-1 py-0 text-left text-[6px] lg:text-xs font-medium  uppercase tracking-wider">
                    Application status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {applications.map((app, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="py-2 px-2 whitespace-nowrap text-sm text-gray-800">
                      <input
                      checked={selectedApplicationIndex === index} 
                        onChange={() => handleRadioChange(index)}
                        type="radio"
                        name="selectedApp"
                        className="form-radio h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                    </td>
                    <td className="py-2 px-2 whitespace-nowrap text-[8px] lg:text-xs">
                      {app.grantedDate}
                    </td>
                    <td className="py-2 px-2 whitespace-nowrap text-[8px] lg:text-xs">
                      {app.requestNumber}
                    </td>
                    <td className="py-2 px-2 whitespace-nowrap text-[8px] lg:text-xs">
                      {app.useByDate}
                    </td>
                    <td className="py-2 px-2 whitespace-nowrap text-[8px] lg:text-xs">
                      {app.submittedBy}
                    </td>
                    <td className="py-2 px-2 whitespace-nowrap text-[8px] lg:text-xs">
                      {app.route}
                    </td>
                    <td className="py-2 px-2 whitespace-nowrap text-[8px] lg:text-xs">
                      {app.jobType}
                    </td>
                    <td className="py-2 px-2 whitespace-nowrap text-[8px] lg:text-xs">
                      {app.numberGranted}
                    </td>
                    <td className="py-2 px-2 whitespace-nowrap text-[8px] lg:text-xs">
                      {app.applicationStatus}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-right mt-6 space-x-3">
            <button
              onClick={() => handleBack()}
              className="px-2 p-1 bg-gradient-to-t from-[#10254E] to-[#496192] text-white text-[6px] md:text-[8px] lg:text-xs font-semibold"
            >
              Back
            </button>
             <button
              onClick={handleNext}
              disabled={selectedApplicationIndex === null}
              className={`px-2 p-1 text-[6px] md:text-[8px] lg:text-xs font-semibold  transition-all duration-200
                ${selectedApplicationIndex === null
                  ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                  : 'bg-gradient-to-t from-[#10254E] to-[#496192] text-white hover:from-[#0c1e3d] hover:to-[#3a5280]'
                }`
              }
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoSApplications;
