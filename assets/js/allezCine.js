// Function plus de films , moins de films tout ça ...

$("#btnplusfilm").click(function(event) {
  if ($('#btnplusfilm').html() == "Plus de Films") {
    $('#btnplusfilm').html("Moins de Films");
    $('.showHide2').removeClass('hidden');
  } else {
    $('#btnplusfilm').html("Plus de Films");
    $('.showHide2').addClass('hidden');
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
    	$('.vignettes').addClass('hidden');
    	$('.showHide1').removeClass('hidden');
    	$('#btnplusfilm').removeClass('hidden');
    //   if ( $('.vignettes').css("display") == "none"){
    //     $('.vignettes').css("display","block");
    //     $('#btnplusfilm').html("Moins de Films");
    //     $('.showHide').addClass('hidden');
    // }
  }
    else 
    	if (btnArray[($(this).val())-1] === "Thriller"){
      $('.vignettes').removeClass('hidden');
      if ( $('.vignettes').not(".Thriller")){
        $('.vignettes').not(".Thriller").addClass('hidden');
        $('#btnplusfilm').addClass('hidden');
      }
    }
    else if (btnArray[($(this).val())-1] === "Policiers"){
      $('.vignettes').removeClass('hidden');
      if ( $('.vignettes').not(".Policiers")){
        $('.vignettes').not(".Policiers").addClass('hidden');
        $('#btnplusfilm').addClass('hidden');
      }
    }
    else if (btnArray[($(this).val())-1] === "Comedie"){
      $('.vignettes').removeClass('hidden');
      if ( $('.vignettes').not(".Comedie")){
        $('.vignettes').not(".Comedie").addClass('hidden');
        $('#btnplusfilm').addClass('hidden');
      }
    }
    else if (btnArray[($(this).val())-1] === "Scifi"){
      $('.vignettes').removeClass('hidden');
      if ( $('.vignettes').not(".Scifi")){
        $('.vignettes').not(".Scifi").addClass('hidden');
        $('#btnplusfilm').addClass('hidden');
      }
    }
    else if (btnArray[($(this).val())-1] === "Dramatique"){
      $('.vignettes').removeClass('hidden');
      if ( $('.vignettes').not(".Dramatique")){
        $('.vignettes').not(".Dramatique").addClass('hidden');
        $('#btnplusfilm').addClass('hidden');
      }
    }
    else if (btnArray[($(this).val())-1] === "Aventure"){
      $('.vignettes').removeClass('hidden');
      if ( $('.vignettes').not(".Aventure")){
        $('.vignettes').not(".Aventure").addClass('hidden');
        $('#btnplusfilm').addClass('hidden');
      }
    }
    // else {
    //   $('.ouais').removeClass('hidden');
    // }
    })
