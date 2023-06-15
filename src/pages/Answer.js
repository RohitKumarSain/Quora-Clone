import React from "react";
import QuestionsForU from "../components/QuestionsForU";
import "../pagescss/answer.css";
import "../ResponsiveCSS/asnswerresponsive.css"
function Answer() {
  let QuestionsArrfollowing = [
    "Questions for you",
    "Answer requests",
    "Drafts",
  ];

  return (
    <div className="answer-wrapper">
      <div className="answer-inner-section">
        <div className="left-section-questions">
          <div className="questons-wrapper">
            <h6 className="mx-3 my-2 ">Questions</h6>
            <hr />
            <div className="question-list">
              {QuestionsArrfollowing.map((val) => (
                <div>{val}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="mid-questions-for-you">
          <div className="questions-info">
            <span className="icon-star">
              <i class="fa-solid fa-star"></i>
            </span>
            <span style={{ fontSize: "14px" }} className="mx-2">
              Questions for You
            </span>
          </div>
          <hr />

          <div className="question-compwrapper">
            <QuestionsForU />
          </div>

          <div className="topics5unknow">
            <div className="topic-wrapper">
              <div>
                <div style={{ fontWeight: 800 }}>Add 5 topics you know about</div>
                <div style={{ fontSize: "13px" }}>
                  You’ll get better questions if you add more specific topics.
                </div>
                <div className="button-addtopic">
                  <button>Add topic</button>
                </div>
              </div>
              <div className="topicimgwrapper">
                <img
                  src="https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.static_about_page.light_mode.GatherAroundAQuestion_LM.png-26-a377318c55ce1d10.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="right-topics-youknow">
          <div className="topics-inner-wrapper mt-2">
            <span style={{ fontWeight: 500 }}>Topics you know about</span>
            <span className="pencil-wrapper">
              <i class="fa-solid fa-pencil"></i>
            </span>
          </div>
          <hr />
          {/* This is right box of know about topics */}
          <div className="box-no-topics">
            <img
              src="https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.empty_states.dormant_lightmode.png-26-c4532c98034818a0.png"
              alt="notfound"
            />
            <div style={{ fontWeight: 500 }}>No topics yet</div>
            <div style={{ color: "grey", fontSize: "12px" }}>
              You’ll get better questions if you add more specific topics.
            </div>
            <div className="button-addtopic">
              <button>Add topic</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Answer;
