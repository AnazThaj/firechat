import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBQ7_ZkyotSspPHUZctwcDD_Uo26G99vXU",
  authDomain: "fire-kangaroo-chat-app-test.firebaseapp.com",
  projectId: "fire-kangaroo-chat-app-test",
  storageBucket: "fire-kangaroo-chat-app-test.appspot.com",
  messagingSenderId: "43617576246",
  appId: "1:43617576246:web:d00fdb08df2ee62a713f97",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
