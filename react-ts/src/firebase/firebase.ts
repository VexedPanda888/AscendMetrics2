import { initializeApp } from "firebase/app";
import { initializeUI, type FirebaseUI } from "@firebase-ui/core";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDIPFDzf41qbg4jyhpyM9fAyLZD3ldav8E",
  authDomain: "ascendmetrics2.firebaseapp.com",
  projectId: "ascendmetrics2",
  storageBucket: "ascendmetrics2.firebasestorage.app",
  messagingSenderId: "856205422645",
  appId: "1:856205422645:web:595c131aba4d52b206417c",
  measurementId: "G-PKLCMFH8Z0",
};

export const firebaseApp = initializeApp(firebaseConfig);

// const analytics = getAnalytics(firebaseApp);

export const auth = getAuth(firebaseApp);

export const ui: FirebaseUI = initializeUI({ app: firebaseApp });
