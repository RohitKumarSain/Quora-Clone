import React from "react";
import "../componentcss/card.css";
import { CardData } from "../ArrayOfDatas/card";
let Card = () => {
  return (
    <>
      {CardData.map((e) => (
        <div className="card-container">
          <div className="background-img">
            <img src={e.coverimg} alt="invalid" />
          </div>
          <div className="round-logo">
            <img src={e.midlogo} alt="invalid" />
          </div>
          <div className="bottom-card-info">
            <h6>{e.heading}</h6>
            <p>{e.description}</p>
          </div>
        </div>
      ))}
    
    </>
  );
};

export default Card;
