// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6Jp8n1TlQechbUsMzfQfcqYinZV4HDS8",
  authDomain: "netflix-4c110.firebaseapp.com",
  projectId: "netflix-4c110",
  storageBucket: "netflix-4c110.appspot.com",
  messagingSenderId: "996824786480",
  appId: "1:996824786480:web:34a8b02113c77eb141aff5",
  measurementId: "G-X4DWHDQH11",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
