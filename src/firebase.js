// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyCMw65hyLM2qj7vep0egf3ZlTmaAPysOK4",
//     authDomain: "todo-firebase-cd28b.firebaseapp.com",
//     projectId: "todo-firebase-cd28b",
//     storageBucket: "todo-firebase-cd28b.appspot.com",
//     messagingSenderId: "219205547416",
//     appId: "1:219205547416:web:f3c11fde6c07f8c5c827ed",
//     measurementId: "G-ESKL9X6MEH"
//   };

import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCMw65hyLM2qj7vep0egf3ZlTmaAPysOK4',
  authDomain: 'todo-firebase-cd28b.firebaseapp.com',
  projectId: 'todo-firebase-cd28b',
  storageBucket: 'todo-firebase-cd28b.appspot.com',
  messagingSenderId: '219205547416',
  appId: '1:219205547416:web:f3c11fde6c07f8c5c827ed',
  measurementId: 'G-ESKL9X6MEH',
});

const db = firebaseApp.firestore();

export default db;
