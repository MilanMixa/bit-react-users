import React from "react";

import "./Avatar.css";

export const Avatar = (props) => {
  return (
    <div className="user-img">
      <img src={props.userLogo.picture.thumbnail} alt="" />
    </div>
  );
};
