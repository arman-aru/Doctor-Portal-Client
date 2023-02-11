// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKeyH: process.env.REACT_APP_apiKey,
  authDomainH: process.env.REACT_APP_authDomain,
  projectIdH: process.env.REACT_APP_projectId,
  storageBucketH: process.env.REACT_APP_storageBucket,
  messagingSenderIdH: process.env.REACT_APP_messagingSenderId,
  appIdH: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;