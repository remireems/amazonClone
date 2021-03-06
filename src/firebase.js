import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC8wXVB_RoNDynbM49VkglSSUIA8GFa0-k",
  authDomain: "clone-bc0bd.firebaseapp.com",
  projectId: "clone-bc0bd",
  storageBucket: "clone-bc0bd.appspot.com",
  messagingSenderId: "990087384809",
  appId: "1:990087384809:web:4209281c943b3b8de26a78",
  measurementId: "G-GLH9D8ZRPN"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }