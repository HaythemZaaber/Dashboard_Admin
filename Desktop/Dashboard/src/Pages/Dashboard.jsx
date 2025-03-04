import { Layout } from "antd";
import { useState, useEffect } from "react";
import { Content } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";
import SideBar from "../Components/Dashboard/SideBar";
import { useMediaQuery } from "react-responsive";
import { ADMINSIDEBARITEMS } from "../lib/SidebarLinks";
import Navbar from "../Components/Dashboard/Navbar";

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);

  const isMediumScreen = useMediaQuery({ query: "(max-width: 768px)" });
  const isSmallScreen = useMediaQuery({ query: "(max-width: 640px)" });

  // Collapse logic based on screen size
  useEffect(() => {
    if (isSmallScreen) {
      setCollapsed(true);
    } else if (isMediumScreen) {
      setCollapsed(true);
    } else {
      setCollapsed(false);
    }
  }, [isMediumScreen, isSmallScreen]);

  return (
    <div>
      <Layout hasSider>
        {isSmallScreen ? (
          <Navbar sidebarItems={ADMINSIDEBARITEMS} />
        ) : (
          <div className="fixed">
            <SideBar
              collapsed={collapsed}
              setCollapsed={setCollapsed}
              isMediumScreen={isMediumScreen}
              isSmallScreen={isSmallScreen}
              sidebarItems={ADMINSIDEBARITEMS}
            />
          </div>
        )}

        <Layout
          style={{
            transition: "all 0.2s",
            backgroundColor: "#dfebe9",
          }}
          className={`  ${
            collapsed
              ? isSmallScreen
                ? "ml-0 pt-18"
                : "sm:pl-[60px]"
              : "sm:pl-[300px]"
          } transition-all`}
        >
          <Content
            style={{
              overflow: "initial",
              minHeight: "100vh",
            }}
          >
            <div className="min-h-full p-5">
              <Outlet />
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default Dashboard;
