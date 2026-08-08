import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

import { auth } from "./firebase.js";

/* =========================
   VÉRIFICATION DE CONNEXION
========================= */

onAuthStateChanged(auth, (user) => {

  if (!user) {
    window.location.href = "login.html";
  }

});

/* =========================
   DÉCONNEXION
========================= */

window.logoutAdmin = async function () {

  try {

    await signOut(auth);

    window.location.href = "login.html";

  } catch (error) {

    console.error("Erreur de déconnexion :", error);

  }

};
