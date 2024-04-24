import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  const profileStyle = {
    padding: '20px', // Increased padding for larger buttons
    margin: '100px auto 0', // Centering horizontally and vertically
    display: 'block', // Ensuring the button takes up full width
    width : '150px'
  };

  return (
    isAuthenticated && (
    <div  className="profile">
      <div style={profileStyle} className="profile-card" >
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    </div>
    )
  );
};

export default Profile;