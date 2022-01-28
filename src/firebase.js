import * as firebase from './firebase';
import { getFirestore } from '@firebase/firestore';
import {initializeApp} from "firebase/app";
import  {getAuth} from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyCiTwBittfXkFnAo8QHXAbBlY4UsFRSxNk",
    authDomain: "billingsystem-de3b5.firebaseapp.com",
    databaseURL: "https://billingsystem-de3b5-default-rtdb.firebaseio.com",
    projectId: "billingsystem-de3b5",
    storageBucket: "billingsystem-de3b5.appspot.com",
    messagingSenderId: "677587786030",
    appId: "1:677587786030:web:f1088985a8f93c24d602bf"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
const auth=getAuth(firebaseapp);
const db = getFirestore();

export {
    firebaseapp,
    auth,
    db
};