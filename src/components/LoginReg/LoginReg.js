import React, {useState, useContext} from 'react';
import ImageSlider from '../Partials/ImageSlider';
import firebase from "firebase";
import { app } from "../../base";
import { Alert, AlertTitle } from '@material-ui/lab';
import { Container } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import { AuthContext } from '../StateManagement/AuthState';

const usersDB = app.firestore().collection("users");
const LoginReg = () => {
  const hist = useHistory();

  const data = useContext(AuthContext);
  const {  setActiveUser } = data;

  const [screen, setScreen] = useState(true);
  const switchScreen = () => {
    setScreen(!screen)
  }
  const [alert, setAlert] = useState(false);
  const [type, setType] = useState("");
  const [msg, setMsg] = useState("");

  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [lname, setLname] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password1 === password2) {
      const userReg = await app.auth().createUserWithEmailAndPassword(email, password1).catch((err) => {
        setAlert(true);
        setType("error");
        setMsg(err.message);
      })

      if (userReg) {
        const imgInit = `${lname.slice(0,1).toUpperCase()}.${fname.slice(0,1).toUpperCase()}`
        await usersDB.doc(userReg.user.uid).set({
          first_name: fname,
          last_name: lname,
          email: email,
          password: password1,
          phone: phone,
          date: new Date().toLocaleString(),
          imgInit: imgInit,
          createAt: firebase.firestore.FieldValue.serverTimestamp(),
          accountType: "user",
          address: "",
          trips: [],
          feedbacks: [],
          active: true,
          test: "test",
          imgUrl: "",
          userID: userReg.user.uid
        });
        setAlert(true);
        setType("success");
        setMsg(`Welcome ${lname} .${fname.slice(0,1).toUpperCase()}.`);
          setTimeout(() => {
        hist.push("/booking");
      }, 2500);
      }
    
    } else {
      setAlert(true);
      setType("error");
      setMsg("Password Didn't Match!!!");
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    const userLogin = await app.auth().signInWithEmailAndPassword(email, password1).catch(err => {
      setAlert(true);
      setType("error");
      setMsg(err.message);
    });
    
    if (userLogin) {
      const userName = await app.auth().currentUser.email;
        setActiveUser(true)
        setAlert(true);
        setType("success");
        setMsg(`Welcome Back ${userName}`);
          setTimeout(() => {
        hist.push("/");
      }, 2500);

    }
  }

    return (
        <div className="login-cont">
            <ImageSlider
                topCaption=""
                image="https://i.pinimg.com/originals/cf/51/ad/cf51ad748537f4ea6899ab44388ad110.gif"
                headerText="Welcome Onboard"
                color="lightblue"
                slogan="100% Customer satisfaction since 1989"
        />
         {alert && <Container maxWidth="sm">  <Alert severity={`${type}`}>
                 <AlertTitle> {msg} </AlertTitle>
                </Alert></Container>}
        
       {screen &&  <div style={{margin: "50px auto"}} className="login-page">
          <h2>Login</h2>
          
          <form onSubmit={handleLogin}>
             <div className="phone">
                <input autoComplete="off" required name="email" placeholder="Enter Email" type="email" value={email} onChange={(e) => {
                  setEmail(e.target.value)
                }} /> <br/>
                </div>
                <div className="Password">
                <input autoComplete="off" required type="password" placeholder="Password" name="password" value={password1} onChange={(e) => {
                  setPassword1(e.target.value)
                }}/><br/>
                </div>
                <div>
            <p> <input style={{ width: "15px" }} type="checkbox" value="" /> Remember Password</p>
            </div>
            <div>
            <button type="submit">Login</button>
             </div>
          </form>
                
          <div>
             <h3>Or Login With: </h3>
                
                <img height="40px" width="100px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg2xTBpcpoHI8HvI0udqywYcbILbYIbx8HLVSZMjHnP9dcOXKVkXSkv-yVjDB4yD0WSSY&usqp=CAU" alt="google"/>
                <img height="40px" width="100px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw1hUz0MfOEf7T4-6Hn4OkD4puZIVtF9n_M7ox2Jo5HIOacBg4VM0TP5DUWwrtdG8ldvg&usqp=CAU" alt="google"/>
        
              </div>
       
          <div style={{ margin: "20px" }}>Don't have an account? <span style={{ color: 'red', cursor: "pointer" }}
            onClick={switchScreen}>Register Here!</span></div>
           
          </div>}
           
        {!screen && <div style={{margin: "30px auto"}} className="register-page">
          <h3> REGISTER  </h3>
          <form onSubmit={handleRegister}>
            <div className="firstname">
              <input autoComplete="off" type="text" required placeholder="Firstname" name="firstname" value={fname} onChange={(e) => {
                  setFname(e.target.value)
                }} /> <br/>
            </div>
                <div className="lastname">
                <input autoComplete="off" type="text" required placeholder="Lastname" name="lastname" value={lname} onChange={(e) => {
                  setLname(e.target.value)
                }} /><br/>
                </div>
                <div className="phone-number">
                <input autoComplete="off" type="number" required placeholder="Enter Phone Number" name="number" value={phone} onChange={(e) => {
                  setPhone(e.target.value)
                }} /><br/>
                </div>
                <div className="email">
                <input autoComplete="off" type="email" required placeholder="Enter a valid email Address" name="email" value={email} onChange={(e) => {
                  setEmail(e.target.value)
                }} /><br/>
                </div>
                <div className="email">
            <input autoComplete="off" required type="password" placeholder="Password" name="password1" value={password1} onChange={(e) => {
                  setPassword1(e.target.value)
                }} /><br />
          </div>
                <div className="password">
            <input autoComplete="off" required type="password" placeholder="Confirm Password" name="password2" value={password2} onChange={(e) => {
                  setPassword2(e.target.value)
                }} /><br />
          </div>
            <button type="submit">Sign up</button>
        
          </form>
          <div>
            <h3>Or Login With: </h3>
                <img height="40px" width="100px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg2xTBpcpoHI8HvI0udqywYcbILbYIbx8HLVSZMjHnP9dcOXKVkXSkv-yVjDB4yD0WSSY&usqp=CAU" alt="google"/>
                <img height="40px" width="100px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw1hUz0MfOEf7T4-6Hn4OkD4puZIVtF9n_M7ox2Jo5HIOacBg4VM0TP5DUWwrtdG8ldvg&usqp=CAU" alt="google"/>
          </div>
          <div style={{ margin: "20px" }}>Already have an account? <span style={{ color: 'red', cursor: "pointer" }}
            onClick={switchScreen}>Login Here!</span></div>
        
        </div>}
        </div>
    )
}

export default LoginReg




// import React from 'react';
// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import { Typography } from '@material-ui/core';
// import { Link } from "react-router-dom";

// export default function FormDialog() {
//   const [open, setOpen] = React.useState(true);

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleLand = () => {
//     setOpen(true);
//   };

  
//   const handleLogin = () => {
//     setOpen(true);
//   };

//   return (
//     <div onLoad={handleLand} style={{justifyContent: "center", display:"flex", flexDirection: "column"}}>
//       <Dialog open={open} aria-labelledby="form-dialog-title" onClose={handleClose} >
//         <DialogTitle id="form-dialog-title">
//                 <div style={{
//               margin: "auto",
//               color: "#e0115f",
//               fontSize: "3.5vh",
//               fontWeight: "bold",
//               fontFamily: "cursive"
//             }}>Bookie.com</div> 
//         </DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//             Enter your Login Details
//           </DialogContentText>
//           <TextField
//             autoFocus
//             margin="dense"
//             id="name"
//             label="Email Address"
//             type="email"
//             fullWidth
//           />
//           <TextField
//             margin="dense"
//             id="name"
//             label="Password"
//             type="email"
//             fullWidth
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleLogin} style={{background:"#e0115f", color: "white", fontSize: "2vh", fontFamily: "cursive", marginRight: "2vh"}} >
//             Login
//           </Button>
//         </DialogActions>
//         <DialogActions> 
//         <Typography>
//             Don't have an account? <Link to="gettingstarted" style={{color:"#e0115f"}}>   Sign Up </Link> Now! 
//         </Typography>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }
