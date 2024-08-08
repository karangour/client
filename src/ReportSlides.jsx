import React from "react";
import Slides from "./Slides";
import './CSS/ReportSlides.css'

export default function ReportSlides({ userData }) {
  // slides1Data will be filled by an API call to bicycle's backend using userData (orgName, orgType, userPosition) to understand the type of organization the user works for and the user's poition within it. Based on this info, the appropriate reports of similar organizations will be fetched (in this case, it's retail-based) and all the necessary fields of slide1Data will be filled up for displaying via ReportSlide. slides1Data here is hard-coded for display purposes only.//

  const slides1Data = [
    {
      title: {
        percentage: "12",
        riseOrDrop: "drop",
        type: "orders",
        where: "web browsers",
        place: "Canada",
        time: "12:17",
      },
      particulars: [
        { supplier: "Paypal", percentage: "30" },
        { supplier: "Stripe", percentage: "3" },
      ],
      
      // causeSummary is a sentence that can be created by ChatGPT in the backend using title and particulars as its variables.//
      
      causeSummary: "The analysis indicates that the most pronounced decreases were in web orders involving Canadian suppliers in combination with Paypal payment method."
    },
    {
      title: {
        percentage: "25",
        riseOrDrop: "rise",
        type: "orders",
        where: "iOS",
        place: "Canada",
        time: "15:03",
      },
      particulars: [
        { supplier: "Apple Pay", percentage: "28" },
        { supplier: "Omez", percentage: "15" },
      ],
      causeSummary: "The analysis indicates that the most pronounced increases were in web orders involving the Apple Pay payment method in combination with Omez's upgraded transport system."
    },
    {
    title: {
      percentage: "18",
      riseOrDrop: "drop",
      type: "orders",
      where: "mobile apps",
      place: "USA",
      time: "09:45",
    },
    particulars: [
      { supplier: "Google Pay", percentage: "20" },
      { supplier: "Amazon Pay", percentage: "10" },
    ],
    causeSummary: "The analysis indicates that the most pronounced decreases were in mobile app orders involving American suppliers in combination with Google Pay and Amazon Pay payment methods."
  }
  ];

  return (
    <div className="report-slides">
      {slides1Data.length > 0
        ? slides1Data.map((report, index) => (
            <Slides key={index} report={report} />
          ))
        : null}
    </div>
  );
}
