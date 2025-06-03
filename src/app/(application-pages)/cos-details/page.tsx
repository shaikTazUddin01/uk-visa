'use client'
import { useRouter } from "next/navigation";

const CoSDetailsPage = () => {
  const applicationSummary = {
    requestNumber: "DCS04847615",
    numberOfCoSGranted: 2,
    numberOfCoSCreated: 2,
    jobType: "5316 Carpenters and joiners",
    useBy: "25/06/2025",
    applicationStatus: "GRANTED",
  };


//     {
//       passportNumber: "PA0126752",
//       familyName: "Nirma",
//       givenName: "Tamang Thing",
//       dateOfBirth: "06/04/2002",
//       nationality: "NEPAL",
//       status: "READY TO GO",
//     },
//     {
//       passportNumber: "G3450668",
//       familyName: "PATRICK",
//       givenName: "ADU",
//       dateOfBirth: "10/05/1987",
//       nationality: "GHANA",
//       status: "WORK IN PROGRESS",
//     },
//   ];

  //   const handleEdit = (passportNumber) => {
  //     // Implement your edit logic here.
  //     // This could navigate to an edit form page with the passport number
  //     // or open a modal for editing.
  //     console.log(`Edit clicked for Passport: ${passportNumber}`);
  //     // Example: router.push(`/edit-cos/${passportNumber}`);
  //   };

  // As per previous instruction, if you need navigation for 'Back' button
  // import { useRouter } from 'next/router';
  const router = useRouter();
  

  return (
    <>
      <div className="min-h-screen  px-2">
        <div className=" w-full">
          <div className="bg-gray-200">
            {/* Application Summary Section */}
            <h2 className="text-lg font-semibold  text-gray-800 px-1">
              Application Summery
            </h2>
            <div className="mb-3 p-2 bg-gray-50 rounded-md border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-1 gap-y-2 gap-x-4 text-sm text-gray-700">
                <div className="flex justify-between ">
                  <span className="font-semibold w-[70%]">Request Number:</span>
                  <span className="text-left w-[30%]">
                    {applicationSummary.requestNumber}
                  </span>
                </div>
                <div className="flex justify-between ">
                  <span className="font-semibold w-[70%]">Job type:</span>
                  <span className="w-[30%]">{applicationSummary.jobType}</span>
                </div>
                <div className="flex justify-between ">
                  <span className="font-semibold w-[70%]">
                    Number of CoS granted:
                  </span>
                  <span className="text-left w-[30%]">
                    {applicationSummary.numberOfCoSGranted}
                  </span>
                </div>
                <div className="flex justify-between ">
                  <span className="font-semibold w-[70%]">Use by:</span>
                  <span className="text-left w-[30%]">
                    {applicationSummary.useBy}
                  </span>
                </div>
                <div className="flex justify-between ">
                  <span className="font-semibold w-[70%]">
                    Number of CoS created:
                  </span>
                  <span className="text-left w-[30%]">
                    {applicationSummary.numberOfCoSCreated}
                  </span>
                </div>
                <div className="flex justify-between ">
                  <span className="font-semibold w-[70%]">
                    Application status:
                  </span>
                  <span className="text-left font-bold w-[30%]">
                    {applicationSummary.applicationStatus}
                  </span>{" "}
                  {/* Highlight GRANTED */}
                </div>
              </div>
            </div>
          </div>

          {/* Information Text */}
          <p className="mb-3 text-xs text-gray-700 leading-relaxed">
            The table below shows all the defined CoS created for this
            application and their current status. To create a new CoS choose{" "}
            <strong className="font-bold">Create</strong>. To edit a CoS with a
            status in progress or Ready to go choose{" "}
            <strong className="font-bold">Edit</strong>. To return to your
            granted applications choose{" "}
            <strong className="font-bold">Back</strong>.
          </p>

          {/* Defined CoS Details Section */}
          <h2 className="text-xl font-bold mb-4 text-gray-800">
            Defined CoS details
          </h2>
          <div className="">
             <button
             
              onClick={() => router.push('/create-application')}
              className="px-2 p-1 bg-gradient-to-t from-[#10254E] to-[#496192] text-white text-[15apx] font-semibold"
            >
             Next
            </button>
          </div>

         
          <div className="flex justify-end mt-6 space-x-3">
           
           
          </div>
        </div>
      </div>
    </>
  );
};

export default CoSDetailsPage;
