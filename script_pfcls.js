
// Get the modal
const modal = document.getElementById("modal");

// Get the button that opens the modal
const btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
const croix = document.getElementById("bouton-fermer");

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
croix.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//Fonction de l'ordinateur
const pierre = "img/pierre.jpg";
const feuille = "img/feuille.jpg";
const ciseaux = "img/ciseaux.jpg";
const lezard = "img/lezard.jpg";
const spock = "img/spock.jpg";

const options = [pierre, feuille, ciseaux, lezard , spock];

const imgContainer = document.getElementById("image-options-ordi");
const imgChoixOrdi = document.getElementById("image-choix-ordi");
const imgChoixUtil = document.getElementById("image-choix-util");
const optionsUtilisateur = document.getElementById("allBox");
const texteResultats = document.getElementById("texte-resultat");

/*redemarer une partie*/
const joueurTitle = document.getElementById("joueur-title");
const rejouer = document.getElementById("rejouer");
rejouer.onclick = function() {
  rejouer.addEventListener('click',location.reload());
}

//Tableau des résultats
const tableauDesResultats = [
  ['Egalité!', 'Perdu! Le papier bat la pierre!', 'Gagné! La pierre bat les ciseaux!', 'Gagné! La pierre écrase le lézard!', 'Perdu! Spock détruit la pierre!'],
  ['Gagné! Le papier bat la pierre!', 'Egalité!', 'Perdu! Les ciseaux coupent le papier!', 'Perdu! Le lézard mange le papier!', 'Gagné! Le papier repousse Spock!'],
  ['Perdu! La pierre bat les ciseaux!', 'Gagné! Les ciseaux coupent le papier!' , 'Egalité', 'Gagné! les ciseaux décapitent le lézard!', 'Perdu! Spock écrabouille les ciseaux!'],
  ['Perdu! La pierre écrase le lézard!', 'Perdu! les ciseaux décapitent le lézard!', 'Perdu! les ciseaux décapitent le lézard!', 'Egalité!', 'Gagné! Le lézard empoisonne Spock!'],
  ['Gagné! Spock détruit la pierre!', 'Perdu! Le papier repousse Spock!', 'Gagné! Spock écrabouille les ciseaux!', 'Perdu! Le lézard empoisonne Spock!', 'Egalité!']
];

function computerPlay(choixUtilisateur) {
  let indexChoixOrdi = Math.floor(Math.random() * options.length);
  let indexChoixUtilisateur = options.indexOf(choixUtilisateur);
  let choixOrdi = options[indexChoixOrdi]
  imgContainer.style.display = "none";
  optionsUtilisateur.style.display = "none";
  imgChoixOrdi.style.backgroundImage = `url(${choixOrdi})`;
  imgChoixUtil.style.backgroundImage = `url(${choixUtilisateur})`;
  imgChoixUtil.style.display = "block";
  imgChoixOrdi.style.display = "block";
  rejouer.style.display = "block";
  joueurTitle.style.display = "block";
  texteResultats.innerText = tableauDesResultats[indexChoixUtilisateur][indexChoixOrdi];
}

const btnPierre = document.getElementById("boxPierre");
btnPierre.addEventListener("click", function() {
  computerPlay(pierre);
})

const btnFeuille = document.getElementById("boxFeuille");
btnFeuille.addEventListener("click", function() {
  computerPlay(feuille); 
})

const btnCiseaux = document.getElementById("boxCiseaux");
btnCiseaux.addEventListener("click", function() {
  computerPlay(ciseaux);
})

const btnLezard = document.getElementById("boxLezard");
btnLezard.addEventListener("click", function() {
  computerPlay(lezard);
})

const btnSpock = document.getElementById("boxSpock");
btnSpock.addEventListener("click", function() {
  computerPlay(spock);
})



