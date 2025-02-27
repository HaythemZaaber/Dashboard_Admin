import React from "react";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";

import { TiVideo } from "react-icons/ti";
import { GoAlert } from "react-icons/go";
import { MdOutlineFamilyRestroom } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import ServicesItem from "./ServicesItem";

const services = [
  {
    name: "Office Control",
    percentage: 50,
    icon: <HiMiniBuildingOffice2 size={30} className=" text-[#ffb780]" />,
    backgroundColor: "bg-[#FFEADA]",
    strokeColor: "#FFC107",
  },
  {
    name: "Video Recorder",
    percentage: 21,
    icon: <TiVideo size={30} className=" text-[#73b684]" />,
    backgroundColor: "bg-[#DDF9E4]",
    strokeColor: "#FFC107",
  },
  {
    name: "Quick Alert",
    percentage: 74,
    icon: <GoAlert size={30} className=" " />,
    backgroundColor: "bg-[#E4F0FF]",
  },
  {
    name: "Parental Control",
    percentage: 74,
    icon: <MdOutlineFamilyRestroom size={30} className=" text-[#ffb780]" />,
    backgroundColor: "bg-[#E4F0FF]",
    strokeColor: "#FFC107",
  },
  {
    name: "Home Control",
    percentage: 60,
    icon: <FaHome size={30} />,
    backgroundColor: "bg-[#E4F0FF]",
  },
];

const Services = () => {
  return (
    <div className=" p-5  flex-grow flex-1">
      <h1 className="text-base font-bold">Services</h1>
      <div className="flex flex-col gap-5 mt-5">
        {services.map((item, index) => (
          <ServicesItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Services;
