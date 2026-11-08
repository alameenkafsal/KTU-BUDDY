import { initializeApp } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-app.js";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/13.2.0/firebase-auth.js";

import {
    getFirestore,
    doc,
    setDoc,
    getDoc
} from "https://www.gstatic.com/firebasejs/13.2.0/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyDy6AnKIdwLEURIjmqI83NdKEz2ChDNGLg",
    authDomain: "ktu-buddy.firebaseapp.com",
    projectId: "ktu-buddy",
    storageBucket: "ktu-buddy.firebasestorage.app",
    messagingSenderId: "613649707365",
    appId: "1:613649707365:web:2fbfc2f0308fef7af9318c",
    measurementId: "G-LLDFG7LJT9"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);


export {
    app,
    auth,
    db,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail,
    doc,
    setDoc,
    getDoc
};
