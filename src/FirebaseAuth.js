// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

    // apiKey: process.env.REACT_APP_API_KEY,
    // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    // projectId: process.env.REACT_APP_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_APP_ID

    apiKey: "AIzaSyDK1l6pD4zwB4evcraeRVoGEadQnSXbYUU",
    authDomain: "car-parts-manufacturers.firebaseapp.com",
    projectId: "car-parts-manufacturers",
    storageBucket: "car-parts-manufacturers.appspot.com",
    messagingSenderId: "286727777130",
    appId: "1:286727777130:web:ecce94117eccc939d99313"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default auth;