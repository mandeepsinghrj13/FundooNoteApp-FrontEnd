import React from "react";
import "./dashboard.scss";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import icon from "../../images/keepIcon.png";
import CssBaseline from "@material-ui/core/CssBaseline";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import SearchIcon from "@material-ui/icons/Search";
import SettingsSharpIcon from "@material-ui/icons/SettingsOutlined";
import DnsRoundedIcon from "@material-ui/icons/DnsRounded";
import ReplayOutlinedIcon from "@material-ui/icons/ReplayOutlined";
import InputBase from "@material-ui/core/InputBase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppsRoundedIcon from "@material-ui/icons/AppsRounded";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircle";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({

  appBar: {
    backgroundColor: "#ffff",
    borderBottom: "lightgray solid 1px",
    boxShadow: "none",
  },
  topBar: {
    backgroundColor: "#ffff",
    display: "flex",
    justifyContent: "space-between",
  },

  iconLogo: {
    width: "1.1em",
    height: "1.1em",
    [theme.breakpoints.down("xs")]: {
      width: "0.9em",
      height: "0.9em",
    },
  },

  appBarButton: {
    [theme.breakpoints.down("xs")]: {
      padding: "8px 8px 8px 8px",
    },
  },
  profileIcon: {
    marginTop: "20px",
    border: "1px solid lightgray",
    borderRadius: "5px",
  },


  searchInput: {
    marginLeft: "10px",
    width: "80%",
  },
}));

export default function Dashboard(props) {
  const history = useHistory();
  const classes = useStyles();
  const [anchorE2, setAnchorE2] = React.useState(null);
  const [search] = React.useState();
 

  const nextPath = (path) => {
    history.push(path);
  };


  const profileHandleOpen = (event) => {
    setAnchorE2(event.currentTarget);
  };

  const profileHandleClose = () => {
    setAnchorE2(null);
  };


  const logOut = () => {
    setTimeout(() => {
      localStorage.removeItem("token"); 
      nextPath("../login");
    }, 2000);
    toast.success("logout successfully", {
      position: "top-center",
    });
  };

  return (
    <div className="root" >
      <CssBaseline />
      <AppBar position="fixed"  className={classes.appBar}>
        <Toolbar className={classes.topBar}>
          <span className="leftOptions">
            <div className="startOptions">
              <div className="menuButton tooltip">
                <span class="tooltiptext">menu</span>
                <IconButton  className={classes.appBarButton}   >
                  <MenuIcon className={classes.iconLogo} />
                </IconButton>
              </div>
              <div>
                <img className="headerIcon" src={icon} alt="header" />
              </div>
              <div className="headerTitle">FundooNotes</div>
            </div>

            <div className="search">
              <div className="searchIcon">
                <div className="searchIcon">
                  <SearchIcon />
                </div>
              </div>
              <InputBase
                className={classes.searchInput}
                placeholder="Search…"
                value={search}
                
              />
            </div>
          </span>
          <span className="rightOptions">
            <div className="buttonContainer">
              <div className="searchedButton">
                <IconButton className={classes.appBarButton}>
                  <SearchIcon className={classes.iconLogo} />
                </IconButton>
              </div>
              <div className="button tooltip ">
                <span class="tooltiptext">Refresh</span>
                <IconButton className={classes.appBarButton}>
                  <ReplayOutlinedIcon className={classes.iconLogo} />
                </IconButton>
              </div>

              <div className="button tooltip">
                <span class="tooltiptext">list view</span>
                <IconButton className={classes.appBarButton}>
                  <DnsRoundedIcon className={classes.iconLogo} />
                </IconButton>
              </div>

              <div className="button tooltip">
                <span class="tooltiptext">Setting</span>
                <IconButton
                  className={classes.appBarButton}
                  
                >
                  <SettingsSharpIcon className={classes.iconLogo} />
                </IconButton>
              </div>
            </div>
            <div class="appsContainer">
              <div className="button">
                <IconButton className={classes.appBarButton}>
                  <AppsRoundedIcon className={classes.iconLogo} />
                </IconButton>
              </div>
              <div className="button">
                <IconButton
                  className={classes.appBarButton}
                  onClick={profileHandleOpen}
                >
                  <AccountCircleOutlinedIcon className={classes.iconLogo} />
                </IconButton>
                <Paper>
                  <Menu
                    className={classes.settingMenu}
                    anchorEl={anchorE2}
                    open={Boolean(anchorE2)}
                    onClose={profileHandleClose}
                  >
                    <div className="MenuList">
                      <MenuItem>
                        <AccountCircleOutlinedIcon
                          color="primary"
                          style={{ fontSize: 65 }}
                        />
                      </MenuItem>
                      <MenuItem
                        onClick={logOut}
                        className={classes.profileIcon}
                      >
                        Sign out
                      </MenuItem>
                    </div>
                  </Menu>
                </Paper>
              </div>
            </div>
          </span>
        </Toolbar>
      </AppBar>
      <ToastContainer />
    </div>
  );
}