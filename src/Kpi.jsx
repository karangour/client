import React from "react";
import calculator from "./assets/calculator.png";
import transaction from "./assets/doublearrow.png";
import peak_triangle from "./assets/triangle.png";
import graph from "./assets/volume.png";
import check_box from "./assets/checkbox.png";
import edit_icon from "./assets/edit.png";
import "./CSS/Kpi.css";

export default function Kpi({ userData }) {
  const { orgName, orgType, area } = userData;

  // kpiBox is just for creating the kpi slides for display purposes. It would otherwise be filled up by the backend and displayed here.//

  let kpiBox = [];

  switch (orgType) {
    case "Retail":
      kpiBox = [
        {
          mainTitle: "Real-Time Transaction Volume Monitoring",
          mainDescription: `Monitor transaction volume in real-time to identify any sudden changes or anomalies in ${area}. This helps ${orgName} to quickly respond to any issues and ensure smooth operations.`,
        },
        {
          title: "Average Transaction Value",
          description: `Calculates the average value of transactions over a specific period, offering insights into ${orgName}'s transaction size and customer spending behavior.`,
          icon: calculator,
        },
        {
          title: "Number of Transactions",
          description:
            "Tracks the total count of transactions processed, reflecting the operational workload and customer activity level.",
          icon: transaction,
        },
        {
          title: "Peak Transaction Volume",
          description:
            "Identifies the highest volume of transactions processed in a given time frame, useful for understanding peak demand periods.",
          icon: peak_triangle,
        },
        {
          title: "Total Transaction Volume",
          description:
            "Measures the increase in transaction volume over time, indicating business growth and market expansion in " +
            area +
            ".",
          icon: graph,
        },
      ];
      break;

    case "Fintech":
      kpiBox = [
        {
          mainTitle: "Customer Acquisition Monitoring",
          mainDescription: `Track the rate of new customer acquisitions in ${area} to assess the effectiveness of ${orgName}'s marketing and sales strategies.`,
        },
        {
          title: "Active Users",
          description:
            "Measures the number of active users over a specific period, providing insights into user engagement and retention in " +
            area +
            ".",
          icon: calculator,
        },
        {
          title: "Transaction Success Rate",
          description: `Calculates the percentage of successful transactions, indicating the reliability and efficiency of ${orgName}'s transaction processing system.`,
          icon: transaction,
        },
        {
          title: "Fraud Detection",
          description:
            "Monitors transaction patterns to identify and flag potentially fraudulent activities.",
          icon: peak_triangle,
        },
        {
          title: "Investment Performance",
          description: `Tracks the performance of various investment portfolios managed by ${orgName}.`,
          icon: graph,
        },
      ];
      break;

    case "Banking":
      kpiBox = [
        {
          mainTitle: "Loan Portfolio Monitoring",
          mainDescription: `Analyze the performance and risk levels of ${orgName}'s loan portfolio in ${area} to ensure financial stability and growth.`,
        },
        {
          title: "Total Loans Issued",
          description: `Tracks the total value of loans issued over a specific period in " + area + ", reflecting ${orgName}'s lending activity and growth.`,
          icon: calculator,
        },
        {
          title: "Loan Default Rate",
          description:
            "Calculates the percentage of loans that have defaulted, providing insights into the credit risk management.",
          icon: transaction,
        },
        {
          title: "Deposit Growth",
          description: `Measures the increase in customer deposits over time, indicating ${orgName}'s ability to attract and retain customers.`,
          icon: peak_triangle,
        },
        {
          title: "Net Interest Margin",
          description: `Tracks the difference between interest income generated and interest paid out to depositors, reflecting ${orgName}'s profitability.`,
          icon: graph,
        },
      ];
      break;

    default:
      kpiBox = [];
      break;
  }

  return (
    <div className="kpi-container">
      <h4 className="kpi-main-description">{kpiBox[0].mainTitle}</h4>
      <p className="kpi-main-description-p">{kpiBox[0].mainDescription}</p>
      {kpiBox.slice(1).map((kpi, index) => (
        <div className="kpi" key={index}>
          <div className="kpi-icon-box">
            <img src={kpi.icon} className="kpi-icon" alt={kpi.title} />
          </div>
          <div className="kpi-text">
            <div className="kpi-title-container">
              <div className="check-box-title-container">
                <img src={check_box} className="check-box" alt="Check box" />
                <p className="kpi-title">{kpi.title}</p>
              </div>
              <img src={edit_icon} className="edit-icon" alt="Edit icon" />
            </div>
            <p className="kpi-description">{kpi.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
