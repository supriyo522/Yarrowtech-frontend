import React, { useState } from "react";
import "../styles/topbar.css"; // Create this CSS file for styling

const TopBar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuth = () => {
    setIsAuthenticated(!isAuthenticated);
  };

  return (
    <div className="top-bar">
      <div className="top-bar-content">
        {/* <span>Welcome to Yarrowtech</span> */}
        <button onClick={handleAuth} className="auth-button">
          {isAuthenticated ? "Sign Out" : "Sign In"}
        </button>
      </div>
    </div>
  );
};

export default TopBar;
