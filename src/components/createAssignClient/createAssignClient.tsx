/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useMemo, useState } from "react";
import countryList from "react-select-country-list";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import Link from "next/link";
import logo from "../../assets/logo.png"


const categories = [
  {
    name: "Skilled Worker (Switching immigration category - ISC liable)",
    iscLiable: true,
  },
  { name: "Skilled Worker (Extensions - ISC exempt)", iscLiable: false },
  { name: "Skilled Worker (Extensions - ISC liable)", iscLiable: true },
  {
    name: "Skilled Worker (Changes of Employment - ISC exempt)",
    iscLiable: false,
  },
  {
    name: "Skilled Worker (Changes of Employment - ISC liable)",
    iscLiable: true,
  },
  {
    name: "Skilled Worker (Student course complete switching to Skilled Worker)",
    iscLiable: false,
  },
  {
    name: "Skilled Worker (Switching immigration category - ISC exempt)",
    iscLiable: false,
  },
];

const certificateOptions = [
  { id: "createSingle", label: "Create new single certificate" },
  {
    id: "createSingleBasedOnExisting",
    label: "Create new single certificate based on an existing certificate",
  },
  { id: "createBatch", label: "Create new batch of certificate(s)" },
  { id: "findSingle", label: "Find an existing single certificate" },
  { id: "findBatch", label: "Find an existing batch of certificate(s)" },
];

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

const CreateAssignClient = () => {
  const [route, setRoute] = useState("");
  const [step, setStep] = useState(1);
  const options = useMemo(() => countryList().getData(), []);

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
    migrateEmploymentGrossSalary: string;
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

  const [formData, setFormData] = useState<FormData>({
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
    migrateEmploymentGrossSalary: "",
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
  });

  const handleInputChange = (
    field: string,
    value: string | number | boolean
  ) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleNext = () => {
    if (step === 1 && route) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else if (step === 3) {
      setStep(4);
    } else if (step === 4) {
      alert("Do you want to save as a PDF?");
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const formatLabel = (key: string): string => {
    return key
      .replace(/([A-Z])/g, " $1") // Add space before capital letters
      .replace(/\b\w/g, (char) => char.toUpperCase()) // Capitalize first letter of each word
      .trim();
  };

  // const generatePDF = (formData: Record<string, any>) => {
  //   const doc = new jsPDF();

  //   // Title
  //   doc.text("User Information Report", 14, 15);

  //   // Define table columns
  //   const tableColumn = ["Information Categories", "Users Information"];
  //   const tableRows: (string | number)[][] = [];

  //   // Convert formData into table rows with formatted labels
  //   Object.entries(formData).forEach(([key, value]) => {
  //     tableRows.push([formatLabel(key), value !== "" ? String(value) : "N/A"]);
  //   });

  //   // Add table to PDF
  //   autoTable(doc, {
  //     head: [tableColumn],
  //     body: tableRows,
  //     startY: 20,
  //   });

  //   // Save the PDF
  //   doc.save("user_info_report.pdf");
  // };

const loadImage = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(img, 0, 0);
        resolve(canvas.toDataURL('image/png'));
      } else {
        reject(new Error('Could not create canvas context'));
      }
    };
    img.onerror = (error) => reject(error);
    img.src = "/logo.png";
  });
};


const generatePDF = async(formData: Record<string, any>) => {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4"
  });

  // Set default font
  doc.setFont("helvetica");
  doc.setFontSize(10);

  // ===== Page 1 =====
  // image here
    // const pageWidth = doc.internal.pageSize.getWidth();
  const leftMargin = 15;
  const topMargin = 10;
    // ===== ADD LOGO =====
// Left border (full page height)
  doc.setDrawColor(0, 0, 255); // Blue color
  doc.setLineWidth(0.6);
  doc.line(leftMargin, 5, leftMargin, 30);

  // ===== HEADER WITH LOGO =====
  try {
    // Add logo image
    const logoWidth = 7;
    const logoHeight = 8;
    const logoX = leftMargin+1;
    const logoY = topMargin;
    
    const imgData = await loadImage();
    doc.addImage(imgData, 'PNG', logoX, logoY, logoWidth, logoHeight);
    
    // Header text positioning
    const textStartY = logoY + logoHeight + 5;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text("UK Visas", leftMargin+1, textStartY+1);
    doc.setFontSize(12);
    doc.text("& Immigration", leftMargin, textStartY + 5);

  } catch (error) {
    console.error("Error loading logo:", error);
    // Fallback header without logo
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text("UK Visas", leftMargin, topMargin);
    doc.setFontSize(12);
    doc.text("& Immigration", leftMargin, topMargin + 5);
  }

// ===== EXACT CERTIFICATE SECTION REPLICATION =====
  doc.setFont("helvetica", "bold");
  
  // 1. Set the exact font size (11pt)
  doc.setFontSize(11);
  
  // 2. Position the text exactly (15mm from left, 30mm from top)
  const certText = "Certificate of Sponsorship Details";
  doc.text(certText, 18, 31);

  // 3. Calculate the perfect border dimensions
  const pageWidth = doc.internal.pageSize.getWidth();
  const borderLeft = 15; // Matches text left position
  const borderRight = pageWidth - 15; // Symmetrical right margin
  const borderTop = 25; // 5mm above text
  const borderBottom = 35; // 5mm below text

  // 4. Draw the exact borders shown in screenshot
  // Left border (blue)
  doc.setDrawColor(144, 144, 144); // light black
  doc.setLineWidth(0.3);
  doc.line(borderLeft, borderTop, borderLeft, borderBottom);
  
  // Right border (blue)
  doc.line(borderRight, borderTop, borderRight, borderBottom);
  
  // Top border (red)
  doc.setDrawColor(221, 221, 221); // Pure red
  doc.line(borderLeft, borderTop, borderRight, borderTop);
  
  // Bottom border (red)
  doc.line(borderLeft, borderBottom, borderRight, borderBottom);




  // Tier and Category (double label as in original)
  doc.text("Tier and Category:", 15, 40);
  doc.text("Tier and Category: Skilled Worker (New hires - defined)", 50, 40);

  // Certificate of sponsorship status section
  doc.text("Certificate of sponsorship status", 15, 50);
  
  const statusData = [
    { label: "Sponsor licence number:", value: "T83VF90R4", x: 20, y: 55 },
    { label: "Sponsor name:", value: "DIAL ONE SERVICES LTD", x: 20, y: 60 },
    { label: "Certificate number:", value: "C2G8H88871U", x: 20, y: 65 },
    { label: "Current certificate status:", value: "ASSIGNED", x: 20, y: 70 },
    { label: "Current certificate status date:", value: "15 April 2025", x: 20, y: 75 },
    { label: "Date assigned:", value: "15 April 2025", x: 20, y: 80 },
    { label: "Expiry date (use by):", value: "16 July 2025", x: 20, y: 85 },
    { label: "Sponsorship withdrawn:", value: "N", x: 20, y: 90 },
    { label: "Sponsor note:", value: "", x: 20, y: 95 },
    { label: "Migrant application status:", value: "", x: 20, y: 100 }
  ];

  statusData.forEach(item => {
    doc.text(item.label, item.x, item.y);
    doc.text(item.value, item.x + 60, item.y);
  });

  // Personal information section
  doc.setFont("helvetica", 'bold');
  doc.text("Personal information", 15, 110);
  doc.setFont("helvetica", 'normal');

  const personalData = [
    { label: "Family name:", value: "BEGUM", x: 20, y: 115 },
    { label: "Given name(s):", value: "MST MUNNE", x: 20, y: 120 },
    { label: "Other names:", value: "", x: 20, y: 125 },
    { label: "Nationality:", value: "BANGLADESH", x: 20, y: 130 },
    { label: "Place of birth:", value: "SYLHET", x: 20, y: 135 },
    { label: "Country of birth:", value: "BANGLADESH", x: 20, y: 140 },
    { label: "Date of birth:", value: "01/01/1993", x: 20, y: 145 },
    { label: "Gender:", value: "Female", x: 20, y: 150 },
    { label: "Country of residence:", value: "BANGLADESH", x: 20, y: 155 }
  ];

  personalData.forEach(item => {
    doc.text(item.label, item.x, item.y);
    doc.text(item.value, item.x + 60, item.y);
  });

  // Passport section
  doc.setFont("helvetica", 'bold');
  doc.text("Passport or travel document", 15, 165);
  doc.setFont("helvetica", 'normal');

  const passportData = [
    { label: "Passport number:", value: "A15258777", x: 20, y: 170 },
    { label: "Issue date:", value: "24 March 2024", x: 20, y: 175 },
    { label: "Expiry date:", value: "23 March 2034", x: 20, y: 180 },
    { label: "Place of issue of passport:", value: "DIP/DHAKA", x: 20, y: 185 }
  ];

  passportData.forEach(item => {
    doc.text(item.label, item.x, item.y);
    doc.text(item.value, item.x + 60, item.y);
  });

  // Current home address section
  doc.setFont("helvetica", 'bold');
  doc.text("Current home address", 15, 195);
  doc.setFont("helvetica", 'normal');

  const addressLines = [
    { text: "Address: DAKSHIN KANISHAIL GOLAPGONJ", x: 20, y: 200 },
    { text: "City or town: SYLHET", x: 20, y: 205 },
    { text: "County, area district or province: DHAKA", x: 20, y: 210 },
    { text: "Postcode: 3161", x: 20, y: 215 },
    { text: "Country: BANGLADESH", x: 20, y: 220 }
  ];

  addressLines.forEach(line => {
    doc.text(line.text, line.x, line.y);
  });

  // Identification numbers section
  doc.setFont("helvetica", 'bold');
  doc.text("Identification numbers", 15, 230);
  doc.setFont("helvetica", 'normal');

  const idData = [
    { label: "UK ID card number:", value: "", x: 20, y: 235 },
    { label: "UK National Insurance number:", value: "", x: 20, y: 240 },
    { label: "National ID card number:", value: "", x: 20, y: 245 },
    { label: "Employee number:", value: "", x: 20, y: 250 }
  ];

  idData.forEach(item => {
    doc.text(item.label, item.x, item.y);
    doc.text(item.value, item.x + 60, item.y);
  });

  // ===== Page 2 =====
  doc.addPage();

  // Work dates section
  doc.setFont("helvetica", 'bold');
  doc.text("Work dates", 15, 20);
  doc.setFont("helvetica", 'normal');

  const workData = [
    { label: "Start date:", value: "01 May 2025", x: 20, y: 25 },
    { label: "End date:", value: "30 April 2026", x: 20, y: 30 },
    { 
      label: "Does the migrant need to leave and re-enter the UK during the period of approval?", 
      value: "N", 
      x: 20, 
      y: 35 
    },
    { label: "Total weekly hours of work:", value: "37.50", x: 20, y: 40 }
  ];

  workData.forEach(item => {
    doc.text(item.label, item.x, item.y);
    doc.text(item.value, item.x + 60, item.y);
  });

  // Main work address section
  doc.setFont("helvetica", 'bold');
  doc.text("Main work address in the United Kingdom (mandatory for assignment):", 15, 50);
  doc.setFont("helvetica", 'normal');

  const workAddressLines = [
    { text: "Address: 277A, DAMINI MALL", x: 20, y: 55 },
    { text: "GREEN STREET", x: 60, y: 55 },
    { text: "City or town: LONDON", x: 20, y: 60 },
    { text: "County, area district or province:", x: 20, y: 65 },
    { text: "Postcode: E7 8LJ", x: 20, y: 70 }
  ];

  workAddressLines.forEach(line => {
    doc.text(line.text, line.x, line.y);
  });

  // Migrant's employment section
  doc.setFont("helvetica", 'bold');
  doc.text("Migrant's employment", 15, 80);
  doc.setFont("helvetica", 'normal');

  const employmentData = [
    { label: "Job title:", value: "Web Designer", x: 20, y: 85 },
    { label: "Job type:", value: "2141 Web design professionals", x: 20, y: 90 },
    { 
      label: "Summary of job description:", 
      value: "Taking a key role in the design and layout of a website Creating Photoshop Design File (PSDs) for visual layout of web pages and converting designs into HTML and CSS Working with other teams to meet company-wide targets Using web content management systems implementing and maintaining high quality EC policies and incorporating them with web content Reporting to senior management or clients Collecting and analysing data on website usage to improve performance Responding to reports of technical problems and working with the team to fix them quickly Liasing with Copywriters, Graphic Designers and Developers to ensure that tasks are completed on time.",
      x: 20, 
      y: 95 
    },
    { label: "New Entrant?", value: "N", x: 20, y: 125 },
    { 
      label: "Gross salary in pounds sterling (Skilled Worker only: excluding any allowances and guaranteed bonuses; all other routes: including any allowances and guaranteed bonuses):", 
      value: "21.18", 
      x: 20, 
      y: 130 
    },
    { label: "For each:", value: "Hour", x: 20, y: 135 },
    { 
      label: "Tick to confirm that the post is at the appropriate skill level as set out in the sponsor guidance:", 
      value: "Y", 
      x: 20, 
      y: 140 
    },
    { 
      label: "Tick to certify maintenance for migrant (and dependants, if applicable):", 
      value: "Y", 
      x: 20, 
      y: 145 
    },
    { 
      label: "Does the worker require an Academic Technology Approval Scheme (ATAS) certificate for this role?", 
      value: "N", 
      x: 20, 
      y: 150 
    }
  ];

  employmentData.forEach(item => {
    doc.text(item.label, item.x, item.y);
    
    // Handle multi-line text for job description
    if (item.label === "Summary of job description:") {
      const splitText = doc.splitTextToSize(item.value, 150);
      let textY = item.y + 5;
      splitText.forEach((line:any)=> {
        doc.text(line, item.x + 5, textY);
        textY += 5;
      });
    } else {
      doc.text(item.value, item.x + 60, item.y);
    }
  });

  // PAYE section
  doc.setFont("helvetica", 'bold');
  doc.text("Migrant's employment - PAYE", 15, 160);
  doc.setFont("helvetica", 'normal');

  const payeData = [
    { label: "PAYE reference supplied?", value: "Y", x: 20, y: 165 },
    { label: "PAYE reference number:", value: "120/AE80662", x: 20, y: 170 }
  ];

  payeData.forEach(item => {
    doc.text(item.label, item.x, item.y);
    doc.text(item.value, item.x + 60, item.y);
  });

  // PhD section
  doc.setFont("helvetica", 'bold');
  doc.text("Migrant's employment - PhD", 15, 180);
  doc.setFont("helvetica", 'normal');

  const phdData = [
    { label: "Is PhD Level qualification required for post?", value: "N", x: 20, y: 185 }
  ];

  phdData.forEach(item => {
    doc.text(item.label, item.x, item.y);
    doc.text(item.value, item.x + 60, item.y);
  });

  // Save the PDF
  doc.save("certificate_of_sponsorship_pixel_perfect.pdf");
};
  return (
    <div className="flex flex-col gap-4  text-[8px] md:text-xs">
      <div className=" text-[8px] md:text-xs">
        <Link
          href={"/creat-assign"}
          className=" text-[8px] md:text-lg text-blue-950 font-bold mt-3"
        >
          Create and assign CoS
        </Link>

        {step < 3 && (
          <div>
            <p className="mt-1 mb-3">
              Select the relevant route and category (if applicable) in which
              you wish to create the CoS, then choose{" "}
              <strong className="text-blue-900">Next</strong> to continue.
              Alternatively, choose{" "}
              <strong className="text-blue-900">Back</strong> to return to the
              previous screen.
            </p>
            <p className="mt-1 mb-3">
              You may have to make an additional payment, known as the
              Immigration Skills Charge (ISC), if you are assigning a CoS to
              either a Skilled Worker or a Senior or Specialist Worker. Refer to{" "}
              <span className="text-blue-950 underline font-semibold">
                Part 2 of the sponsor guidance
              </span>{" "}
              for detailed information on when you have to pay and how much it
              costs.
            </p>
            <p className="mt-1 mb-3">
              Once you have created and saved a CoS in an &apos;ISC liable&apos;
              category, proceed to the Online payment screen, where the amount
              you have to pay will be displayed.
            </p>
          </div>
        )}

        {step === 3 && (
          <p className="mt-1 mb-3">
            Select the relevant option, complete any additional fields and
            choose
            <strong className="text-blue-900"> Next</strong> to continue.
            Alternatively, choose{" "}
            <strong className="text-blue-900">Back</strong> to return to the
            previous screen.
          </p>
        )}

        {step === 4 && (
          <p className="mt-1 mb-3">
            Fields marked with an asterisk (
            <span className="text-red-600">*</span>) are mandatory and must be
            completed to assign a CoS. Some optional fields will become
            mandatory when associated fields are populated, for example it is
            not mandatory to give details of an agent used to source a migrant
            unless you tick the box to say that an agent has been used.
            <br />
            <br />
            When assigning an ISC liable CoS the fees generated will match your
            organisation&apos;s circumstances. For example: for a small
            organisation the ISC will be calculated based on the low rate. If
            the ISC fee is charged at the incorrect rate it is because the wrong
            fee was paid for your licence application, licence renewal
            application, or to add a route (previously referred to as tier) to
            your licence; or your organisation&apos;s circumstances have
            changed. If the ISC is charged at the incorrect rate you must report
            this using the change of circumstances facility within the SMS. If a
            change request is accepted, this will allow over or under payment of
            the ISC since the reporting date to be rectified.
            <br />
            <br />
            To save the CoS choose{" "}
            <strong className="text-blue-950">Save</strong>. If you do not want
            to save the changes choose{" "}
            <strong className="text-blue-950">Cancel</strong>. Ensure you save
            your data regularly, as your session will time out after 20 minutes
            of inactivity.
            <br />
            <br />
            <strong className="text-blue-950">
              The initial sections are the migrant&apos;s details. Where
              applicable, complete the personal information as shown in their
              passport.
            </strong>
          </p>
        )}
      </div>

      {step < 3 && (
        <div className="mt-2 border border-gray-300 p-3">
          <h3 className="text-xs font-bold bg-gray-200 pl-2">Route</h3>
          <div className="pt-2 px-2 bg-gray-100">
            <label className="block mb-2">Select the route:</label>
            {step === 1 ? (
              <select onChange={(e) => setRoute(e.target.value)} value={route}>
                <option value="">Please Select</option>
                <option value="Skilled Worker">Skilled Worker</option>
              </select>
            ) : (
              <p className="border p-2 bg-gray-100">{route}</p>
            )}
          </div>

          {step === 2 && (
            <div className="mt-4 px-2 pb-1 bg-gray-100">
              <label className="block mb-2">Select the category:</label>
              <select
                onChange={(e) => handleInputChange("category", e.target.value)}
                value={formData.category}
                className="w-1/2"
              >
                <option value="">Please Select</option>
                {categories.map((item, i) => (
                  <option key={i} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      )}

      {step === 3 && (
        <div className="mt-2 border border-gray-300 bg-gray-100 p-3">
          <h3 className=" text-[8px] md:text-xs font-bold bg-gray-200 pl-2">
            Route
          </h3>
          <p className="border p-2 bg-gray-100">{formData.category}</p>

          <h3 className=" text-[8px] md:text-xs font-bold bg-gray-200 pl-2 mt-3">
            Select from the options below:
          </h3>
          <div className="md:p-4 border border-gray-200 bg-gray-50">
            <div className="space-y-2">
              {certificateOptions.map((option) => (
                <div key={option.id} className="flex items-center">
                  <input
                    type="radio"
                    id={option.id}
                    name="certificate"
                    value={option.id}
                    checked={formData.certificate === option.id}
                    onChange={() => handleInputChange("certificate", option.id)}
                    className="mr-2"
                  />
                  <label htmlFor={option.id} className=" text-[8px] md:text-xs">
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="mt-2 border border-gray-300 p-3 rounded-md">
          <h3 className=" text-[8px] md:text-xs font-bold bg-gray-200 pl-2">
            Route
          </h3>
          <p className="border p-2 bg-gray-100">{formData.category}</p>

          <h3 className=" text-[8px] md:text-xs font-bold bg-gray-200 pl-2 mt-3">
            Personal information
          </h3>
          <div className="md:md:p-4 border border-gray-200 bg-gray-50">
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

              <div className="mt-4 px-2 grid grid-cols-2">
                <label className="block font-medium mb-1  text-[8px] md:text-xs">
                  Nationality: <span className="text-red-500">*</span>
                </label>
                <select
                  onChange={(e) =>
                    handleInputChange("nationality", e.target.value)
                  }
                  className="md:w-2/3 border border-gray-400  mt-1"
                  value={formData.nationality || ""}
                >
                  <option value="">Please Select</option>
                  {options.map((item, i) => (
                    <option key={i} value={item.value}>
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
                  onChange={(e) =>
                    handleInputChange("nationality", e.target.value)
                  }
                  value={formData.nationality || ""}
                  className="md:w-2/3 border border-gray-400  mt-1"
                >
                  <option value="">Please Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="mt-4 px-2 grid grid-cols-2">
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
                    <option key={i} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <h3 className=" text-[8px] md:text-xs font-bold bg-gray-200 pl-2 mt-3">
            Passport or travel document
          </h3>
          <div className="md:p-4 border border-gray-200 bg-gray-50">
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

          <h3 className="text-[8px] md:text-xs font-bold bg-gray-200 pl-2 mt-3">
            Current home address
          </h3>
          <div className="md:p-4 border border-gray-200 bg-gray-50">
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

              <div className="mt-4 px-2 grid grid-cols-2">
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

          <h3 className="text-xs font-bold bg-gray-200 pl-2 mt-3">
            Identification numbers
          </h3>
          <div className="md:p-4 border border-gray-200 bg-gray-50">
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

          <h3 className="text-xs font-bold bg-gray-200 pl-2 mt-3">
            Work dates
          </h3>
          <div className="md:p-4 border border-gray-200 bg-gray-50">
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
            <h3 className="text-xs font-bold bg-gray-200 pl-2 mt-3">
              Agent (optional)
            </h3>
            <div className="md:p-4 border border-gray-200 bg-gray-50">
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
                    <div className="mt-4 px-2 grid grid-cols-2">
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

          <h3 className="text-xs font-bold bg-gray-200 pl-2 mt-3">
            Work datesMigrant&apos;s employment
          </h3>
          <div className="md:p-4 border border-gray-200 bg-gray-50">
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
                  <br />
                  <span className="text-blue-950 underline cursor-pointer">
                    Help (opens in a new window)
                  </span>
                </label>

                <input
                  type="text"
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
              </div>

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
                  Tick to confirm if the job is on the current Immigration
                  Salary List: <span className="text-red-500">*</span>
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

          <h3 className="text-xs font-bold bg-gray-200 pl-2 mt-3">
            PAYE Details
          </h3>
          <div className="md:p-4 border border-gray-200 bg-gray-50">
            <div className="space-y-2">
              <div className="mt-1 px-2 grid grid-cols-2">
                <label className="block font-medium mb-1  text-[8px] md:text-xs">
                  <span className="text-blue-950 underline cursor-pointer">
                    Help (opens in a new window)
                  </span>
                  <br />
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

          <h3 className="text-xs font-bold bg-gray-200 pl-2 mt-3">
            Care workers and senior care workers
          </h3>
          <div className="md:p-4 border border-gray-200 bg-gray-50">
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

          <h3 className="text-xs font-bold bg-gray-200 pl-2 mt-3">
            Migrant&apos;s employment - PhD
          </h3>
          <div className="md:p-4 border border-gray-200 bg-gray-50">
            <div className="space-y-2">
              <div className="mt-1 px-2 grid grid-cols-2">
                <label className="block font-medium mb-1  text-[8px] md:text-xs">
                  <span className="text-blue-950 underline cursor-pointer">
                    Help (opens in a new window)
                  </span>
                  <br />
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
                  If Yes, please provide an explanation of how the PhD is in a
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
      )}

      {/* Buttons */}
      <div className="mt-4 flex justify-end gap-2">
        {step > 1 && (
          <button
            onClick={handleBack}
            className="p-1 bg-gradient-to-t from-[#10254E] to-[#496192] text-white  text-[8px] md:text-xs font-semibold"
          >
            Back
          </button>
        )}
        <button
          onClick={handleNext}
          disabled={
            (step === 1 && !route) ||
            (step === 2 && !formData.category) ||
            (step === 3 && !formData.certificate)
          }
          className="p-1 bg-gradient-to-t from-[#10254E] to-[#496192] text-white  text-[8px] md:text-xs font-semibold"
        >
          {step === 4 ? (
            <>
              <div onClick={() => generatePDF(formData)}>Download PDF</div>
            </>
          ) : (
            "Next"
          )}
        </button>
      </div>
    </div>
  );
};

export default CreateAssignClient;