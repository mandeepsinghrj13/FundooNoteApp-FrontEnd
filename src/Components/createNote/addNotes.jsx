/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
//import { Button } from "@material-ui/core";
import NoteOptions from "../NoteOptions/NoteOptions";
import Services from "../../Services/NoteServices";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./addNotes.scss";

export default function AddNote(props) {
  const [showTitle, titleDisplay] = React.useState(props.editOpen);
  const [noteData, setNoteData] = React.useState(props.noteDetail);
  const [edit] = React.useState(props.setEdited);

  const clickedNote = () => {
    titleDisplay(true);
  };

  const noteChangeHandler = (e, key) => {
    setNoteData({ ...noteData, [key]: e.target.value });
  }

  const addNote = () => {
    const formval = {
      title: noteData?.title,
      description: noteData?.description,
      id: [noteData?._id]
    };
    if (!edit) {
      Services.addNote(formval)
        .then((data) => {
          toast.success("Notes created");
          props.getall();
          window.location.reload();
        })
        .catch((err) => {
          toast.error("Note not created");
        });
    }
    else {
      Services.updateNotes(formval)
        .then((data) => {
          toast.success("Notes Update");
          props.getall();
        })
        .catch((err) => {
        });
      titleDisplay(false);
      props.dialogOff();
    }
  };

  return (
    <div
      className="addNotesMain"
    //onClickAway={addNote}
    >
      <div className="notesField" onClick={clickedNote}>
        <div
          className="addNoteField"
          style={{ display: showTitle ? "block" : "none" }}
        >
          <div className="titleInput" data-testid="title" >
            <InputBase className="titleName"
              placeholder="Title"
              value={noteData?.title}
              fullWidth
              multiline
              onChange={(e) => noteChangeHandler(e, "title")}
            />
          </div>
        </div>
        <div className="simpleNoteShow"
          style={{ display: setNoteData ? "block" : "none" }}
        >
          <div className="noteInput" data-testid="description">
            <InputBase
              placeholder="Take a notes"
              value={noteData?.description}
              fullWidth
              multiline
              onChange={(e) => noteChangeHandler(e, "description")}
            />
          </div>
        </div>
        <ToastContainer />
      </div>
      <div
        className="addNoteField"
        style={{ display: showTitle ? "block" : "none" }}
      >
        <div className="addNoteOptions">
          <NoteOptions />
          <div className="closeNotes">
            <IconButton className="closeNotes" data-testid="submit" onClick={addNote}> close  </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}