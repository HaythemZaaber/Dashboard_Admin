import React from "react";
import { Progress } from "antd";

const ServicesItem = ({
  name,
  percentage,
  icon,
  backgroundColor,
  strokeColor,
}) => {
  return (
    <div className="flex items-center gap-3">
      <div className={`${backgroundColor} p-2 w-fit`}>{icon}</div>
      <div className="w-full flex flex-col gap-1">
        <Progress percent={percentage} strokeColor={strokeColor} />
        <div className="text-[#AEAEAE] font-medium text-[1rem]">{name}</div>
      </div>
    </div>
  );
};

export default ServicesItem;
