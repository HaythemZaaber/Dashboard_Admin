import { useState, useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { RiSettings3Fill } from "react-icons/ri";
import { TbPointFilled } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

const Navbar = ({ sidebarItems }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef(null);
  const currentPath = location.pathname;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    navigate("/login");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed w-full bg-secondary text-white shadow-md z-50 transition duration-300">
      <div className="flex justify-between items-center p-4">
        {/* Left Side: Profile Info */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <TbPointFilled
              size={25}
              className="text-green-400 absolute -top-2 -right-1"
            />
            <FaRegUserCircle size={40} className="text-white" />
          </div>
          <div>
            <p className="font-semibold text-sm">Admin</p>
            <p className="text-xs opacity-70">admin007@gmail.com</p>
          </div>
          {/* <div className="flex items-center text-xs ml-3">
            <TbPointFilled size={16} className="text-green-400" />
            Active
          </div> */}
        </div>

        <div className="relative" ref={menuRef}>
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none cursor-pointer"
          >
            {/* <FaBars size={24} /> */}
            {menuOpen ? (
              <MenuFoldOutlined className="text-2xl" />
            ) : (
              <MenuUnfoldOutlined size={30} className="text-2xl" />
            )}
          </button>

          <div
            className={`absolute left-1/2 -translate-x-1/2 top-12 bg-secondary text-white rounded-md shadow-lg w-[100vw] py-3 z-50 transition-all duration-300 ${
              menuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-2 pointer-events-none"
            }`}
          >
            {sidebarItems.map((item) => (
              <Link
                key={item.key}
                to={
                  item.link === "login" ? item.link : `/dashboard/${item.link}`
                }
                className={`block px-4 py-1 text-sm  transition-colors duration-200 group   ${
                  currentPath.includes(item.link) ? "bg-gray-100" : ""
                } `}
                onClick={() => setMenuOpen(false)}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span
                  className={`overflow-hidden text-[15px]  font-semibold group-hover:text-primary flex items-center gap-2 group-hover:bg-gray-100 p-3 rounded-md ${
                    currentPath.includes(item.link)
                      ? " text-primary bg-gray-100 "
                      : ""
                  }`}
                >
                  <item.Icon />
                  {item.text}
                </span>
              </Link>
            ))}
            <hr className="my-2" />
            <Link
              to="/dashboard/settings"
              className={`${
                currentPath.includes("settings") ? "bg-gray-100" : ""
              } block px-4 py-3 text-sm hover:bg-gray-100 transition-colors duration-200 group`}
              onClick={() => setMenuOpen(false)}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div
                className={`flex items-center gap-2 group-hover:text-primary  group-hover:bg-gray-100 p-3 rounded-md ${
                  currentPath.includes("settings")
                    ? " text-primary bg-gray-100 "
                    : ""
                }`}
              >
                <RiSettings3Fill size={15} />
                <span
                  className={`overflow-hidden text-[15px]  font-semibold group-hover:text-primary ${
                    currentPath.includes("settings") ? " text-primary  " : ""
                  }`}
                >
                  Settings
                </span>
              </div>
            </Link>
            <button
              onClick={handleLogout}
              className="ml-3 w-full px-4 py-3 text-sm text-red-500 hover:bg-gray-100 transition-colors duration-200 cursor-pointer rounded-md "
            >
              <div className="flex items-center gap-2 font-semibold ">
                <MdLogout /> Logout
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
