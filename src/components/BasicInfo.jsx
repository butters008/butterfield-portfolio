import React from "react";
import profilePic from "../images/profilePic.png";
import "../components/BasicInfo.css";


// const dotenv = require("dotenv").config();
const phone = process.env.PHONE;

const BasicInfo = () => {


  return (
    <div className="BasicInfoContainer">
      <div className="ProfilePicContainer">
        <img src={profilePic} alt="Profile Pic" className="profilePic" />
      </div>
      <div className="basicContact">
          <ul>
            {/* <li><i className="fa fa-phone"></i>&emsp; {phone}</li> */}
            <li><i className="fa fa-phone"></i>&emsp; 123-456-789</li>
            <li><i className="fa fa-envelope"></i>&emsp; email@email.com</li>
            <li><i className="fa fa-github"></i>&emsp; 123-456-7890</li>
            <li><i className="fa fa-linkedin"></i>&emsp; 123-456-7890</li>
            <li><i className="fa fa-youtube"></i>&emsp; 123-456-7890</li>
          </ul>
      </div>
    </div>
  );
};

export default BasicInfo;
