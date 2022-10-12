import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration



const firebaseConfig = {
  apiKey: "AIzaSyAQb_6Xt13Qx7zB03CjHzGRdp6JEcc_Tdo",
  authDomain: "react-user-firebase-5b80a.firebaseapp.com",
  projectId: "react-user-firebase-5b80a",
  storageBucket: "react-user-firebase-5b80a.appspot.com",
  messagingSenderId: "429979121890",
  appId: "1:429979121890:web:9a0b7ae93fbe36c14a46bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 
export const db = getFirestore(app)