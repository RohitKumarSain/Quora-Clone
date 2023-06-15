import React, { useState } from "react";
import "../componentcss/posts.css";
import { PostsData } from "../ArrayOfDatas/PostsData";
import { usePostContext } from "../Context/PostContext"
function Posts({ font, theme }) {
  let { obj } = usePostContext();
  let [arrowColor, setArrowColor] = useState('black');
  let [downVote, setDownVote] = useState('black');


  console.log(downVote)
  return (
    <div className="posts-entery" >
      <div className="upper-section-post" style={{ backgroundColor: theme, color: font }}>
        {obj.map((e) => (
          <div>
            {/* <hr /> */}
            <div className="logo-name mt-4" >
              <div className="logofuser">
                <img src={e.userlogo} alt="not found" />
              </div>
              <div className="name-follow-answer-wrapper">
                <div className="name-follow">
                  <h6>
                    {e.name} <a href="/follow"> follow</a>
                  </h6>
                </div>
                <div className="answerby">{e.answeredby}</div>
              </div>
            </div>

            <h6 className="mt-3">{e.question}</h6>
            <div className="post-image">
              <img src={e.image} alt="" />
            </div>
            <div className="lower-post-section ">
              <div className="button-up-down flex">
                <button className="flex" onClick={() => setArrowColor((prev) => prev === "black" ? "blue" : "black")} >
                  <span><i style={{ color: arrowColor }} class="fa-solid fa-arrow-up mx-1"></i></span><span style={{ color: arrowColor }}> Upvote</span>
                </button>


                <button style={{color:downVote}} onClick={() => setDownVote((prev) => prev === "black" ? "red" : "black")}>
                  <i class="fa-solid fa-arrow-down"></i>
                </button>
                <button>
                  <i class="fa-regular fa-comment"></i>
                </button>
                <button>
                  <i class="fa-solid fa-rotate"></i>
                </button>
              </div>
              <hr />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;
