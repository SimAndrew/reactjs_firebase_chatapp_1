import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
    apiKey: "AIzaSyCJJRLGMemNif3wG7hFc05LEghS9c0kwZs",
    authDomain: "reactjs-firebase-chatapp-1.firebaseapp.com",
    databaseURL: "https://reactjs-firebase-chatapp-1.firebaseio.com",
    projectId: "reactjs-firebase-chatapp-1",
    storageBucket: "reactjs-firebase-chatapp-1.appspot.com",
    messagingSenderId: "95612104118",
    appId: "1:95612104118:web:d9b91d01dd257f3d9a2517"
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
