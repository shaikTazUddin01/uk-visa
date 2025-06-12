"use client";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleNext = () => {
    router.push("/payment");
  };

  return (
    <div className="min-h-screen">
      <div className="bg-white p-2">
        <h1 className="text-[8px] lg:text-xl font-semibold mb-2 lg:mb-6 ">Online payment</h1>

        <div className="mb-2  leading-relaxed">
          <p className="mb-2 text-[8px] lg:text-xs">
            You are about to be redirected to a third party online payment
            service to pay. Once you have paid, you will be brought back to the
            sponsorship management system to confirm that the CoS has been
            assigned. The CoS number will then be available for you to give to
            the worker.
          </p>
          <p className="mb-2 text-[8px] lg:text-xs">
            All payments must be made in pounds sterling (£).
          </p>
          <p className="text-[8px] lg:text-xs">
            Choose OK to be redirected to WorldPay or if you do not want to
            proceed choose Cancel to return to the previous screen.
          </p>
        </div>

        <div className="mt-5">
          <h2 className="text-[8px] lg:text-xl font-medium text-gray-900 bg-gray-300 px-1 lg:px-2 lg:py-1.5 ">
            Payment amount
          </h2>
          <div className="space-y-1 mb-6 bg-gray-200 px-1 lg:px-2 text-[8px] md:text-sm">
            <div className="flex justify-between items-center lg:px-2 lg:pt-1 text-gray-800">
              <span className="font-medium">CoS fee</span>
              <span className="font-medium">525.00</span>
            </div>
            <div className="flex justify-between items-center lg:px-2 lg:pt-1 text-gray-800">
              <span className="font-medium">
                Immigration Skills Charge (ISC)
              </span>
              <span className="font-medium">728.00</span>
            </div>
            <div className="flex justify-between items-center lg:py-3 lg:px-2 text-[8px] md:text-sm">
              <span className="text-[8px] lg:text-[15px] font-semibold text-gray-800">
                Amount:
              </span>
              <span className="text-[8px] lg:text-[15px] font-semibold text-gray-800">
                1253.00
              </span>
            </div>
          </div>
        </div>

        <div className="text-right lg:my-3 space-x-3">
          <button
            onClick={() => handleBack()}
            className="px-2 p-1 bg-gradient-to-t from-[#10254E] to-[#496192] text-white text-[6px] md:text-xs font-semibold"
          >
            Back
          </button>
          <button
            onClick={handleNext}
            
            className={`px-2 p-1 md:text-xs font-semibold  transition-all duration-200
               bg-gradient-to-t from-[#10254E] to-[#496192] text-white text-[6px] md:text-xs"
                `}
          >
            Assign CoS
          </button>
        </div>
      </div>
    </div>
  );
}
