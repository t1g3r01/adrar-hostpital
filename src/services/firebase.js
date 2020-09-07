import firebase from 'firebase';

const firebaseApp = firebase.initializeApp(
    {
        apiKey: "AIzaSyBZXpmbpSgkfP47AelIx712LHNqNidtrRo",
        authDomain: "messenger-univ-app.firebaseapp.com",
        databaseURL: "https://messenger-univ-app.firebaseio.com",
        projectId: "messenger-univ-app",
        storageBucket: "messenger-univ-app.appspot.com",
        messagingSenderId: "18723741552",
        appId: "1:18723741552:web:92c250ec457b94407d39b5"
    }
);

const db = firebaseApp.firestore();
const auth = firebase.auth();   
const storage = firebase.storage();

export {db,auth,storage}