// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRy0YcUpG7dyjRIY48Y2uuysWYhpMuvf4",
  authDomain: "fitallies-849b8.firebaseapp.com",
  projectId: "fitallies-849b8",
  storageBucket: "fitallies-849b8.appspot.com",
  messagingSenderId: "863375123812",
  appId: "1:863375123812:web:bba8579f150d5687bdc671",
  measurementId: "G-6HE4R5FL2L"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP,{
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);