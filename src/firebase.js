import firebase from "firebase/compat/app";
import "firebase/compat/auth";

import { getAuth, signInWithCustomToken } from "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAUTvny85wx8QJwNoEcumCabKi11JKsavk",
  authDomain: "jewelry-store-9b864.firebaseapp.com",
  databaseURL: "https://jewelry-store-9b864-default-rtdb.firebaseio.com",
  projectId: "jewelry-store-9b864",
  storageBucket: "jewelry-store-9b864.appspot.com",
  messagingSenderId: "817724265451",
  appId: "1:817724265451:web:5010a97887e1aa7e85bfae",
});

export const auth = app.auth();
export default app;
