// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAK5cPTVnyTO24m5YfJiFDvrUhwGSmgNlE",
  authDomain: "auth-app-e1100.firebaseapp.com",
  projectId: "auth-app-e1100",
  storageBucket: "auth-app-e1100.appspot.com",
  messagingSenderId: "261991323839",
  appId: "1:261991323839:web:0b36035918d20878f74e0a",
  measurementId: "G-2CBCLNPK74",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Function to sign up with Google
export const signupWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    return result;
  } catch (error) {
    console.error("Google Sign-in Error:", error);
    throw error;
  }
};

export const signupWithData = async(email,password)=>{
    try{
        const result = await createUserWithEmailAndPassword(auth,email,password);
        return result;
    }catch(error){
        console.error("Signup Error:",error);
        throw error;
    }
}