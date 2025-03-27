import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/topbar.css";

const TopBar = () => {
  const navigate = useNavigate();

  return (
    <div className="top-bar">
      <div className="top-bar-content">
        <button onClick={() => navigate("/signin")} className="auth-button">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default TopBar;

