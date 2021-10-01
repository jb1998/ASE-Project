import firebase from 'firebase'
import "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCl-riGuRmL1W_mklGrjZrB57x2bAaJH9M",
  authDomain: "landslidestrike.firebaseapp.com",
  databaseURL: "https://landslidestrike.firebaseio.com",
  projectId: "landslidestrike",
  storageBucket: "landslidestrike.appspot.com",
  messagingSenderId: "598048007473",
  appId: "1:598048007473:web:b92523e100c956a71cfc10"
};


firebase.initializeApp(config);
export default firebase;








// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCl-riGuRmL1W_mklGrjZrB57x2bAaJH9M",
//   authDomain: "landslidestrike.firebaseapp.com",
//   databaseURL: "https://landslidestrike.firebaseio.com",
//   projectId: "landslidestrike",
//   storageBucket: "landslidestrike.appspot.com",
//   messagingSenderId: "598048007473",
//   appId: "1:598048007473:web:b92523e100c956a71cfc10"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);