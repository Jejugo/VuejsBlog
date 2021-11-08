import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

export const initializeFirebase = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyDuNiBWUDKeDM7DgZpw08Up3gH8wwhhqfk",
    authDomain: "blog-100bc.firebaseapp.com",
    projectId: "blog-100bc",
    storageBucket: "blog-100bc.appspot.com",
    messagingSenderId: "678510910602",
    appId: "1:678510910602:web:74c60d9056919e8ff2a173",
    measurementId: "G-HL59RKLDWV",
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const db = getFirestore(firebaseApp);
  const userCollection = collection(db, "users");

  return {
    createUser: (user) => userCollection.add(user),

    getUser: async (id) => {
      try {
        const users = await getDocs(userCollection);
        const userList = users.docs.map((doc) => doc.data());
        console.log(userList);
      } catch (err) {
        console.log(err);
      }
    },
  };
};