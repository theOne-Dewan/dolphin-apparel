import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCoDQsBTsx96X-1PhJcEo7ft7_-tfbhwPc",
    authDomain: "dolphin-db-df503.firebaseapp.com",
    projectId: "dolphin-db-df503",
    storageBucket: "dolphin-db-df503.appspot.com",
    messagingSenderId: "957055837911",
    appId: "1:957055837911:web:3a1a4beecc58786504b292",
    measurementId: "G-9EK77DPXSR"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export const firestore = firebase.firestore();

  export default firebase;