import firebase from "firebase";
import User from "../Models/User";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBZXpmbpSgkfP47AelIx712LHNqNidtrRo",
  authDomain: "messenger-univ-app.firebaseapp.com",
  databaseURL: "https://messenger-univ-app.firebaseio.com",
  projectId: "messenger-univ-app",
  storageBucket: "messenger-univ-app.appspot.com",
  messagingSenderId: "18723741552",
  appId: "1:18723741552:web:92c250ec457b94407d39b5",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

const createUser = (firstname, lastname, email, password) => {
  console.log(firstname, lastname, email, password);
  if (auth.currentUser == null) {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authResult) => {
       

        console.log(firstname, lastname, email, authResult.user.uid);
        db.collection("users")
          .doc(authResult.user.uid)
          .set({
            'firstname': firstname,
            'lastname': lastname,
            'email': email,
            'id': String(authResult.user.uid),
          })
          .catch((error) => alert(error.message))
          .then(() => {
            console.log("db done");
          });
      })
      .catch((error) => {
        alert(error.message);
      });
  } else {
    alert(auth.currentUser.email, " is logged in");
  }
};

export { db, auth, storage, createUser };
