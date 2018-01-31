// Function plus de films , moins de films tout ça ...

$("#btnplusfilm").click(function(event) {
  if ($('#btnplusfilm').html() == "Plus de Films") {
    $('#btnplusfilm').html("Moins de Films");
  } else {
    $('#btnplusfilm').html("Plus de Films");
  }
});
$("#btnplusserie").click(function(event) {
  if ($('#btnplusserie').html() == "Plus de Séries") {
    $('#btnplusserie').html("Moins de Séries");
  } else {
    $('#btnplusserie').html("Plus de Séries");
  }
});

// Bouton Filtre
var button = document.querySelector('#button-parent');
var filterBtnArray = document.querySelectorAll('.btn_section');
var btnArray = [];
for (i=0;i<button.children.length;i++){
  var filterBtn = document.querySelectorAll('.btn_section')[i];
  var filterBtnContent = document.querySelectorAll('.btn_section')[i].innerHTML;
  btnArray.push(filterBtnContent);}

    $('.btn_section').click(function() {
    if (btnArray[($(this).val())-1] === "All"){
      if ( $('.vignettes').css("display") == "none"){
        $('.vignettes').css("display","block");
    }
  }
    else if (btnArray[($(this).val())-1] === "Thriller"){
      $('.vignettes').css("display","block");
      if ( $('.vignettes').not(".Thriller")){
        $('.vignettes').not(".Thriller").css('display','none');
      }
    }
    else if (btnArray[($(this).val())-1] === "Policiers"){
      $('.vignettes').css("display","block");
      if ( $('.vignettes').not(".Policiers")){
        $('.vignettes').not(".Policiers").css('display','none');
      }
    }
    else if (btnArray[($(this).val())-1] === "Comedie"){
      $('.vignettes').css("display","block");
      if ( $('.vignettes').not(".Comedie")){
        $('.vignettes').not(".Comedie").css('display','none');
      }
    }
    else if (btnArray[($(this).val())-1] === "Scifi"){
      $('.vignettes').css("display","block");
      if ( $('.vignettes').not(".Scifi")){
        $('.vignettes').not(".Scifi").css('display','none');
      }
    }
    else if (btnArray[($(this).val())-1] === "Dramatique"){
      $('.vignettes').css("display","block");
      if ( $('.vignettes').not(".Dramatique")){
        $('.vignettes').not(".Dramatique").css('display','none');
      }
    }
    else if (btnArray[($(this).val())-1] === "Aventure"){
      $('.vignettes').css("display","block");
      if ( $('.vignettes').not(".Aventure")){
        $('.vignettes').not(".Aventure").css('display','none');
      }
    }
    else {
      $('.vignettes').css('display','block');
    }
    })
