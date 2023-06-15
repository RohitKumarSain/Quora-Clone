import Card from "../components/Card";
import "../pagescss/spaces.css";
import "../ResponsiveCSS/spacesresponsive.css"
const Spaces = () => {
  return (
    <div className="spaces-wrapper">
      <div className="spacesbox">
        <div className="spaces-banner-invide-container">
          <div className="left-spaces-box">
            <div className="banner">
              <h5>Welcome to spaces</h5>
              <p>Follow spaces to explore your interests on Quora</p>
              <div className="buttons-space">
                <button className="mx-2">
                  <i class="fa-solid fa-circle-plus"></i> Create a Space
                </button>
                <button>
                  <i class="fa-regular fa-compass"></i> Discover Spaces{" "}
                </button>
              </div>
            </div>

            <div className="bottom-cards-section">
              <h4 className="mt-2">Discover Spaces</h4>
              <h6 className="mt-3">Spaces you might like</h6>
              <div className="all-cards-categories mt-3">
                {/* Cards  added here */}
                <Card />
              </div>
            </div>
          </div>

          {/* right section of invites */}
          <div className="right-pending-invites">
            <div className="pending-inv">
              <p className="mx-2 p-2">Pending invites</p>
              <hr />
              <div className="bottom-pending-right">
                <i class="fa-regular fa-envelope my-2"></i>
                <p>No invites</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spaces;
