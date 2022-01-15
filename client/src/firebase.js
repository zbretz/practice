// _______________ FIREBASE INFO ______________________________
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChange, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Actual values are stored in a .env.local file (you must create your own local file with your config values for this to work)
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Use Auth & Detect Auth State
const auth = getAuth(app);

onAuthStateChanged(auth, user => {
  if (user !== null) {
    console.log(`user logged in! ${user}`)
  } else {
    console.log(`user logged out! ${user} `)
  }
})

// Create User
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log(`${user} is signed up successfully!`)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(`Error: ${errorCode} ${errorMessage}`)
    // ..
  });

// Sign In
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log(`${user} is signed in!`)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(`Error: ${errorCode} ${errorMessage}`)
  });

// Sign Out
signOut(auth).then(() => {
  // Sign-out successful.
  console.log(`${user} is signed out!`)
}).catch((error) => {
  // An error happened.
  console.log(`Error: ${error}`)
});

// Make functions available
export auth
export default app
