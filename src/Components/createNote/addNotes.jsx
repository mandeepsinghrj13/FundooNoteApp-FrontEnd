/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import NoteOptions from "../NoteOptions/NoteOptions";
import Services from "../../Services/NoteServices";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./addNotes.scss";
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

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

  const resetHandler = () => {
    setNoteData({ title: "", description: "" })
  }

  const saveNote = () => {
    const formval = {
      title: noteData?.title,
      description: noteData?.description,
      id: [noteData?._id]
    };
    if (!formval.title && !formval.description) {
      return
    }
    if (!edit) {
      Services.addNote(formval)
        .then((data) => {
          toast.success("Notes created");
          titleDisplay(false);
          resetHandler();
          props.getall();
        })
        .catch((err) => {
          toast.error("Note not created");
        });
    }
    else {
      Services.updateNotes(formval)
        .then((data) => {
          toast.success("Note Update");
          props.getall();
        })
        .catch((err) => {
        });
      titleDisplay(false);
      props.dialogOff();
    }
  };

  return (
    <ClickAwayListener onClickAway={saveNote}>
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
              <IconButton className="closeNotes" data-testid="submit" onClick={saveNote}> close  </IconButton>
            </div>
          </div>
        </div>
      </div>
    </ClickAwayListener>
  );
}
