import React from "react";
import profilePic from "../images/profilePic.png";
import "../components/BasicInfo.css";
import BasicBioText from "../components/BasicBioText";

// const dotenv = require("dotenv").config();
const phone = process.env.PHONE;

const BasicInfo = () => {


  return (
    <div className="BasicInfoContainer">
      <div className="ProfilePicContainer">
        <img src={profilePic} alt="Profile Pic" className="profilePic" />
      </div>
      <BasicBioText />
    </div>
  );
};

export default BasicInfo;
