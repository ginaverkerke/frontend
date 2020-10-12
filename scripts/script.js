var hamburger1;
var hamburger2;


hamburger1 = document.querySelector(".hamburger");

hamburger1.addEventListener("click", hamburger2);

function hamburger2() {
    //https://stackoverflow.com/questions/1335851/what-does-use-strict-do-in-javascript-and-what-is-the-reasoning-behind-it
    "use strict";
    hamburger1.classList.add("uitgeklapt");
}