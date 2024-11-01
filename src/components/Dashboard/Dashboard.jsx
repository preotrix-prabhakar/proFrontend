
import React from "react";
import logo from "../../assets/icons/codesandbox.png";
import boardLogo from "../../assets/icons/layout.png";
import analyticsLogo from "../../assets/icons/database.png";
import settingsLogo from "../../assets/icons/settings.png";
import logoutLogo from "../../assets/icons/Logout.png";
import dashboardStyles from "./Dashboard.module.css";
import { useNavigate } from "react-router-dom";
import Message from "../Message/Message"; // Assuming this is used elsewhere in your app

export default function Dashboard() {
  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const renderNavItem = (icon, label, path) => (
    <div onClick={() => navigate(path)} className={dashboardStyles.menuItem}>
      <img className={dashboardStyles.logo_image} src={icon} alt={`${label} Icon`} />
      <h1 className={dashboardStyles.menuTitle}>{label}</h1>
    </div>
  );

  return (
    <div className={dashboardStyles.container}>
      
      <div className={dashboardStyles.topSection}>
        <div className={dashboardStyles.menuItem}>
          <img className={dashboardStyles.logo_image} src={logo} alt="Pro Manage Logo" />
          <h1 className={dashboardStyles.logoTitle}>Pro Manage</h1>
        </div>

        <div className={dashboardStyles.linkSection}>
          {renderNavItem(boardLogo, "Board", "/board")}
        </div>
        <div className={dashboardStyles.linkSection}>
          {renderNavItem(analyticsLogo, "Analytics", "/analytics")}
        </div>
        <div className={dashboardStyles.linkSection}>
          {renderNavItem(settingsLogo, "Settings", "/settings")}
        </div>
      </div>

      <div className={dashboardStyles.logoutSection}>
        <button onClick={onLogout} className={dashboardStyles.logoutBtn}>
          <img className={dashboardStyles.logo_image} src={logoutLogo} alt="Logout Icon" />
          <h1 id={dashboardStyles.logoutText} className={dashboardStyles.menuTitle}>
            Logout
          </h1>
        </button>
      </div>
    </div>
  );
}
