
import { GoogleAuthProvider} from "firebase/auth"
 import firebase from 'firebase/compat/app';
 import 'firebase/compat/auth';
 import 'firebase/compat/firestore';
 

//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLuTr5nflQEIgxrnfFImAGW3Xy9sFliGE",
  authDomain: "college-database-fc8d7.firebaseapp.com",
  projectId: "college-database-fc8d7",
  storageBucket: "college-database-fc8d7.appspot.com",
  messagingSenderId: "672231434682",
  appId: "1:672231434682:web:612eb7b989509921549583",
  measurementId: "G-YN7VVKTPJZ"
};


// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new GoogleAuthProvider();



export { auth, provider };
export default db