import "../componentcss/yourinterest.css";
import { Interests } from "../ArrayOfDatas/interestsArr";
import { NavLink } from "react-router-dom";

const YourInterests = () => {
  return (
    <div className="interest-left-container">
      {Interests.map((e) => {
        let url = `/interests/${e.field}`;
        return (
          <NavLink to={url} style={{ color: "black", textDecoration: "none" }}>
            <div className="mt-2 interest-box">
              <div>
                <img className="interest-icon" src={e.icon} alt="" />
              </div>
              <div className="field-type mx-3"> {e.field}</div>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
};

export default YourInterests;
