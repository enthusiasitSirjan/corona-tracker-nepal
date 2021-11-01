import React from "react";
import "./header.css";
import headerImg from "../assests/header.svg";
import { Card } from "antd";
import nepal from "../assests/nepal-image.png";

const Header = () => {
  return (
    <Card hoverable={true}>
      <div className="header">
        <img src={headerImg} alt="logo" />
        <h1 style={{ fontWeight: "bold", fontSize: "3em", color: "white" }}>
          LET'S TRACK CORONA
        </h1>
      </div>
    </Card>
  );
};

export default Header;
