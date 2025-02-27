import React from "react";
import { FaUsers } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaUserTie } from "react-icons/fa6";
import { MdHomeRepairService } from "react-icons/md";
import StatsItem from "./StatsItem";

const Stats = [
  {
    title: "Users",
    value: "400",
    updated: "Updated hour ago",
    style: "text-white bg-primary",
    icon: <FaUsers size={30} className="text-primary" />,
  },
  {
    title: "Customer Service",
    value: "24",
    updated: "Updated hour ago",
    style: "text-black bg-third",
    icon: <RiCustomerService2Fill size={30} className="text-primary" />,
  },
  {
    title: "Agents",
    value: "120",
    updated: "Updated hour ago",
    style: "text-white bg-primary",
    icon: <FaUserTie size={30} className="text-primary" />,
  },
  {
    title: "Services",
    value: "50",
    updated: "Updated hour ago",
    style: "text-white bg-secondary",
    icon: <MdHomeRepairService size={30} className="text-primary" />,
  },
];

const StatsOverview = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
      {Stats.map((stat) => (
        <StatsItem key={stat.title} {...stat} />
      ))}
    </div>
  );
};

export default StatsOverview;
