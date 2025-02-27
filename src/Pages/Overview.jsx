import React from "react";
import StatsOverview from "../Components/Overview/StatsOverview";
import Feedback from "../Components/Overview/Feedback";
import Services from "../Components/Overview/Services";
import SummaryReport from "../Components/Overview/SummaryReport";

const Overview = () => {
  return (
    <div className="flex flex-col gap-5">
      <StatsOverview />
      <div className="flex gap-3 items-stretch flex-col xl:flex-row ">
        <Feedback />
        <Services />
      </div>
      <SummaryReport />
    </div>
  );
};

export default Overview;
