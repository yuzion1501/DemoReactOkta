import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  const buttonStyle = {
    padding: '20px', // Increased padding for larger buttons
    margin: '100px auto 0', // Centering horizontally and vertically
    display: 'block', // Ensuring the button takes up full width
    width: '200px'
  };

  return (
    <div className="logout-btn">
      <button style={buttonStyle} onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
        Log Out
      </button>
    </div>
  );
};

export default LogoutButton;