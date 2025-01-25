import React from "react";
import { UncontrolledAlert } from "reactstrap";

const Alert = ({ message, color, icon }) => {
  return (
    // this should reappear every time the user clicks on the button
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <UncontrolledAlert color={color}>
            <span className="alert-inner--icon">
              <i className={icon} />
            </span>
            <span className="alert-inner--text">
              <strong>{message}</strong>
            </span>
          </UncontrolledAlert>
        </div>
      </div>
    </div>
  );
};

export default Alert;
