import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyAdmQLSyvojvWDD-3ANSbPj-SM9hp2EXMw",
    authDomain: "crwn-db-f84e7.firebaseapp.com",
    projectId: "crwn-db-f84e7",
    storageBucket: "crwn-db-f84e7.appspot.com",
    messagingSenderId: "819700928339",
    appId: "1:819700928339:web:6b92f4090adf00c4fe9ba6",
    measurementId: "G-9CLYX0NETX"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


