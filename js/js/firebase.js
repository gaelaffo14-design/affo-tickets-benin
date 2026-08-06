/* ==========================================
   AFFO TICKETS BENIN
   firebase.js
========================================== */

// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";

import {
    getFirestore,
    collection,
    getDocs
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

/* ==========================================
   CONFIGURATION FIREBASE
========================================== */

const firebaseConfig = {

    apiKey: "TON_API_KEY",

    authDomain: "TON_PROJET.firebaseapp.com",

    projectId: "TON_PROJECT_ID",

    storageBucket: "TON_PROJET.firebasestorage.app",

    messagingSenderId: "TON_SENDER_ID",

    appId: "TON_APP_ID"

};

/* ==========================================
   INITIALISATION
========================================== */

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

/* ==========================================
   CHARGEMENT DES ÉVÉNEMENTS
========================================== */

async function loadEvents() {

    const eventsContainer = document.getElementById("events-container");

    if (!eventsContainer) return;

    eventsContainer.innerHTML = "";

    try {

        const querySnapshot = await getDocs(collection(db, "events"));

        if (querySnapshot.empty) {

            eventsContainer.innerHTML = `

                <div class="empty-state">

                    <h2>Aucun événement disponible</h2>

                    <p>

                        Les événements apparaîtront ici dès leur publication depuis AFFO Studio.

                    </p>

                </div>

            `;

            return;

        }

        querySnapshot.forEach((doc) => {

            const event = doc.data();

            const card = document.createElement("div");

            card.className = "event-card";

            card.innerHTML = `

                <div class="event-image">

                    <img src="${event.image || 'images/placeholder.jpg'}" alt="Affiche">

                </div>

                <div class="event-content">

                    <h3 class="event-title">${event.title}</h3>

                    <div class="event-info">📍 ${event.location}</div>

                    <div class="event-info">📅 ${event.date}</div>

                    <div class="event-price">${event.price}</div>

                    <button class="reserve-btn">

                        Réserver

                    </button>

                </div>

            `;

            eventsContainer.appendChild(card);

        });

    } catch (error) {

        console.error(error);

    }

}

loadEvents();
