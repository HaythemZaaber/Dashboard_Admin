import React from "react";
import { Progress, Rate } from "antd";
import FeedbackItem from "./FeedbackItem";

const feedback = [
  {
    name: "John Doe",
    date: new Date(),
    rate: 4,
    percentage: 80,
    leftDays: 2,
  },
  {
    name: "Will Smith",
    date: new Date(),
    rate: 4,
    percentage: 80,
    leftDays: 2,
  },
  {
    name: "Jhonson",
    date: new Date(),
    rate: 4,
    percentage: 80,
    leftDays: 2,
  },
];

const Feedback = () => {
  return (
    <div className="bg-white rounded-xl p-5 flex-1 shadow-sm flex-grow">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-base mb-0">FeedBack</h1>
        <span className=" text-primary cursor-pointer hover:underline font-semibold">
          View All
        </span>
      </div>
      <div className=" mt-5 flex flex-col gap-3">
        {feedback.map((item, index) => (
          <FeedbackItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Feedback;
