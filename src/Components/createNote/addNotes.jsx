/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import NoteOptions from "../NoteOptions/NoteOptions";
import Services from "../../Services/NoteServices";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./addNotes.scss";

export default function AddNote(props) {
  const [showTitle, titleDisplay] = React.useState(props.editOpen);
  const [title, setTitle] = React.useState(props.noteDetail?.title);
  const [note, setNote] = React.useState(props.noteDetail?.description);
  const [edit] = React.useState(props.setEdited);
  const [trash] = React.useState(props.trash);

  const clickedNote = () => {
    titleDisplay(true);
  };

  const addNote = () => {
    const formval = {
      title: title,
      description: note,
      id: [props.noteDetail?._id]
    };
    if (!edit) {
      Services.addNote(formval)
        .then((data) => {
          toast.success("Notes created");
          props.getall();
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
      onClickAway={addNote}
    >
      <div className="notesField" onClick={clickedNote}>
        <div
          className="addNoteField"
          style={{ display: showTitle ? "block" : "none" }}
        >
          <div className="titleInput" >
            <InputBase
              placeholder="Title"
              value={title}
              fullWidth
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>
        <div class="simpleNoteShow">
          <div className="noteInput">
            <InputBase
              placeholder="Take a notes"
              value={note}
              fullWidth
              onChange={(e) => setNote(e.target.value)}
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
          <NoteOptions
          />
          {trash ? (
            " "
          ) : (
            <div className="closeNotes">
              <IconButton className="closeNotes" onClick={addNote}> Add  </IconButton>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}