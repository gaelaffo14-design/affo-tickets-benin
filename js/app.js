/* ==========================================
   AFFO TICKETS BENIN
   app.js
========================================== */

const eventsContainer = document.getElementById("events-container");
const searchInput = document.getElementById("searchInput");

/* ================================
   Affichage lorsqu'il n'y a encore
   aucun événement.
================================ */

function showEmptyState() {

    eventsContainer.innerHTML = `

        <div class="empty-state">

            <h2>Aucun événement disponible</h2>

            <p>

                Les événements apparaîtront ici dès qu'ils seront publiés depuis AFFO Studio.

            </p>

        </div>

    `;

}

showEmptyState();

/* ================================
      Recherche (préparée)
================================ */

searchInput.addEventListener("keyup", function () {

    const value = this.value.toLowerCase();

    console.log("Recherche :", value);

    // Les résultats seront filtrés automatiquement
    // lorsque Firebase sera connecté.

});

/* ================================
      Chargement Firebase
================================ */

async function loadEvents() {

    /*
      Cette fonction sera terminée
      lorsque firebase.js sera créé.

      Elle récupérera automatiquement
      tous les événements publiés
      dans AFFO Studio.
    */

}

loadEvents();.empty-state{

    text-align:center;

    background:white;

    padding:70px 30px;

    border-radius:20px;

    box-shadow:0 10px 30px rgba(0,0,0,.08);

}

.empty-state h2{

    margin-bottom:15px;

    color:#111827;

}

.empty-state p{

    color:#6b7280;

}
