import React from "react";
import { Progress, Rate } from "antd";
import formatDate from "../../utils/formatDate";

const FeedbackItem = ({ name, rate, percentage, date, leftDays }) => {
  return (
    <div className="flex items-center gap-4 justify-between border border-[#D9D9D9] p-4 rounded-lg">
      <div className="flex items-center gap-5">
        <Progress type="dashboard" percent={percentage} size={50} />
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-sm">{name}</h1>
          <div className="text-[#737791] text-xs">{formatDate(date)}</div>
        </div>
      </div>
      <Rate disabled defaultValue={rate} />
      <div className="p-2 rounded-lg bg-[#EEE6E2]">
        <span className="text-xs">{leftDays} days left</span>
      </div>
    </div>
  );
};

export default FeedbackItem;
