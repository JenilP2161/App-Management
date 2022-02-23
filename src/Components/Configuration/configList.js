import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";



// const two = "'";
var ls = localStorage.getItem("name");
// const ls1 = two.concat(ls).concat("'");
const string = JSON.parse(ls);


 

const secondConfig = {
  apiKey: string.api,
  authDomain: string.domain,
  databaseURL: string.dbUrl,
  projectId: string.projectId,
  storageBucket: string.storageBucket,
  messagingSenderId: string.msgId,
  appId: string.appId,
  measurementId: string.mId,
};

export function fcg(){
  return secondConfig;
}

const app = initializeApp(secondConfig, "secondary");
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage();
export { db, auth, storage};
