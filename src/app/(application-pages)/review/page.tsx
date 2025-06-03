// components/CoSSummaryDisplay.tsx
'use client'; // এটি ক্লায়েন্ট-সাইড কম্পোনেন্ট হতে হবে localStorage ব্যবহারের জন্য

import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';

// আপনার প্রদত্ত FormData টাইপ
type FormData = {
  category: string;
  certificate: string;
  familyName: string;
  givenName: string;
  otherNames: string;
  nationality: string;
  placeOfBirth: string;
  countryOfBirth: string;
  dateOfBirth: string;
  sex: string;
  countryOfResidence: string;
  passportNumber: string;
  passportIssueDate: string;
  passportExpiryDate: string;
  placeOfissue: string;
  currentAddress: string;
  currentCity: string;
  currentCountry: string;
  currentPostCode: string;
  currentDistrict: string;
  ukIdCardNumber: string;
  ukNationalInsuranceNumber: string;
  nationalIdNumber: string;
  employeeNumber: string;
  workStartDate: string;
  workEndDate: string;
  workLeave: boolean;
  workHours: string;
  agentUsed: boolean;
  agentCountry: string;
  agentCompanyName: string;
  agentContactFamilyName: string;
  agentContactGivenName: string;
  agentAddress: string;
  agentCity: string;
  agentDistrict: string;
  agentPostCode: string;
  [key: string]: string | number | boolean; // Allow additional properties
  migrateEmploymentJobTitle: string;
  migrateEmploymentJobType: string;
  migrateEmploymentJobsummary: string;
  migrateEmploymentNew: boolean;
  migrateEmploymentGrossSalary: boolean;
  migrateEmploymentSralaryType: string;
  migrateEmploymentOccupationCode: boolean;
  migrateEmploymentClientContact: boolean;
  migrateEmploymentImmigrationSalary: boolean;
  migrateEmploymentClientContactSummary: string;
  migrateEmploymentRegistrationDetails: string;
  migrateEmploymentImmigrationCertify: boolean;
  migrateEmploymentAcademyCertificate: boolean;
  payeReferenceReson: string;
  payeReference: string;
  payeReferenceDate: string;
  payeReferenceNumber: string;
  careWorkerCQCRole: string;
  careWorkerCQCRegistration: string;
  migrantPHDLevel: boolean;
  migrantPHDExplanation: string;
  migrantPHDOverseas: string;
  IsMigrantPHDSTEM: string;
  migrantPHDSTEMExplanation: string;
};


const DataRow: React.FC<{ label: string; value: string | boolean | number | undefined }> = ({ label, value }) => {
  if (value === undefined || value === null || value === "") {
    return null; 
  }

  let displayValue: string;
  if (typeof value === 'boolean') {
    displayValue = value ? 'Yes' : 'No';
  } else {
    displayValue = String(value);
  }

  return (
    <>
      <div className="col-span-1 text-gray-600 font-medium">{label}:</div>
      <div className="col-span-1 text-gray-800 break-words">{displayValue}</div>
    </>
  );
};

const CoSSummaryDisplay: React.FC = () => {
  const [formData, setFormData] = useState<FormData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const router=useRouter()

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedFormData = localStorage.getItem("formData");
      if (savedFormData) {
        try {
          setFormData(JSON.parse(savedFormData));
        } catch (error) {
          console.error("Failed to parse formData from localStorage:", error);
          setFormData(null); // Parsing failed, reset data
        }
      }
    }
    setLoading(false);
  }, []);

  const handleExit = () => alert('Exit button clicked!');
  const handleAssign = () => {
    router.push("/assign")
  };
  const handleAmend = () => {
    router.back()
  };
  // const handleDelete = () => {
  //   if (window.confirm("Are you sure you want to delete this CoS?")) {
  //     alert('Delete button clicked!');
  //   }
  // };

  if (loading) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-50">
        <p className="text-xl text-gray-700">Loading data...</p>
      </div>
    );
  }

  if (!formData) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-50">
        <div className="container mx-auto p-6 bg-white rounded-lg shadow-xl max-w-2xl mt-10 text-center border border-gray-200">
          <h1 className="text-3xl font-bold text-blue-700 mb-6">
            CoS Data Display
          </h1>
          <p className="text-gray-600 text-lg mb-4">
            No formData found in Local Storage.
          </p>
          <p className="text-sm text-gray-500">
            {/* Please ensure your application is saving data using `localStorage.setItem("formData", JSON.stringify(yourFormDataObject));`. */}
          </p>
          <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 mt-4"
          >
              Refresh Page
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto">
      
      <div className="mb-3">
        <h2 className="text-[16px] font-semibold text-gray-700 bg-gray-200 p-1 ">
          Route
        </h2>
        <div className="bg-gray-100 p-1 border border-t-0   text-gray-800">
         <p className='text-[13px]'>Skilled Worker(New hires - defined)</p>
        </div>
      </div>

     
      <div className="mb-3">
        <h2 className="text-[16px] font-semibold text-gray-700 bg-gray-200 p-1 ">
          CoS summary
        </h2>
        <div className="bg-gray-100 p-4  grid grid-cols-2 gap-y-2 text-sm text-black">
         
          <DataRow label="Passport number" value={formData.passportNumber} />
          <DataRow label="Family name" value={formData.familyName} />
          <DataRow label="Given name(s)" value={formData.givenName} />
          <DataRow label="Nationality" value={formData.nationality} />
          <DataRow label="Date of birth" value={formData.dateOfBirth} />
          <DataRow label="Sex" value={formData.sex} />
          <DataRow label="Work start date" value={formData.workStartDate} />
          <DataRow label="Work end date" value={formData.workEndDate} />
        
        </div>
      </div>

      {/* Action Buttons - As per image */}
      <div className="flex justify-end space-x-2 mt-5">
        <button
          onClick={handleExit}
          className="p-1 bg-gradient-to-t from-[#10254E] to-[#496192] text-white  text-[8px] md:text-xs font-semibold px-2"
        >
          Exit
        </button>
        <button
          // onClick={handleExit}
          className="p-1 bg-gradient-to-t from-[#10254E] to-[#496192] text-white  text-[8px] md:text-xs font-semibold px-2"
        >
          Link
        </button>
        <button
          onClick={handleAssign}
          className="p-1 bg-gradient-to-t from-[#10254E] to-[#496192] text-white  text-[8px] md:text-xs font-semibold px-2"
        >
          Assign
        </button>
        <button
          onClick={handleAmend}
          className="p-1 bg-gradient-to-t from-[#10254E] to-[#496192] text-white  text-[8px] md:text-xs font-semibold px-2"
        >
          Amend
        </button>
        <button
          // onClick={handleDelete}
          className="p-1 bg-gradient-to-t from-[#10254E] to-[#496192] text-white  text-[8px] md:text-xs font-semibold px-2"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default CoSSummaryDisplay;