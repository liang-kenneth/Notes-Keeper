import React, { useState, useEffect } from "react";
import Axios from "axios";

import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

import Highlight from "@mui/icons-material/Highlight";
import AddIcon from "@mui/icons-material/Add";
import Delete from "@mui/icons-material/Delete";
import Header from "./Header.jsx";
import CreateArea from "./CreateArea.jsx";
import Note from "./Note.jsx";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    async function initialize() {
      const response = await Axios.get("/initial");
      setNotes(response.data);
    }
    initialize();
  }, []);

  return (
    <div>
      <Header />
      <CreateArea setNotes={setNotes} />
      {notes.map((noteItem) => {
        return (
          <Note
            key={noteItem._id}
            id={noteItem._id}
            title={noteItem.title}
            content={noteItem.content}
            setNotes={setNotes}
          />
        );
      })}
    </div>
  );
}

export default App;
