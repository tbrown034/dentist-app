import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCEIp6kIuz4ILlQac_Qd502irjqEDgk8O4",
  authDomain: "dentist-app-938e1.firebaseapp.com",
  projectId: "dentist-app-938e1",
  storageBucket: "dentist-app-938e1.appspot.com",
  messagingSenderId: "157847711642",
  appId: "1:157847711642:web:713de08bd21b69059e1423",
  measurementId: "G-SYZ1CGNH4F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const firestore = getFirestore(app)