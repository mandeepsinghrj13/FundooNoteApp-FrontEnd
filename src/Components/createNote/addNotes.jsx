/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import NoteOptions from "../NoteOptions/NoteOptions";
import Services from "../../Services/NoteServices";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./addNotes.scss";

const useStyles = makeStyles((theme) => ({
  closeNotes: {
    padding: "10px",
    fontSize: "17px",
    justifySelf: "flex-end",
    fontFamily: "Google Sans ,Roboto,Arial,sans-serif",
    borderRadius: "5px",
  },
}));

export default function AddNote(props) {
  const classes = useStyles();
  var [showTitle, titleDisplay] = React.useState(props.editOpen);
  var [title, setTitle] = React.useState(props.editTitle);
  var [note, setNote] = React.useState(props.editDisc);
  const [edit] = React.useState(props.setEdited);
  const [clr, setClr] = React.useState(props.editColor);
  const [archive] = React.useState(props.archive);
  const [trash] = React.useState(props.trash);
  const [takeNote] = React.useState(true);

  const clickedNote = () => {
    titleDisplay(true);
  };

  const closeNote = () => {
    console.log("onclosedcalled");
    const formval = {
      title: title,
      description: note,
    };
    Services.addNote(formval)
      .then((data) => {
        toast.success("Notes created");
        props.getall();        
      })
      .catch((err) => {
        toast.error("Note not created");
      });


    if (title === undefined && note === undefined) {
      setClr("#fafafa");
      titleDisplay(false);
      return null;
    }
  };

  return (
    <div
      className="addNotesMain"
      onClickAway={closeNote}
      style={{ backgroundColor: clr }}
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
            setClr={setClr}
            setEdited={edit}
            getall={props.getall}
            editId={props.editId}
            archive={archive}
            trash={trash}
            dialogOff={props.dialogOff}
            takeNote={takeNote}
          />
          {trash ? (
            " "
          ) : (
            <div className="closeNotes">
              
              <IconButton className={classes.closeNotes} onClick={closeNote}>
                Add
              </IconButton>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 