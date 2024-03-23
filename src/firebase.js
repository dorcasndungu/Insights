// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByw5s7UdIOPBsvHayiqCgWoRuFFK-jfbs",
  authDomain: "insights-122fd.firebaseapp.com",
  projectId: "insights-122fd",
  storageBucket: "insights-122fd.appspot.com",
  messagingSenderId: "379044128232",
  appId: "1:379044128232:web:d3655958bddbe22856705d",
  measurementId: "G-EKS8RY0124"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);