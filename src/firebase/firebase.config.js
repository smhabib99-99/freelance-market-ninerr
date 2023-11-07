// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwu6LiY-kYmBQUBsxiTe4T27bCtl1pl2I",
  authDomain: "ninerr-client.firebaseapp.com",
  projectId: "ninerr-client",
  storageBucket: "ninerr-client.appspot.com",
  messagingSenderId: "530581196352",
  appId: "1:530581196352:web:94a22747fa2ca77d3c19a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;