import React, { useEffect } from "react";
import SidebarItem from "./SidebarItem";
import { Layout } from "antd";
import { useNavigate } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { TbPointFilled } from "react-icons/tb";
import { RiSettings3Fill } from "react-icons/ri";
import { MdLogout } from "react-icons/md";

const { Sider } = Layout;

const SideBar = ({
  collapsed,
  setCollapsed,
  isSmallScreen,
  isMediumScreen,
  sidebarItems,
}) => {
  const navigate = useNavigate();

  const onClick = () => {
    clearTokens();
    navigate("/login");
  };

  return (
    <Sider
      className="  text-[#737791] overflow-auto h-[100vh] z-50 fixed left-0 top-20 sm:top-0 bottom-0  rounded-tr-3xl rounded-br-3xl  "
      collapsible
      collapsed={collapsed}
      trigger={null}
      width={300} // Set expanded width to 240px
      collapsedWidth={isSmallScreen ? 0 : 60}
    >
      <div className="flex flex-col h-full">
        <div className={`flex  justify-center bg-primary p-3 flex-col `}>
          <div className="flex justify-start items-center">
            <div className="text-white font-semibold text-xs flex items-center  ">
              <TbPointFilled size={20} className="text-green-400" />
              Active
            </div>
            {/* <p className="text-white text-xs">
            {collapsed ? "" : "Administrator"}
          </p> */}
          </div>
          <div className="flex flex-col justify-center items-center py-5 gap-3">
            <FaRegUserCircle size={70} className="text-secondary  " />
            <div className="text-white font-semibold text-sm ">Admin</div>
            <div className="text-white opacity-40">admin007@gmail.com</div>
          </div>
        </div>
        <div className=" my-auto flex-grow flex flex-col justify-around py-5 ">
          {sidebarItems?.map((item) => (
            <SidebarItem
              key={item.key}
              link={item.link}
              text={item.text}
              Icon={item.Icon}
              collapsed={collapsed}
              RiSettings3Fill
            />
          ))}
        </div>
        <div className=" h-[22%] border-t border-t-gray-50 flex flex-col justify-around py-5">
          <SidebarItem
            link="settings"
            text="Settings"
            Icon={RiSettings3Fill}
            collapsed={collapsed}
          />
          <div className="flex items-center justify-center bg-primary opacity-50 w-fit mx-auto p-3 text-white rounded-lg">
            <button className="flex gap-2 items-center font-semibold cursor-pointer">
              LogOut
              <MdLogout
                // onClick={onClick}
                className="w-4 h-4 group-hover:text-primary "
              />
            </button>
          </div>
        </div>
      </div>
    </Sider>
  );
};

export default SideBar;
