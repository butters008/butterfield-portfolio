import React from "react";
import "./styles/Header.css";

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="HeaderText">
        <h1 className="HeaderText-Name">Keith Butterfield</h1>
        <h4 className="HeaderText-JobTitle">Fullstack Developer</h4>
      </div>
      <div className="basicContact">
        <a href="thebutterfieldllc@gmail.com"><i className="fa fa-envelope"></i></a>
        <a href="https://github.com/butters008"><i className="fa fa-github"></i></a>
        <a href="https://www.linkedin.com/in/keith-butterfield-01665025/"><i className="fa fa-linkedin"></i></a>
        <a href="https://www.youtube.com/@thebutterfield"><i className="fa fa-youtube"></i></a>
      </div>
    </div>
  );
};

export default Header