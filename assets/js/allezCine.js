
// Bouton Filtre , Gérés de manière dynamique
var button = document.querySelector('#button-parent'); // Selection du parent pour connaitre la longueur de l'array des boutons
var filterBtnArray = document.querySelectorAll('.btn_section'); //Selectionne tout les boutons avec la class btn_section
var btnArray = []; // création d'un array vide
var statutGenre ="";
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

var triGenreUp = function (x){
  $('.'+x).not('.hide').removeClass('d-none');
  $('.'+x).not('.hide').addClass('d-block');
  if ( $('.vignettes').not("."+x)){
    $('.vignettes').not("."+x).removeClass('d-block');
    $('.vignettes').not("."+x).addClass('d-none');
  }
}
var triGenreDown = function (y){
  $('.vignettes').removeClass('d-none');
  $('.vignettes').addClass('d-block');
  if ( $('.vignettes').not("."+y)){
    $('.vignettes').not("."+y).removeClass('d-block');
    $('.vignettes').not("."+y).addClass('d-none');
  }
}

for (i=0;i<button.children.length;i++){ //début de boucle for sur la longueur de l'array des enfants grâce à "l'encre" du parent
  var filterBtnContent = document.querySelectorAll('.btn_section')[i].innerHTML; // Selectionne chaque bouton pour en connaitre le contenu HTML pour créer les genres présents dans l'array créé
  btnArray.push(filterBtnContent);} // Stocke chaque value dans l'array

//Function + et - de films , séries à venir
$("#btnplusfilm").click(function(event) {
  if ($('#btnplusfilm').html() === "Plus de Films" && statutGenre === "") {
    $('.hide').addClass('d-block');
    $('.hide').removeClass('d-none');
    $('#btnplusfilm').html("Moins de Films");
  } else if ($('#btnplusfilm').html() === "Plus de Films" && statutGenre != ""){
    if ($('.vignettes').hasClass(statutGenre)){
      $('.vignettes').addClass('d-none');
      $('.vignettes').removeClass('d-block');
      $('.'+statutGenre).addClass('d-block');
      $('.'+statutGenre).removeClass('d-none');
      $('#btnplusfilm').html("Moins de Films");}
  } else if ($('#btnplusfilm').html() === "Moins de Films" && statutGenre === ""){
    $('.hide').addClass('d-none');
    $('.hide').removeClass('d-block');
    $('#btnplusfilm').html("Plus de Films");
  }else if ($('#btnplusfilm').html() === "Moins de Films" && statutGenre != ""){
    if ($('.vignettes').hasClass(statutGenre)){
      $('.hide').addClass('d-none');
      $('.hide').removeClass('d-block');
      $('#btnplusfilm').html("Plus de Films");}
  }
});

//Function tri
$('.btn_section').click(function() {
if ($('#btnplusfilm').html() === "Plus de Films"){
  if (btnArray[($(this).val())-1] === "All"){ // Selection du bouton "All" ( pareil pour les autres selections avec le bon genre)
    statutGenre = "";
    if ($('.vignettes').not('.hide')){
      $('.vignettes').removeClass('d-none');
      $('.vignettes').addClass('d-block');
      $('.hide').removeClass('d-block');
      $('.hide').addClass('d-none');
    }
  }
  else if (btnArray[($(this).val())-1] === "Thriller"){
    statutGenre = "Thriller";
    triGenreUp(statutGenre);
    }
  else if (btnArray[($(this).val())-1] === "Policiers"){
    statutGenre = "Policiers";
    triGenreUp(statutGenre);
  }
  else if (btnArray[($(this).val())-1] === "Comedie"){
    statutGenre = "Comedie";
    triGenreUp(statutGenre);
  }
  else if (btnArray[($(this).val())-1] === "Scifi"){
    statutGenre = "Scifi";
    triGenreUp(statutGenre);
  }
  else if (btnArray[($(this).val())-1] === "Dramatique"){
    statutGenre = "Dramatique";
    triGenreUp(statutGenre);
  }
  else if (btnArray[($(this).val())-1] === "Aventure"){
    statutGenre = "Aventure";
    triGenreUp(statutGenre);
  }
  else {
    if ($('.vignettes').not('.hide')){
      $('.vignettes').removeClass('d-none');
      $('.vignettes').addClass('d-block');
  }
  }
}
else if($('#btnplusfilm').html() === "Moins de Films"){
  if (btnArray[($(this).val())-1] === "All"){ // Selection du bouton "All" ( pareil pour les autres selections avec le bon genre)
      statutGenre="";
      $('.vignettes').removeClass('d-none');
      $('.vignettes').addClass('d-block');
      $('.hide').removeClass('d-block');

      $('.hide').addClass('d-none');
  }
  else if (btnArray[($(this).val())-1] === "Thriller"){
    statutGenre="Thriller";
    triGenreDown(statutGenre);
  }
  else if (btnArray[($(this).val())-1] === "Policiers"){
    statutGenre="Policiers";
    triGenreDown(statutGenre);
  }
  else if (btnArray[($(this).val())-1] === "Comedie"){
    statutGenre="Comedie";
    triGenreDown(statutGenre);
  }
  else if (btnArray[($(this).val())-1] === "Scifi"){
    statutGenre="Scifi";
    triGenreDown(statutGenre);
  }
  else if (btnArray[($(this).val())-1] === "Dramatique"){
    statutGenre="Dramatique";
    triGenreDown(statutGenre);
  }
  else if (btnArray[($(this).val())-1] === "Aventure"){
    statutGenre="Aventure";
    triGenreDown(statutGenre);
  }
  else {
    if ($('.vignettes').hasClass('hide'))
    $('.hide').removeClass('d-none');
    $('.hide').addClass('d-block');
  }
  }
})

