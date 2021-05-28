import { Button, Grid, Input, TextField } from '@material-ui/core'
import React, { useState, useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { AuthContext } from '../StateManagement/AuthState';
import { app } from "../../base";
import firebase from "firebase";
import { useHistory } from "react-router-dom";
import { Alert, AlertTitle } from '@material-ui/lab';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
}));

const BookingTan = () => {
    const classes = useStyles();
    const hist = useHistory();
   
    const tPrice = 2000
    const data = useContext(AuthContext);
    const {  loggedInUser } = data;

    const [endPoint, setEndPoint] = useState("");
    const [startPoint, setStartPoint] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [numOfTicket, setNumbOfTicker] = useState("");
    const [userName, setUserName] = useState("");

      const [alert, setAlert] = useState(false);
      const [type, setType] = useState("");
      const [msg, setMsg] = useState("");

    const createTicket = async (e) => {
        e.preventDefault();
        const ticketDB = await app.firestore().collection("tickets");
        const savedTicket = await ticketDB.doc(loggedInUser).set({
          createdBy: loggedInUser,
          createdDate: new Date().toLocaleString(),
          createAt: firebase.firestore.FieldValue.serverTimestamp(),
          completed: false,
            startPoint: startPoint,
        endPoint: endPoint,
            travelDate: date,
          travelTime: time,
            feedbacks: [],
            numbOfTicket: numOfTicket,
          totalCost: numOfTicket*tPrice,
        }).catch(err => {
            setAlert(true);
            setType("error");
            setMsg(err);
        })
        
        if (savedTicket) {
            setAlert(true);
            setType("success");
            setMsg(`Saved to DB`);
             setTimeout(() => {
        hist.push("/paymentsuccess");
      }, 2500);
        }  
    }

    const generateUserName = async (e) => {
        const userDB = await app.firestore().collection("users");
        const realUser = await userDB.doc(loggedInUser).get();
        const user = await realUser.data();
        
        if (user) {
            setUserName(await user.first_name + " " + user.last_name);
            console.log(await userName);
        }
    }

    useEffect(() => {
        generateUserName();
    }, []) // eslint-disable-line react-hooks/exhaustive-deps


    return (
        <div style={{margin: "20px auto 70px", flexWrap:"wrap", display: 'flex', justifyContent: "center"}}>
                <Grid container>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <h3> Booking</h3>
                    <form className={classes.root} noValidate autoComplete="off">
                            <FormControl className={classes.formControl}>
                                <InputLabel id="demo-simple-select-helper-label">From</InputLabel>
                                <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                autoFocus
                                required
                                value={startPoint}
                                onChange={(e) => {
                                    setStartPoint(e.target.value);
                                }}
                                >
                                <MenuItem value="">
                                    <em> Our Route</em>
                                </MenuItem>
                                <MenuItem value="LAG-EB">Lagos - Railway QRT</MenuItem>
                                <MenuItem value="LAG-IJO">Lagos - Ijora</MenuItem>
                                <MenuItem value="LAG-IKJ">Lagos - Ikeja</MenuItem>
                                <MenuItem value="LAG-OSH">Lagos - Oshodi</MenuItem>
                                <MenuItem value="OGUN-ABK">Ogun - Abeokuta</MenuItem>
                                <MenuItem value="KANO-KAN">Kano - Kano</MenuItem>
                                <MenuItem value="ABUJA-GRK">Abuja - Garki</MenuItem>
                                <MenuItem value="ABIA-ABA"> ABIA - ABA</MenuItem>
                                <MenuItem value="RIVERS-PH"> Rivers - Port Harcourt</MenuItem>
                                </Select>
                               <FormHelperText ormHelperText>Where are you coming to?</FormHelperText>
                        </FormControl>

                            <FormControl className={classes.formControl}>
                                <InputLabel id="demo-simple-select-helper-label">To</InputLabel>
                                <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                required
                                value={endPoint}
                                onChange={(e) => {
                                    setEndPoint(e.target.value);
                                }}
                                >
                                <MenuItem value="">
                                    <em> Our Route</em>
                                </MenuItem>
                                <MenuItem value="LAG-EB">Lagos - Railway QRT</MenuItem>
                                <MenuItem value="LAG-IJO">Lagos - Ijora</MenuItem>
                                <MenuItem value="LAG-IKJ">Lagos - Ikeja</MenuItem>
                                <MenuItem value="LAG-OSH">Lagos - Oshodi</MenuItem>
                                <MenuItem value="OGUN-ABK">Ogun - Abeokuta</MenuItem>
                                <MenuItem value="KANO-KAN">Kano - Kano</MenuItem>
                                <MenuItem value="ABUJA-GRK">Abuja - Garki</MenuItem>
                                <MenuItem value="ABIA-ABA"> ABIA - ABA</MenuItem>
                                <MenuItem value="RIVERS-PH"> Rivers - Port Harcourt</MenuItem>
                                </Select>
                               <FormHelperText ormHelperText>Where are you going to?</FormHelperText>
                        </FormControl>

                        <FormControl>
                            <Input
                                type="date"
                                id="standard-basic"
                                label="Date"
                                required
                                value={date}
                                onChange={(e) => {
                                    setDate(e.target.value);
                                }}
                                />
                            <FormHelperText ormHelperText>Date of Departure</FormHelperText>
                        </FormControl>

                        <FormControl className={classes.formControl}>
                                <InputLabel id="demo-simple-select-helper-label">Time</InputLabel>
                                <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                required
                                value={time}
                                onChange={(e) => {
                                    setTime(e.target.value);
                                }}
                                >
                                <MenuItem value="">
                                    <em> Departure Time </em>
                                </MenuItem>
                                <MenuItem value="6:00am">6:00am</MenuItem>
                                <MenuItem value="6:30am">6:30am</MenuItem>
                                <MenuItem value="7:00am">7:00am</MenuItem>
                                <MenuItem value="7:30am">7:30am</MenuItem>
                                <MenuItem value="8:00am">8:00am</MenuItem>
                                <MenuItem value="9:00am">9:00am</MenuItem>
                                <MenuItem value="10:00am">10:00am</MenuItem>
                            </Select>
                             <FormHelperText ormHelperText>Time of Departure</FormHelperText>
                        </FormControl>
    
                        <TextField
                            required
                            autoFocus
                            margin="dense"
                            id="name"
                            label="How many tickets are you Buying?"
                            type="number"
                            fullWidth
                            value={numOfTicket}
                            onChange={(e) => {
                                setNumbOfTicker(e.target.value)
                            }}
                        />

                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            {alert && <Container maxWidth="sm">  <Alert severity={`${type}`}>
                 <AlertTitle> {msg} </AlertTitle>
                </Alert></Container>}
                            <h3>Summary</h3>
                            <div>
                                <div>Name: {userName} </div>
                                <div>Trip: {startPoint} to {endPoint} </div>
                                <div>Time: {date} - {time}</div>
                                <div>Ticket Price:  <strike>N3,000 </strike> {tPrice} </div>
                                <div>Total Price: {`${numOfTicket} X N2000 = N ${numOfTicket*tPrice}`} </div>
                               

                            </div>
                        </Grid>

                        <FormControl>
                            <Button type="submit" style={{
                                background: "green", color: "white",
                                width: '150px', marginTop: "10px",
                                padding: '10px 20px'
                            }}
                                onClick={createTicket}
                            > Pay Now </Button>
                        </FormControl>

                            
                        </form>    
                </Grid>
                </Grid>
        </div>
    )
}

export default BookingTan
