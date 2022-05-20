import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAE0TCwRkZa1o1np9w3o8Nqxv4puvPS2CU",
  authDomain: "house-marketplace-app-1e0c1.firebaseapp.com",
  projectId: "house-marketplace-app-1e0c1",
  storageBucket: "house-marketplace-app-1e0c1.appspot.com",
  messagingSenderId: "917784646761",
  appId: "1:917784646761:web:c8e0284e22338f9096bef8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()