import React, {useState, createContext, useEffect } from 'react';
import { app } from "../../base";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {


    const [activeUser, setActiveUser] = useState();
    const [loggedInUser, setLoggedInUser] = useState();
    const [userInit, setUserInit] = useState();

    //navbar toggle
    const [open, setOpen] = useState(false);

 const trackUserState = async () => {
            await app.auth().onAuthStateChanged(user => {
                if (user) {
                    setActiveUser(true);
                    setLoggedInUser(user.uid);
                    userLoggedin();
                } else {
                    setActiveUser(false);
                    setUserInit(null)
                    setLoggedInUser(null)
                }
            });
    }

    const userLoggedin = async (e) => {
        const userDB = await app.firestore().collection("users");
        const realUser = await userDB.doc(loggedInUser).get();
        const user = await realUser.data();
        
        if (user) {
            setUserInit(await user.imgInit);
            console.log(await userInit);
        } else {
            userLoggedin();
        }
    }
    
    useEffect(() => {
        trackUserState();
    }, []) // eslint-disable-line react-hooks/exhaustive-deps
    


    return ( 
        <AuthContext.Provider value={{
            activeUser,
            setActiveUser,
            loggedInUser,
            setLoggedInUser,
            userInit,
            open,
            setOpen
        }}>
            {children}
        </AuthContext.Provider>
    )
}

