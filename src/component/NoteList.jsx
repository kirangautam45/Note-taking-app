import React from "react";

const NoteList = (props) => {
  return (
    <div class="card">
      <div class="container">
        <h4>
          <b>Title : {props.title}</b>
        </h4>
        <p>Body : {props.body}</p>
        <p>Date : {props.date}</p>
        <hr />
      </div>
    </div>
  );
};
export default NoteList;
