
$("#btnplusfilm").click(function(event) {
  if ($('#btnplusfilm').html() == "Plus de Films") {
    $('.hide').addClass('d-block');
    $('.hide').removeClass('d-none');
    $('#btnplusfilm').html("Moins de Films");
  } else {
    $('.hide').addClass('d-none');
    $('.hide').removeClass('d-block');
    $('#btnplusfilm').html("Plus de Films");
  }
});

// $("#btnplusserie").click(function(event) {
//   if ($('#btnplusserie').html() == "Plus de Séries") {
//     $('.vignettes:nth-child(n+13=)').addClass('d-block');
//     $('.vignettes:nth-child(n+13=)').removeClass('d-none');
//     $('#btnplusserie').html("Moins de Séries");
//   } else {
//     $('.vignettes:nth-child(n+13=)').addClass('d-none');
//     $('.vignettes:nth-child(n+13=)').removeClass('d-block');
//     $('#btnplusserie').html("Plus de Séries");
//   }
// });

// Bouton Filtre , Gérés de manière dynamique
var button = document.querySelector('#button-parent'); // Selection du parent pour connaitre la longueur de l'array des boutons
var filterBtnArray = document.querySelectorAll('.btn_section'); //Selectionne tout les boutons avec la class btn_section
var btnArray = []; // création d'un array vide
for (i=0;i<button.children.length;i++){ //début de boucle for sur la longueur de l'array des enfants grâce à "l'encre" du parent
  var filterBtnContent = document.querySelectorAll('.btn_section')[i].innerHTML; // Selectionne chaque bouton pour en connaitre le contenu HTML pour créer les genres présents dans l'array créé
  btnArray.push(filterBtnContent);} // Stocke chaque value dans l'array

    $('.btn_section').click(function() {
    if ($('#btnplusfilm').html() == "Plus de Films"){
      if (btnArray[($(this).val())-1] === "All"){ // Selection du bouton "All" ( pareil pour les autres selections avec le bon genre)
        if ($('.vignettes').not('.hide')){
          $('.vignettes').removeClass('d-none');
          $('.vignettes').addClass('d-block');
          $('.hide').removeClass('d-block');
          $('.hide').addClass('d-none');
        }
      }
      else if (btnArray[($(this).val())-1] === "Thriller"){
        $('.vignettes').removeClass('d-none');
        $('.vignettes').addClass('d-block');
        if ( $('.vignettes').not(".Thriller")){
          $('.vignettes').not(".Thriller").removeClass('d-block');
          $('.vignettes').not(".Thriller").addClass('d-none');
        }
      }
      else if (btnArray[($(this).val())-1] === "Policiers"){
        $('.vignettes').removeClass('d-none');
        $('.vignettes').addClass('d-block');
        if ( $('.vignettes').not(".Policiers")){
          $('.vignettes').not(".Policiers").removeClass('d-block');
          $('.vignettes').not(".Policiers").addClass('d-none');
        }
      }
      else if (btnArray[($(this).val())-1] === "Comedie"){
        $('.vignettes').removeClass('d-none');
        $('.vignettes').addClass('d-block');
        if ( $('.vignettes').not(".Comedie")){
          $('.vignettes').not(".Comedie").removeClass('d-block');
          $('.vignettes').not(".Comedie").addClass('d-none');
        }
      }
      else if (btnArray[($(this).val())-1] === "Scifi"){
        $('.vignettes').removeClass('d-none');
        $('.vignettes').addClass('d-block');
        if ( $('.vignettes').not(".Scifi")){
          $('.vignettes').not(".Scifi").removeClass('d-block');
          $('.vignettes').not(".Scifi").addClass('d-none');
        }
      }
      else if (btnArray[($(this).val())-1] === "Dramatique"){
        $('.vignettes').removeClass('d-none');
        $('.vignettes').addClass('d-block');
        if ( $('.vignettes').not(".Dramatique")){
          $('.vignettes').not(".Dramatique").removeClass('d-block');
          $('.vignettes').not(".Dramatique").addClass('d-none');
        }
      }
      else if (btnArray[($(this).val())-1] === "Aventure"){
        $('.vignettes').removeClass('d-none');
        $('.vignettes').addClass('d-block');
        if ( $('.vignettes').not(".Aventure")){
          $('.vignettes').not(".Aventure").removeClass('d-block');
          $('.vignettes').not(".Aventure").addClass('d-none');
        }
      }
      else {
        if ($('.vignettes').not('.hide')){
          $('.vignettes').removeClass('d-none');
          $('.vignettes').addClass('d-block');
      }
      }
    }
    else if($('#btnplusfilm').html() == "Moins de Films"){
      $('.hide').addClass('d-none');
      $('.hide').removeClass('d-block');
      $('#btnplusfilm').html("Plus de Films");
      if (btnArray[($(this).val())-1] === "All"){ // Selection du bouton "All" ( pareil pour les autres selections avec le bon genre)
          $('.vignettes').removeClass('d-none');
          $('.vignettes').addClass('d-block');
          $('.hide').removeClass('d-block');
          $('.hide').addClass('d-none');
      }
      else if (btnArray[($(this).val())-1] === "Thriller"){
        $('.vignettes').removeClass('d-none');
        $('.vignettes').addClass('d-block');
        if ( $('.vignettes').not(".Thriller")){
          $('.vignettes').not(".Thriller").removeClass('d-block');
          $('.vignettes').not(".Thriller").addClass('d-none');
        }
      }
      else if (btnArray[($(this).val())-1] === "Policiers"){
        $('.vignettes').removeClass('d-none');
        $('.vignettes').addClass('d-block');
        if ( $('.vignettes').not(".Policiers")){
          $('.vignettes').not(".Policiers").removeClass('d-block');
          $('.vignettes').not(".Policiers").addClass('d-none');
        }
      }
      else if (btnArray[($(this).val())-1] === "Comedie"){
        $('.vignettes').removeClass('d-none');
        $('.vignettes').addClass('d-block');
        if ( $('.vignettes').not(".Comedie")){
          $('.vignettes').not(".Comedie").removeClass('d-block');
          $('.vignettes').not(".Comedie").addClass('d-none');
        }
      }
      else if (btnArray[($(this).val())-1] === "Scifi"){
        $('.vignettes').removeClass('d-none');
        $('.vignettes').addClass('d-block');
        if ( $('.vignettes').not(".Scifi")){
          $('.vignettes').not(".Scifi").removeClass('d-block');
          $('.vignettes').not(".Scifi").addClass('d-none');
        }
      }
      else if (btnArray[($(this).val())-1] === "Dramatique"){
        $('.vignettes').removeClass('d-none');
        $('.vignettes').addClass('d-block');
        if ( $('.vignettes').not(".Dramatique")){
          $('.vignettes').not(".Dramatique").removeClass('d-block');
          $('.vignettes').not(".Dramatique").addClass('d-none');
        }
      }
      else if (btnArray[($(this).val())-1] === "Aventure"){
        $('.vignettes').removeClass('d-none');
        $('.vignettes').addClass('d-block');
        if ( $('.vignettes').not(".Aventure")){
          $('.vignettes').not(".Aventure").removeClass('d-block');
          $('.vignettes').not(".Aventure").addClass('d-none');
        }
      }
      else {
        if ($('.vignettes').hasClass('hide'))
        $('.hide').removeClass('d-none');
        $('.hide').addClass('d-block');
      }
      }
  })


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