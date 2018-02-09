// Variables utilisées pour les fonctions >.<
var button = document.querySelector('#button-parent'); // Selection du parent pour connaitre la longueur de l'array des boutons
var filterBtnArray = document.querySelectorAll('.btn_section'); //Selectionne tout les boutons avec la class btn_section
var buttons = document.querySelector('#button-parents'); // Selection du parent pour connaitre la longueur de l'array des boutons
var filterBtnArrays = document.querySelectorAll('.btn_sections'); //Selectionne tout les boutons avec la class btn_section
var btnArray = []; // création d'un array vide movie
var btnArrays = []; // création d'un array vide série
var randImgArray = [];
var statutGenre = "";
var statutGenres = "";
//array des iframes des vidéos shop
var bottomCarTrailer = [ //10films dans le carousel
  "https://www.youtube.com/embed/JNwNXF9Y6kY", //il faudra changer les adresses du embed Code
  "https://www.youtube.com/embed/TElJs93LLs8", //pour que ce soit les bonnes relations par rapport au images
  "https://www.youtube.com/embed/RMhbr2XQblk", //la flemme d'enregistrer tout les nouveaux liens ...
  "https://www.youtube.com/embed/znmZoVkCjpI",
  "https://www.youtube.com/embed/LEH7nDkiPEk",
  "https://www.youtube.com/embed/JNwNXF9Y6kY", //il faudra changer les adresses du embed Code
  "https://www.youtube.com/embed/TElJs93LLs8", //pour que ce soit les bonnes relations par rapport au images
  "https://www.youtube.com/embed/RMhbr2XQblk", //la flemme d'enregistrer tout les nouveaux liens ...
  "https://www.youtube.com/embed/znmZoVkCjpI",
  "https://www.youtube.com/embed/LEH7nDkiPEk"
]
var shopVideos = [ //Cfr supra !!
  ["https://www.youtube.com/embed/JNwNXF9Y6kY", "Tarte Wars", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 1980, "Scifi", 7], //Star Wars
  ["https://www.youtube.com/embed/TElJs93LLs8", "Tarte Wars", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 2016, "Action", 12], //Grave
  ["https://www.youtube.com/embed/LEH7nDkiPEk", "Tarte Wars", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 2004, "Action", 10], //Survive Style 5
  ["https://www.youtube.com/embed/RMhbr2XQblk", "Tarte Wars", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 2008, "Action", 10], //Gran Torino
  ["https://www.youtube.com/embed/4TLppsfzQH8", "Tarte Wars", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 2015, "Action", 10], //Limitless
  ["https://www.youtube.com/embed/yfDUv3ZjH2k", "Tarte Wars", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 2004, "Comédie", 10], //Shaun of the dead
  ["https://www.youtube.com/embed/znmZoVkCjpI", "Tarte Wars", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 1995, "Horreur", 7], //Seven
  ["https://www.youtube.com/embed/hFY-f7BXwZw", "Tarte Wars", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 2016, "Scifi", 10], //Swiss army man
  ["https://www.youtube.com/embed/JNwNXF9Y6kY", "Tarte Wars", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 1980, "Scifi", 7], //Star Wars
  ["https://www.youtube.com/embed/TElJs93LLs8", "Tarte Wars", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 2016, "Action", 12], //Grave
  ["https://www.youtube.com/embed/LEH7nDkiPEk", "Tarte Wars", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 2004, "Action", 10], //Survive Style 5
  ["https://www.youtube.com/embed/RMhbr2XQblk", "Tarte Wars", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 2008, "Action", 10], //Gran Torino
  ["https://www.youtube.com/embed/4TLppsfzQH8", "Tarte Wars", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 2015, "Action", 10], //Limitless
  ["https://www.youtube.com/embed/yfDUv3ZjH2k", "Tarte Wars", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 2004, "Comédie", 10], //Shaun of the dead
  ["https://www.youtube.com/embed/znmZoVkCjpI", "Tarte Wars", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 1995, "Horreur", 7], //Seven
  ["https://www.youtube.com/embed/hFY-f7BXwZw", "Tarte Wars", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 2016, "Scifi", 10], //Swiss army man
  ["https://www.youtube.com/embed/JNwNXF9Y6kY", "Tarte Wars", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 1980, "Scifi", 7], //Star Wars
  ["https://www.youtube.com/embed/TElJs93LLs8", "Tarte Wars", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 2016, "Action", 12], //Grave
  ["https://www.youtube.com/embed/LEH7nDkiPEk", "Tarte Wars", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 2004, "Action", 10], //Survive Style 5
  ["https://www.youtube.com/embed/RMhbr2XQblk", "Tarte Wars", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 2008, "Action", 10], //Gran Torino
  ["https://www.youtube.com/embed/4TLppsfzQH8", "Tarte Wars", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 2015, "Action", 10], //Limitless
  ["https://www.youtube.com/embed/yfDUv3ZjH2k", "Tarte Wars", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 2004, "Comédie", 10], //Shaun of the dead
  ["https://www.youtube.com/embed/znmZoVkCjpI", "Tarte Wars", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 1995, "Horreur", 7], //Seven
  ["https://www.youtube.com/embed/hFY-f7BXwZw", "Tarte Wars", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 2016, "Scifi", 10]
]
//Array des sources images pour le footer
var alternateImgFooter = [
  "assets/img/1.jpeg",
  "assets/img/2.jpeg",
  "assets/img/3.jpeg",
  "assets/img/4.jpeg",
  "assets/img/5.jpeg",
  "assets/img/6.jpeg",
  "assets/img/7.jpeg",
  "assets/img/8.jpeg",
  "assets/img/8.jpeg",
  "assets/img/9.jpeg",
  "assets/img/10.jpeg",
  "assets/img/11.jpeg",
  "assets/img/12.jpeg",
  "assets/img/13.jpeg",
  "assets/img/14.jpeg",
  "assets/img/15.jpeg"
]
//Les fonctions de tri à proprement parler avec un petit twist
//sur le fait d'avoir déjà cliquer sur le bouton + ou - de film
//histoire de faire ça bien autonome.
var triGenreUp = function(x) { //quand plus de films est selectionné
  $('.' + x).not('.hide').removeClass('d-none');
  $('.' + x).not('.hide').addClass('d-block');
  if ($('.v-movies-js').not("." + x)) {
    $('.v-movies-js').not("." + x).removeClass('d-block');
    $('.v-movies-js').not("." + x).addClass('d-none');
  }
}
var triGenreDown = function(y) { //quand moins de films est selectionné
  $('.v-movies-js').removeClass('d-none');
  $('.v-movies-js').addClass('d-block');
  if ($('.v-movies-js').not("." + y)) {
    $('.v-movies-js').not("." + y).removeClass('d-block');
    $('.v-movies-js').not("." + y).addClass('d-none');
  }
}
//function tri pour séries ( pas envie de refaire une fonction générale)
var triGenreUps = function(z) { //quand plus de films est selectionné
  $('.' + z).not('.hide').removeClass('d-none');
  $('.' + z).not('.hide').addClass('d-block');
  if ($('.v-series-js').not("." + z)) {
    $('.v-series-js').not("." + z).removeClass('d-block');
    $('.v-series-js').not("." + z).addClass('d-none');
  }
}
var triGenreDowns = function(t) { //quand moins de films est selectionné
  $('.v-series-js').removeClass('d-none');
  $('.v-series-js').addClass('d-block');
  if ($('.v-series-js').not("." + t)) {
    $('.v-series-js').not("." + t).removeClass('d-block');
    $('.v-series-js').not("." + t).addClass('d-none');
  }
}

//Function pour le random des images dans le footer
//
var randomize = function() {
  return Math.floor(Math.random() * (alternateImgFooter.length))
};
document.addEventListener("DOMContentLoaded", function(event) {
  var elemRandom = document.querySelectorAll('.footAllezImg');
  for (k = 0; k < 6; k++) {
    elemRandom = document.querySelectorAll('.footAllezImg')[k];
    elemRandom.src = alternateImgFooter[randomize()];
  }
});
//Requête pour enregistrer les boutons présents sur les catégories !!
//au niveau des films , (note perso : a recopier pour les séries !!!)
for (i = 0; i < button.children.length; i++) { //début de boucle for sur la longueur de l'array des enfants grâce à "l'encre" du parent
  var filterBtnContent = document.querySelectorAll('.btn_section')[i].innerHTML; // Selectionne chaque bouton pour en connaitre le contenu HTML pour créer les genres présents dans l'array créé
  btnArray.push(filterBtnContent);
} // Stocke chaque value dans l'array
for (j = 0; j < buttons.children.length; j++) { //début de boucle for sur la longueur de l'array des enfants grâce à "l'encre" du parent
  var filterBtnContents = document.querySelectorAll('.btn_sections')[j].innerHTML; // Selectionne chaque bouton pour en connaitre le contenu HTML pour créer les genres présents dans l'array créé
  btnArrays.push(filterBtnContents);
}
//Function + et - de films Cfr plus bas pour les fonctions
//sur les séries !! Séparations sinon trop de condition à rajouter pour
//faire une fonction qui tourne selon la catégorie en plus

$("#btnplusfilm").click(function(event) {
  if ($('#btnplusfilm').html() === "Plus de Films" && statutGenre === "") {
    $('.v-movies-js.hide').addClass('d-block');
    $('.v-movies-js.hide').removeClass('d-none');
    $('#btnplusfilm').html("Moins de Films");
  } else if ($('#btnplusfilm').html() === "Plus de Films" && statutGenre != "") {
    if ($('.v-movies-js').hasClass(statutGenre)) {
      $('.v-movies-js').addClass('d-none');
      $('.v-movies-js').removeClass('d-block');
      $('.' + statutGenre).addClass('d-block');
      $('.' + statutGenre).removeClass('d-none');
      $('#btnplusfilm').html("Moins de Films");
    }
  } else if ($('#btnplusfilm').html() === "Moins de Films" && statutGenre === "") {
    $('.v-movies-js.hide').addClass('d-none');
    $('.v-movies-js.hide').removeClass('d-block');
    $('#btnplusfilm').html("Plus de Films");
  } else if ($('#btnplusfilm').html() === "Moins de Films" && statutGenre != "") {
    if ($('.v-movies-js').hasClass(statutGenre)) {
      $('.v-movies-js.hide').addClass('d-none');
      $('.v-movies-js.hide').removeClass('d-block');
      $('#btnplusfilm').html("Plus de Films");
    }
  }
});

//Function tri par Genre si les boutons sont plus de film ou moins de films
//Cette fonction fonctionne peut importe le nombre de ligne , il suffit
//de respecter la manière dont les boutons sont écrits et le reste se fait dynamiquement
//il suffit aussi de rajouter un cas dans les "else if" avant le dernier qui est le cas par défaut !!
//la fonction est lisible , il suffit de copier coller une des condition entre la 1ere et la derniere
//et adapter selon le nouveau genre !
$('.btn_section').click(function(event) {
  if ($('#btnplusfilm').html() === "Plus de Films") {
    if (btnArray[($(this).val()) - 1] === "All") { // Selection du bouton "All" ( pareil pour les autres selections avec le bon genre)
      statutGenre = "";
      if ($('.v-movies-js').not('.hide')) {
        $('.v-movies-js').removeClass('d-none');
        $('.v-movies-js').addClass('d-block');
        $('.v-movies-js.hide').removeClass('d-block');
        $('.v-movies-js.hide').addClass('d-none');
      }
    } else if (btnArray[($(this).val()) - 1] === "Thriller") {
      statutGenre = "Thriller";
      triGenreUp(statutGenre);
    } else if (btnArray[($(this).val()) - 1] === "Policiers") {
      statutGenre = "Policiers";
      triGenreUp(statutGenre);
    } else if (btnArray[($(this).val()) - 1] === "Comedie") {
      statutGenre = "Comedie";
      triGenreUp(statutGenre);
    } else if (btnArray[($(this).val()) - 1] === "Scifi") {
      statutGenre = "Scifi";
      triGenreUp(statutGenre);
    } else if (btnArray[($(this).val()) - 1] === "Dramatique") {
      statutGenre = "Dramatique";
      triGenreUp(statutGenre);
    } else if (btnArray[($(this).val()) - 1] === "Aventure") {
      statutGenre = "Aventure";
      triGenreUp(statutGenre);
    } else {
      if ($('.v-movies-js').not('.hide')) {
        $('.v-movies-js').removeClass('d-none');
        $('.v-movies-js').addClass('d-block');
      }
    }
  } else if ($('#btnplusfilm').html() === "Moins de Films") {
    if (btnArray[($(this).val()) - 1] === "All") { // Selection du bouton "All" ( pareil pour les autres selections avec le bon genre)
      statutGenre = "";
      $('.v-movies-js').removeClass('d-none');
      $('.v-movies-js').addClass('d-block');
      $('.v-movies-js.hide').removeClass('d-block');
      $('.v-movies-js.hide').addClass('d-none');
    } else if (btnArray[($(this).val()) - 1] === "Thriller") {
      statutGenre = "Thriller";
      triGenreDown(statutGenre);
    } else if (btnArray[($(this).val()) - 1] === "Policiers") {
      statutGenre = "Policiers";
      triGenreDown(statutGenre);
    } else if (btnArray[($(this).val()) - 1] === "Comedie") {
      statutGenre = "Comedie";
      triGenreDown(statutGenre);
    } else if (btnArray[($(this).val()) - 1] === "Scifi") {
      statutGenre = "Scifi";
      triGenreDown(statutGenre);
    } else if (btnArray[($(this).val()) - 1] === "Dramatique") {
      statutGenre = "Dramatique";
      triGenreDown(statutGenre);
    } else if (btnArray[($(this).val()) - 1] === "Aventure") {
      statutGenre = "Aventure";
      triGenreDown(statutGenre);
    } else {
      if ($('.v-movies-js').hasClass('hide')) {
        $('.v-movies-js.hide').removeClass('d-none');
        $('.v-movies-js.hide').addClass('d-block');
      }
    }
  }
});


$("#btnplusserie").click(function(event) {
  if ($('#btnplusserie').html() === "Plus de Séries" && statutGenres === "") {
    $('.v-series-js.hide').addClass('d-block');
    $('.v-series-js.hide').removeClass('d-none');
    $('#btnplusserie').html("Moins de Séries");
  } else if ($('#btnplusserie').html() === "Plus de Séries" && statutGenres != "") {
    if ($('.v-series-js').hasClass(statutGenres)) {
      $('.v-series-js').addClass('d-none');
      $('.v-series-js').removeClass('d-block');
      $('.' + statutGenres).addClass('d-block');
      $('.' + statutGenres).removeClass('d-none');
      $('#btnplusserie').html("Moins de Séries");
    }
  } else if ($('#btnplusserie').html() === "Moins de Séries" && statutGenres === "") {
    $('.v-series-js.hide').addClass('d-none');
    $('.v-series-js.hide').removeClass('d-block');
    $('#btnplusserie').html("Plus de Séries");
  } else if ($('#btnplusserie').html() === "Moins de Séries" && statutGenres != "") {
    if ($('.v-series-js').hasClass(statutGenres)) {
      $('.v-series-js.hide').addClass('d-none');
      $('.v-series-js.hide').removeClass('d-block');
      $('#btnplusserie').html("Plus de Séries");
    }
  }
});

//Function tri séries
$('.btn_sections').click(function(event) {
  if ($('#btnplusserie').html() === "Plus de Séries") {
    if (btnArrays[($(this).val()) - 1] === "All") { // Selection du bouton "All" ( pareil pour les autres selections avec le bon genre)
      statutGenres = "";
      if ($('.v-series-js').not('.hide')) {
        $('.v-series-js').removeClass('d-none');
        $('.v-series-js').addClass('d-block');
        $('.v-series-js.hide').removeClass('d-block');
        $('.v-series-js.hide').addClass('d-none');
      }
    } else if (btnArrays[($(this).val()) - 1] === "Action") {
      statutGenres = "Action";
      triGenreUps(statutGenres);
    } else if (btnArrays[($(this).val()) - 1] === "Policiers") {
      statutGenres = "Policiers";
      triGenreUps(statutGenres);
    } else if (btnArrays[($(this).val()) - 1] === "Comedie") {
      statutGenres = "Comedie";
      triGenreUps(statutGenres);
    } else if (btnArrays[($(this).val()) - 1] === "Scifi") {
      statutGenres = "Scifi";
      triGenreUps(statutGenres);
    } else if (btnArrays[($(this).val()) - 1] === "Horreur") {
      statutGenres = "Horreur";
      triGenreUps(statutGenres);
    } else {
      if ($('.v-series-js').not('.hide')) {
        $('.v-series-js').removeClass('d-none');
        $('.v-series-js').addClass('d-block');
      }
    }
  } else if ($('#btnplusserie').html() === "Moins de Séries") {
    if (btnArrays[($(this).val()) - 1] === "All") { // Selection du bouton "All" ( pareil pour les autres selections avec le bon genre)
      statutGenres = "";
      $('.v-series-js').removeClass('d-none');
      $('.v-series-js').addClass('d-block');
      $('.v-series-js.hide').removeClass('d-block');
      $('.v-series-js.hide').addClass('d-none');
    } else if (btnArrays[($(this).val()) - 1] === "Action") {
      statutGenres = "Action";
      triGenreDowns(statutGenres);
    } else if (btnArrays[($(this).val()) - 1] === "Policiers") {
      statutGenres = "Policiers";
      triGenreDowns(statutGenres);
    } else if (btnArrays[($(this).val()) - 1] === "Comedie") {
      statutGenres = "Comedie";
      triGenreDowns(statutGenres);
    } else if (btnArrays[($(this).val()) - 1] === "Scifi") {
      statutGenres = "Scifi";
      triGenreDowns(statutGenres);
    } else if (btnArrays[($(this).val()) - 1] === "Horreur") {
      statutGenres = "Horreur";
      triGenreDowns(statutGenres);
    } else {
      if ($('.v-series-js').hasClass('hide')) {
        $('.v-series-js.hide').removeClass('d-none');
        $('.v-series-js.hide').addClass('d-block');
      }
    }
  }
});

//Modal Trailer
//btn carousel watch trailer
$('#watch-trailer-js').click(function(event){
  var indic = $('.carousel-indicators').children('.active').attr('data-slide-to');
  $('#my-iframe-js').attr('src',bottomCarTrailer[indic]);
  $('#trailerModal').modal('show');
});
//premier carousel de 2fois 5films
$('.car-trailer-js').click(function(event){
  var indicar = ($(this).attr('value'))-1;
  $('#my-iframe-js').attr('src',bottomCarTrailer[indicar]);
  $('#trailerModal').modal('show');
});
//Shop
//iframe pour le shop pas un modal !
$('.v-shop-js').click(function(event){
  var indicShop = ($(this).attr('value'))-1;
  $('#my-shop-video').attr('src', shopVideos[indicShop][0]);
  $('#my-shop-title').html(shopVideos[indicShop][1]);
  $('#my-shop-story').html(shopVideos[indicShop][2]);
  $('#my-shop-real').html(shopVideos[indicShop][3]);
  $('#my-shop-genre').html(shopVideos[indicShop][4]);
  $('#my-shop-price').html(shopVideos[indicShop][5]);
});

//Contact-us modal !

$('#my-contact-btn-js').click(function(event){
  var fname = $('#my-contact-fname').val();
  var lname = $('#my-contact-lname').val();
  var mail = $('#my-contact-mail').val();
  var sub = $('#my-contact-sub').val();
  var contenu = $('#my-contact-text').val();
  $('#my-contact-resume').html("Bonjour Mme/Mr." + fname + " " + lname +
  ", nous avons bien reçu votre question au sujet de : " + sub + ", nous vous enverrons une confirmation à l'adresse email: " +
  mail + ". Votre message : </br>"+ contenu +".");
  $('#contactModal').modal('show');
});
