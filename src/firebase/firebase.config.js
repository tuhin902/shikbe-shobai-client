// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBRQol94-7jEc_PRAFuedSW0Sj1ZaBiZ5E",
    authDomain: "shikbo-shobai.firebaseapp.com",
    projectId: "shikbo-shobai",
    storageBucket: "shikbo-shobai.appspot.com",
    messagingSenderId: "521692234358",
    appId: "1:521692234358:web:d064cd9e4d28ee0877d557"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;