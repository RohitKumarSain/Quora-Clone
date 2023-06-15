import React from "react";
import { discoverSpaces } from "../ArrayOfDatas/discoverSpaces";
import "../componentcss/discoverspaces.css";
function DiscoverSpaces() {
  return (
    <div className="discover-space-wrapper" style={{ flexDirection: "column"}}>
      {discoverSpaces.map((e) => (
        <div style={{ display: "flex" }} className="discover-space-comp">
          <div className="left-logo-wrapper">
            <img src={e.logo} alt="" />
          </div>
          <div className="right-content-wrapper">
            <span className="company-name">{e.name}</span>
            <span>{e.followers}</span>
            <span>{e.decription}</span>
            <hr />
          </div>
        </div>
      ))}
    </div>
  );
}

export default DiscoverSpaces;
