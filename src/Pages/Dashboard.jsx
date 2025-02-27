import { Layout } from "antd";
import { useState, useEffect } from "react";
import { Content } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";
import SideBar from "../Components/Dashboard/SideBar";
import { useMediaQuery } from "react-responsive";
import { ADMINSIDEBARITEMS } from "../lib/SidebarLinks";

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);

  const isMediumScreen = useMediaQuery({ query: "(max-width: 768px)" });
  const isSmallScreen = useMediaQuery({ query: "(max-width: 640px)" });

  // Collapse logic based on screen size
  useEffect(() => {
    if (isSmallScreen) {
      setCollapsed(true); // Fully collapse on small screens
    } else if (isMediumScreen) {
      setCollapsed(true); // Show icons only on medium screens
    } else {
      setCollapsed(false); // Full sidebar on larger screens
    }
  }, [isMediumScreen, isSmallScreen]);

  return (
    <div>
      <Layout hasSider>
        <div className="fixed">
          <SideBar
            collapsed={collapsed}
            setCollapsed={setCollapsed}
            isMediumScreen={isMediumScreen}
            isSmallScreen={isSmallScreen}
            sidebarItems={ADMINSIDEBARITEMS}
          />
        </div>

        <Layout
          style={{
            transition: "all 0.2s",
            backgroundColor: "#dfebe9",
          }}
          className={`  ${
            collapsed
              ? isSmallScreen
                ? "ml-0"
                : "sm:ml-[60px]"
              : "sm:pl-[300px]"
          } transition-all`}
        >
          <Content
            style={{
              overflow: "initial",
              minHeight: "100vh",
            }}
          >
            <div
              style={{
                padding: 20,
                // minHeight: calc(100vh - 5rem),
              }}
              className="min-h-full"
            >
              <Outlet />
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default Dashboard;
