import React, {useContext, useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DirectionsRailwayIcon from '@material-ui/icons/DirectionsRailway';
import UpdateIcon from '@material-ui/icons/Update';
import PeopleIcon from '@material-ui/icons/People';
import ExploreIcon from '@material-ui/icons/Explore';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import SportsHandballIcon from '@material-ui/icons/SportsHandball';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// import LoginReg from "../LoginReg/LoginReg";
// import { Alert, AlertTitle } from '@material-ui/lab';
import { AuthContext } from '../StateManagement/AuthState';
import { app } from "../../base";
import { useHistory} from "react-router-dom";

const drawerWidth = 210;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

// const userDB = app.firestore().collection("users")
export default function PersistentDrawerLeft() {
  
  const data = useContext(AuthContext);
  const { activeUser, setActiveUser, userInit } = data;

  const hist = useHistory();

  const classes = useStyles();
  const theme = useTheme();

  const [open, setOpen] = useState(false);
  // const [alert, setAlert] = useState(false);
  // const [type, setType] = useState("");
  // const [msg, setMsg] = useState("");


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setTimeout(() => {
      setOpen(false);
    }, 500);
  };

  // const HandleLogin = () => {
  //   handleDrawerClose();
  // }

  const handleLogout = async (e) => {
    e.preventDefault();
    await app.auth().currentUser;
    await app.auth().signOut();
    setActiveUser(false);
        
    
  setTimeout(() => {
        hist.push("/")
        handleDrawerClose();
     }, 200);
  }

 

  useEffect(() => {
  }, [])


  return (
    <div style={{ marginBottom:"10vh"}} className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className="nav-bar">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <div style={{ width:"100%", display: "flex", justifyContent: "space-between", alignContent: "center"}}>
            <div>  <Link to="/">  <div style={{
              margin: "auto",
              color: "white",
              fontSize: "3.5vh",
              fontWeight: "bold",
              fontFamily: "cursive"
            }}>GoRails.com</div> </Link></div>
            <div> <AccountCircleIcon style={{fontSize: "30px"}} /> </div>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer 
        className={classes.drawer}
        variant="temporary"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <Link to="/" style={{ margin: "0px auto", color: "grey", fontFamily: "cursive", fontWeight: "bold", fontSize: "2.8vh" }}>
           <p> Welcome {userInit && userInit} </p> 
          </Link>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />

        <List>
   
          <Link onClick={handleDrawerClose} to="/booking">
            <ListItem button>
              <ListItemIcon> <DirectionsRailwayIcon /> </ListItemIcon>
              <ListItemText>Book A Trip</ListItemText>
            </ListItem>
          </Link>
          
          <Link onClick={handleDrawerClose}  to="/news">
            <ListItem button>
             <ListItemIcon> <UpdateIcon /> </ListItemIcon>
              <ListItemText>News</ListItemText>
            </ListItem>
          </Link>

          <Link onClick={handleDrawerClose}  to="/services">
            <ListItem button>
               <ListItemIcon> <PeopleIcon /> </ListItemIcon>
              <ListItemText>Services</ListItemText>
           </ListItem>
          </Link>

          <Link onClick={handleDrawerClose}  to="/tripguide">
            <ListItem button>
                <ListItemIcon> <ExploreIcon /> </ListItemIcon>
                <ListItemText> Trip Guide </ListItemText>
            </ListItem>
          </Link>
          
          <Link onClick={handleDrawerClose}  to="/about">
           <ListItem button>
                <ListItemIcon> <SportsHandballIcon /> </ListItemIcon>
                <ListItemText>About Us</ListItemText>
            </ListItem>
          </Link>

          <Link onClick={handleDrawerClose}  to="/contact">
           <ListItem button>
                <ListItemIcon> <ContactSupportIcon /> </ListItemIcon>
                <ListItemText>Contact Us</ListItemText>
            </ListItem>
          </Link>
        </List>

        <Divider />

        <List>

           {!activeUser && <Link onClick={handleDrawerClose} to="/login">
           <ListItem button>
                <ListItemIcon> <VpnKeyIcon /> </ListItemIcon>
                <ListItemText>Login</ListItemText>
            </ListItem>
          </Link>}

           <Link onClick={handleDrawerClose}  to="/gettingstarted">
           <ListItem button>
                <ListItemIcon> <EmojiObjectsIcon /> </ListItemIcon>
                <ListItemText>Getting Started</ListItemText>
            </ListItem>
          </Link>

           
           {activeUser && <ListItem onClick={handleLogout} button>
                <ListItemIcon> <PowerSettingsNewIcon /> </ListItemIcon>
                <ListItemText onClick={handleLogout}>Logout</ListItemText>
            </ListItem>}
                  
        </List>
       
      </Drawer>

      {/* {alert && <Container maxWidth="sm">  <Alert severity={`${type}`}>
                 <AlertTitle> ALert</AlertTitle>
                   {msg}
                </Alert></Container>} */}
  
    </div>
  );
}


