import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyA6gnpsY74zVHAnV9F5iRFjEW84mkJGYRM",
  authDomain: "darts-e56de.firebaseapp.com",
  projectId: "darts-e56de",
  storageBucket: "darts-e56de.appspot.com",
  messagingSenderId: "37675314107",
  appId: "1:37675314107:web:a429dca19ee8c55c35729e",
  measurementId: "G-VLDYL1MHMV"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const auth = getAuth(app)
export const db = getFirestore(app)