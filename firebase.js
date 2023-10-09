import { initializeApp } from "firebase/app";
import {getFirestore, collection} from "firebase/firestore";

// The web app's Firebase configuration
const firebaseConfig = {
  apiKey: "#############",
  authDomain: "#############",
  projectId: "#############",
  storageBucket: "#############",
  messagingSenderId: "#############",
  appId: "#############"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")

