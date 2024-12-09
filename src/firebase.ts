import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBpbDwSrpKoulYyw-exDTD6Af_Z9ypphgY",
  authDomain: "darts-f9dc1.firebaseapp.com",
  projectId: "darts-f9dc1",
  storageBucket: "darts-f9dc1.appspot.com",
  messagingSenderId: "994430085491",
  appId: "1:994430085491:web:82d6f545c11ada265bfd06",
  measurementId: "G-GQW35VVWD7"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const auth = getAuth(app)
export const db = getFirestore(app)