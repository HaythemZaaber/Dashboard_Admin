import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const SidebarItem = ({ Icon, link, text, collapsed, handleLogout }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const isActive = currentPath.includes(link);

  return (
    <Link
      to={link === "login" ? link : `/dashboard/${link}`}
      className="no-underline text-inherit relative block"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <li
        onClick={text === "Déconnecter" ? handleLogout : undefined}
        className={`relative flex items-center py-2 my-3   font-semibold cursor-pointer group transition-all duration-300 
            before:absolute before:top-0 before:right-0 before:h-full before:w-0 before:bg-[#dfebe9] before:rounded-l-full before:transition-all before:duration-300 before:ease-in-out 
            hover:before:w-[90%]
            ${isActive ? "before:w-[90%]" : "text-white"}
            ${text === "Log Out" ? "text-red-500" : ""}
          ${collapsed ? "pl-2" : "pl-8"}
            `}
        alt={`${text} Icon`}
      >
        <b
          className={` absolute transition-all duration-300 w-[90%] h-5 bg-[#dfebe9] -top-5  group-hover:opacity-100 before:absolute before:w-full before:h-full before:bg-secondary before:-left-[0.13rem] before:top-0 before:rounded-br-full before:z-5 before:transition-all before:duration-300 before:ease-in-out ${
            isActive ? "opacity-100" : "opacity-0"
          } `}
        ></b>
        <b
          className={` absolute transition-all duration-300 w-[90%] h-5 bg-[#dfebe9] -bottom-5  group-hover:opacity-100 before:absolute before:w-full before:h-full before:bg-secondary before:-left-[0.13rem] before:top-0 before:rounded-tr-full before:z-10 before:transition-all before:duration-300 before:ease-in-out ${
            isActive ? "opacity-100" : "opacity-0"
          } `}
        ></b>

        {collapsed && (
          <span className="absolute bg-secondary text-white  shodow-xl left-16 top-1/2 transform -translate-y-1/2 z-50 whitespace-nowrap px-3 py-2 rounded-lg hidden group-hover:block transition-all duration-300">
            {text}
          </span>
        )}

        {/* <b className="absolute w-[90%] h-[2rem] bg-[#dfebe9] -bottom-[2rem] before:absolute before:w-full before:h-full before:bg-secondary before:left-0 before:top-0 before:rounded-tr-full before:z-10"></b> */}

        <div className="relative ml-2 w-9 p-[0.5rem] group">
          <Icon
            className={`${
              collapsed ? "w-5 h-5" : "w-4 h-4"
            }  transition-all duration-300 group-hover:text-primary ${
              isActive ? "text-primary" : " text-third"
            }`}
          />
        </div>

        <span
          className={`overflow-hidden text-[15px] font-semibold relative transition-all duration-300 group-hover:text-primary 
            ${collapsed ? "w-0 opacity-0" : "ml-2 opacity-100"} ${
            isActive ? "text-primary" : ""
          }
            ${text === "Log Out" ? "text-red-500" : ""}
          `}
        >
          {text}
        </span>
      </li>
    </Link>
  );
};

export default SidebarItem;
