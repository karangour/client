import React from "react";
import "./CSS/Slides.css";
import bicycle_crop from "./assets/bicycle-logo-crop.png";
import down_arrow from "./assets/down-arrow.png";
import up_arrow from "./assets/up-arrow.png";

export default function Slides({ report }) {

  console.log('Inside Slides with report:', report);

  return (
    <div className="slides-container">
      <div className="slides-line-1">
        <img src={bicycle_crop} className="slides-logo" />
        <h3 className="slides-title">
          <span
            className={report.title.riseOrDrop === "drop" ? "red" : "green"}
          >
            {report.title.percentage}%
          </span>{" "}
          {report.title.riseOrDrop} in orders from{" "}
          <span
            className={report.title.riseOrDrop === "drop" ? "red" : "green"}
          >
            {report.title.where}
          </span>{" "}
          in{" "}
          <span
            className={report.title.riseOrDrop === "drop" ? "red" : "green"}
          >
            {report.title.place}
          </span>
        </h3>
        <p className="app-logo">APP</p>
        <p className="time">{report.title.time}</p>
      </div>

      <hr className="line" />

      <div className="slides-line-2 impact">
        <h4>Impact Summary</h4>
        {report.particulars.map((item, index) => {
          return (
            <div className="supplier-lines" key={index}>
              <h4>
                <span className="grey">Supplier: </span>
                {item.supplier}
              </h4>
              <div className="supply-amount">
                <img
                  src={
                    report.title.riseOrDrop === "drop" ? down_arrow : up_arrow
                  }
                  className="down-arrow"
                />
                <h4>{item.percentage}%</h4>
              </div>
            </div>
          );
        })}
      </div>

      <hr className="line" /> 

      <div className="slides-line-3 impact">
        <h4 className="cause-summary-title">Cause Summary</h4>
        <h4 className="cause-summary-body">{report.causeSummary}</h4>
      </div>
    </div>
  );
}
