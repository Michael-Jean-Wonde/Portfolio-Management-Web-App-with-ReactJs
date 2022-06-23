import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {

  apiKey: "AIzaSyA-R8cDgFlf_VNUQdZN6SCdiSN-wIVbHK4",
  authDomain: "portfolio-management-de464.firebaseapp.com",
  projectId: "portfolio-management-de464",
  storageBucket: "portfolio-management-de464.appspot.com",
  messagingSenderId: "1090422555054",
  appId: "1:1090422555054:web:299fac900c2146293d483f"

};


  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  const db = getFirestore(app);

  export{db, auth};