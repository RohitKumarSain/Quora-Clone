import "../pagescss/notifications.css";
import { Filters } from "../ArrayOfDatas/filters";
import "../ResponsiveCSS/notificationsresponsive.css"
const Notifications = () => {
  return (
    <div className="notification-wrapper">
      <div className="notification-inner-container">
        <div className="left-filters">
          <h5>Filters</h5>
          <hr />

          { Filters.map((e) => (
            
            <div
              className={({ isActive, isPending }) =>
                isActive ? "red" : "black"
              }
            >
              <div className="items-filter mx-1">{e}</div>
            </div>
          ))}
        </div>
        <div className="right-notifications">
          <div className="noti-setting">
            <div>
              <h5>Notifications</h5>
            </div>
            <div>
              <p>setting</p>
            </div>
          </div>
          <hr />
          <div className="noti-icon-mess">
            <img
              src="https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.empty_states.no_notification_lightmode.png-26-9e0ef76620dd73d3.png"
              alt=""
            />
            <h5>No New Notifications</h5>
            <p>
              Notifications you received in the last 30 days will show up here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
