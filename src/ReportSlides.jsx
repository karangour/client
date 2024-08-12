import React, { useState, useEffect } from "react";
import Slides from "./Slides";
import "./CSS/ReportSlides.css";

export default function ReportSlides({ userData }) {
  const [selectedCities, setSelectedCities] = useState([]);
  const [slides1Data, setSlides1Data] = useState([]);

  const citiesByCountry = {
    USA: ["New York", "Los Angeles", "Chicago"],
    Canada: ["Toronto", "Vancouver", "Montreal"],
    India: ["Mumbai", "Delhi", "Bangalore"],
    China: ["Beijing", "Shanghai", "Shenzhen"],
    France: ["Paris", "Lyon", "Marseille"],
    Germany: ["Berlin", "Munich", "Hamburg"],
    Japan: ["Tokyo", "Osaka", "Kyoto"],
    Mexico: ["Mexico City", "Guadalajara", "Monterrey"],
  };

  useEffect(() => {
    console.log('userData:', userData);
    const fetchData = () => {
      const country = userData.area;
      const cities = citiesByCountry[country] || ["Unknown"];
      console.log('selectedCities:', cities.slice(0, 3));
      setSelectedCities(cities.slice(0, 3));
    };

    fetchData();
  }, [userData.area]);

  useEffect(() => {
    if (selectedCities.length === 0) return; // Wait for selectedCities to be populated

    let newSlides1Data = [];

    switch (userData.orgType) {
      case "Retail":
        newSlides1Data = [
          {
            title: {
              percentage: "12",
              riseOrDrop: "drop",
              type: "orders",
              where: "web browsers",
              place: selectedCities[0] || "Unknown",
              time: "12:17",
            },
            particulars: [
              { supplier: "Paypal", percentage: "30" },
              { supplier: "Stripe", percentage: "3" },
            ],
            causeSummary:
              "The analysis indicates that the most pronounced decreases were in web orders involving Canadian suppliers in combination with Paypal payment method.",
          },
          {
            title: {
              percentage: "25",
              riseOrDrop: "rise",
              type: "orders",
              where: "iOS",
              place: selectedCities[1] || "Unknown",
              time: "15:03",
            },
            particulars: [
              { supplier: "Apple Pay", percentage: "28" },
              { supplier: "Omez", percentage: "15" },
            ],
            causeSummary:
              "The analysis indicates that the most pronounced increases were in web orders involving the Apple Pay payment method in combination with Omez's upgraded transport system.",
          },
          {
            title: {
              percentage: "18",
              riseOrDrop: "drop",
              type: "orders",
              where: "mobile apps",
              place: selectedCities[2] || "Unknown",
              time: "09:45",
            },
            particulars: [
              { supplier: "Google Pay", percentage: "20" },
              { supplier: "Amazon Pay", percentage: "10" },
            ],
            causeSummary:
              "The analysis indicates that the most pronounced decreases were in mobile app orders involving American suppliers in combination with Google Pay and Amazon Pay payment methods.",
          },
        ];
        break;

      case "Fintech":
        newSlides1Data = [
          {
            title: {
              percentage: "15",
              riseOrDrop: "rise",
              type: "customer acquisitions",
              where: "mobile apps",
              place: selectedCities[0] || "Unknown",
              time: "14:30",
            },
            particulars: [
              { supplier: "Robinhood", percentage: "35" },
              { supplier: "Acorns", percentage: "20" },
            ],
            causeSummary:
              "The analysis indicates that the most pronounced increases were in customer acquisitions through mobile apps, particularly via Robinhood and Acorns platforms.",
          },
          {
            title: {
              percentage: "10",
              riseOrDrop: "drop",
              type: "transactions",
              where: "web platforms",
              place: selectedCities[1] || "Unknown",
              time: "11:00",
            },
            particulars: [
              { supplier: "TransferWise", percentage: "50" },
              { supplier: "Revolut", percentage: "30" },
            ],
            causeSummary:
              "The analysis indicates that the most pronounced decreases were in transactions through web platforms, particularly involving TransferWise and Revolut.",
          },
          {
            title: {
              percentage: "20",
              riseOrDrop: "rise",
              type: "investment accounts",
              where: "iOS",
              place: selectedCities[2] || "Unknown",
              time: "08:45",
            },
            particulars: [
              { supplier: "Stash", percentage: "25" },
              { supplier: "Betterment", percentage: "15" },
            ],
            causeSummary:
              "The analysis indicates that the most pronounced increases were in investment account openings via iOS platforms, especially on Stash and Betterment.",
          },
        ];
        break;

      case "Banking":
        newSlides1Data = [
          {
            title: {
              percentage: "22",
              riseOrDrop: "rise",
              type: "total loans",
              where: "branches",
              place: selectedCities[0] || "Unknown",
              time: "10:15",
            },
            particulars: [
              { type: "Personal Loans", percentage: "45" },
              { type: "Mortgage Loans", percentage: "30" },
            ],
            causeSummary:
              "The analysis indicates that the most pronounced increases were in total loans issued through branches, particularly personal and mortgage loans.",
          },
          {
            title: {
              percentage: "8",
              riseOrDrop: "drop",
              type: "deposit accounts",
              where: "online banking",
              place: selectedCities[1] || "Unknown",
              time: "16:50",
            },
            particulars: [
              { type: "Savings Accounts", percentage: "50" },
              { type: "Checking Accounts", percentage: "25" },
            ],
            causeSummary:
              "The analysis indicates that the most pronounced decreases were in deposit accounts opened via online banking, particularly savings and checking accounts.",
          },
          {
            title: {
              percentage: "17",
              riseOrDrop: "rise",
              type: "credit card applications",
              where: "mobile apps",
              place: selectedCities[2] || "Unknown",
              time: "09:20",
            },
            particulars: [
              { type: "Rewards Cards", percentage: "60" },
              { type: "Cashback Cards", percentage: "25" },
            ],
            causeSummary:
              "The analysis indicates that the most pronounced increases were in credit card applications via mobile apps, especially for rewards and cashback cards.",
          },
        ];
        break;

      default:
        newSlides1Data = [];
        break;
    }

    console.log('slides1Data before rendering:', newSlides1Data);
    setSlides1Data(newSlides1Data);
  }, [userData.orgType, selectedCities]);

  return (
    <div className="report-slides">
      {slides1Data.length > 0
        ? slides1Data.map((report, index) => (
            <Slides key={index} report={report} />
          ))
        : <p>No data available</p>}
    </div>
  );
}
