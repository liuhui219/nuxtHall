/** @format */

import {initializeApp} from "firebase/app";
import {GoogleAuthProvider, getAuth, signInWithPopup} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzmYEyEOaRZT15EdyqtImBVXV02XgY3nw",
  authDomain: "games-cc36a.firebaseapp.com",
  projectId: "games-cc36a",
  storageBucket: "games-cc36a.appspot.com",
  messagingSenderId: "281973367763",
  appId: "1:281973367763:web:f5f120fdc58794803dc526",
  measurementId: "G-CPF0DDW6YE",
};

// Initialize Firebase

export const initialize = () => {
  const app = initializeApp(firebaseConfig);

  return {app};
};

export const GoogleSign = () => {
  const provider = new GoogleAuthProvider();

  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      // 用户token
      const token = credential?.accessToken;
      // 用户登录后所获得的信息 The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};
