import "../componentcss/navbar.css";

import { NavLink } from "react-router-dom";
import { useTheme } from '../Context/ThemeContext';
const Navbar = () => {

  let { theme, setTheme, font, setFont } = useTheme();
  console.log(theme)
  console.log(font)

  return (
    <nav className="navbar fixed-top" style={{ backgroundColor: theme,color:font }}>
      {/* This is dropdown  */}

      {/* This is dropdown  */}

      <section className="mid-navbar" >
        <NavLink to="/">
          <div className="logo" >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/1200px-Quora_logo_2015.svg.png"
              alt="logo"
            />
          </div>
        </NavLink>
        <div className="pages">
          <div className="log">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isActive ? "act" : "blue"
              }
            >
              <i className="fa-solid fa-house-chimney"></i>
            </NavLink>
          </div>

          <div className="log">
            <NavLink
              to="/following"
              className={({ isActive, isPending }) =>
                isActive ? "act" : "blue"
              }
            >
              <i className="fa-solid fa-table-list"></i>
            </NavLink>
          </div>

          <div className="log">
            <NavLink
              to="/answer"
              className={({ isActive, isPending }) =>
                isActive ? "act" : "blue"
              }
            >
              <i className="fa-regular fa-pen-to-square"></i>
            </NavLink>
          </div>

          <div className="log">
            <NavLink
              to="/spaces"
              className={({ isActive, isPending }) =>
                isActive ? "act" : "blue"
              }
            >
              <i className="fa-solid fa-people-group"></i>
            </NavLink>
          </div>

          <div className="log">
            <NavLink
              to="/notifications"
              className={({ isActive, isPending }) =>
                isActive ? "act" : "blue"
              }
            >
              <i className="fa-regular fa-bell"></i>
            </NavLink>
          </div>

          <div className="input">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search Quora" />
          </div>
          <div className="tryquora log mx-3" style={{ color: theme === "#262626" ? "white" : "#262626" }}>
            <span >Try Quora+</span>
          </div>
          <div className="user log">
            <div class="dropdown">
              <img
                class=" dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                src="https://www.pngitem.com/pimgs/m/130-1300253_female-user-icon-png-download-user-image-color.png"
                alt=""
              />
              <ul class="dropdown-menu mt-3" style={{ width: "16rem" }}>
                <div className="my-2 mx-2">
                  <img
                    style={{ width: "50px" }}
                    src="https://www.pngitem.com/pimgs/m/130-1300253_female-user-icon-png-download-user-image-color.png"
                    alt=""
                  />
                </div>

                <h4 className="mx-1">Rohit Kumar Sain</h4>

                <hr />
                <li class="dropdown-item">
                  <i className="fa-regular fa-message mx-1"></i> Message
                </li>
                <li class="dropdown-item  mt-1">
                  <i class="fa-solid fa-bullhorn mx-1"></i> Create Ad
                </li>
                <li class="dropdown-item mt-1">
                  <i class="fa-solid fa-dollar-sign  mx-1"></i> Monetization
                </li>
                <li class="dropdown-item mt-1">
                  <i class="fa-solid fa-chart-simple  mx-1"></i> Your content &
                  stats
                </li>
                <li class="dropdown-item mt-1">
                  <i class="fa-regular fa-bookmark  mx-1"></i> Bookmarks
                </li>
                <li class="dropdown-item mt-1">
                  <i class="fa-solid fa-file-pen  mx-1"></i> Drafts
                </li>
                <li class="dropdown-item mt-1">
                  <i class="fa-solid fa-asterisk  mx-1"></i> Try Quora
                </li>
                <hr />
                <li class="dropdown-item" onClick={() => setTheme(theme === "white" ? "#262626" : "white") || setFont(font === "#262626" ? "white" : "#262626")}>
                  {theme === "white" ? "Dark Mode" : "Light Mode"}
                </li>
                <li class="dropdown-item mt-1">Setting</li>
                <li class="dropdown-item mt-1">Language</li>
                <li class="dropdown-item mt-1">Help</li>
                <li class="dropdown-item ">Logout</li>

                <hr />
                <li className="mx-2">About -Careers -Terms -Privacy</li>
                <li className="mx-2">About -Careers -Terms -Privacy</li>
                {/* <NavLink to="/login">
                  <li class="dropdown-item">
                    Login
                  </li>
                </NavLink>
                <NavLink to="/signup">
                  <li class="dropdown-item">
                    Signup
                  </li>
                </NavLink> */}
              </ul>
            </div>
          </div>
          <div className="earth-icon log">
            <i className="fa-solid fa-globe"></i>
          </div>
          <div className="button-addquestion log">
            <button className="add-question-wrapper">Add Question</button>








            <button className="down-arrow">
              <i
                class="fa-solid fa-chevron-down"
                style={{ fontSize: "15px" }}
              ></i>
            </button>
            {/* <button onClick={showNavbar} className="nav-btn nav-close-btn"><i class="fa-solid fa-xmark"></i></button> */}
          </div>
          <div className="hamburger-menu">
            {/* <button onClick={showNavbar} className="nav-btn">
              <i class="fa-solid fa-bars"></i>
            </button> */}


          </div>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
