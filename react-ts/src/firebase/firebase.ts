import { initializeApp } from "firebase/app";
import { initializeUI, type FirebaseUI } from "@firebase-ui/core";
import config from "./config";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = config;

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

export const ui: FirebaseUI = initializeUI({ app: firebaseApp });

// Initialize Firebase Google Analytics
// const analytics = getAnalytics(firebaseApp);

// Initialize Firebase Firestore
// const db = getFirestore(app);
