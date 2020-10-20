/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true,
    white: true*/
/*eslint-env browser*/
/*eslint no-console: 0*/


//Ik begin met het maken van 3 variabelen die ik nodig heb voor deze functie.
var hamburger1;
var uitgeklapt;
var hamburgerNav;

//De code hieronder zorgt ervoor dat mijn menu uit kan klappen.

//Met "Hamburger1" roep ik een class in mijn HTML aan. Deze class heet ".hamburger". Dit is een class voor mijn hamburgermenu. Deze roep je aan door document.querySelector te gebruiken.
hamburger1 = document.querySelector(".hamburger");

//Hier zeg ik dat als je op hamburger1(dus ook op class ".hamburger") klikt, de functie "uitgeklapt" wordt geactiveerd.
hamburger1.addEventListener("click", uitgeklapt);

function uitgeklapt() {
    //https://stackoverflow.com/questions/1335851/what-does-use-strict-do-in-javascript-and-what-is-the-reasoning-behind-it
    "use strict";
    //Deze functie roepr dankzij "hamburgerNav" de "nav" class aan in mijn html. Deze class heb ik gegeven aan mijn uitgeklapte menu.
    hamburgerNav = document.querySelector(".nav");
    //Met deze code zeg ik eigenlijk dat de class "uitgeklapt" aan en uitgezet kan worden doordat erop geklikt wordt. De class "uitgeklapt" wordt dus alleen aangeroepen als ik op de knop heb geklikt.
    hamburgerNav.classList.toggle("uitgeklapt"); }


//De code hieronder zorgt ervoor dat mijn menu weer kan inklappen. Ik heb voor zowel uitklappen als inklappen 2 verschillende functies, omdat voor beiden op een andere knop moet worden gedrukt.
var menu1;
var ingeklapt;
var menuNav;


menu1 = document.querySelector(".kruis");

menu1.addEventListener("click", ingeklapt);

function ingeklapt() {
    //bron: https://stackoverflow.com/questions/1335851/what-does-use-strict-do-in-javascript-and-what-is-the-reasoning-behind-it
    "use strict";
    menuNav = document.querySelector(".nav");
    menuNav.classList.toggle("uitgeklapt"); }

//Bron: https://codepen.io/ginaverkerke/pen/RwaJxvx