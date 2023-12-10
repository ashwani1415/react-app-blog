import React from "react";
import LOGO from "../assets/BLOG-FIRM1.png";

const Logo = ({ width = "100px" }) => {
  return (
    <div>
      <img src={LOGO} alt="logo" className="w-20 max-h-14" />
    </div>
  );
};

export default Logo;
