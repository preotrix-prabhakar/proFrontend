import React from "react";
import dashboardStyles from "./Dashboard.module.css";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className={dashboardStyles.container}>
      <div className={dashboardStyles.topSection}>
        <div className={dashboardStyles.menuItem}>
          <h1 className={dashboardStyles.logoTitle}>Pro Manage</h1>
        </div>
        <div className={dashboardStyles.linkSection}>
          <div onClick={() => navigate("/")} className={dashboardStyles.menuItem}>
            <h1 className={dashboardStyles.menuTitle}>Board</h1>
          </div>
        </div>
        <div className={dashboardStyles.linkSection}>
          <div onClick={() => navigate("/analytics")} className={dashboardStyles.menuItem}>
            <h1 className={dashboardStyles.menuTitle}>Analytics</h1>
          </div>
        </div>
        <div className={dashboardStyles.linkSection}>
          <div onClick={() => navigate("/settings")} className={dashboardStyles.menuItem}>
            <h1 className={dashboardStyles.menuTitle}>Settings</h1>
          </div>
        </div>
      </div>
      <div className={dashboardStyles.logoutSection}>
        <button onClick={onLogout} className={dashboardStyles.logoutBtn}>
          <h1 id={dashboardStyles.logoutText} className={dashboardStyles.menuTitle}>
            Logout
          </h1>
        </button>
      </div>
    </div>
  );
}
