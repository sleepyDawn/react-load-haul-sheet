import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyB9ahZzh3KI0XCXZ-m6FW1W6gHdgxZVZsM",
  authDomain: "react-pi-sheet.firebaseapp.com",
  databaseURL: "https://react-pi-sheet-default-rtdb.firebaseio.com",
  projectId: "react-pi-sheet",
  storageBucket: "react-pi-sheet.appspot.com",
  messagingSenderId: "172261454102",
  appId: "1:172261454102:web:c5db0641cd3206c2cce037",
  measurementId: "G-FC1W6YYK66"
}

// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.FIREBASE_DATABASE_URL,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.FIREBASE_APP_ID,
//   measurementId: process.env.FIREBASE_MEASUREMENT_ID,
// };

firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };
