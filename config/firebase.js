// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQGgaC04h-lJvtxorOxvTECOoDphwwWtM",
  authDomain: "react-native-login-4d252.firebaseapp.com",
  projectId: "react-native-login-4d252",
  storageBucket: "react-native-login-4d252.appspot.com",
  messagingSenderId: "15199227425",
  appId: "1:15199227425:web:32e57dfe62ce39bcf79d60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)