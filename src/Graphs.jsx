import React from "react";
import graph_1 from "./assets/graph1.png";
import graph_2 from "./assets/graph2.png";
import graph_3 from "./assets/graph3.png";
import "./CSS/Graphs.css";

export default function Graphs({ userData }) {
  const { orgName, orgType, userPosition } = userData;

  // We call bicycle's backend using the userData - orgName, orgType, userPosition to retrieve the appropriate copilot along with descriptions and store it in 'graphsBackend'. In this example, we're hard-coding it.//

  const graphsBackend = {
    copilotType: "orders",
    description:
      "Bicycle’s AI is looking at drops and spikes in orders among others, so that you don’t have to constantly look at dashboards, especially when there are hundreds of products stocked at hundreds of warehouses.",

    // Since these are graphs, we will need to plot it on some sort of template format which felt beyond the scope of this POC. The numbers to plot will also be stored here, under 'graphData'. In this example, we've used the screenshots of the graphs for display purposes.//

    graphData: [
      {
        title: "Spike in Customer Acquisitio nNumber",
        spikeOrDrop: "spike",
        spikeDropValue: "127.67",
        percentageUpOrDown: "471",
        timespan: "12 hours",
        deviceType: "Android v2.2",
        userRegion: "",
        plotPoints: {
          // x and y axis data for plotting the graph
        },
      },
      {
        title: "Spike in Customer Acquisition Number",
        spikeOrDrop: "spike",
        spikeDropValue: "127.67",
        percentageUpOrDown: "471",
        timespan: "12 hours",
        deviceType: "Android v2.2",
        userRegion: "",
        plotPoints: {
          // x and y axis data for plotting the graph
        },
      },
      {
        title: "Drop in Total Order Value by UserRegion",
        spikeOrDrop: "drop",
        spikeDropValue: "136.58",
        percentageUpOrDown: "100",
        timespan: "6 hours",
        deviceType: "",
        userRegion: "Europe",
        plotPoints: {
          // x and y axis data for plotting the graph
        },
      },
      {
        title: "Drop in Number of Orders by UserRegion",
        spikeOrDrop: "drop",
        spikeDropValue: "343.85",
        percentageUpOrDown: "153",
        timespan: "6 days",
        deviceType: "",
        userRegion: "Europe",
        plotPoints: {
          // x and y axis data for plotting the graph
        },
      },
    ],
  };

  return (
    <div className="graphs-container">
      <h4 className="graphs-description">
        Bicycle has automatically recommended this copilot based on your
        organization, {orgName}, and your current position at {orgName},{" "}
        <i>{userPosition}</i>. This copilot focusses on orders, which has been
        setup with data collected from a similar organization as {orgName}.
        <br /> <br />
        {graphsBackend.description}
      </h4>

      {/* We will ideally map through the graphData array and display the graphs below. However, for this example it's just screenshots for display purposes. */}
      <div className="graph-box">
        <div className="graph-row">
          <img src={graph_1} className="graph-image" />
          <img src={graph_1} className="graph-image" />
        </div>
        <div className="graph-row">
          <img src={graph_2} className="graph-image" />
          <img src={graph_3} className="graph-image" />
        </div>
      </div>
    </div>
  );
}
