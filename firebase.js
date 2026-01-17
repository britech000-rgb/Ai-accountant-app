import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAGrx99X47_PLYKq4CWb0UX41OD9LCmgaY",
  authDomain: "ai-accountant-bb03e.firebaseapp.com",
  projectId:  "ai-accountant-bb03e",
  storageBucket: "ai-accountant-bb03e.firebasestorage.app",
  messagingSenderId: "470716870384",
  appId: "1:470716870384:web:d863f0c9a2f91e55609c35",
  measurementId: "G-8K0JPW4LN0"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
