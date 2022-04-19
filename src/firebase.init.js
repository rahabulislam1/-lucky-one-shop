// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBJi1-yZ-HWGB9TLRl7C_YJAVQC2jmDefY",
    authDomain: "thor-gym-1ba89.firebaseapp.com",
    projectId: "thor-gym-1ba89",
    storageBucket: "thor-gym-1ba89.appspot.com",
    messagingSenderId: "717242064997",
    appId: "1:717242064997:web:3848a8a647a3c39632668c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;