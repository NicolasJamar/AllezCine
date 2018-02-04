var myicon = document.createElement("button");
myicon.style.display = "none";

document.addEventListener("scroll",function(event){

  var mynav = document.getElementsByTagName('nav')[0];
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

          myicon.classList.add("fa","fa-3x","fa-arrow-circle-o-up"); //pour l'icone fontawesome
          myicon.id = 'totop-js'; //pour le style et le placement
          document.body.appendChild(myicon); // l'ajouter au <body> du fichier HTML
          myicon.style.display = "block"; //si scroll de 20px affiche la div
          mynav.style.display = "none"; // fait disparaitre la navbar pour un souci de sticky qui la rend visible si on scroll (c'est moche)
      } else {

          myicon.style.display = "none"; // cache la div
          mynav.style.display = "flex";
      }
  myicon.addEventListener("click", function(event){ //oui un eventlistener dans un eventlistener
    document.body.scrollTop = 0; // event-ception par code-caprio xD
    document.documentElement.scrollTop=0;
    mynav.style.display = "flex";
    myicon.parentNode.removeChild(myicon);
  }); // click reviens au top
});
