// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCPJlgi2seZ6fhO2D8fxEWHt__56zZW6Y",
  authDomain: "devlevet.firebaseapp.com",
  projectId: "devlevet",
  storageBucket: "devlevet.appspot.com",
  messagingSenderId: "456536723100",
  appId: "1:456536723100:web:537c0c867205e747612759",
  measurementId: "G-9BJVSDJZB8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);