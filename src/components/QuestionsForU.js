import React from "react";
import "../componentcss/questionsforu.css";
import { QuestionsForu } from "../ArrayOfDatas/questionforu";
function QuestionsForU() {
  return (
    <>
      {QuestionsForu.map((e) => (
        <div className="questionParent">
          <div className="question-for-you">
            <span className="question-asked">{e.question}</span>
            <span id="cross-icon">
              <i class="fa-solid fa-xmark mx-2"></i>
            </span>
          </div>
          <div className="answer-last-requested mt-2">
            <span style={{ fontWeight: 800 }}>{e.howmanyans} </span>·
            <span>{e.lastSeen}</span>
          </div>
          <div className="bottom-ans-follow-pass">
            <div className="all-btn-wrapper">
              <button style={{ border: "1px solid grey" }}>
                <i class="fa-regular fa-pen-to-square mx-2"></i> Answer
              </button>
              <button>
                <i class="fa-solid fa-wifi mx-2"></i>Follow
              </button>
              <button>
                <i class="fa-solid fa-pen-ruler mx-2"></i>Pass
              </button>
            </div>
            <div className="right-arrow-dots">
              <span>
                <i class="fa-regular fa-circle-down "></i>
              </span>
              <span>
                <i class="fa-solid fa-ellipsis "></i>
              </span>
            </div>
          </div>
          <hr />
        </div>
      ))}
    </>
  );
}

export default QuestionsForU;
