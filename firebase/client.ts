import {initializeApp, getApps, getApp} from 'firebase/app';
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBubPATt1IfZ374Nky_gQ5qt2spPsR2WJ8",
    authDomain: "eva-ai-3437d.firebaseapp.com",
    projectId: "eva-ai-3437d",
    storageBucket: "eva-ai-3437d.firebasestorage.app",
    messagingSenderId: "346175359251",
    appId: "1:346175359251:web:8b0be398e89fd6d0eff2e6",
    measurementId: "G-FZ45B2V7JX"
};

const app = !getApps.length ? initializeApp(firebaseConfig): getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);