import React from "react";
import calculator from "./assets/calculator.png";
import transaction from "./assets/doublearrow.png";
import peak_triangle from "./assets/triangle.png";
import graph from "./assets/volume.png";
import check_box from "./assets/checkbox.png";
import edit_icon from "./assets/edit.png";
import "./CSS/Kpi.css";

export default function Kpi({ userData }) {
  const { orgName, orgType, userPosition } = userData;

  // kpiBox is just for creating the kpi slides for display purposes. It would otherwise be filled up by the backend and displayed here.//

  const kpiBox = [
    {
      mainTitle: "Real-Time Transaction Volume Monitoring",
      mainDescription: `Monitor transaction volume in real-time to identify any sudden changes or anomalies. This helps ${orgName} to quickly respond to any issues and ensure smooth operations.`,
    },
    {
      title: "Average Transaction Value",
      description:
        "Calculates the average value of transactions over a specific period, offering insights into the transaction size and customer spending behavior.",
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
        "Measures the increase in transaction volume over time, indicating business growth and market expansion.",
      icon: graph,
    },
  ];

  return (
    <div className="kpi-container">
      <h4 className="kpi-main-description">{kpiBox[0].mainTitle}</h4>
      <p className="kpi-main-description-p">{kpiBox[0].mainDescription}</p>
      {kpiBox.slice(1).map((kpi, index) => {
        return (
          <div className="kpi">
            <div className="kpi-icon-box">
              <img src={kpi.icon} className="kpi-icon" />
            </div>
            <div className="kpi-text" key={index}>
              <div className="kpi-title-container" key={index}>
                <div className="check-box-title-container">
                  <img src={check_box} className="check-box" />
                  <p className="kpi-title">{kpi.title}</p>
                </div>
                <img src={edit_icon} className="edit-icon" />
              </div>
              <p className="kpi-description">{kpi.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
