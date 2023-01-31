import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
      apiKey: "AIzaSyDjS0KlJ7wijK7QeaOpJOrOFoUuPhDXlkY",
      authDomain: "react-authentication-ac0f4.firebaseapp.com",
      projectId: "react-authentication-ac0f4",
      storageBucket: "react-authentication-ac0f4.appspot.com",
      messagingSenderId: "154872460280",
      appId: "1:154872460280:web:7d3218724d4ddfa6d99c0d",
      measurementId: "G-VY5ZJBPKMZ"
      };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

