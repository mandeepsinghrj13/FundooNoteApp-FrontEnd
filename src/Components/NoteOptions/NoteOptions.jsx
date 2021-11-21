/* eslint-disable no-unused-vars */
import React from "react";
//import { makeStyles } from "@material-ui/core/styles";
import AddAlertIcon from "@material-ui/icons/AddAlertOutlined";
import PersonAddIcon from "@material-ui/icons/PersonAddOutlined";
import IconButton from "@material-ui/core/IconButton";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import DeleteForeverRoundedIcon from "@material-ui/icons/DeleteForeverRounded";
import ColorLensOutlinedIcon from "@material-ui/icons/ColorLensOutlined";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import Services from "../../Services/NoteServices";
import "./NoteOptions.scss";



export default function NoteOptions(props) {
  const [anchorE2, setAnchorE2] = React.useState(null);
  const [noteId] = React.useState(props.editId);
  const [trash] = React.useState(props.trash);



  const deleteHandleOpen = (event) => {
    setAnchorE2(event.currentTarget);
  };

  const deletesHandleClose = () => {
    setAnchorE2(null);
  };


  const deleted = () => {
    let data = {
      id: [noteId],
    };
    Services.deleteForever(data)
      .then((data) => {
        console.log("Note deleted " + data);
        props.getall();
      })
      .catch((err) => {
        console.log("Error while deleting" + err);
      });
  };


  return (
    <div className="optionButton">
      <div>
        {trash ? (
          <div>
            
            <IconButton className="button">
              <DeleteForeverRoundedIcon onClick={deleted} />
            </IconButton>
          </div>
        ) : (
          <div className="optionfield">
            <IconButton className="button">
              <AddAlertIcon />
            </IconButton>
            <IconButton className="button">
              <PersonAddIcon />
            </IconButton>
            <IconButton className="button">
              <ColorLensOutlinedIcon />
            </IconButton>
            <IconButton className="button">
              <ImageOutlinedIcon />
            </IconButton>
            <IconButton className="button" onClick={deleteHandleOpen}>
              <MoreVertOutlinedIcon />
            </IconButton>
          </div>
        )}
      </div>
      <div>
        <Paper>
          <Menu
            //className={classes.settingMenu}
            anchorEl={anchorE2}
            open={Boolean(anchorE2)}
            onClose={deletesHandleClose}
          >
            <MenuItem onClick={deleted}>Delete</MenuItem>
          </Menu>
        </Paper>
      </div>
    </div>
  );
}