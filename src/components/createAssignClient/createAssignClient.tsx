/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useMemo, useState } from "react";
import countryList from "react-select-country-list";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import Link from "next/link";
import logo from "../../assets/logo.png";

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

  const loadImage = (): Promise<string> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.drawImage(img, 0, 0);
          resolve(canvas.toDataURL("image/png"));
        } else {
          reject(new Error("Could not create canvas context"));
        }
      };
      img.onerror = (error) => {
        console.error("Error loading image:", error);
        reject(error);
      };
      // Ensure this path is correct relative to where your HTML/JS is served
      // For development, place 'logo.png' in your 'public' folder or equivalent.
      img.src = "/logo.png";
    });
  };

  const generatePDF = async (formData: Record<string, any>) => {
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    // Helper functions
    const formatDate = (dateString: string): string => {
      if (!dateString) return "";
      try {
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return "";
        return date.toLocaleDateString("en-GB", {
          day: "numeric",
          month: "long",
          year: "numeric",
        });
      } catch (e) {
        return "";
      }
    };

    const formatBoolean = (value: boolean): string => (value ? "Y" : "N");
    // Set default font to Helvetica
    doc.setFont("helvetica");

    const pageWidth = doc.internal.pageSize.getWidth();
    const leftMargin = 15; // Consistent left margin for content
    const rightMargin = 15; // Consistent right margin for content
    const contentWidth = pageWidth - leftMargin - rightMargin; // Width available for text

    // Helper function for key-value pairs to reduce repetition and ensure alignment
    // This helper specifically formats based on the reference PDF's standard key-value layout.
    const drawKeyValueSection = (
      startY: number,
      title: string,
      data: { label: string; value: string }[],
      labelOffset: number = 5,
      valueOffset: number = 65
    ) => {
      let currentY = startY;
      const labelX = leftMargin + labelOffset;
      const valueX = leftMargin + valueOffset; // Adjusted for precise alignment
      const lineHeight = 5; // Standard line height for individual items

      doc.setFont("helvetica", "bold");
      doc.setFontSize(8); // Section title font size
      doc.text(title, leftMargin, currentY);
      currentY += lineHeight + 2; // Space after title

      doc.setFont("helvetica", "normal");
      doc.setFontSize(8); // Data field font size

      data.forEach((item) => {
        doc.text(item.label, labelX, currentY);
        doc.text(item.value, valueX, currentY);
        currentY += lineHeight;
      });
      return currentY; // Return the current Y position for the next section
    };

    const drawKeyValueSecondSection = (
      startY: number,
      title: string,
      data: { label: string; value: string }[],
      labelWidth: number = 58, // লেবেল কলামের জন্য নির্দিষ্ট প্রস্থ
      valueOffset: number = 66 // ভ্যালুর জন্য X-কোঅর্ডিনেট, leftMargin এর সাপেক্ষে
    ): number => {
      let currentY: number = startY;
      const labelX: number = leftMargin; // লেবেল leftMargin থেকে শুরু হয়
      const valueX: number = leftMargin + valueOffset; // ভ্যালু লেবেল কলামের পরে শুরু হয়

      const lineHeight: number = 4; // প্রতিটি আইটেমের জন্য স্ট্যান্ডার্ড লাইন উচ্চতা
      const paddingAfterTitle: number = 2; // টাইটেলের পরে স্থান

      doc.setFont("helvetica", "bold");
      doc.setFontSize(8); // সেকশন টাইটেলের ফন্ট সাইজ
      doc.text(title, leftMargin, currentY);
      currentY += lineHeight + paddingAfterTitle; // টাইটেলের পরে স্থান

      doc.setFont("helvetica", "normal");
      doc.setFontSize(8); // ডেটা ফিল্ডের ফন্ট সাইজ

      data.forEach((item: { label: string; value: string }) => {
        // লেবেল টেক্সটকে labelWidth এর বেশি হলে বিভক্ত করুন
        const splitLabel: string[] = doc.splitTextToSize(
          item.label,
          labelWidth
        );

        // লেবেলের প্রথম লাইনের Y পজিশন সংরক্ষণ করুন
        const labelStartYForThisItem = currentY;

        // বিভক্ত লেবেলের প্রতিটি লাইন আঁকুন
        splitLabel.forEach((line: string, index: number) => {
          doc.text(line, labelX, labelStartYForThisItem + index * lineHeight); // প্রতিটি লাইন আঁকার জন্য সঠিক Y পজিশন
        });

        // ভ্যালু আঁকুন। ভ্যালু লেবেলের প্রথম লাইনের Y পজিশনে শুরু হবে।
        doc.text(item.value, valueX, labelStartYForThisItem);

        // পরবর্তী কী-ভ্যালু পেয়ারের জন্য currentY আপডেট করুন
        // লেবেলের শেষ লাইনের পরে পরবর্তী এন্ট্রি শুরু হবে
        currentY = labelStartYForThisItem + splitLabel.length * lineHeight;
        currentY += 0; // প্রতিটি এন্ট্রির মধ্যে অতিরিক্ত স্থান (যদি প্রয়োজন হয়)
      });
      return currentY; // পরবর্তী সেকশনের জন্য বর্তমান Y পজিশন ফেরত দিন
    };
    const drawKeyValueMigrantSection = (
      startY: number,
      title: string,
      data: { label: string; value: string }[],
      labelWidth: number = 90,
      valueOffset: number = 92
    ): number => {
      let currentY: number = startY;
      const labelX: number = leftMargin;
      const valueX: number = leftMargin + valueOffset;

      const lineHeight: number = 4;
      const paddingAfterTitle: number = 2;
      const spacingBetweenItems: number = 2;

      doc.setFont("helvetica", "bold");
      doc.setFontSize(8);
      doc.text(title, leftMargin, currentY);
      currentY += lineHeight + paddingAfterTitle;

      doc.setFont("helvetica", "normal");
      doc.setFontSize(8);

      data.forEach((item: { label: string; value: string }) => {
        const splitLabel: string[] = doc.splitTextToSize(
          item.label,
          labelWidth
        );
        const labelStartYForThisItem = currentY;

        splitLabel.forEach((line: string, index: number) => {
          doc.text(line, labelX, labelStartYForThisItem + index * lineHeight);
        });

        const remainingWidthForValue =
          doc.internal.pageSize.getWidth() - valueX - leftMargin;

        if (item.label === "Summary of job description:") {
          const justifiedLines: string[] = [];
          const words = item.value.split(" ");
          let currentLineWords: string[] = [];
          let currentLineText = "";

          for (let i = 0; i < words.length; i++) {
            const word = words[i];
            const testLine =
              currentLineWords.length > 0 ? currentLineText + " " + word : word;

            if (doc.getTextWidth(testLine) <= remainingWidthForValue) {
              currentLineText = testLine;
              currentLineWords.push(word);
            } else {
              if (currentLineWords.length > 1) {
                const totalWordsWidth = doc.getTextWidth(
                  currentLineWords.join("")
                );
                const remainingSpace = remainingWidthForValue - totalWordsWidth;
                const numGaps = currentLineWords.length - 1;
                const spaceToAddPerGap =
                  numGaps > 0 ? remainingSpace / numGaps : 0;

                let justifiedLine = "";
                for (let j = 0; j < currentLineWords.length; j++) {
                  justifiedLine += currentLineWords[j];
                  if (j < numGaps) {
                    justifiedLine += " ".repeat(
                      Math.floor(doc.getTextWidth(" ") + spaceToAddPerGap)
                    );
                  }
                }
                justifiedLines.push(justifiedLine);
              } else {
                justifiedLines.push(currentLineWords[0]);
              }

              currentLineWords = [word];
              currentLineText = word;
            }
          }
          if (currentLineWords.length > 0) {
            justifiedLines.push(currentLineWords.join(" "));
          }

          justifiedLines.forEach((line: string, index: number) => {
            doc.text(line, valueX, labelStartYForThisItem + index * lineHeight);
          });
        } else {
          const splitValue: string[] = doc.splitTextToSize(
            item.value,
            remainingWidthForValue
          );
          splitValue.forEach((line: string, index: number) => {
            doc.text(line, valueX, labelStartYForThisItem + index * lineHeight);
          });
        }

        const labelTotalHeight = splitLabel.length * lineHeight;

        let valueTotalHeight = 0;
        if (item.label === "Summary of job description:") {
          const lines = doc.splitTextToSize(item.value, remainingWidthForValue);
          valueTotalHeight = lines.length * lineHeight;
        } else {
          const splitValue: string[] = doc.splitTextToSize(
            item.value,
            remainingWidthForValue
          );
          valueTotalHeight = splitValue.length * lineHeight;
        }

        currentY =
          labelStartYForThisItem +
          Math.max(labelTotalHeight, valueTotalHeight) +
          spacingBetweenItems;
      });
      return currentY;
    };

    // --- Page 1 ---

    // ===== UKVI Logo and Header =====
    const ukviTopMargin = 10;
    const ukviBlueLineHeight = 25; // Adjusted to be longer based on screenshot
    const ukviBlueLineX = leftMargin;
    const ukviBlueLineYStart = ukviTopMargin; // Start slightly above text
    const ukviBlueLineYEnd = ukviTopMargin + ukviBlueLineHeight - 5;

    doc.setDrawColor(128, 0, 128); // Deeper blue for the line based on visual
    doc.setLineWidth(0.45); // Slightly thicker line
    doc.line(
      ukviBlueLineX,
      ukviBlueLineYStart,
      ukviBlueLineX,
      ukviBlueLineYEnd
    );

    try {
      const logoWidth = 7; // Fine-tune this based on visual
      const logoHeight = 8.7; // Fine-tune this based on visual
      const logoX = ukviBlueLineX + 1.4; // Slightly right of the line
      const logoY = ukviTopMargin; // Top align with header text

      const imgData = await loadImage();
      doc.addImage(imgData, "PNG", logoX, logoY, logoWidth, logoHeight);
      const paddingBelowLogo = 5;
      // Header text positioning
      doc.setFont("helvetica");
      doc.setFontSize(15.5); // Adjust font size for "UK Visas"
      doc.text(
        "UK Visas",
        ukviBlueLineX + 2.2,
        ukviTopMargin + logoHeight + paddingBelowLogo
      ); // Adjusted Y for spacing
      doc.setFontSize(15.5); // Adjust font size for "& Immigration"
      doc.text(
        "& Immigration",
        ukviBlueLineX + 2.2,
        ukviTopMargin + logoHeight + 11
      ); // Adjusted Y for spacing
    } catch (error) {
      console.error("Error loading logo:", error);
      // Fallback header without logo
      doc.setFont("helvetica", "bold");
      doc.setFontSize(12);
      doc.text("UK Visas", leftMargin, ukviTopMargin + 2);
      doc.setFontSize(8);
      doc.text("& Immigration", leftMargin, ukviTopMargin + 7);
    }

    // ===== "Certificate of Sponsorship Details" Section =====
    const certText = "Certificate of Sponsorship Details";
    const certTextFontSize = 12;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(certTextFontSize);

    // Border dimensions
    const certBorderPaddingX = 2; // Padding left/right of text
    const certBorderPaddingY = 1; // Padding top/bottom of text

    const certBorderLeft = leftMargin;
    const certBorderRight = pageWidth - rightMargin;
    const certBorderTop = 35; // Visually adjusted based on image

    const certTextX = leftMargin + certBorderPaddingX; // Text starts slightly in from border
    // Adjusted to align baseline visually. Adjust 0.75 multiplier for font rendering differences.
    const certTextY =
      certBorderTop + certBorderPaddingY + certTextFontSize * 0.45;
    const certBorderBottom = certTextY + 3; // Calculated bottom of the box
    doc.text(certText, certTextX, certTextY);

    // Draw the exact borders shown in screenshot
    doc.setLineWidth(0.3);

    // Left and Right borders (darker gray)
    doc.setDrawColor(120, 120, 120); // Darker gray
    doc.line(certBorderLeft, certBorderTop, certBorderLeft, certBorderBottom);
    doc.line(certBorderRight, certBorderTop, certBorderRight, certBorderBottom);

    // Top and Bottom borders (lighter gray)
    doc.setDrawColor(200, 200, 200); // Lighter gray
    doc.line(certBorderLeft, certBorderTop, certBorderRight, certBorderTop);
    doc.line(
      certBorderLeft,
      certBorderBottom,
      certBorderRight,
      certBorderBottom
    );

    let currentY = certBorderBottom + 12; // Start Y after the "Certificate of Sponsorship Details" box with a 3mm gap.

    // ===== "Tier and Category" Section Heading and Data =====
    // This is the section heading "Tier and Category" (bold)
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.text("Tier and Category", leftMargin, currentY);
    currentY += 7; // Space after this heading

    // Now for the actual label and value "Tier and Category: Skilled Worker (New hires defined)"
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    const tierAndCategoryLabelY = currentY; // Y for the label "Tier and Category:"
    doc.text("Tier and Category:", leftMargin + 5, tierAndCategoryLabelY);

    // Only print the *value* part of the "Tier and Category" entry
    // Adjusted Y and X to prevent overlap shown in Screenshot_9.png
    doc.setFontSize(8);
    doc.text(
      "Skilled Worker (New hires defined)",
      leftMargin + 65,
      tierAndCategoryLabelY + 0.5
    );
    currentY += 10; // Adequate space for the next section title

    // ===== "Certificate of sponsorship status" Section =====
    currentY = drawKeyValueSection(
      currentY,
      "Certificate of sponsorship status",
      [
        { label: "Sponsor licence number:", value: "T83VF9QR4" },
        { label: "Sponsor name:", value: "DIAL ONE SERVICES LTD" },
        { label: "Certificate number:", value: "C2G8H88871U" },
        { label: "Current certificate status:", value: "ASSIGNED" },
        { label: "Current certificate status date:", value: "15 April 2025" },
        { label: "Date assigned:", value: "15 April 2025" },
        { label: "Expiry date (use by):", value: "16 July 2025" },
        { label: "Sponsorship withdrawn:", value: "N" },
        { label: "Sponsor note:", value: "" },
        { label: "Migrant application status:", value: "" },
      ]
    );
    currentY += 4; // Add extra space before next section

    // ===== "Personal information" Section =====
    currentY = drawKeyValueSection(currentY, "Personal information", [
      {
        label: "Family name:",
        value: formData.familyName ? formData?.familyName : "",
      },
      {
        label: "Given name(s):",
        value: formData.givenName ? formData.givenName : "",
      },
      { label: "Other names:", value: formData.otherNames || "" },
      { label: "Nationality:", value: formData.nationality || "" },
      { label: "Place of birth:", value: formData.placeOfBirth || "" },
      { label: "Country of birth:", value: formData.countryOfBirth || "" },
      {
        label: "Date of birth:",
        value: formatDate(formData.dateOfBirth) || "",
      },
      { label: "Gender:", value: formData.sex || "" },
      {
        label: "Country of residence:",
        value: formData.countryOfResidence || "",
      },
    ]);
    currentY += 4;

    // ===== "Passport or travel document" Section =====
    currentY = drawKeyValueSection(currentY, "Passport or travel document", [
      { label: "Passport number:", value: formData.passportNumber },
      { label: "Issue date:", value: formatDate(formData.passportIssueDate) },
      { label: "Expiry date:", value: formatDate(formData.passportExpiryDate) },
      { label: "Place of issue of passport:", value: formData.placeOfissue },
    ]);
    currentY += 4;
    // ===== "Current home address" Section =====
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.text("Current home address", leftMargin, currentY);
    currentY += 7; // Space after title

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);

    const labelX = leftMargin + 5;
    const valueX = leftMargin + 65; // Adjust this to your layout

    // Address lines
    doc.text("Address:", labelX, currentY);
    doc.text(formData.currentAddress || "", valueX, currentY);
    currentY += 4;
    doc.text("", labelX, currentY); // blank left label to keep alignment
    doc.text(formData.currentDistrict || "", valueX, currentY);
    currentY += 4;
    doc.text("", labelX, currentY);
    doc.text(formData.currentCity || "", valueX, currentY);
    currentY += 4;

    // City / Postcode etc.
    doc.text("City or town:", labelX, currentY);
    doc.text(formData.currentCity || "", valueX, currentY);
    currentY += 4;
    doc.text("County, area district or province:", labelX, currentY);
    doc.text(formData.currentDistrict || "", valueX, currentY);
    currentY += 4;
    doc.text("Postcode:", labelX, currentY);
    doc.text(formData.currentPostCode || "", valueX, currentY);
    currentY += 4;
    doc.text("Country:", labelX, currentY);
    doc.text(formData.currentCountry || "", valueX, currentY);
    currentY += 10; // Extra space after section

    // ===== "Identification numbers" Section =====
    currentY = drawKeyValueSection(currentY, "Identification numbers", [
      { label: "UK ID card number:", value: formData.ukIdCardNumber || "" },
      {
        label: "UK National Insurance number:",
        value: formData.ukNationalInsuranceNumber || "",
      },
      {
        label: "National ID card number:",
        value: formData.nationalIdNumber || "",
      },
      { label: "Employee number:", value: formData.employeeNumber || "" },
    ]);

    // --- Page 2 ---
    doc.addPage();
    currentY = 20; // Reset Y for new page

    // ===== "Work dates" Section =====
    currentY = drawKeyValueSecondSection(currentY, "Work dates", [
      { label: "Start date:", value: "01 May 2025" },
      { label: "End date:", value: "30 April 2026" },
      {
        label:
          "Does the migrant need to leave and re-enter the UK during the period of approval?",
        value: "N",
      },
      { label: "Total weekly hours of work:", value: "37.50" },
    ]);
    currentY += 10;

    // ===== "Main work address in the United Kingdom (mandatory for assignment):" Section =====
    currentY = drawKeyValueSecondSection(
      currentY,
      "Main work address in the United Kingdom (mandatory for assignment):",
      [
        { label: "Address:", value: "277A, DAMINI MALL" },
        { label: "", value: "GREEN STREET" },
        { label: "", value: "" },
        { label: "City or town:", value: "LONDON" },
        { label: "County, area district or province:", value: "" },
        { label: "Postcode:", value: "E7 8LJ" },
      ],
      58, // labelWidth
      66 // valueOffset
    );
    currentY += 10;

    // ===== "Other regular work addresses in the United Kingdom:" Section =====
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.text(
      "Other regular work addresses in the United Kingdom:",
      leftMargin,
      currentY
    );
    currentY += 15; // Space for the empty section

    // ===== "Migrant's employment" Section =====
    currentY = drawKeyValueMigrantSection(currentY, "Migrant's employment", [
      { label: "Job title:", value: "Web Designer" },
      { label: "Job type:", value: "2141 Web design professionals" },
      {
        label: "Summary of job description:",
        value: `Taking a key role in the design and layout of a website Creating Photoshop Design File (PSDs) for visual layout of web pages and converting designs into HTML and CSS Working with other teams to meet company-wide targets Using web content management systems Implementing and maintaining high quality SEO policies and incorporating them with web content Reporting to senior management or clients Collecting and analysing data on website usage to improve performance Responding to reports of technical problems and working with the team to fix them quickly Liaising with Copywriters, Graphic Designers and Developers to ensure that tasks are completed on time.`,
      },
      { label: "New Entrant?", value: "N" },
      {
        label:
          "Gross salary in pounds sterling (Skilled Worker only: excluding any allowances and guaranteed bonuses; all other routes: including any allowances and guaranteed bonuses):",
        value: "21.18",
      },
      { label: "For each:", value: "Hour" },
      {
        label:
          "Tick to confirm that the post is at the appropriate skill level as set out in the sponsor guidance:",
        value: "Y",
      },
      {
        label:
          "Tick to certify maintenance for migrant (and dependants, if applicable):",
        value: "Y",
      },
      {
        label:
          "Does the worker require an Academic Technology Approval Scheme (ATAS) certificate for this role?",
        value: "N",
      },
    ]);
    currentY += 10; // Extra space

    // ===== "Migrant's employment - PAYE" Section =====
    currentY = drawKeyValueMigrantSection(
      currentY,
      "Migrant's employment - PAYE",
      [
        { label: "PAYE reference supplied?", value: "Y" },
        { label: "PAYE reference number:", value: "120/AE80662" },
      ]
    );
    currentY += 10;

    // ===== "Migrant's employment - PhD" Section =====
    currentY = drawKeyValueMigrantSection(
      currentY,
      "Migrant's employment - PhD",
      [{ label: "Is PhD Level qualification required for post?", value: "N" }]
    );

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

              <div className="mt-1 px-2 grid grid-cols-2">
                <label className="block font-medium mb-1  text-[8px] md:text-xs">
                  Counatry of birth: <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.countryOfBirth || ""}
                  onChange={(e) =>
                    handleInputChange("countryOfBirth", e.target.value)
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
                    <option key={i} value={item.label}>
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
