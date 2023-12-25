// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC48Fa6Bl8mJZdP1F5Z09Y3JAeWKK4PnJw",
  authDomain: "portafolio-react-27e84.firebaseapp.com",
  projectId: "portafolio-react-27e84",
  storageBucket: "portafolio-react-27e84.appspot.com",
  messagingSenderId: "155414385760",
  appId: "1:155414385760:web:34e0790e7ecd7eb77fdf05",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
