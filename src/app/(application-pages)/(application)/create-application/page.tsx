"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";
import countryList from "react-select-country-list";

const Page = () => {
    const router=useRouter()
  const options = useMemo(() => countryList().getData(), []);
  const jobCategories = [
    { code: 1111, title: "Chief executives and senior officials" },
    { code: 1121, title: "Production managers and directors in manufacturing" },
    { code: 1122, title: "Production managers and directors in construction" },
    {
      code: 1123,
      title: "Production managers and directors in mining and energy",
    },
    { code: 1131, title: "Financial managers and directors" },
    { code: 1132, title: "Marketing, sales and advertising directors" },
    { code: 1133, title: "Public relations and communications directors" },
    { code: 1134, title: "Purchasing managers and directors" },
    { code: 1135, title: "Charitable organisation managers and directors" },
    { code: 1136, title: "Human resource managers and directors" },
    { code: 1137, title: "Information technology directors" },
    {
      code: 1139,
      title: "Functional managers and directors not elsewhere classified",
    },
    { code: 1140, title: "Directors in logistics, warehousing and transport" },
    { code: 1150, title: "Managers and directors in retail and wholesale" },
    { code: 1162, title: "Senior police officers" },
    {
      code: 1163,
      title: "Senior officers in fire, ambulance, prison and related services",
    },
    {
      code: 1171,
      title: "Health services and public health managers and directors",
    },
    { code: 1172, title: "Social services managers and directors" },
    {
      code: 1211,
      title: "Managers and proprietors in agriculture and horticulture",
    },
    {
      code: 1212,
      title:
        "Managers and proprietors in forestry, fishing and related services - offshore fishing",
    },
    {
      code: 1212,
      title:
        "Managers and proprietors in forestry, fishing and related services - other",
    },
    { code: 1221, title: "Hotel and accommodation managers and proprietors" },
    {
      code: 1222,
      title: "Restaurant and catering establishment managers and proprietors",
    },
    { code: 1223, title: "Publicans and managers of licensed premises" },
    { code: 1224, title: "Leisure and sports managers and proprietors" },
    { code: 1225, title: "Travel agency managers and proprietors" },
    { code: 1231, title: "Health care practice managers" },
    {
      code: 1232,
      title: "Residential, day and domiciliary care managers and proprietors",
    },
    { code: 1233, title: "Early education and childcare services proprietors" },
    { code: 1241, title: "Managers in transport and distribution" },
    { code: 1242, title: "Managers in storage and warehousing" },
    { code: 1243, title: "Managers in logistics" },
    { code: 1251, title: "Property, housing and estate managers" },
    { code: 1252, title: "Garage managers and proprietors" },
    {
      code: 1253,
      title: "Hairdressing and beauty salon managers and proprietors",
    },
    { code: 1254, title: "Waste disposal and environmental services managers" },
    { code: 1255, title: "Managers and directors in the creative industries" },
    { code: 1256, title: "Betting shop and gambling establishment managers" },
  ];

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

 const [formData, setFormData] = useState<FormData>(() => {
    // Initialize state from localStorage or use default values
    if (typeof window !== "undefined") {
      const savedFormData = localStorage.getItem("formData");
      return savedFormData
        ? JSON.parse(savedFormData)
        : {
            category: "",
            certificate: "",
            familyName: "",
            givenName: "",
            otherNames: "",
            nationality: "",
            placeOfBirth: "",
            countryOfBirth: "",
            dateOfBirth: "",
            sex: "",
            countryOfResidence: "",
            passportNumber: "",
            passportIssueDate: "",
            passportExpiryDate: "",
            placeOfissue: "",
            currentAddress: "",
            currentCity: "",
            currentCountry: "",
            currentPostCode: "",
            currentDistrict: "",
            ukIdCardNumber: "",
            ukNationalInsuranceNumber: "",
            nationalIdNumber: "",
            employeeNumber: "",
            workStartDate: "",
            workEndDate: "",
            workLeave: false,
            workHours: "",
            agentUsed: false,
            agentCountry: "",
            agentCompanyName: " ",
            agentContactFamilyName: " ",
            agentContactGivenName: " ",
            agentAddress: " ",
            agentCity: " ",
            agentDistrict: " ",
            agentPostCode: " ",
            migrateEmploymentJobTitle: "",
            migrateEmploymentAcademyCertificate: false,
            migrateEmploymentImmigrationCertify: false,
            migrateEmploymentRegistrationDetails: "",
            migrateEmploymentImmigrationSalary: false,
            migrateEmploymentOccupationCode: false,
            migrateEmploymentClientContactSummary: "",
            migrateEmploymentClientContact: false,
            migrateEmploymentSralaryType: "",
            migrateEmploymentGrossSalary: false,
            migrateEmploymentNew: false,
            migrateEmploymentJobType: "",
            migrateEmploymentJobsummary: "",
            payeReferenceReson: "",
            payeReference: "",
            payeReferenceDate: "",
            payeReferenceNumber: "",
            careWorkerCQCRole: "",
            careWorkerCQCRegistration: "",
            migrantPHDLevel: false,
            migrantPHDExplanation: "",
            migrantPHDOverseas: "",
            migrantPHDSTEMExplanation: "",
            IsMigrantPHDSTEM: "",
          };
    }
    return {
      category: "",
      certificate: "",
      familyName: "",
      givenName: "",
      otherNames: "",
      nationality: "",
      placeOfBirth: "",
      countryOfBirth: "",
      dateOfBirth: "",
      sex: "",
      countryOfResidence: "",
      passportNumber: "",
      passportIssueDate: "",
      passportExpiryDate: "",
      placeOfissue: "",
      currentAddress: "",
      currentCity: "",
      currentCountry: "",
      currentPostCode: "",
      currentDistrict: "",
      ukIdCardNumber: "",
      ukNationalInsuranceNumber: "",
      nationalIdNumber: "",
      employeeNumber: "",
      workStartDate: "",
      workEndDate: "",
      workLeave: false,
      workHours: "",
      agentUsed: false,
      agentCountry: "",
      agentCompanyName: " ",
      agentContactFamilyName: " ",
      agentContactGivenName: " ",
      agentAddress: " ",
      agentCity: " ",
      agentDistrict: " ",
      agentPostCode: " ",
      migrateEmploymentJobTitle: "",
      migrateEmploymentAcademyCertificate: false,
      migrateEmploymentImmigrationCertify: false,
      migrateEmploymentRegistrationDetails: "",
      migrateEmploymentImmigrationSalary: false,
      migrateEmploymentOccupationCode: false,
      migrateEmploymentClientContactSummary: "",
      migrateEmploymentClientContact: false,
      migrateEmploymentSralaryType: "",
      migrateEmploymentGrossSalary: false,
      migrateEmploymentNew: false,
      migrateEmploymentJobType: "",
      migrateEmploymentJobsummary: "",
      payeReferenceReson: "",
      payeReference: "",
      payeReferenceDate: "",
      payeReferenceNumber: "",
      careWorkerCQCRole: "",
      careWorkerCQCRegistration: "",
      migrantPHDLevel: false,
      migrantPHDExplanation: "",
      migrantPHDOverseas: "",
      migrantPHDSTEMExplanation: "",
      IsMigrantPHDSTEM: "",
    };
  });

  
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("formData", JSON.stringify(formData));
    }
  }, [formData]); 

  const handleInputChange = (
    field: string,
    value: string | number | boolean
  ) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div className="flex flex-col gap-4  text-[8px] md:text-xs">
      <div className=" text-[8px] md:text-xs">
        <div className="mt-2 bg-slate-50">
          <h3 className=" text-[8px] md:text-xs font-bold bg-gray-200 mt-3 p-2">
            Route
          </h3>
          <p className="p-2">Skiled Worker (New hires -defined)</p>
        </div>
        <div className="mt-2 ">
          <h3 className=" text-[8px] md:text-xs font-bold bg-gray-200 mt-3 p-2">
            Personal information
          </h3>
          <div className=" border border-gray-200 bg-slate-50">
            <div className="space-y-2">
              <div className="mt-1 px-2 grid grid-cols-2">
                <label className="block font-medium mb-1  text-[8px] md:text-xs">
                  Family Name: <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.familyName || ""}
                  onChange={(e) =>
                    handleInputChange("familyName", e.target.value)
                  }
                  className="md:md:w-2/3 border border-gray-400  mt-1"
                />
              </div>

              <div className="mt-1 px-2 grid grid-cols-2">
                <label className="block font-medium mb-1  text-[8px] md:text-xs">
                  Given name(s):
                </label>
                <input
                  type="text"
                  value={formData.givenName || ""}
                  onChange={(e) =>
                    handleInputChange("givenName", e.target.value)
                  }
                  className="md:w-2/3 border border-gray-400  mt-1"
                />
              </div>

              <div className="mt-1 px-2 grid grid-cols-2">
                <label className="block font-medium mb-1  text-[8px] md:text-xs">
                  Other names:
                </label>
                <input
                  type="text"
                  value={formData.otherNames || ""}
                  onChange={(e) =>
                    handleInputChange("otherNames", e.target.value)
                  }
                  className="md:w-2/3 border border-gray-400  mt-1"
                />
              </div>

              <div className="mt-4 px-2 grid grid-cols-1">
                <label className="block font-medium mb-1  text-[8px] md:text-xs">
                  Nationality: <span className="text-red-500">*</span>
                </label>
                <select
                  onChange={(e) =>
                    handleInputChange("nationality", e.target.value)
                  }
                  className="md:w-[83.3%] border border-gray-400  mt-1"
                  value={formData.nationality || ""}
                >
                  <option value="">Please Select</option>
                  {options.map((item, i) => (
                    <option key={i} value={item.label}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-1 px-2 grid grid-cols-2">
                <label className="block font-medium mb-1  text-[8px] md:text-xs">
                  Place of birth: <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.placeOfBirth || ""}
                  onChange={(e) =>
                    handleInputChange("placeOfBirth", e.target.value)
                  }
                  className="md:w-2/3 border border-gray-400  mt-1"
                />
              </div>

              <div className="mt-1 px-2 grid grid-cols-1">
                <label className="block font-medium mb-1  text-[8px] md:text-xs">
                  Counatry of birth: <span className="text-red-500">*</span>
                </label>

                <select
                  onChange={(e) =>
                    handleInputChange("countryOfBirth", e.target.value)
                  }
                  className="md:w-[83.3%] border border-gray-400  mt-1"
                  value={formData.countryOfBirth || ""}
                >
                  <option value="">Please Select</option>
                  {options.map((item, i) => (
                    <option key={i} value={item.label}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-1 px-2 grid grid-cols-2">
                <label className="block font-medium mb-1  text-[8px] md:text-xs">
                  Date of birth: <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  required
                  value={formData.dateOfBirth || ""}
                  onChange={(e) =>
                    handleInputChange("dateOfBirth", e.target.value)
                  }
                  className="md:w-2/3 border border-gray-400  mt-1"
                />
              </div>

              <div className="mt-4 px-2 grid grid-cols-2">
                <label className="block font-medium mb-1  text-[8px] md:text-xs">
                  Sex: <span className="text-red-500">*</span>
                </label>
                <select
                  onChange={(e) => handleInputChange("sex", e.target.value)}
                  value={formData.sex || ""}
                  className="md:w-2/3 border border-gray-400  mt-1"
                >
                  <option value="">Please Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="mt-4 px-2 grid grid-cols-1">
                <label className="block font-medium mb-1  text-[8px] md:text-xs">
                  Country of residence: <span className="text-red-500">*</span>
                </label>
                <select
                  onChange={(e) =>
                    handleInputChange("countryOfResidence", e.target.value)
                  }
                  className="md:w-2/3 border border-gray-400  mt-1"
                  value={formData.countryOfResidence || ""}
                >
                  <option value="">Please Select</option>
                  {options.map((item, i) => (
                    <option key={i} value={item.label}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <h3 className=" text-[8px] md:text-xs font-bold bg-gray-200 p-2 mt-3">
            Passport or travel document
          </h3>
          <div className=" border border-gray-200 bg-slate-50">
            <div className="space-y-2">
              <div className="mt-1 px-2 grid grid-cols-2">
                <label className="block font-medium mb-1  text-[8px] md:text-xs">
                  Passport number: <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.passportNumber || ""}
                  onChange={(e) =>
                    handleInputChange("passportNumber", e.target.value)
                  }
                  className="md:w-2/3 border border-gray-400  mt-1"
                />
              </div>

              <div className="mt-1 px-2 grid grid-cols-2">
                <label className="block font-medium mb-1  text-[8px] md:text-xs">
                  Issue date: <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  required
                  value={formData.passportIssueDate || ""}
                  onChange={(e) =>
                    handleInputChange("passportIssueDate", e.target.value)
                  }
                  className="md:w-2/3 border border-gray-400  mt-1"
                />
              </div>

              <div className="mt-1 px-2 grid grid-cols-2">
                <label className="block font-medium mb-1  text-[8px] md:text-xs">
                  Expiry date: <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  required
                  value={formData.passportExpiryDate || ""}
                  onChange={(e) =>
                    handleInputChange("passportExpiryDate", e.target.value)
                  }
                  className="md:w-2/3 border border-gray-400  mt-1"
                />
              </div>

              <div className="mt-1 px-2 grid grid-cols-2">
                <label className="block font-medium mb-1  text-[8px] md:text-xs">
                  Place of issue of passport:{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.placeOfissue || ""}
                  onChange={(e) =>
                    handleInputChange("placeOfissue", e.target.value)
                  }
                  className="md:w-2/3 border border-gray-400  mt-1"
                />
              </div>
            </div>
          </div>

          <h3 className="text-[8px] md:text-xs font-bold bg-gray-200 p-2 mt-3">
            Current home address
          </h3>
          <div className=" border border-gray-200 bg-slate-50">
            <div className="space-y-2">
              <div className="mt-1 px-2 grid grid-cols-2">
                <label className="block font-medium mb-1  text-[8px] md:text-xs">
                  Address: <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.currentAddress || ""}
                  onChange={(e) =>
                    handleInputChange("currentAddress", e.target.value)
                  }
                  className="md:w-2/3 border border-gray-400  mt-1"
                />
              </div>

              <div className="mt-1 px-2 grid grid-cols-2">
                <label className="block font-medium mb-1  text-[8px] md:text-xs">
                  City or town: <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.currentCity || ""}
                  onChange={(e) =>
                    handleInputChange("currentCity", e.target.value)
                  }
                  className="md:w-2/3 border border-gray-400  mt-1"
                />
              </div>

              <div className="mt-1 px-2 grid grid-cols-2">
                <label className="block font-medium mb-1  text-[8px] md:text-xs">
                  County, area district or province:
                </label>
                <input
                  type="text"
                  required
                  value={formData.currentDistrict || ""}
                  onChange={(e) =>
                    handleInputChange("currentDistrict", e.target.value)
                  }
                  className="md:w-2/3 border border-gray-400  mt-1"
                />
              </div>

              <div className="mt-1 px-2 grid grid-cols-2">
                <label className="block font-medium mb-1  text-[8px] md:text-xs">
                  Postcode or ZIP code: <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.currentPostCode || ""}
                  onChange={(e) =>
                    handleInputChange("currentPostCode", e.target.value)
                  }
                  className=" md:w-2/3 border border-gray-400  mt-1"
                />
              </div>

              <div className="mt-4 px-2 grid grid-cols-1">
                <label className="block font-medium mb-1  text-[8px] md:text-xs">
                  Country: <span className="text-red-500">*</span>
                </label>
                <select
                  onChange={(e) =>
                    handleInputChange("currentCountry", e.target.value)
                  }
                  className="md:w-2/3 border border-gray-400  mt-1"
                  value={formData.currentCountry || ""}
                >
                  <option value="">Please Select</option>
                  {options.map((item, i) => (
                    <option key={i} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <h3 className="text-xs font-bold bg-gray-200 p-2 mt-3">
            Identification numbers
          </h3>
          <div className=" border border-gray-200 bg-slate-50">
            <div className="space-y-2">
              <div className="mt-1 px-2 grid grid-cols-2">
                <label className="block font-medium mb-1  text-[8px] md:text-xs">
                  UK ID card number:
                </label>
                <input
                  type="text"
                  required
                  value={formData.ukIdCardNumber || ""}
                  onChange={(e) =>
                    handleInputChange("ukIdCardNumber", e.target.value)
                  }
                  className="md:w-2/3 border border-gray-400  mt-1"
                />
              </div>

              <div className="mt-1 px-2 grid grid-cols-2">
                <label className="block font-medium mb-1  text-[8px] md:text-xs">
                  UK National Insurance number:
                </label>
                <input
                  type="text"
                  required
                  value={formData.ukNationalInsuranceNumber || ""}
                  onChange={(e) =>
                    handleInputChange(
                      "ukNationalInsuranceNumber",
                      e.target.value
                    )
                  }
                  className="md:w-2/3 border border-gray-400  mt-1"
                />
              </div>

              <div className="mt-1 px-2 grid grid-cols-2">
                <label className="block font-medium mb-1  text-[8px] md:text-xs">
                  National ID card number:
                </label>
                <input
                  type="text"
                  required
                  value={formData.nationalIdNumber || ""}
                  onChange={(e) =>
                    handleInputChange("nationalIdNumber", e.target.value)
                  }
                  className="md:w-2/3 border border-gray-400  mt-1"
                />
              </div>

              <div className="mt-1 px-2 grid grid-cols-2">
                <label className="block font-medium mb-1  text-[8px] md:text-xs">
                  Employee number:
                </label>
                <input
                  type="text"
                  required
                  value={formData.employeeNumber || ""}
                  onChange={(e) =>
                    handleInputChange("employeeNumber", e.target.value)
                  }
                  className="md:w-2/3 border border-gray-400  mt-1"
                />
              </div>
            </div>
          </div>

          <p className="text-blue-950 font-bold my-2 ">
            In the following sections enter the details of the employment that
            this CoS covers.
          </p>

          <h3 className="text-xs font-bold bg-gray-200 p-2 mt-3">Work dates</h3>
          <div className=" border border-gray-200 bg-slate-50">
            <div className="space-y-2">
              <div className="mt-1 px-2 grid grid-cols-2">
                <label className="block font-medium mb-1  text-[8px] md:text-xs">
                  Start date:
                </label>

                <input
                  type="date"
                  required
                  value={formData.workStartDate || ""}
                  onChange={(e) =>
                    handleInputChange("workStartDate", e.target.value)
                  }
                  className="md:w-2/3 border border-gray-400  mt-1"
                />
              </div>

              <div className="mt-1 px-2 grid grid-cols-2">
                <label className="block font-medium mb-1  text-[8px] md:text-xs">
                  End date:
                </label>

                <input
                  type="date"
                  required
                  value={formData.workEndDate || ""}
                  onChange={(e) =>
                    handleInputChange("workEndDate", e.target.value)
                  }
                  className="md:w-2/3 border border-gray-400  mt-1"
                />
              </div>

              <div className="mt-1 px-2 grid grid-cols-2">
                <label className="block font-medium mb-1  text-[8px] md:text-xs">
                  Does the migrant need to leave and re-enter the UK during the
                  period of approval?
                  <br />
                  <span className="text-blue-950 underline cursor-pointer">
                    Help (opens in a new window)
                  </span>
                </label>
                <div>
                  <input
                    type="checkbox"
                    required
                    onChange={(e) =>
                      setFormData({ ...formData, workLeave: e.target.checked })
                    }
                    className=" border border-gray-400  mt-1"
                  />
                </div>
              </div>

              <div className="mt-1 px-2 grid grid-cols-2">
                <label className="block font-medium mb-1  text-[8px] md:text-xs">
                  Total weekly hours of work:
                </label>

                <input
                  type="text"
                  required
                  value={formData.workHours || ""}
                  onChange={(e) =>
                    handleInputChange("workHours", e.target.value)
                  }
                  className="md:w-2/3 border border-gray-400  mt-1"
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold bg-gray-200 p-2 mt-3">
              Agent (optional)
            </h3>
            <div className=" border border-gray-200 bg-slate-50">
              <div className="space-y-2">
                <div className="mt-1 px-2 grid grid-cols-2 ">
                  <label className="block font-medium  text-[8px] md:text-xs">
                    Migrant sourced through agent?:
                  </label>
                  <div className="flex gap-1">
                    <input
                      type="checkbox"
                      checked={formData.agentUsed}
                      onChange={(e) =>
                        handleInputChange("agentUsed", e.target.checked)
                      }
                      className="my-auto border size-3 cursor-pointer border-gray-400"
                    />
                    <p>if you used an agent, give details:</p>
                  </div>
                </div>

                {formData.agentUsed && (
                  <>
                    <div className="mt-1 px-2 grid grid-cols-2">
                      <label className="block font-medium mb-1  text-[8px] md:text-xs">
                        Agent contact family name:{" "}
                        <span className="text-red-500">*</span>
                      </label>

                      <input
                        type="text"
                        required
                        value={formData.agentContactFamilyName || ""}
                        onChange={(e) =>
                          handleInputChange(
                            "agentContactFamilyName",
                            e.target.value
                          )
                        }
                        className="md:w-2/3 border border-gray-400  mt-1"
                      />
                    </div>

                    <div className="mt-1 px-2 grid grid-cols-2">
                      <label className="block font-medium mb-1  text-[8px] md:text-xs">
                        Agent contact given name:{" "}
                        <span className="text-red-500">*</span>
                      </label>

                      <input
                        type="text"
                        required
                        value={formData.agentContactGivenName || ""}
                        onChange={(e) =>
                          handleInputChange(
                            "agentContactGivenName",
                            e.target.value
                          )
                        }
                        className="md:w-2/3 border border-gray-400  mt-1"
                      />
                    </div>

                    <div className="mt-1 px-2 grid grid-cols-2">
                      <label className="block font-medium mb-1  text-[8px] md:text-xs">
                        Address: <span className="text-red-500">*</span>
                      </label>

                      <input
                        type="text"
                        required
                        value={formData.agentAddress || ""}
                        onChange={(e) =>
                          handleInputChange("agentAddress", e.target.value)
                        }
                        className="md:w-2/3 border border-gray-400  mt-1"
                      />
                    </div>

                    <div className="mt-1 px-2 grid grid-cols-2">
                      <label className="block font-medium mb-1  text-[8px] md:text-xs">
                        City or town: <span className="text-red-500">*</span>
                      </label>

                      <input
                        type="text"
                        required
                        value={formData.agentCity || ""}
                        onChange={(e) =>
                          handleInputChange("agentCity", e.target.value)
                        }
                        className="md:w-2/3 border border-gray-400  mt-1"
                      />
                    </div>

                    <div className="mt-1 px-2 grid grid-cols-2">
                      <label className="block font-medium mb-1  text-[8px] md:text-xs">
                        County, area district or province:{" "}
                        <span className="text-red-500">*</span>
                      </label>

                      <input
                        type="text"
                        required
                        value={formData.agentDistrict || ""}
                        onChange={(e) =>
                          handleInputChange("agentDistrict", e.target.value)
                        }
                        className="md:w-2/3 border border-gray-400  mt-1"
                      />
                    </div>

                    <div className="mt-1 px-2 grid grid-cols-2">
                      <label className="block font-medium mb-1  text-[8px] md:text-xs">
                        Postcode or ZIP code:{" "}
                        <span className="text-red-500">*</span>
                      </label>

                      <input
                        type="text"
                        required
                        value={formData.agentPostCode || ""}
                        onChange={(e) =>
                          handleInputChange("agentPostCode", e.target.value)
                        }
                        className="md:w-2/3 border border-gray-400  mt-1"
                      />
                    </div>
                    <div className="mt-4 px-2 grid grid-cols-1">
                      <label className="block font-medium mb-1  text-[8px] md:text-xs">
                        Country: <span className="text-red-500">*</span>
                      </label>
                      <select
                        onChange={(e) =>
                          handleInputChange("agentCountry", e.target.value)
                        }
                        className="md:w-2/3 border border-gray-400  mt-1"
                        value={formData.agentCountry || ""}
                      >
                        <option value="">Please Select</option>
                        {options.map((item, i) => (
                          <option key={i} value={item.value}>
                            {item.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          <h3 className="text-xs font-bold bg-gray-200 p-2 mt-3">
            Work datesMigrant&apos;s employment
          </h3>
          <div className=" border border-gray-200 bg-slate-50">
            <div className="space-y-2">
              <div className="mt-1 px-2 grid grid-cols-2">
                <label className="block font-medium mb-1  text-[8px] md:text-xs">
                  Job title: <span className="text-red-500">*</span>
                </label>

                <input
                  type="text"
                  required
                  value={formData.migrateEmploymentJobTitle || ""}
                  onChange={(e) =>
                    handleInputChange(
                      "migrateEmploymentJobTitle",
                      e.target.value
                    )
                  }
                  className="md:w-2/3 border border-gray-400  mt-1"
                />
              </div>

              <div className="mt-4 px-2 grid grid-cols-2">
                <label className="block font-medium mb-1  text-[8px] md:text-xs">
                  Job Type: <span className="text-red-500">*</span>
                </label>
                <select
                  onChange={(e) =>
                    handleInputChange(
                      "migrateEmploymentJobType",
                      e.target.value
                    )
                  }
                  className="md:w-2/3 border border-gray-400  mt-1"
                  value={formData.migrateEmploymentJobType || ""}
                >
                  <option value="">Please Select</option>
                  {jobCategories.map((item, i) => (
                    <option key={i} value={item.title}>
                      {item?.code} {item.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-1 px-2 grid grid-cols-2">
                <label className="block font-medium mb-1  text-[8px] md:text-xs">
                  Summary of job description (1000 character limit):{" "}
                  <span className="text-red-500">*</span>
                </label>

                <textarea
                  required
                  value={formData.migrateEmploymentJobsummary || ""}
                  onChange={(e) =>
                    handleInputChange(
                      "migrateEmploymentJobsummary",
                      e.target.value
                    )
                  }
                  className="md:w-2/3 border border-gray-400  mt-1"
                />
              </div>

              <div className="mt-1 px-2 grid grid-cols-2">
                <label className="block font-medium mb-1  text-[8px] md:text-xs">
                  Tick to confirm if the applicant is new entrant:
                  <br />
                </label>

                <div>
                  <input
                    type="checkbox"
                    required
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        migrateEmploymentNew: e.target.checked,
                      })
                    }
                    className=" border border-gray-400  mt-1"
                  />
                </div>
              </div>

              <div className="mt-1 px-2 grid grid-cols-2">
                <label className="block font-medium mb-1  text-[8px] md:text-xs">
                  Gross salary excluding any allowances and guaranteed bonuses
                  (in pounds sterling, using format &apos;1234&apos; or
                  &apos;1234.99&apos;): <span className="text-red-500">*</span>
                </label>

                <div>
                  <input
                    type="checkbox"
                    required
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        migrateEmploymentGrossSalary: e.target.checked,
                      })
                    }
                    className=" border border-gray-400  mt-1"
                  />
                </div>
              </div>

              {/* <div className="mt-1 px-2 grid grid-cols-2">
                

                <input
                  type="checkbox"
                    required
                  value={formData.migrateEmploymentGrossSalary || ""}
                  onChange={(e) =>
                    handleInputChange(
                      "migrateEmploymentGrossSalary",
                      e.target.value
                    )
                  }
                  className="md:w-2/3 border border-gray-400  mt-1"
                />
              </div> */}

              <div className="mt-4 px-2 grid grid-cols-2">
                <label className="block font-medium mb-1  text-[8px] md:text-xs">
                  For each: <span className="text-red-500">*</span>
                </label>
                <select
                  onChange={(e) =>
                    handleInputChange(
                      "migrateEmploymentSralaryType",
                      e.target.value
                    )
                  }
                  className="md:w-2/3 border border-gray-400  mt-1"
                  value={formData.migrateEmploymentSralaryType || ""}
                >
                  <option value="">Please Select</option>
                  {["Day", "Hour", "Month", "Week", "Month"].map((item, i) => (
                    <option key={i} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-1 px-2 grid grid-cols-2">
                <label className="block font-medium mb-1  text-[8px] md:text-xs">
                  Job on a client contract:
                </label>

                <div>
                  <input
                    type="checkbox"
                    required
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        migrateEmploymentClientContact: e.target.checked,
                      })
                    }
                    className=" border border-gray-400  mt-1"
                  />
                </div>
              </div>

              <div className="mt-1 px-2 grid grid-cols-2">
                <label className="block font-medium mb-1  text-[8px] md:text-xs">
                  Summary of client contract (1000 character limit):
                  <span className="text-red-500">*</span>
                </label>

                <textarea
                  required
                  value={formData.migrateEmploymentClientContactSummary || ""}
                  onChange={(e) =>
                    handleInputChange(
                      "migrateEmploymentClientContactSummary",
                      e.target.value
                    )
                  }
                  className="md:w-2/3 border border-gray-400  mt-1"
                />
              </div>

              <div className="mt-1 px-2 grid grid-cols-2">
                <label className="block font-medium mb-1  text-[8px] md:text-xs">
                  Tick to confirm the job is in an eligible occupation code:{" "}
                  <span className="text-red-500">*</span>
                  <br />
                  <span className="text-blue-950 underline cursor-pointer">
                    Help (opens in a new window)
                  </span>
                </label>

                <div>
                  <input
                    type="checkbox"
                    required
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        migrateEmploymentOccupationCode: e.target.checked,
                      })
                    }
                    className=" border border-gray-400  mt-1"
                  />
                </div>
              </div>

              <div className="mt-1 px-2 grid grid-cols-2">
                <label className="block font-medium mb-1  text-[8px] md:text-xs">
                  Tick to confirm if the job is <br /> on the current
                  Immigration Salary List:{" "}
                  <span className="text-red-500">*</span>
                  <br />
                  <span className="text-blue-950 underline cursor-pointer">
                    Help (opens in a new window)
                  </span>
                </label>

                <div>
                  <input
                    type="checkbox"
                    required
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        migrateEmploymentImmigrationSalary: e.target.checked,
                      })
                    }
                    className=" border border-gray-400  mt-1"
                  />
                </div>
              </div>

              <div className="mt-1 px-2 grid grid-cols-2">
                <label className="block font-medium mb-1  text-[8px] md:text-xs">
                  Give registration details if there is a legal requirement for
                  the migrant to be registered with a professional or other
                  official organisation in the UK (250 character limit):
                </label>

                <textarea
                  required
                  value={formData.migrateEmploymentRegistrationDetails || ""}
                  onChange={(e) =>
                    handleInputChange(
                      "migrateEmploymentRegistrationDetails",
                      e.target.value
                    )
                  }
                  className="md:w-2/3 border border-gray-400  mt-1"
                />
              </div>

              <div className="mt-1 px-2 grid grid-cols-2">
                <label className="block font-medium mb-1  text-[8px] md:text-xs">
                  Tick to certify maintenance for migrant (and dependants, if
                  applicable): <span className="text-red-500">*</span>
                  <br />
                  <span className="text-blue-950 underline cursor-pointer">
                    Help (opens in a new window)
                  </span>
                </label>

                <div>
                  <input
                    type="checkbox"
                    required
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        migrateEmploymentImmigrationCertify: e.target.checked,
                      })
                    }
                    className=" border border-gray-400  mt-1"
                  />
                </div>
              </div>

              <div className="mt-1 px-2 grid grid-cols-2">
                <label className="block font-medium mb-1  text-[8px] md:text-xs">
                  Does the worker require an Academic Technology Approval Scheme
                  (ATAS) certificate for this role?{" "}
                  <span className="text-red-500">*</span>
                  <br />
                  <span className="text-blue-950 underline cursor-pointer">
                    Help (opens in a new window)
                  </span>
                </label>
                <div className="flex gap-1">
                  <input
                    type="checkbox"
                    required
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        migrateEmploymentAcademyCertificate: e.target.checked,
                      })
                    }
                    className="my-auto rounded-full border border-gray-400  mt-1"
                  />
                  <p>Yes</p>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-xs font-bold bg-gray-200 p-2 mt-3">
            PAYE Details
          </h3>
          <div className=" border border-gray-200 bg-slate-50">
            <div className="space-y-2">
              <div className="mt-1 px-2 grid grid-cols-2">
                <label className="block font-medium mb-1  text-[8px] md:text-xs">
                  PAYE reference supplied?:{" "}
                  <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-1">
                  <input
                    type="checkbox"
                    required
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        payReference: e.target.checked,
                      })
                    }
                    className="my-auto border border-gray-400  mt-1"
                  />
                  <p>Yes</p>
                </div>
              </div>

              <div className="mt-4 px-2 pb-1 grid grid-cols-2">
                <label className="block mb-2 font-semibold">
                  PAYE reference number:
                </label>
                <select
                  onChange={(e) =>
                    handleInputChange("payeReferenceNumber", e.target.value)
                  }
                  value={formData.payeReferenceNumber || ""}
                  className="md:w-2/3 border border-gray-400  mt-1"
                >
                  <option value="">Please Select</option>
                  <option value="120/ZE16078">120/ZE16078</option>
                </select>
              </div>

              <div className="mt-1 px-2 grid grid-cols-2">
                <label className="block font-medium mb-1  text-[8px] md:text-xs">
                  If No selected, please provide reason (1000 character limit):
                </label>

                <textarea
                  required
                  value={formData.payeReferenceReson || ""}
                  onChange={(e) =>
                    handleInputChange("payeReferenceReson", e.target.value)
                  }
                  className="md:w-2/3 border border-gray-400  mt-1"
                />
              </div>
            </div>
          </div>

          <h3 className="text-xs font-bold bg-gray-200 p-2 mt-3">
            Care workers and senior care workers
          </h3>
          <div className=" border border-gray-200 bg-slate-50">
            <div className="space-y-2">
              <div className="mt-1 px-2 grid grid-cols-2">
                <label className="block font-medium mb-1  text-[8px] md:text-xs">
                  <span className="text-blue-950 underline cursor-pointer">
                    Tick to confirm if your organisation is CQC registered
                  </span>
                </label>
                <div className=" flex gap-1">
                  <input
                    type="checkbox"
                    required
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        careWorkerCQC: e.target.checked,
                      })
                    }
                    className="my-auto border border-gray-400  mt-1"
                  />
                </div>
              </div>

              <div className="mt-4 px-2 pb-1 grid grid-cols-2">
                <label className="block mb-2 font-semibold">
                  If your organisation is not CQC registered, explain why this
                  role is eligible to be sponsored
                  <br />
                  <span className="text-red-500">*</span>
                </label>

                <select
                  onChange={(e) =>
                    handleInputChange("careWorkerCQCRole", e.target.value)
                  }
                  value={formData.careWorkerCQCRole || ""}
                  className="md:w-2/3 border border-gray-400 my-auto mt-1"
                >
                  <option value="">Please Select</option>
                  <option value="Role is based in Scotland">
                    Role is based in Scotland
                  </option>
                  <option value="Role is based in Wales">
                    Role is based in Wales
                  </option>
                  <option value="Role is based in Northern Ireland">
                    Role is based in Northern Ireland
                  </option>
                  <option value="Extension for a worker previously sponsor before 11/03/2024">
                    Extension for a worker previously sponsor before 11/03/2024
                  </option>
                </select>
              </div>
            </div>
          </div>

          <h3 className="text-xs font-bold bg-gray-200 p-2 mt-3">
            Migrant&apos;s employment - PhD
          </h3>
          <div className=" border border-gray-200 bg-slate-50">
            <div className="space-y-2">
              <div className="mt-1 px-2 grid grid-cols-2">
                <label className="block font-medium mb-1  text-[8px] md:text-xs">
                  Is the worker claiming points for a PhD-level qualification
                  relevant to the job?
                  <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-1">
                  <input
                    type="checkbox"
                    required
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        migrantPHDLevel: e.target.checked,
                      })
                    }
                    className="my-auto border border-gray-400  mt-1"
                  />
                  <p>Yes</p>
                </div>
              </div>

              <div className="mt-1 px-2 grid grid-cols-2">
                <label className="block font-medium mb-1  text-[8px] md:text-xs">
                  If Yes, please provide an explanation of how the PhD-level
                  qualification is relevant to the job (1000 character limit):
                </label>

                <textarea
                  required
                  value={formData.migrantPHDExplanation || ""}
                  onChange={(e) =>
                    handleInputChange("migrantPHDExplanation", e.target.value)
                  }
                  className="md:w-2/3 border border-gray-400  mt-1"
                />
              </div>

              <div className="mt-1 px-2 grid grid-cols-2">
                <label className="block font-medium mb-1  text-[8px] md:text-xs">
                  If Yes, and the PhD is an overseas qualification, please
                  supply NARIC code (enter &quot;N/A&quot; if the PhD is not an
                  overseas qualification)
                </label>

                <input
                  type="text"
                  required
                  value={formData.migrantPHDOverseas || ""}
                  onChange={(e) =>
                    handleInputChange("migrantPHDOverseas", e.target.value)
                  }
                  className="md:w-2/3 border border-gray-400  mt-1"
                />
              </div>

              <div className="mt-4 px-2 pb-1 grid grid-cols-2">
                <label className="block mb-2 font-semibold">
                  Is PhD in a STEM subject?
                </label>
                <select
                  onChange={(e) =>
                    handleInputChange("IsMigrantPHDSTEM", e.target.value)
                  }
                  value={formData.IsMigrantPHDSTEM || ""}
                  className="md:w-2/3 border border-gray-400  mt-1"
                >
                  <option value="">Please Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>

              <div className="mt-1 px-2 grid grid-cols-2">
                <label className="block font-medium mb-1  text-[8px] md:text-xs">
                  If Yes, please provide an explanation of how the PhD is in a{" "}
                  <br />
                  STEM Subject (1000-char limit)
                </label>

                <textarea
                  required
                  value={formData.migrantPHDSTEMExplanation || ""}
                  onChange={(e) =>
                    handleInputChange(
                      "migrantPHDSTEMExplanation",
                      e.target.value
                    )
                  }
                  className="md:w-2/3 border border-gray-400  mt-1"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className=" w-full flex justify-end my-5 gap-3">
          <button
            className={`px-2 p-1 text-[6px] md:text-xs font-semibold  transition-all duration-200 bg-gradient-to-t from-[#10254E] to-[#496192] text-white hover:from-[#0c1e3d] hover:to-[#3a5280]
                `}
          >
            Cancel
          </button>
          <button
          onClick={()=>router.push("/review")}
            className={`px-2 p-1 text-[6px] md:text-xs font-semibold  transition-all duration-200 bg-gradient-to-t from-[#10254E] to-[#496192] text-white hover:from-[#0c1e3d] hover:to-[#3a5280]
                `}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
