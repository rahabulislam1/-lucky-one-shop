// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCY_KaV3wrmZWSBQgz9Amvj4ln7YJw90qw",
    authDomain: "wild-photography-3754d.firebaseapp.com",
    projectId: "wild-photography-3754d",
    storageBucket: "wild-photography-3754d.appspot.com",
    messagingSenderId: "549745842761",
    appId: "1:549745842761:web:f3c9d987173df70838fd98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;