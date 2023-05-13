import React from "react";

const NoteForm = ({ formData, setFormData, handleSubmit }) => {
  return (
    <div className="body">
      <input
        className="input_text"
        placeholder="Note Title"
        name="title"
        value={formData.title}
        onChange={(e) =>
          setFormData({
            ...formData,
            title: e.target.value,
          })
        }
      />
      <input
        className="input_text"
        placeholder="Note Body"
        name="body"
        value={formData.body}
        onChange={(e) =>
          setFormData({
            ...formData,
            body: e.target.value,
          })
        }
      />

      <button className="add_button" onClick={handleSubmit}>
        ADD Note
      </button>
    </div>
  );
};

export default NoteForm;
