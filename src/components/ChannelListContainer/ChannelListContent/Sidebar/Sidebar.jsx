import React from "react";
import Cookies from "universal-cookie";

import hospitalIcon from "../../../../assets/hospital.png";
import logoutIcon from "../../../../assets/logout.png";
import "./style.css";

const cookies = new Cookies();

const Sidebar = () => {
  const logout = () => {
    cookies.remove("token");
    cookies.remove("userId");
    cookies.remove("username");
    cookies.remove("fullName");
    cookies.remove("avatarURL");
    cookies.remove("hashedPassword");
    cookies.remove("phoneNumber");

    window.location.reload();
  };

  return (
    <div className="channel-list__sidebar">
      <div className="channel-list__sidebar__icon">
        <div className="icon__inner">
          <img src={hospitalIcon} alt="Hospital" width="30" />
        </div>
      </div>
      <div className="channel-list__sidebar__icon">
        <div className="icon__inner" onClick={logout}>
          <img src={logoutIcon} alt="Logout" width="30" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
