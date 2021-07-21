import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDjakAFTWUhuIrpkQwZeWSi09LVaz_EPn8",
  authDomain: "design-clothing-db.firebaseapp.com",
  projectId: "design-clothing-db",
  storageBucket: "design-clothing-db.appspot.com",
  messagingSenderId: "186534621237",
  appId: "1:186534621237:web:62cf3f15a6ed9f02c9c17c",
  measurementId: "G-0BDN07Y135"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signinWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
