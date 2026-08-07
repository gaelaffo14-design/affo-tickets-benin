import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyAnJPUsfDhgfYivH26C1D4hk8_9SlScqDk",
  authDomain: "affo-tickets-benin-b69f5.firebaseapp.com",
  projectId: "affo-tickets-benin-b69f5",
  storageBucket: "affo-tickets-benin-b69f5.firebasestorage.app",
  messagingSenderId: "150391635098",
  appId: "1:150391635098:web:d085617fd7b39a28983323"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
