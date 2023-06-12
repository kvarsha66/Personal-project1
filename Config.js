
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDatabase,ref,set,update,onValue,remove} from "firebase/database";
const firebaseConfig = {
    apiKey: "AIzaSyDqjeu-DpJN5Ib4aSNrVTyEoHPOJISd8AI",
    authDomain: "apps-93017.firebaseapp.com",
    databaseURL: "https://apps-93017-default-rtdb.firebaseio.com",
    projectId: "apps-93017",
    storageBucket: "apps-93017.appspot.com",
    messagingSenderId: "223412439973",
    appId: "1:223412439973:web:187137aa06202d7198f64c",
    measurementId: "G-5JJ3BHLTTP"
};

const app = initializeApp(firebaseConfig);
export const db=getDatabase(app)
