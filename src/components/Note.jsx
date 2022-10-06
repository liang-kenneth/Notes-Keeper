import React from "react";
import Delete from "@mui/icons-material/Delete";
import Axios from "axios";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
        onClick={async () => {
          const test = await Axios.delete(`/note/${props.id}`);
          props.setNotes((prevNotes) => {
            return prevNotes.filter((noteItem) => {
              return noteItem._id !== props.id;
            });
          });
        }}
      >
        <Delete />
      </button>
    </div>
  );
}

export default Note;
