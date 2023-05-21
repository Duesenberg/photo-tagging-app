import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initializeApp } from "firebase/app";

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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
