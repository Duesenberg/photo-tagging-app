import React from 'react';
import ReactDOM from 'react-dom/client';
import RouteSwitch from './RouteSwitch';
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import "./styles/index.css";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOo2i-gna8EUzdTMvZYOK5-TlzoHKoxxI",
  authDomain: "photo-tagging-app-b3302.firebaseapp.com",
  projectId: "photo-tagging-app-b3302",
  storageBucket: "photo-tagging-app-b3302.appspot.com",
  messagingSenderId: "175608552612",
  appId: "1:175608552612:web:43f8ce347b2f29bed09a31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

//Getting map area data from Firebase
const docRef = doc(db, "map-areas", "areas");
const areasDoc = getDoc(docRef);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouteSwitch areasDoc={areasDoc} db={db} />
  </React.StrictMode>
);
