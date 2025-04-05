import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAK5cPTVnyTO24m5YfJiFDvrUhwGSmgNlE",
  authDomain: "auth-app-e1100.firebaseapp.com",
  projectId: "auth-app-e1100",
  storageBucket: "auth-app-e1100.appspot.com",
  messagingSenderId: "261991323839",
  appId: "1:261991323839:web:0b36035918d20878f74e0a",
  measurementId: "G-2CBCLNPK74",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const storage = getStorage(app);

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

export const signupWithData = async (email, password) => {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    return result;
  } catch (error) {
    console.error("Signup Error:", error);
    throw error;
  }
};

export const uploadFile = async (file) => {
  try {
    const storageRef = ref(storage, `uploads/${file.name}`);
    const snapshot = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);
    return downloadURL;
  } catch (error) {
    console.error("File Upload Error:", error);
    throw error;
  }
};
