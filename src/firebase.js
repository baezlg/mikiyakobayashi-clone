import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAcHA5HFF6JfWx-P2JwTvEPfv1E6IvncuU",
    authDomain: "mikiyakobayashi-clone.firebaseapp.com",
    projectId: "mikiyakobayashi-clone",
    storageBucket: "mikiyakobayashi-clone.appspot.com",
    messagingSenderId: "558696933253",
    appId: "1:558696933253:web:a26c2e81115098e462c6ec",
    measurementId: "G-WZZYVW5H6B"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;