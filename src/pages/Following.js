import DiscoverSpaces from "../components/DiscoverSpaces";
import YourInterests from "../components/YourInterests";
import "../pagescss/following.css";
import "../ResponsiveCSS/followingresponsive.css";
const Following = () => {
  return (
    <div className="following-container-wrapper">
      <div className="main-content">
        <div className="left-content">
          <YourInterests />
        </div>
        <div className="discover-spaces">
          <div className="upper-discover">
            <div>
              <img
                src="https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.empty_states.build_following_feed_lightmode.png-26-cc59fbc57541079b.png"
                alt=""
              />
              <div>
                <h5>Build your new following feed</h5>
              </div>
              <div>
                <p>
                  Follow some Spaces to start discovering stories in your feed.
                </p>
              </div>
            </div>
          </div>

          <div className="lower-discover ">
            <h4 className="mx-3 mt-2">Discover Spaces</h4>
            <h6 className="mx-3 mt-1">Spaces you might like</h6>
            <hr />
            <DiscoverSpaces />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Following;
