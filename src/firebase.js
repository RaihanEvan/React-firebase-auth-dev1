import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyBKhsqW8kGUDj1VtshOy1KPnNP05V_9xYM",
    authDomain: "react-firebase-auth-dev1.firebaseapp.com",
    projectId: "react-firebase-auth-dev1",
    storageBucket: "react-firebase-auth-dev1.appspot.com",
    messagingSenderId: "564955206372",
    appId: "1:564955206372:web:7df44bcadfcaf7e3ead2f1"
});

const auth = app.auth();
export {auth};
export default app;