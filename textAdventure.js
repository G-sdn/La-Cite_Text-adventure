const textElement = document.getElementById("text");
const optionButtonsElement = document.getElementById("choix");

function startGame() {
  montrerCarte(1);
}

function montrerCarte(IndexDeLaCarte) {
  var laCarteQuonVeutMontrer = {};

  //Loop à travers les choix de cartes
  choixDeCartes.forEach(function (carte) {
    if (carte.id === IndexDeLaCarte) {
    textElement.innerHTML = carte.text;

    //
    optionButtonsElement.textContent = 'Salut';

    //Loop à travers les boutons dans la carte
    carte.options.forEach(function (choix){

        //créer le nouveau bouton
        const bouton = document.createElement("button");

        //ajouter la classe CSS "btn", comme les autres boutons
        bouton.classList.add("btn");

        //Changer le texte à l'intérieur de notre nouveau bouton
        bouton.innerText = choix;

        //Ajouter ce bouton à notre grid de bouton
        optionButtonsElement.appendChild(bouton);
      })
    }
  });

  // const carte = choixDeCartes.find((carte) => {
  //   console.log(carte);
  //   if (carte.id == 1) {
  //     console.log("J'ai trouvé la bonne carte");
  //   }
  // });
}

const choixDeCartes = [
  //Cartes #1
  {
    id: 1,
    text: "Le texte a été modifié",
    options: ["Choix #1","Choix #2","Choix #3"],
  },
];

startGame();
