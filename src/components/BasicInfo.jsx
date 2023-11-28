import React from "react";
import profilePic from "../images/profilePic.png";

const BasicInfo = () => {
  return (
    <div>
      <img src={profilePic} alt="Profile Pic" className="profilePic" />
      <ul>
        <li>phone:</li>
        <li>email:</li>
        <li>GitHub:</li>
        <li>LinkedIn:</li>
        <li>YouTube:</li>
      </ul>
    </div>
  );
};

export default BasicInfo;
