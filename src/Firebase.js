import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD3d0MyJwWx98PGvp0qKs6GN_xb1PKN-vw",
  authDomain: "app-management-j2161p.firebaseapp.com",
  databaseURL: "https://app-management-j2161p-default-rtdb.firebaseio.com",
  projectId: "app-management-j2161p",
  storageBucket: "app-management-j2161p.appspot.com",
  messagingSenderId: "78714852797",
  appId: "1:78714852797:web:9301438c674277c4cdaed4",
  measurementId: "G-52KQ5B1DRD"
};


const app = initializeApp(firebaseConfig); 
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage();
export { db, auth, storage };


