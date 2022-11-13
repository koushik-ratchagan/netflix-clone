
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';




const firebaseConfig = {
    apiKey: "AIzaSyB9CiqxbNLWgIdplub7BYs7NJVm-YAdzlE",
    authDomain: "netflix-clone-9491d.firebaseapp.com",
    projectId: "netflix-clone-9491d",
    storageBucket: "netflix-clone-9491d.appspot.com",
    messagingSenderId: "573896334272",
    appId: "1:573896334272:web:a5612dc8ef5f3193318625"
  };


  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);

 export  const auth = getAuth(app);


  export default db