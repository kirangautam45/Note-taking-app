import React, { useState } from "react";

import NoteForm from "./component/NoteForm";
import NoteList from "./component/NoteList";

import "./App.css";

const App = () => {
  const [noteList, setNoteList] = useState([
    {
      id: "1",
      title: "Note 1",
      body: "I have  weekly sales meeting today at 1pm",
      date: "2023-05-10",
    },
    {
      id: "2",

      title: "Note 2",
      body: "I have a product launch meeting tomorrow at 9am",
      date: "2023-05-11",
    },
    {
      id: "3",
      title: "Note 3",
      body: "I have regular checkup",
      date: "2023-05-12",
    },
    {
      id: "4",
      title: "Note 4",
      body: "I have product meeting with sales teams",
      date: "2023-05-13",
    },
  ]);

  const [editNoteId, setEditNoteId] = useState();
  console.log(editNoteId);

  const editData = noteList.find((data) => data.id === editNoteId) || {
    title: "",
    body: "",
  };

  console.log(editData);
  const [formData, setFormData] = useState({
    title: editData.title || "",
    body: editData.body || "",
  });
  //get data for edit
  const handleSelectMail = (id) => {
    setEditNoteId(id);
    setFormData({
      title: editData.title || "",
      body: editData.body || "",
    });
  };

  const addNote = () => {
    let addNoteDetails = {
      title: formData.title,
      body: formData.body,
      date: new Date().toDateString(),
    };
    setNoteList([addNoteDetails, ...noteList]);
    setFormData({ title: "", body: "" });
  };
  const updateNote = () => {};
  const deleteNote = (id) => {
    const updatedNoteList = noteList.filter((note) => note.id !== id);
    setNoteList(updatedNoteList);
  };
  return (
    <div>
      <NoteForm
        formData={formData}
        setFormData={setFormData}
        handleSubmit={addNote}
      />
      {noteList.map((note) => (
        <NoteList
          key={note.id}
          id={note.id}
          title={note.title}
          body={note.body}
          date={note.date}
          onSubmit={() => handleSelectMail(note.id)}
        />
      ))}
    </div>
  );
};

export default App;
