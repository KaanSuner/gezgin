import "./avatar.css";

import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Avatar = ({avatar}) => {
  const {user}=useContext(AuthContext);
  return (
    <div className="avatar">
      <img
        src={avatar ? avatar :user.avatar}
        alt="avatar"
      />
    </div>
  );
};

export default Avatar;
