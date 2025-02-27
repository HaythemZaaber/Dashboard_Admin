import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const SidebarItem = ({ Icon, link, text, collapsed, handleLogout }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = currentPath.includes(link);

  return (
    <Link
      to={link == "login" ? link : `/dashboard/${link}`}
      className="no-underline text-inherit"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <li
        onClick={text == "Déconnecter" ? handleLogout : undefined}
        className={`relative w-[80%] flex items-center py-2 pl-3 rounded-l-full mb-1 mx-auto font-semibold cursor-pointer group hover:bg-[#dfebe9] transition-all duration-300  hover:w-full hover:absolue hover:left-8
            ${
              isActive
                ? "bg-[#dfebe9] w-full absolute left-8"
                : "hover:text-white text-white "
            }
          ${text == "Log Out" ? "text-red-500" : ""}
          
          `}
        alt={`${text} Icon`}
      >
        <div className="relative ml-2 w-9 p-[0.5rem] group">
          {/* <img
              src={Icon}
              alt={`${text} Icon`}
              className={` ${
                isActive && !link.includes("login")
                  ? "filter brightness-0 invert"
                  : "filter group-hover:brightness-0 group-hover:invert"
              }`}
            /> */}
          <Icon
            className={`w-4 h-4 group-hover:text-primary ${
              isActive ? "text-primary" : " text-third"
            } `}
          />
          {/* Tooltip */}
          {/* {collapsed && (
              <span className="absolute -top-1/2 -left-5  ml-2 transform -translate-y-1/2 bg-gray-700 text-white text-[8px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-999">
                {text}
              </span>
            )} */}
        </div>

        <span
          className={`overflow-hidden text-[15px]  font-semibold group-hover:text-primary  ${
            collapsed ? "w-0" : "ml-2"
          }${isActive ? " text-primary  " : ""}${
            text == "Log Out" ? "text-red-500" : ""
          }`}
        >
          {text}
        </span>
      </li>
    </Link>
  );
};

export default SidebarItem;
