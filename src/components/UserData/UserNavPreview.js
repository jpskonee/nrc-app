import React, { useContext, useState } from 'react';
import { AuthContext } from "../StateManagement/AuthState";
import { app } from "../../base";
import { Link } from "react-router-dom";
import avatar from "../../assets/avatar.jpg"

const UserNavPreview = () => {
    const { activeUser, loggedInUser, setOpen } = useContext(AuthContext);

    const [userLname, setUserLName] = useState("");
    const [userFname, setUserFName] = useState("");
    const [userImgUrl, setUserImgUrl] = useState("");



     const getLoggedInUser = async () => {
        const userDB = await app.firestore().collection("users");
        const getUser = await userDB.doc(loggedInUser).get()
        const userData = await getUser.data();
        const userLName = await userData.last_name;
        const userFName = await userData.first_name;
        const userImg = await userData.imgUrl;
        
         setUserFName(userFName);
         setUserLName(userLName);
         

         if (userImg) {
             if (userImg.length > 2) {
             setUserImgUrl(userImg);
         } else {
             setUserImgUrl(avatar);
         }
         } else {
            setUserImgUrl(avatar);
         }
    }

    if (loggedInUser && activeUser) {
        getLoggedInUser();
    }

    
    
    return (
        <div>
            {loggedInUser ? <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", maxWidth: "100%" , padding: "10px 20px 5px", margin: "10px auto 10px"}}>
                <img style={{ borderRadius: "40px", border: "1px groove", margin: "0" }}
                    src={`${userImgUrl}`}
                    width="90px" height="90px" alt="user pics" />
                <div style={{ margin: "5px 0 0", color: "grey", fontFamily: "cursive", fontWeight: "bold", fontSize: "2vh" }}>
                    {userLname.toUpperCase()} .{userFname.slice(0,1).toUpperCase()}.
                </div>
                <div onClick={() => {
                    setOpen(false)
                }}  style={{ padding: "3px 10px", margin: "5px 0 0", borderRadius: "5px", color: "white", backgroundColor: "#e0115f",fontSize: "14px" }}>
                    <Link to="/user" style={{ color: "white", backgroundColor: "#e0115f" }} > Profile </Link>
                </div> 
                
            </div> : <div style={{ margin: "0px auto", color: "grey", fontFamily: "cursive", fontWeight: "bold", fontSize: "2.8vh" }} >
                    Welcome!
            </div>}
        </div>
    )
}

export default UserNavPreview
