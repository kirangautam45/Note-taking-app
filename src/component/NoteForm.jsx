import React from "react";

const NoteForm = () => {
  return (
    <div div className="Body">
      <div className="To_Body">
        <input
          className="Input_text"
          placeholder="Note Title"
          // value={props.addName}
          // onChange={(e) => props.setAddName(e.target.value)}
        />
        <input
          className="Input_text"
          placeholder="Node Body"
          // value={props.addRollNumber}
          // onChange={(e) => props.setRollNumber(e.target.value)}
        />

        <button className="Icon_button">ADD Details</button>
      </div>
    </div>
  );
};

export default NoteForm;
