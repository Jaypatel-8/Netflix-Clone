import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDh2c4CRa6D1Q-NJ7Vw-KP1u7mInf-N540",
  authDomain: "netflix-clone-59c5a.firebaseapp.com",
  projectId: "netflix-clone-59c5a",
  storageBucket: "netflix-clone-59c5a.appspot.com",
  messagingSenderId: "654010197331",
  appId: "1:654010197331:web:8b43e6891b91dd938aeda6",
  measurementId: "G-HB15FJD02K"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);