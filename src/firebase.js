// Import the functions you need from the SDKs you need
import { initializeApp , getApp, getApps} from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBHhrBCqzi1xaBRSvqobgT_jRNviRJRzw0",
    authDomain: "mailv2.firebaseapp.com",
    projectId: "mailv2",
    storageBucket: "mailv2.appspot.com",
    messagingSenderId: "92867685791",
    appId: "1:92867685791:web:d7058223422c31ce9da1aa"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp() ;
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider;

export {app,db,auth,provider}
