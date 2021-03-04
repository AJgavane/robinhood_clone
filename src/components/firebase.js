import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBpuhYIjTOrdyg7a5e1h9GJJDxHJVkzhOo",
    authDomain: "robinhood-a1e0e.firebaseapp.com",
    projectId: "robinhood-a1e0e",
    storageBucket: "robinhood-a1e0e.appspot.com",
    messagingSenderId: "651361370123",
    appId: "1:651361370123:web:34d7867d16d81d0e45c70e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export {db};