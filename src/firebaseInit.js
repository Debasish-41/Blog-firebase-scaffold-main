// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBURCo6cZZIKuuASlKGE3a6HBfoW08zsdc",
  authDomain: "blogging-app-b1be6.firebaseapp.com",
  projectId: "blogging-app-b1be6",
  storageBucket: "blogging-app-b1be6.appspot.com",
  messagingSenderId: "68784214130",
  appId: "1:68784214130:web:2039d1a05db0e18444b2eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);