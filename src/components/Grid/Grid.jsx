import React from "react";
import { hideEmail, showBirthDate } from "../../Utilities/Utilities";

import "./Grid.css";

const Grid = (props) => {
  return (
    <React.Fragment>
      <div className="image-div">
        <img src={props.userGridData.picture.large} alt="" />
        <h4>{props.userGridData.name.first}</h4>
      </div>
      <div>
        <p>Name: {hideEmail(props.userGridData.email)}</p>
        <p>Date of birth: {showBirthDate(props.userGridData.dob.date)}</p>
      </div>
    </React.Fragment>
  );
};

export { Grid };
