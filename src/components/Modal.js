import React, { useState, useEffect } from "react";

import { usePostContext } from "../Context/PostContext";


// This is modal component for popup form 
function Modal() {

  let { obj, setObj } = usePostContext();
  // console.log(obj);
  let [name, setName] = useState("");
  let [profile, setProfile] = useState("");
  let [answerby, setAnswerby] = useState("");
  let [question, setQuestion] = useState("");
  let [image, setImage] = useState("");

  console.log(profile)
  // useEffect(() => {
  //   var data = JSON.parse(localStorage.getItem("post_details"));
  //   setObj(data)
  // }, []);

  let clickHandler = () => {

    let newObj = {
      userlogo: profile,
      name: name,
      answeredby: answerby,
      question: question,
      image: image

    }
    // console.log(newObj)

    let updatedObj = [newObj, ...obj];
    setObj(updatedObj)
    localStorage.setItem("post_details", JSON.stringify(updatedObj))
  }


  return (
    <div
      class="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">
              Add Post Here
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">

            <div class="mb-3">

              <input type="text" className="form-control" onChange={(e) => setProfile(e.target.value)} placeholder="profile image" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div class="mb-3">
              <input type="text" class="form-control" id="" placeholder="name" onChange={(e) => setName(e.target.value)} />
            </div>
            <div class="mb-3">
              <input type="text" class="form-control" id="" placeholder="answeredby" onChange={(e) => setAnswerby(e.target.value)} />
            </div>
            <div class="mb-3">
              <input type="text" class="form-control" id="" placeholder="question" onChange={(e) => setQuestion(e.target.value)} />
            </div>
            <div class="mb-1">
              <input type="text" class="form-control" id="" placeholder="image" onChange={(e) => setImage(e.target.value)} />
            </div>

            <button type="submit" class="btn btn-success" onClick={clickHandler}>Submit</button>

          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-danger"
              data-bs-dismiss="modal"
            >
              Close
            </button>         </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
