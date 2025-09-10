import { initializeApp } from "firebase/app";
import { initializeUI, type FirebaseUI } from "@firebase-ui/core";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIPFDzf41qbg4jyhpyM9fAyLZD3ldav8E",
  authDomain: "ascendmetrics2.firebaseapp.com",
  projectId: "ascendmetrics2",
  storageBucket: "ascendmetrics2.firebasestorage.app",
  messagingSenderId: "856205422645",
  appId: "1:856205422645:web:595c131aba4d52b206417c",
  measurementId: "G-PKLCMFH8Z0",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

export const ui: FirebaseUI = initializeUI({ app: firebaseApp });

// Initialize Firebase Google Analytics
// const analytics = getAnalytics(firebaseApp);

// Initialize Firebase Firestore
// const db = getFirestore(app);
