import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "troquelcart-e02f5.firebaseapp.com",
  projectId: "troquelcart-e02f5",
  storageBucket: "troquelcart-e02f5.appspot.com",
  messagingSenderId: "236391105693",
  appId: "1:236391105693:web:16a6c4ce01d33c98484074"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

