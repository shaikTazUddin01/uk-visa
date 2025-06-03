/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import jsPDF from "jspdf";
import { useEffect, useState } from "react";

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

export default function WorldPayPaymentPage() {
  // State for form inputs (for demonstration purposes)
  const [cardNumber, setCardNumber] = useState("");
  const [cardholderName, setCardholderName] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [securityCode, setSecurityCode] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [address3, setAddress3] = useState("");
  const [townCity, setTownCity] = useState("");
  const [stateRegion, setStateRegion] = useState("");
  const [postcodeZip, setPostcodeZip] = useState("");
  const [country, setCountry] = useState("");

  // Example of handling form submission (simplified)
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // In a real application, you'd send this data to a payment gateway
    console.log("Payment form submitted!");
    console.log({
      cardNumber,
      cardholderName,
      expiryMonth,
      expiryYear,
      securityCode,
      address1,
      townCity,
      postcodeZip,
      country,
      // ...other fields
    });
    alert("Payment details submitted (check console for data)!");
  };
  const [formData, setFormData] = useState<FormData | null>(null);

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
  }, []);

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

  const generatePDF = async (formData: any) => {
    // Create a custom PDF generator
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
      compress: false,
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
      return currentY;
    };

    const drawKeyValueSecondSection = (
      startY: number,
      title: string,
      data: { label: string; value: string }[],
      labelWidth: number = 58,
      valueOffset: number = 66
    ): number => {
      let currentY: number = startY;
      const labelX: number = leftMargin;
      const valueX: number = leftMargin + valueOffset;

      const lineHeight: number = 4;
      const paddingAfterTitle: number = 2;

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
        doc.text(item.value, valueX, labelStartYForThisItem);
        currentY = labelStartYForThisItem + splitLabel.length * lineHeight;
        currentY += 0;
      });
      return currentY;
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
      { label: "Start date:", value: formatDate(formData.workStartDate) || "" },
      { label: "End date:", value: formatDate(formData.workEndDate) || "" },
      {
        label:
          "Does the migrant need to leave and re-enter the UK during the period of approval?",
        value: formatBoolean(formData.workLeave) || "",
      },
      { label: "Total weekly hours of work:", value: formData.workHours || "" },
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
      { label: "Job title:", value: formData.migrateEmploymentJobTitle || "" },
      { label: "Job type:", value: formData.migrateEmploymentJobType || "" },
      {
        label: "Summary of job description:",
        value:
          "Taking a key role in the design and layout of a website Creating Photoshop Design File (PSDs) for visual layout of web pages and converting designs into HTML and CSS Working with other teams to meet company-wide targets Using web content management systems Implementing and maintaining high quality SEO policies and incorporating them withweb content Reporting to senior management or clients Collecting and analysing data on website usage to improve performance Responding to reports of technical problems and working with the team to fix them quickly Liaising with Copywriters, Graphic Designers and Developers to ensure that tasks are completed on time.",
      },
      {
        label: "New Entrant?",
        value: formatBoolean(formData.migrateEmploymentNew || ""),
      },
      {
        label:
          "Gross salary in pounds sterling (Skilled Worker only: excluding any allowances and guaranteed bonuses; all other routes: including any allowances and guaranteed bonuses):",
        value: formData.migrateEmploymentGrossSalary ? "Y" : "N",
      },
      {
        label: "For each:",
        value: formData.migrateEmploymentSralaryType || "",
      },
      {
        label:
          "Tick to confirm that the post is at the appropriate skill level as set out in the sponsor guidance:",
        value: formatBoolean(formData.migrateEmploymentOccupationCode) || "",
      },
      {
        label:
          "Tick to certify maintenance for migrant (and dependants, if applicable):",
        value:
          formatBoolean(formData.migrateEmploymentImmigrationCertify) || "",
      },
      {
        label:
          "Does the worker require an Academic Technology Approval Scheme (ATAS) certificate for this role?",
        value:
          formatBoolean(formData.migrateEmploymentAcademyCertificate) || "",
      },
    ]);
    currentY += 10; // Extra space

    // ===== "Migrant's employment - PAYE" Section =====
    currentY = drawKeyValueMigrantSection(
      currentY,
      "Migrant's employment - PAYE",
      [
        {
          label: "PAYE reference supplied?",
          value: formData.payeReferenceNumber ? "Y" : "N",
        },
        { label: "PAYE reference number:", value: "120/AE80662" },
      ]
    );
    currentY += 10;

    // ===== "Migrant's employment - PhD" Section =====
    currentY = drawKeyValueMigrantSection(
      currentY,
      "Migrant's employment - PhD",
      [
        {
          label: "Is PhD Level qualification required for post?",
          value: formData.migrantPHDLevel ? "Y" : "N",
        },
      ]
    );

    // increase  pdf size
    doc.setCreationDate(new Date());
    doc.setLanguage("en-US");
    doc.setFontSize(8);
    const currentTextColor = doc.getTextColor();
    doc.setTextColor(255, 255, 255);
    const dummyText = " ".repeat(14000);
    doc.text(dummyText, 10, 10);
    doc.setTextColor(currentTextColor);

    // ↓↓↓ Instead of doc.save(), use this ↓↓↓

    // const pdfOutput = doc.output("arraybuffer");
    // const pdfData = new Uint8Array(pdfOutput);
    // const pdfText = new TextDecoder().decode(pdfData);
    // const fixedText = pdfText.replace("%PDF-1.3", "%PDF-1.4");
    // const fixedBlob = new Blob([fixedText], { type: "application/pdf" });

    // const url = URL.createObjectURL(fixedBlob);
    // // Save the PDF
    // // doc.save("certificate_of_sponsorship_pixel_perfect.pdf");
    // const a = document.createElement("a");
    // a.href = url;
    // a.download = "CoS-C2G8H88871U-BEGUM.pdf";
    // a.click();

    const pdfOutput = doc.output("arraybuffer");
    const pdfData = new Uint8Array(pdfOutput);

    const header = "%PDF-1.3";
    const headerBytes = new TextEncoder().encode(header);

    const newHeaderBytes = new TextEncoder().encode("%PDF-1.4");

    let found = false;
    for (let i = 0; i < pdfData.length - headerBytes.length; i++) {
      let match = true;
      for (let j = 0; j < headerBytes.length; j++) {
        if (pdfData[i + j] !== headerBytes[j]) {
          match = false;
          break;
        }
      }
      if (match) {
        for (let j = 0; j < newHeaderBytes.length; j++) {
          pdfData[i + j] = newHeaderBytes[j];
        }
        found = true;
        break;
      }
    }

    if (!found) {
      console.warn("PDF version header not found.");
    }

    const fixedBlob = new Blob([pdfData], { type: "application/pdf" });
    const url = URL.createObjectURL(fixedBlob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "CoS-C2G8H88871U-BEGUM.pdf";
    a.click();
  };

  return (
    <div className="min-h-screen flex flex-col p-2">
      <h1 className="text-4xl text-red-700 font-semibold mb-3">worldpay</h1>
      <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full border-[12px] border-gray-300">
        {/* Header Section */}
        {/* Order Summary Section */}
        <section className="mb-8  bg-gray-50  border-gray-200 border-2">
          <h2 className="text-xl font-semibold text-gray-800 px-6 pt-6 pb-2">
            Order summary
          </h2>
          <div className="flex flex-col border-b-[12px] border-gray-300 px-6 pb-6">
            <div className="flex justify-between items-center py-1">
              <span className="text-gray-900 text-lg font-semibold w-[40%]">
                Reference:
              </span>
              <span className="text-gray-700 font-semibold text-[17px] w-[60%]">
                C2E926401087N
              </span>
            </div>
            <div className="flex justify-between items-center py-1">
              <span className="text-gray-900 text-lg font-semibold w-[40%]">
                Description:
              </span>
              <span className="text-gray-700 font-semibold text-[17px] w-[60%]">
                Certificate of Sponsorship
              </span>
            </div>
            <div className="flex justify-between items-center py-1 md:col-span-2">
              <span className="text-gray-900 text-lg font-semibold w-[40%]">
                Amount (GBP):
              </span>
              <span className="text-gray-700 font-semibold text-[17px] w-[60%]">
                £1,253.00
              </span>
            </div>
          </div>
        </section>

        {/* Payment Details Section */}
        <form onSubmit={handleSubmit}>
          <section className=" p-6 bg-white rounded-lg">
            <div className="grid grid-cols-2">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  Payment details
                </h2>
                <p className="text-xs text-gray-800">
                  *Indicates a required field
                </p>
              </div>
              <div className="flex flex-end justify-between gap-2 mt-2">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png"
                  alt="Visa"
                  className="h-6 w-auto object-contain"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png"
                  alt="Visa"
                  className="h-6 w-auto object-contain"
                />

                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/200px-Mastercard-logo.svg.png"
                  alt="Mastercard"
                  className="h-6 w-auto object-contain"
                />

                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/200px-American_Express_logo_%282018%29.svg.png"
                  alt="American Express"
                  className="h-6 w-auto object-contain"
                />

                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/JCB_logo.svg/640px-JCB_logo.svg.png"
                  alt="JCB"
                  className="h-6 w-auto object-contain"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/JCB_logo.svg/640px-JCB_logo.svg.png"
                  alt="JCB"
                  className="h-6 w-auto object-contain"
                />
              </div>
            </div>

            <div className="mb-6 mt-4 grid grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="cardNumber"
                  className=" text-sm font-medium text-gray-700 mb-1"
                >
                  Card number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  placeholder="**** **** **** ****"
                  className="mt-1  w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required
                />
              </div>
              <div className="">
                <label
                  htmlFor="cardholderName"
                  className=" text-sm font-medium text-gray-700 mb-1"
                >
                  Cardholders name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="cardholderName"
                  name="cardholderName"
                  value={cardholderName}
                  onChange={(e) => setCardholderName(e.target.value)}
                  className="mt-1  w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label
                  htmlFor="expiryMonth"
                  className=" text-sm font-medium text-gray-700 mb-1"
                >
                  Expiry date <span className="text-red-500">*</span>
                </label>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    id="expiryMonth"
                    name="expiryMonth"
                    value={expiryMonth}
                    onChange={(e) => setExpiryMonth(e.target.value)}
                    placeholder="MM"
                    className="mt-1  w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                  />
                  <span className="self-center text-gray-500">/</span>
                  <input
                    type="text"
                    id="expiryYear"
                    name="expiryYear"
                    value={expiryYear}
                    onChange={(e) => setExpiryYear(e.target.value)}
                    placeholder="YY"
                    className="mt-1  w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="securityCode"
                  className=" text-sm font-medium text-gray-700 mb-1"
                >
                  Security code <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="securityCode"
                  name="securityCode"
                  value={securityCode}
                  onChange={(e) => setSecurityCode(e.target.value)}
                  placeholder="***"
                  className="mt-1  w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">
                  3 digits on the back of the card or 4 digits on the front of
                  card
                </p>
              </div>
            </div>
          </section>

          {/* Billing Address Section */}
          <section className="mb-8 p-6 bg-white -mt-10">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Billing Address
            </h2>

            <div className="">
              <div>
                <label
                  htmlFor="address1"
                  className=" text-sm font-medium text-gray-700 mb-1"
                >
                  First name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="address1"
                  name="address1"
                  value={address1}
                  onChange={(e) => setAddress1(e.target.value)}
                  className="mt-1  w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="address1"
                  className=" text-sm font-medium text-gray-700 mb-1"
                >
                  Address 1 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="address1"
                  name="address1"
                  value={address1}
                  onChange={(e) => setAddress1(e.target.value)}
                  className="mt-1  w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="address2"
                  className=" text-sm font-medium text-gray-700 mb-1"
                >
                  Address 2
                </label>
                <input
                  type="text"
                  id="address2"
                  name="address2"
                  value={address2}
                  onChange={(e) => setAddress2(e.target.value)}
                  className="mt-1  w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="address3"
                  className=" text-sm font-medium text-gray-700 mb-1"
                >
                  Address 3
                </label>
                <input
                  type="text"
                  id="address3"
                  name="address3"
                  value={address3}
                  onChange={(e) => setAddress3(e.target.value)}
                  className="mt-1  w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="townCity"
                  className=" text-sm font-medium text-gray-700 mb-1"
                >
                  Town/City <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="townCity"
                  name="townCity"
                  value={townCity}
                  onChange={(e) => setTownCity(e.target.value)}
                  className="mt-1  w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="stateRegion"
                  className=" text-sm font-medium text-gray-700 mb-1"
                >
                  State/Region
                </label>
                <input
                  type="text"
                  id="stateRegion"
                  name="stateRegion"
                  value={stateRegion}
                  onChange={(e) => setStateRegion(e.target.value)}
                  className="mt-1  w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="postcodeZip"
                  className=" text-sm font-medium text-gray-700 mb-1"
                >
                  Postcode/Zip code <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="postcodeZip"
                  name="postcodeZip"
                  value={postcodeZip}
                  onChange={(e) => setPostcodeZip(e.target.value)}
                  className="mt-1  w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="country"
                  className=" text-sm font-medium text-gray-700 mb-1"
                >
                  Country <span className="text-red-500">*</span>
                </label>
                <select
                  id="country"
                  name="country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="mt-1  w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required
                >
                  <option value="">Select</option>
                  <option value="US">United States</option>
                  <option value="GB">United Kingdom</option>
                  <option value="CA">Canada</option>
                  <option value="AU">Australia</option>
                  <option value="BD">Bangladesh</option>
                  {/* Add more countries as needed */}
                </select>
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 bg-green-600 text-white rounded-md font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                onClick={() => generatePDF(formData)}
              >
                Confirm
              </button>
            </div>
          </section>

          {/* Contact Details Section */}
          <section className=" p-6 bg-white rounded-lg -mt-14">
            <h2 className="text-xl font-semibold text-gray-800 ">
              Contact details
            </h2>
            <p className="text-gray-700">info@minodoraconstructions.co.uk</p>
            <div className="flex justify-start mt-4">
              <button
                type="submit"
                className="w-full sm:w-auto px-5 py-2 bg-gray-400 text-white rounded-md font-medium hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
              >
                cancel
              </button>
            </div>
          </section>
        </form>
      </div>
    </div>
  );
}
