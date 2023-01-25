import React, { useState } from "react";
import Header from "./Components/Header";
import SubHead from "./Components/SubHead";
import Footer from "./Components/Footer";
import Note from "./Components/Note";
import FormArea from "./Components/FormArea";

function App() {
  const [notes, setNotes] = useState([])
  console.log(notes)
  function addNote(note) {
    setNotes(preNotes => {
      return [...preNotes, note]
    })
  }

  function delNote(id) {
    setNotes(preNotes => {
      return preNotes.filter((note, index) => {
        return index != id
      })
    })
  }
  return (
    <div>
      <Header />
      <SubHead />
      <FormArea addNote={addNote} />
      {
        notes.map(
          (note, index) => (
            <Note id={index} delNote={delNote} title={note.title} content={note.content} />
          )
        )
      }
      <Footer />
    </div>
  );
}

export default App
