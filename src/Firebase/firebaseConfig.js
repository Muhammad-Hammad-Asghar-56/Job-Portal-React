// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCQF_xrpxSMiSLA68-1wXYBqVlzxsoNo7s",
  authDomain: "job-portal-65c07.firebaseapp.com",
  projectId: "job-portal-65c07",
  storageBucket: "job-portal-65c07.appspot.com",
  messagingSenderId: "528051027203",
  appId: "1:528051027203:web:66776254dddb86ea73bd36",
  measurementId: "G-W1MVJLN7VT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;