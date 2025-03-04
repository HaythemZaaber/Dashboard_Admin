import React, { useEffect } from "react";
import SidebarItem from "./SidebarItem";
import { Layout } from "antd";
import { useNavigate } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { TbPointFilled } from "react-icons/tb";
import { RiSettings3Fill } from "react-icons/ri";
import { MdLogout } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { RiMenuFoldFill, RiMenuUnfoldFill } from "react-icons/ri";

const { Sider } = Layout;

const SideBar = ({
  collapsed,
  setCollapsed,
  isSmallScreen,
  isMediumScreen,
  sidebarItems,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  const onClick = () => {
    navigate("/login");
  };

  const onToggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Sider
      className=" text-[#737791]   h-[100vh] z-50 fixed left-0 top-20 sm:top-0 bottom-0  rounded-tr-3xl rounded-br-3xl bg-secondary "
      collapsible
      collapsed={collapsed}
      trigger={null}
      width={300} // Set expanded width to 240px
      collapsedWidth={isSmallScreen ? 0 : 60}
    >
      <div className="flex flex-col min-h-[100vh] bg-secondary">
        <div className={`flex  justify-center bg-primary p-2 flex-col `}>
          <div
            className={`flex justify-between  items-center  ${
              collapsed ? "flex-col-reverse" : "flex-row"
            } `}
          >
            {!collapsed && (
              <div className="text-white font-semibold text-xs flex items-center  ">
                <TbPointFilled size={20} className="text-green-400" />
                Active
              </div>
            )}
            <div
              className={`p-4 flex justify-end  ${
                collapsed ? "text-center" : "ml-auto"
              } `}
            >
              <button
                onClick={onToggleCollapse}
                className="text-white bg-secondary p-2 rounded-xl transition cursor-pointer"
              >
                {collapsed ? (
                  <RiMenuUnfoldFill size={20} />
                ) : (
                  <RiMenuFoldFill size={20} />
                )}
              </button>
            </div>
            {/* <p className="text-white text-xs">
            {collapsed ? "" : "Administrator"}
          </p> */}
          </div>
          <div className="flex flex-col justify-center items-center py-3 gap-3">
            <div className=" relative">
              {collapsed && (
                <TbPointFilled
                  size={25}
                  className="text-green-400 absolute -top-2 -right-1"
                />
              )}

              <FaRegUserCircle
                size={collapsed ? 40 : 70}
                className="text-secondary  "
              />
            </div>
            <div
              className={`text-white font-semibold ${
                collapsed ? "text-xs" : "text-sm"
              } `}
            >
              Admin
            </div>
            {!collapsed && (
              <div className="text-white opacity-40">admin007@gmail.com</div>
            )}
          </div>
        </div>
        <div className="my-auto flex-grow flex flex-col justify-around py-5">
          {sidebarItems?.map((item, index) => {
            const isFirst = index === 0;
            const isLast = index === sidebarItems.length - 1;
            return (
              <SidebarItem
                key={item.key}
                link={item.link}
                text={item.text}
                Icon={item.Icon}
                collapsed={collapsed}
                className={`${isFirst ? "rounded-tr-full" : ""} ${
                  isLast ? "rounded-br-full" : ""
                }`}
              />
            );
          })}
        </div>

        <div className=" h-[22%] border-t border-t-gray-50 flex flex-col justify-around py-5 gap-2">
          <SidebarItem
            link="settings"
            text="Settings"
            Icon={RiSettings3Fill}
            collapsed={collapsed}
          />
          <div
            onClick={onClick}
            className={`flex items-center justify-center bg-primary/50 w-fit mx-auto p-3  rounded-lg cursor-pointer ${
              collapsed ? "text-red-500" : "text-red-400"
            }`}
          >
            <button
              className={` flex gap-2 items-center font-semibold  cursor-pointer ${
                collapsed ? "text-red-500" : ""
              }`}
            >
              {collapsed ? "" : "Log Out"}
              <MdLogout className="w-4 h-4 group-hover:text-primary " />
            </button>
          </div>
        </div>
      </div>
    </Sider>
  );
};

export default SideBar;
