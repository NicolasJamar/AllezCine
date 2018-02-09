// Bouton Filtre , Gérés de manière dynamique
var button = document.querySelector('#button-parent'); // Selection du parent pour connaitre la longueur de l'array des boutons
var filterBtnArray = document.querySelectorAll('.btn_section'); //Selectionne tout les boutons avec la class btn_section
var buttons = document.querySelector('#button-parent-s')
var filterBtnArrays = document.querySelectorAll('.btn_section_s');
var btnArray = []; // création d'un array vide
var btnArrays = [];
var randImgArray = [];
var statutGenre = "";
var statutGenres = "";
var shopVideos = [
"https://www.youtube.com/embed/JNwNXF9Y6kY", //Star Wars
"https://www.youtube.com/embed/TElJs93LLs8", //Grave
"https://www.youtube.com/embed/LEH7nDkiPEk", //Survive Style 5
"https://www.youtube.com/embed/RMhbr2XQblk", //Gran Torino
"https://www.youtube.com/embed/4TLppsfzQH8", //Limitless
"https://www.youtube.com/embed/yfDUv3ZjH2k", //Shaun of the dead
"https://www.youtube.com/embed/znmZoVkCjpI", //Seven
"https://www.youtube.com/embed/hFY-f7BXwZw", //Swiss army man
]
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
//Tri pour movies
var triGenreUp = function(x) {
  $('.' + x).not('.v-movies-js.hide').removeClass('d-none');
  $('.' + x).not('.v-movies-js.hide').addClass('d-block');
  if ($('.v-movies-js').not("." + x)) {
    $('.v-movies-js').not("." + x).removeClass('d-block');
    $('.v-movies-js').not("." + x).addClass('d-none');
  }
}
var triGenreDown = function(y) {
  $('.v-movies-js').removeClass('d-none');
  $('.v-movies-js').addClass('d-block');
  if ($('.v-movies-js').not("." + y)) {
    $('.v-movies-js').not("." + y).removeClass('d-block');
    $('.v-movies-js').not("." + y).addClass('d-none');
  }
}

//tri pour series
var triGenreUps = function(x) {
  $('.' + x).not('.v-series-js.hide').removeClass('d-none');
  $('.' + x).not('.v-series-js.hide').addClass('d-block');
  if ($('.v-series-js').not("." + x)) {
    $('.v-series-js').not("." + x).removeClass('d-block');
    $('.v-series-js').not("." + x).addClass('d-none');
  }
}
var triGenreDowns = function(y) {
  $('.v-series-js').removeClass('d-none');
  $('.v-series-js').addClass('d-block');
  if ($('.v-series-js').not("." + y)) {
    $('.v-series-js').not("." + y).removeClass('d-block');
    $('.v-series-js').not("." + y).addClass('d-none');
  }
}
//Function pour le random des images dans le footer

var randomize = function(){
  return Math.floor(Math.random() * (alternateImgFooter.length))};

document.addEventListener("DOMContentLoaded",function(event){
  var elemRandom = document.querySelectorAll('.footAllezImg');
  for (k = 0; k < 6; k++){
    elemRandom = document.querySelectorAll('.footAllezImg')[k];
    elemRandom.src = alternateImgFooter[randomize()];
  }
});

for (i = 0; i < button.children.length; i++) { //début de boucle for sur la longueur de l'array des enfants grâce à "l'encre" du parent
  var filterBtnContent = document.querySelectorAll('.btn_section')[i].innerHTML; // Selectionne chaque bouton pour en connaitre le contenu HTML pour créer les genres présents dans l'array créé
  btnArray.push(filterBtnContent);
} // Stocke chaque value dans l'array pour les MOVIES
for (z = 0; z < buttons.children.length; z++) { //début de boucle for sur la longueur de l'array des enfants grâce à "l'encre" du parent
  var filterBtnContents = document.querySelectorAll('.btn_section_s')[z].innerHTML; // Selectionne chaque bouton pour en connaitre le contenu HTML pour créer les genres présents dans l'array créé
  btnArrays.push(filterBtnContents);
} // Stocke chaque value dans l'array pour les séries

//Function + et - de films , séries à venir
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

//function + - series
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

//Function tri
$('.btn_section').click(function() {
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
      $('.v-movies-js.hide').removeClass('d-none');
      $('.v-movies-js.hide').addClass('d-block');
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
      if ($('.v-movies-js').hasClass('hide'))
        $('.v-movies-js.hide').removeClass('d-none');
      $('.v-movies-js.hide').addClass('d-block');
    }
  }
})

//tri series

$('.btn_section_s').click(function() {
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
      $('.v-series-js.hide').removeClass('d-none');
      $('.v-series-js.hide').addClass('d-block');
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
      if ($('.v-series-js').hasClass('hide'))
        $('.v-series-js.hide').removeClass('d-none');
      $('.v-series-js.hide').addClass('d-block');
    }
  }
})
