// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqbeVjVkU2fRcKdtfaQaPWMpP4qq94VK4",
  authDomain: "e-commerce-79d13.firebaseapp.com",
  projectId: "e-commerce-79d13",
  storageBucket: "e-commerce-79d13.appspot.com",
  messagingSenderId: "689521267296",
  appId: "1:689521267296:web:8aea387e4e400d38386905",
  measurementId: "G-C40TM4SKCK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const analytics = getAnalytics(app);

export { app, auth };