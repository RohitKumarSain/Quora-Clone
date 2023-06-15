import React from "react";
import AddQuestion from "../components/AddQuestion";
import YourInterests from "../components/YourInterests";
import Posts from "../components/Posts";
import "../pagescss/home.css";
import "../ResponsiveCSS/responsive.css";
import { useTheme } from "../Context/ThemeContext";

function Home() {
  let { theme, setTheme, font, setFont } = useTheme();
  console.log(theme, font)
  return (
    <>
      <div className="main-parent">
        <div className="home-page">
          <div className="left-section">
            <YourInterests />
          </div>
          <div className="mid-section">
            <AddQuestion />
            <Posts />
          </div>
          <div className="right-section">
            <img
              src="https://cdn.testbook.com/products/2022/July/26/__w-200-400-600__/Full-Stack-Development-Career-Program-(6-Months)_Course-Card.jpg.jpeg"
              alt=""
            />
            <img
              className="mt-2"
              src="https://cdn.testbook.com/products/2022/July/14/__w-200-400-600__/image%20%281%29.png.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
