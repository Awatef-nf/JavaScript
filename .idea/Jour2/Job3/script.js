/*Créez une balise <button> ayant comme id “button”.
Créez une balise <p> ayant comme id “compteur” et contenant “0”.
Ce contenu doit évoluer proportionnellement au nombre d'événements clic
reçu par le bouton.
ATTENTION : Vous ne devez pas utiliser “onclick()” dans votre HTML.
_2
La fonction permettant d’effectuer la modification doit s'appeler “addOne()”.*/

document.addEventListener("DOMContentLoaded", function() {

  //création des éléments
    let nouveaubutton = document.createElement("button");
    let nouveauCompteur = document.createElement("p");  
    let compteur = 0;

  //ajout des attributs et du texte
    nouveaubutton.textContent="cliquez ici";
    nouveaubutton.setAttribute("id","button");

    nouveauCompteur.textContent = "0";
    nouveauCompteur.setAttribute("id","compteur");  

    //ajout au DOM
    document.body.appendChild(nouveaubutton);
    document.body.appendChild(nouveauCompteur);

    //ajout de l'évènement
    let bouton = document.getElementById('button');
    bouton.addEventListener('click', function() {
        let compteurP = document.getElementById('compteur');
        compteur++;
        compteurP.textContent = compteur;
    });
});
       