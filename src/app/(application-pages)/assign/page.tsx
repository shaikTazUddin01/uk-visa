"use client";

import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

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
  [key: string]: string | number | boolean;
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

const DataRow: React.FC<{
  label: string;
  value: string | boolean | number | undefined;
}> = ({ label, value }) => {
  if (
    value === undefined ||
    value === null ||
    (typeof value === "string" && value.trim() === "")
  ) {
    return null;
  }

  let displayValue: string;
  if (typeof value === "boolean") {
    displayValue = value ? "Y" : "N";
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

const Page: React.FC = () => {
  const [formData, setFormData] = useState<FormData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [agree, setAgree] = useState(false);
const router=useRouter()
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedFormData = localStorage.getItem("formData");
      if (savedFormData) {
        try {
          setFormData(JSON.parse(savedFormData));
        } catch (error) {
          console.error("Failed to parse formData from localStorage:", error);
          setFormData(null);
        }
      }
    }
    setLoading(false);
  }, []);

  //   const handleExit = () => alert('Exit button clicked!');
  //   const handleAssign = () => alert('Assign button clicked!');
  //   const handleAmend = () => alert('Amend button clicked!');
  //   const handleDelete = () => {
  //     if (window.confirm("Are you sure you want to delete this CoS?")) {
  //       // Logic to delete CoS. For this example, we'll just alert.
  //       alert('Delete button clicked!');
  //     }
  //   };

  if (loading) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-50">
        <p className="text-xl text-gray-700">Loading data...</p>
      </div>
    );
  }

  if (!formData) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center p-2 bg-gray-50">
        <div className="container mx-auto p-6 bg-white rounded-lg shadow-xl max-w-2xl mt-10 text-center border border-gray-200">
          <h1 className="text-3xl font-bold text-blue-700 mb-6">
            Assign Page Data Display
          </h1>
          <p className="text-gray-600 text-[8px] lg:text-[16px] mb-1 md:mb-4"></p>
          <p className="text-sm text-gray-500">
            Please ensure your application is saving data using .
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

const handleBack=()=>{
router.back()
}

const handleNext=()=>{
router.push("/online-payment")
}

  return (
    <div className="container mx-auto">
      {/* Route Section - As per image 3 */}
      <div className="mb-1 md:mb-4">
        <h2 className="text-[8px] lg:text-[16px] font-semibold text-gray-700 bg-gray-200 p-1">
          Route
        </h2>
        <div className="bg-gray-100 p-1 border-gray-300  text-gray-800">
          <p className="font-medium text-[8px] lg:text-[13px]">
            Skilled Worker (New hires- defined)
          </p>{" "}
          {/* Using 'category' for Route */}
        </div>
      </div>

      {/* Personal Information Section - As per image 4 */}
      <div className="mb-1 md:mb-4">
        <h2 className="text-[8px] lg:text-[16px] font-semibold text-gray-700 bg-gray-200 p-1">
          Personal Information
        </h2>
        <div className="bg-gray-100 p-2 border border-t-0 border-gray-300 rounded-b-lg grid grid-cols-2 gap-y-2 text-[8px] lg:text-[13px]">
          <DataRow label="Family name" value={formData.familyName} />
          <DataRow label="Given name(s)" value={formData.givenName} />
          <DataRow label="Other names" value={formData.otherNames} />
          <DataRow label="Nationality" value={formData.nationality} />
          <DataRow label="Place of birth" value={formData.placeOfBirth} />
          <DataRow label="Country of birth" value={formData.countryOfBirth} />
          <DataRow label="Date of birth" value={formData.dateOfBirth} />
          <DataRow label="Sex" value={formData.sex} />
          <DataRow
            label="Country of residence"
            value={formData.countryOfResidence}
          />
        </div>
      </div>

      {/* Passport or travel document Section - As per image 4 */}
      <div className="mb-1 md:mb-4">
        <h2 className="text-[8px] lg:text-[16px] font-semibold text-gray-700 bg-gray-200 p-1">
          Passport or travel document
        </h2>
        <div className="bg-gray-100 p-2 border border-t-0 border-gray-300 rounded-b-lg grid grid-cols-2 gap-y-2 text-[8px] lg:text-[13px]">
          <DataRow label="Passport number" value={formData.passportNumber} />
          <DataRow label="Issue date" value={formData.passportIssueDate} />
          <DataRow label="Expiry date" value={formData.passportExpiryDate} />
          <DataRow
            label="Place of issue of passport"
            value={formData.placeOfissue}
          />
        </div>
      </div>

      {/* Current home address Section - As per image 5 (partially) */}
      <div className="mb-1 md:mb-4">
        <h2 className="text-[8px] lg:text-[16px] font-semibold text-gray-700 bg-gray-200 p-1">
          Current home address
        </h2>
        <div className="bg-gray-100 p-2 border border-t-0 border-gray-300 rounded-b-lg grid grid-cols-2 gap-y-2 text-[8px] lg:text-[13px]">
          <DataRow label="Address" value={formData.currentAddress} />
          <DataRow label="City or town" value={formData.currentCity} />
          <DataRow
            label="County, area district or province"
            value={formData.currentDistrict}
          />
          <DataRow label="Postcode" value={formData.currentPostCode} />
          <DataRow label="Country" value={formData.currentCountry} />
        </div>
      </div>

      {/* Identification & Employee number Section - As per image 5 (partially) */}
      <div className="mb-1 md:mb-4">
        <h2 className="text-[8px] lg:text-[16px] font-semibold text-gray-700 bg-gray-200 p-1">
          Identification & Employee number
        </h2>
        <div className="bg-gray-100 p-2 border border-t-0 border-gray-300 rounded-b-lg grid grid-cols-2 gap-y-2 text-[8px] lg:text-[13px]">
          <DataRow label="UK ID card number" value={formData.ukIdCardNumber} />
          <DataRow
            label="UK National Insurance number"
            value={formData.ukNationalInsuranceNumber}
          />
          <DataRow
            label="National ID card number"
            value={formData.nationalIdNumber}
          />
          <DataRow label="Employee number" value={formData.employeeNumber} />
        </div>
      </div>

      {/* Migrant's work addresses in the UK Section - As per image 5 (bottom) */}
      <div className="mb-1 md:mb-4">
        <h2 className="text-[8px] lg:text-[16px] font-semibold text-gray-700 bg-gray-200 p-1">
          Migrants work addresses in the UK
        </h2>
        <div className="bg-gray-100 p-2 border border-t-0 border-gray-300 rounded-b-lg grid grid-cols-2 gap-y-2 text-[8px] lg:text-[13px]">
          <DataRow label="Start date" value={formData.workStartDate} />
          <DataRow label="End date" value={formData.workEndDate} />
          <DataRow
            label="Does the migrant need to leave and re-enter the UK during the period of approval"
            value={formData.workLeave}
          />{" "}
          {/* Assuming workLeave for this */}
          <DataRow
            label="Total weekly hours of work"
            value={formData.workHours}
          />
        </div>
      </div>

      {/* Other regular work addresses Section - As per image 6/7 (top) */}
      <div className="mb-1 md:mb-4">
        <h2 className="text-[8px] lg:text-[16px] font-semibold text-gray-700 bg-gray-200 p-1">
          Other regular work addresses
        </h2>
        <div className="bg-gray-100 p-2 border border-t-0 border-gray-300 rounded-b-lg text-gray-800">
          {/* This section appears to be just a header in the image, no specific data rows directly underneath in the visible part */}
          <p className="text-gray-600 text-[8px] lg:text-[13px]">
            No specific data fields shown in image for this section.
          </p>
        </div>
      </div>

      {/* Agent Section - As per image 6/7 */}
      <div className="mb-1 md:mb-4">
        <h2 className="text-[8px] lg:text-[16px] font-semibold text-gray-700 bg-gray-200 p-1">
          Agent
        </h2>
        <div className="bg-gray-100 p-2 border border-t-0 border-gray-300 rounded-b-lg grid grid-cols-2 gap-y-2 text-[8px] lg:text-[13px]">
          <DataRow
            label="Migrant sourced through agent?"
            value={formData.agentUsed}
          />
          {formData.agentUsed && ( // Only show agent details if agentUsed is true
            <>
              <DataRow
                label="Agent company name"
                value={formData.agentCompanyName}
              />
              <DataRow
                label="Agent contact family name"
                value={formData.agentContactFamilyName}
              />
              <DataRow
                label="Agent contact given name"
                value={formData.agentContactGivenName}
              />
              <DataRow label="Address" value={formData.agentAddress} />
              <DataRow label="City or town" value={formData.agentCity} />
              <DataRow
                label="County, area district or province"
                value={formData.agentDistrict}
              />{" "}
              {/* Assuming agentDistrict for this */}
              <DataRow label="Postcode" value={formData.agentPostCode} />
              <DataRow label="Country" value={formData.agentCountry} />
            </>
          )}
        </div>
      </div>

      {/* Migrant's employment Section - As per image 6/7 (bottom) */}
      <div className="mb-1 md:mb-4">
        <h2 className="text-[8px] lg:text-[16px] font-semibold text-gray-700 bg-gray-200 p-1">
          Migrants employment
        </h2>
        <div className="bg-gray-100 p-2 border border-t-0 border-gray-300 rounded-b-lg grid grid-cols-2 gap-y-2 text-[13px]">
          <DataRow
            label="Job title"
            value={formData.migrateEmploymentJobTitle}
          />
          <DataRow label="Job type" value={formData.migrateEmploymentJobType} />
          <DataRow
            label="Summary of job description (1000 character limit)"
            value={formData.migrateEmploymentJobsummary}
          />
          {/* Add other migrant employment fields from your FormData here if needed */}
          {/* e.g., migrateEmploymentNew, migrateEmploymentGrossSalary, etc. */}
        </div>
      </div>

      <div className="bg-gray-200 flex items-center px-4 py-1 gap-20">
        <p className="text-[8px] lg:text-[13px] font-medium">
          I agree to the terms and conditions
        </p>
        <input type="checkbox" onClick={() => setAgree(!agree)} />
      </div>
      <div className="text-right my-3 space-x-3">
            <button
              onClick={() => handleBack()}
              className="px-2 p-1 bg-gradient-to-t from-[#10254E] to-[#496192] text-white text-[6px] md:text-xs font-semibold"
            >
              Back
            </button>
             <button
              onClick={handleNext}
              disabled={!agree}
              className={`px-2 p-1 text-[6px] lg:text-xs font-semibold  transition-all duration-200
                ${!agree
                  ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                  : 'bg-gradient-to-t from-[#10254E] to-[#496192] text-white hover:from-[#0c1e3d] hover:to-[#3a5280]'
                }`
              }
            >
              Assign CoS
            </button>
          </div>
    </div>
  );
};

export default Page;
