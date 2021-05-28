import firebase from "firebase";
import "firebase/firestore";
import "firebase/storage";

export const app = firebase.initializeApp({
    apiKey: "AIzaSyCE_oHmOdbXX2O4kCoJldvHgYqgeeCK8uI",
    authDomain: "gorailsdb.firebaseapp.com",
    projectId: "gorailsdb",
    storageBucket: "gorailsdb.appspot.com",
    messagingSenderId: "617214762598",
    appId: "1:617214762598:web:c71db455e8b4eeee4657a7",
    measurementId: "G-E9E2G3NQP0"
});
