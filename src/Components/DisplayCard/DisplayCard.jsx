/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import NoteOptions from "../../Components/NoteOptions/NoteOptions";
import Dialog from "@material-ui/core/Dialog";
import AddNote from "../../Components/createNote/addNotes";
import Typography from "@material-ui/core/Typography";
import "./DisplayCard.scss";



export default function DisplayNotes(props) {
  const [open, setOpen] = React.useState(false);
  const [edit, setEdit] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [note, setNote] = React.useState("");
  const [noteId, setNoteId] = React.useState();

  const setDelete = () => {
    dialogClose();
    setOpen(false);
  };

  const dialogOpen = (e, data) => {
    e.stopPropagation();
    setEdit(true);
    setTitle(data.title);
    setNote(data.description);
    setNoteId(data._id);
    setOpen(true);
  };

  const storeOption = (e, data) => {
    e.stopPropagation();
    setNoteId(data);
  };

  const dialogClose = () => {
    setOpen(false);
  };


  const Note = () => {

    return (
      <div className="AllNotes">

        {props.notes.length &&
          props.notes.map((data) => (
            <div
              key={data._id}
              className="noteBlock"
              style={{ backgroundColor: data.color }}
            >
              <div className="inputBlock" onClick={(e) => dialogOpen(e, data)}>
                <Typography className="noteText" >
                  {data.title}
                </Typography>
                <Typography className="noteText">
                  {data.description}
                </Typography>
              </div>
              <div className="optionContainer">
                <div
                  onMouseEnter={(e) => {
                    storeOption(e, data._id);
                  }}
                  onMouseOver={setEdit(true)}
                  className="noteOption"
                >
                  <NoteOptions
                    setDelete={setDelete}
                    editId={data._id}
                    setEdited={edit}
                    getall={props.getall}
                  />
                </div>
              </div>
            </div>
          ))}
      </div>
    );
  };

  return (
    <div className="mainContent">
      <div className="displayNotes">
        <Note />
      </div>
      <div>
        <Dialog open={open} onClose={dialogClose}>
          <AddNote
            setEdited={edit}
            dialogOff={dialogClose}
            getall={props.getall}
            editOpen={open}
            editId={noteId}
            editTitle={title}
            editDisc={note}
            className="dialogBox"
          />
        </Dialog>
      </div>
    </div>
  );
}