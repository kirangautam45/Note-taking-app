import React from "react";

const NoteList = ({ id, title, body, date, onSubmit }) => {
  const handleClick = () => {
    onSubmit(id);
  };

  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Title : {title}</b>
        </h4>
        <p>Body : {body}</p>
        <p>Date : {date}</p>
        <hr />
      </div>
      <button onClick={handleClick}>edit</button>
    </div>
  );
};
export default NoteList;
