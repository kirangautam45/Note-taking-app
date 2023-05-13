import React from "react";

const NoteList = (note) => {
  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Title : {note.title}</b>
        </h4>
        <p>Body : {note.body}</p>
        <p>Date : {note.date}</p>
        <hr />
      </div>
    </div>
  );
};
export default NoteList;
