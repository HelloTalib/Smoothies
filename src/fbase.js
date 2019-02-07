import firebase from "firebase/app";
import "firebase/firestore";
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAz9IevZEWb8PkZDdqGt9H5auzFXnqgTYI",
    authDomain: "smoothies-9f11e.firebaseapp.com",
    databaseURL: "https://smoothies-9f11e.firebaseio.com",
    projectId: "smoothies-9f11e",
    storageBucket: "smoothies-9f11e.appspot.com",
    messagingSenderId: "980199574425"
  };
  firebase.initializeApp(config);

  const db = firebase.firestore();
  export default db;
