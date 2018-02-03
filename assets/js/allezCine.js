// Variables utilisées pour les fonctions >.<
var button = document.querySelector('#button-parent'); // Selection du parent pour connaitre la longueur de l'array des boutons
var filterBtnArray = document.querySelectorAll('.btn_section'); //Selectionne tout les boutons avec la class btn_section
var btnArray = []; // création d'un array vide
var randImgArray = [];
var statutGenre = "";
//array des iframes des vidéos shop
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
var triGenreUp = function(x) {//quand plus de films est selectionné
  $('.' + x).not('.hide').removeClass('d-none');
  $('.' + x).not('.hide').addClass('d-block');
  if ($('.vignettes').not("." + x)) {
    $('.vignettes').not("." + x).removeClass('d-block');
    $('.vignettes').not("." + x).addClass('d-none');
  }
}
var triGenreDown = function(y) {//quand moins de films est selectionné
  $('.vignettes').removeClass('d-none');
  $('.vignettes').addClass('d-block');
  if ($('.vignettes').not("." + y)) {
    $('.vignettes').not("." + y).removeClass('d-block');
    $('.vignettes').not("." + y).addClass('d-none');
  }
}
//Function pour le random des images dans le footer
//
var randomize = function(){
  return Math.floor(Math.random() * (alternateImgFooter.length))};
document.addEventListener("DOMContentLoaded",function(event){
  var elemRandom = document.querySelectorAll('.footAllezImg');
  for (k = 0; k < 6; k++){
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

//Function + et - de films Cfr plus bas pour les fonctions
//sur les séries !! Séparations sinon trop de condition à rajouter pour
//faire une fonction qui tourne selon la catégorie en plus

$("#btnplusfilm").click(function(event) {
  if ($('#btnplusfilm').html() === "Plus de Films" && statutGenre === "") {
    $('.hide').addClass('d-block');
    $('.hide').removeClass('d-none');
    $('#btnplusfilm').html("Moins de Films");
  } else if ($('#btnplusfilm').html() === "Plus de Films" && statutGenre != "") {
    if ($('.vignettes').hasClass(statutGenre)) {
      $('.vignettes').addClass('d-none');
      $('.vignettes').removeClass('d-block');
      $('.' + statutGenre).addClass('d-block');
      $('.' + statutGenre).removeClass('d-none');
      $('#btnplusfilm').html("Moins de Films");
    }
  } else if ($('#btnplusfilm').html() === "Moins de Films" && statutGenre === "") {
    $('.hide').addClass('d-none');
    $('.hide').removeClass('d-block');
    $('#btnplusfilm').html("Plus de Films");
  } else if ($('#btnplusfilm').html() === "Moins de Films" && statutGenre != "") {
    if ($('.vignettes').hasClass(statutGenre)) {
      $('.hide').addClass('d-none');
      $('.hide').removeClass('d-block');
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
$('.btn_section').click(function() {
  if ($('#btnplusfilm').html() === "Plus de Films") {
    if (btnArray[($(this).val()) - 1] === "All") { // Selection du bouton "All" ( pareil pour les autres selections avec le bon genre)
      statutGenre = "";
      if ($('.vignettes').not('.hide')) {
        $('.vignettes').removeClass('d-none');
        $('.vignettes').addClass('d-block');
        $('.hide').removeClass('d-block');
        $('.hide').addClass('d-none');
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
      if ($('.vignettes').not('.hide')) {
        $('.vignettes').removeClass('d-none');
        $('.vignettes').addClass('d-block');
      }
    }
  } else if ($('#btnplusfilm').html() === "Moins de Films") {
    if (btnArray[($(this).val()) - 1] === "All") { // Selection du bouton "All" ( pareil pour les autres selections avec le bon genre)
      statutGenre = "";
      $('.vignettes').removeClass('d-none');
      $('.vignettes').addClass('d-block');
      $('.hide').removeClass('d-block');
      $('.hide').addClass('d-none');
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
      if ($('.vignettes').hasClass('hide'))
        $('.hide').removeClass('d-none');
      $('.hide').addClass('d-block');
    }
  }
})

//Fonction du Watch Trailer sur le caroussel
// 
// document.addEventListener("click", function(event){
//   $('#trailerModal').modal('show');
// });
