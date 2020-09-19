import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBHGshn2e7-9Eg9qMUfT4XxFMVwMQfYL1E",
  authDomain: "tinder-c3a9b.firebaseapp.com",
  databaseURL: "https://tinder-c3a9b.firebaseio.com",
  projectId: "tinder-c3a9b",
  storageBucket: "tinder-c3a9b.appspot.com",
  messagingSenderId: "652888810462",
  appId: "1:652888810462:web:1377bcf7f41a41e8de734f",
  measurementId: "G-TC892KEQ5Y",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;
