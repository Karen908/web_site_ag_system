// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQ5QVx87pSN-fxSFgyNOd6ZoSkZ3SW6Gw",
  authDomain: "cn-comentarios.firebaseapp.com",
  projectId: "cn-comentarios",
  storageBucket: "cn-comentarios.appspot.com",
  messagingSenderId: "661466850171",
  appId: "1:661466850171:web:958451896ea9de5b6553de",
  measurementId: "G-V52LB18GPG"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
