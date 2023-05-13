import React, { useState } from "react";

import NoteForm from "./component/NoteForm";
import NoteList from "./component/NoteList";

import "./App.css";

const App = () => {
  const [noteList, setNoteList] = useState([
    {
      title: "Note 1",
      body: "I have  weekly sales meeting today at 1pm",
      date: "2023-05-10",
    },
    {
      title: "Note 2",
      body: "I have a product launch meeting tomorrow at 9am",
      date: "2023-05-11",
    },
    { title: "Note 3", body: "I have regular checkup", date: "2023-05-12" },
    {
      title: "Note 4",
      body: "I have product meeting with sales teams",
      date: "2023-05-13",
    },
  ]);
  return (
    <div>
      <NoteForm />
      {noteList.map((note, index) => (
        <NoteList
          key={index}
          title={note.title}
          body={note.body}
          date={note.date}
        />
      ))}
    </div>
  );
};

export default App;
