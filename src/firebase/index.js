import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";
import firebase from 'firebase/compat/app';

const firebaseConfig = {
    apiKey: "AIzaSyC7RS5RhFdufIY2Dnq-xiHjrVZ0IPiwrUg",
    authDomain: "fortfolio-18603.firebaseapp.com",
    projectId: "fortfolio-18603",
    storageBucket: "fortfolio-18603.appspot.com",
    messagingSenderId: "853820568247",
    appId: "1:853820568247:web:0f4d74bff8d329665f5332",
    measurementId: "G-TC3VJ6747X"
};

firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export { db, auth };