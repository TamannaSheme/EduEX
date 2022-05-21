// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9To_MyB93OxvASJPKeyOpCUzOm8MIC-s",
  authDomain: "course-b63ff.firebaseapp.com",
  projectId: "course-b63ff",
  storageBucket: "course-b63ff.appspot.com",
  messagingSenderId: "505909349222",
  appId: "1:505909349222:web:6ee4797ae13d360c0016a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;