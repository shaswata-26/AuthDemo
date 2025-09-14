import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import Constants from 'expo-constants';

// Get Firebase config from Expo constants
const extra = Constants.expoConfig?.extra || {};

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: extra.FIREBASE_API_KEY,
  authDomain: extra.FIREBASE_AUTH_DOMAIN,
  projectId: extra.FIREBASE_PROJECT_ID,
  storageBucket: extra.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: extra.FIREBASE_MESSAGING_SENDER_ID,
  appId: extra.FIREBASE_APP_ID,
  measurementId: extra.FIREBASE_MEASUREMENT_ID
};

// Check if config is valid
const isConfigValid = Object.values(firebaseConfig).every(value => 
  value && !value.includes('undefined') && !value.includes('your-')
);

if (!isConfigValid) {
  console.error('Invalid Firebase configuration. Please check your environment variables.');
}

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