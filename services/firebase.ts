import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABxiLXiI4_Z8MRKv5KnQdBAONbvsrF_iU",
  authDomain: "auth-9bcc6.firebaseapp.com",
  projectId: "auth-9bcc6",
  storageBucket: "auth-9bcc6.firebasestorage.app",
  messagingSenderId: "677162616026",
  appId: "1:677162616026:web:72c6225c516cc2b8a691e3",
  measurementId: "G-45WH6JZ435"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Test function to verify Firestore connection
export const testFirestore = async (): Promise<void> => {
  try {
    const docRef = await addDoc(collection(db, "test"), {
      message: "Firestore connection test",
      timestamp: new Date()
    });
    console.log("Firestore test successful. Document ID:", docRef.id);
  } catch (e) {
    console.error("Error testing Firestore:", e);
  }
};