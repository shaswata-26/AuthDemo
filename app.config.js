// app.config.js
export default {
  expo: {
    name: "AuthApp",
    slug: "AuthApp",
    extra: {
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY || "AIzaSyABxiLXiI4_Z8MRKv5KnQdBAONbvsrF_iU",
      FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN || "auth-9bcc6.firebaseapp.com",
      FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID || "auth-9bcc6",
      FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET || "auth-9bcc6.firebasestorage.app",
      FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID || "677162616026",
      FIREBASE_APP_ID: process.env.FIREBASE_APP_ID || "1:677162616026:web:72c6225c516cc2b8a691e3",
      FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID || "G-45WH6JZ435",
    },
    web: {
      bundler: "webpack",
    },
  },
};