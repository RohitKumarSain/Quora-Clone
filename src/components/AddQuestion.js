import React from "react";
import "../componentcss/addquestions.css";
import Modal from "./Modal";
import { NavLink } from "react-router-dom";
function AddQuestion() {
  return (
    <div className="add-que-wrapper">
      <Modal />
      <div className="upper-qu">
        <div className="user-img">
          <img
            src="https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-6.jpg"
            alt=""
          />
        </div>
        <div className="addqu">
          <input type="text" placeholder="What do you want to ask share?" />
        </div>
      </div>
      <div className="lower-qu">
        <div data-bs-toggle="modal" data-bs-target="#staticBackdrop">
          <i class="fa-solid fa-question mx-2"></i> Ask
        </div>
        <div>
          <NavLink to="/answer" style={{ textDecoration: "none", color: "black" }}>
            <i class="fa-regular fa-pen-to-square mx-2"></i>Answer
          </NavLink>
        </div>
        <div data-bs-toggle="modal" data-bs-target="#staticBackdrop">
          <i class="fa-solid fa-pencil mx-2"></i>Post
        </div>
      </div>

      {/* <!-- Button trigger modal --> */}

      {/* <!-- Modal --> */}
    </div>
  );
}

export default AddQuestion;
