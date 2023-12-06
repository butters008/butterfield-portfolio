import React from "react";
import "./styles/Header.css";

const Header = () => {
  return (
    <div className="headerContainer">
      {/* Make this a ul and li and top being one class where the bottom is another class */}
      <div className="HeaderText">
        <h1 className="HeaderText-Name">Keith Butterfield</h1>
        <h4 className="HeaderText-JobTitle">Fullstack Developer</h4>
      </div>
    </div>
  );
};

export default Header;
