const hambIcon = document.querySelector(".hamb-iconJS")
const hambIconIMG = document.querySelector(".hamb-iconJS img")
const navMenu = document.querySelector(".nav-menu")
const navMenuContainer = document.querySelector(".nav-menu-container")
let counter = 0
hambIcon.addEventListener("click", hamburgerMenuu)

function hamburgerMenuu() {
    if (counter == 0) {
        counter = 1
        navMenu.style.transform = "scaleX(1)"
        hambIconIMG.src = "img/navicon2.png"
        navMenuContainer.style.opacity = "1"
        navMenuContainer.style.transitionDelay = ".3s"

    }
    else if (counter == 1) {
        counter = 0
        navMenu.style.transform = "scaleX(0)"
        hambIconIMG.src = "img/navIcon.png"
        navMenuContainer.style.opacity = "0"
        navMenuContainer.style.transitionDelay = "0s"
    }
     
}

function scrollCjenovnik() {
    const element = document.getElementById("cjenovnik");
    element.scrollIntoView({ behavior: "smooth"})
}
function scrollOnama() {
    const element = document.getElementById("onama");
    element.scrollIntoView({ behavior: "smooth"})
}

//LOADER
$(window).on("load", function(){
    $("#loader").fadeOut("slow");
    });

const novo = document.querySelector(".cjenovnik-menu a:nth-child(1)")
const malePorcije = document.querySelector(".cjenovnik-menu a:nth-child(2)")
const velikePorcije = document.querySelector(".cjenovnik-menu a:nth-child(3)")
const salate = document.querySelector(".cjenovnik-menu a:nth-child(4)")
const kombinacije = document.querySelector(".cjenovnik-menu a:nth-child(5)")
const pica = document.querySelector(".cjenovnik-menu a:nth-child(6)")
const deserti = document.querySelector(".cjenovnik-menu a:nth-child(7)")

const novoBG = document.querySelector(".cjenovnik-menu a:nth-child(1) .cjenovnik-linkBG")
const malePorcijeBG = document.querySelector(".cjenovnik-menu a:nth-child(2) .cjenovnik-linkBG")
const velikePorcijeBG = document.querySelector(".cjenovnik-menu a:nth-child(3) .cjenovnik-linkBG")
const salateBG = document.querySelector(".cjenovnik-menu a:nth-child(4) .cjenovnik-linkBG")
const kombinacijeBG = document.querySelector(".cjenovnik-menu a:nth-child(5) .cjenovnik-linkBG")
const picaBG = document.querySelector(".cjenovnik-menu a:nth-child(6) .cjenovnik-linkBG")
const desertiBG = document.querySelector(".cjenovnik-menu a:nth-child(7) .cjenovnik-linkBG")

const novoSection = document.querySelector(".cjenovnik-novo")
const malePorcijeSection = document.querySelector(".cjenovnik-products-male")
const velikePorcijeSection = document.querySelector(".cjenovnik-products")
const salateSection = document.querySelector(".cjenovnik-salate")
const kombinacijeSection = document.querySelector(".cjenovnik-kombinacije")
const picaSection = document.querySelector(".cjenovnik-pice")
const desertiSection = document.querySelector(".cjenovnik-deserti")

const cocaCola = document.querySelector(".cocaCola")





document.querySelector("#pocetnaLink").addEventListener("mouseover", pocetna)
document.querySelector("#oNamaLink").addEventListener("mouseover", onama)
document.querySelector("#galerijaLink").addEventListener("mouseover", galerija)
document.querySelector("#kontaktLink").addEventListener("mouseover", kontakt)

function pocetna() {
    document.querySelector("#pocetnaImg").style.zIndex = "15"
    document.querySelector("#onamaImg").style.zIndex = "14"
    document.querySelector("#galerijaImg").style.zIndex = "13"
    document.querySelector("#kontaktImg").style.zIndex = "12"
    document.querySelector(".nav-menu-images").style.transform = "translate(-6%, 12%)"
}
function onama() {
    document.querySelector("#pocetnaImg").style.zIndex = "15"
    document.querySelector("#onamaImg").style.zIndex = "16"
    document.querySelector("#galerijaImg").style.zIndex = "13"
    document.querySelector("#kontaktImg").style.zIndex = "12"
    document.querySelector(".nav-menu-images").style.transform = "translate(60%, 0%)"
}
function galerija() {
    document.querySelector("#pocetnaImg").style.zIndex = "15"
    document.querySelector("#onamaImg").style.zIndex = "14"
    document.querySelector("#galerijaImg").style.zIndex = "17"
    document.querySelector("#kontaktImg").style.zIndex = "12"
    document.querySelector(".nav-menu-images").style.transform = "translate(21%, -15%)"
}
function kontakt() {
    document.querySelector("#pocetnaImg").style.zIndex = "15"
    document.querySelector("#onamaImg").style.zIndex = "14"
    document.querySelector("#galerijaImg").style.zIndex = "13"
    document.querySelector("#kontaktImg").style.zIndex = "18"
    document.querySelector(".nav-menu-images").style.transform = "translate(-27%, 0%)"
}

novo.addEventListener("click", novoFun)
malePorcije.addEventListener("click", malePorcijeFun)
velikePorcije.addEventListener("click", velikePorcijeFun)
salate.addEventListener("click", salateFun)
kombinacije.addEventListener("click", kombinacijeFun)
pica.addEventListener("click", picaFun)
deserti.addEventListener("click", desertiFun)

const contactHTML = document.querySelector(".kontaktHTML")
const footerHTML = document.querySelector(".footerHTML")
var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addEventListener(myFunction) // Attach listener function on state changes
function myFunction(x) {
    if (x.matches) { // If media query matches
      contactHTML.innerHTML = "Kontaktirajte nas,<br> dostava je besplatna!"
      footerHTML.innerHTML = "Ćevabdžinica Zmaj Stanica Sarajevo. Dobrodošli <br> u najbolju ćevabdžinicu u gradu Ćevabdžinica <br> „ZMAJ“ Stanica Sarajevo."
    }
  }

function novoFun()
{
    cocaCola.style.display = "none"
    novoBG.style.visibility = "visible";
    desertiBG.style.visibility = "hidden";
    malePorcijeBG.style.visibility = "hidden";
    velikePorcijeBG.style.visibility = "hidden";
    salateBG.style.visibility = "hidden";
    picaBG.style.visibility = "hidden";
    kombinacijeBG.style.visibility = "hidden";
    kombinacijeBG.style.visibility = "hidden";
    novoBG.style.opacity = "1";
    desertiBG.style.opacity = "0";
    malePorcijeBG.style.opacity = "0";
    velikePorcijeBG.style.opacity = "0";
    salateBG.style.opacity = "0";
    picaBG.style.opacity = "0";
    kombinacijeBG.style.opacity = "0";

    novoSection.style.display = "flex";
    malePorcijeSection.style.display = "none";
    velikePorcijeSection.style.display = "none";
    salateSection.style.display = "none";
    kombinacijeSection.style.display = "none";
    picaSection.style.display = "none";
    desertiSection.style.display = "none";
}

function malePorcijeFun()
{
    cocaCola.style.display = "none"
    novoBG.style.visibility = "hidden";
    desertiBG.style.visibility = "hidden";
    malePorcijeBG.style.visibility = "visible";
    velikePorcijeBG.style.visibility = "hidden";
    salateBG.style.visibility = "hidden";
    picaBG.style.visibility = "hidden";
    kombinacijeBG.style.visibility = "hidden";
    novoBG.style.opacity = "0";
    desertiBG.style.opacity = "0";
    malePorcijeBG.style.opacity = "1";
    velikePorcijeBG.style.opacity = "0";
    salateBG.style.opacity = "0";
    picaBG.style.opacity = "0";
    kombinacijeBG.style.opacity = "0";

    novoSection.style.display = "none";
    malePorcijeSection.style.display = "flex";
    velikePorcijeSection.style.display = "none";
    salateSection.style.display = "none";
    kombinacijeSection.style.display = "none";
    picaSection.style.display = "none";
    desertiSection.style.display = "none";
}

function velikePorcijeFun()
{
    cocaCola.style.display = "none"
    novoBG.style.visibility = "hidden";
    desertiBG.style.visibility = "hidden";
    malePorcijeBG.style.visibility = "hidden";
    velikePorcijeBG.style.visibility = "visible";
    salateBG.style.visibility = "hidden";
    picaBG.style.visibility = "hidden";
    kombinacijeBG.style.visibility = "hidden";
    novoBG.style.opacity = "0";
    desertiBG.style.opacity = "0";
    malePorcijeBG.style.opacity = "0";
    velikePorcijeBG.style.opacity = "1";
    salateBG.style.opacity = "0";
    picaBG.style.opacity = "0";
    kombinacijeBG.style.opacity = "0";

    novoSection.style.display = "none";
    malePorcijeSection.style.display = "none";
    velikePorcijeSection.style.display = "flex";
    salateSection.style.display = "none";
    kombinacijeSection.style.display = "none";
    picaSection.style.display = "none";
    desertiSection.style.display = "none";
}

function salateFun()
{
    cocaCola.style.display = "none"
    novoBG.style.visibility = "hidden";
    desertiBG.style.visibility = "hidden";
    malePorcijeBG.style.visibility = "hidden";
    velikePorcijeBG.style.visibility = "hidden";
    salateBG.style.visibility = "visible";
    picaBG.style.visibility = "hidden";
    kombinacijeBG.style.visibility = "hidden";
    novoBG.style.opacity = "0";
    desertiBG.style.opacity = "0";
    malePorcijeBG.style.opacity = "0";
    velikePorcijeBG.style.opacity = "0";
    salateBG.style.opacity = "1";
    picaBG.style.opacity = "0";
    kombinacijeBG.style.opacity = "0";

    novoSection.style.display = "none";
    malePorcijeSection.style.display = "none";
    velikePorcijeSection.style.display = "none";
    salateSection.style.display = "block";
    kombinacijeSection.style.display = "none";
    picaSection.style.display = "none";
    desertiSection.style.display = "none";
}

function kombinacijeFun()
{
    cocaCola.style.display = "none"
    novoBG.style.visibility = "hidden";
    desertiBG.style.visibility = "hidden";
    malePorcijeBG.style.visibility = "hidden";
    velikePorcijeBG.style.visibility = "hidden";
    salateBG.style.visibility = "hidden";
    picaBG.style.visibility = "hidden";
    kombinacijeBG.style.visibility = "visible";
    novoBG.style.opacity = "0";
    desertiBG.style.opacity = "0";
    malePorcijeBG.style.opacity = "0";
    velikePorcijeBG.style.opacity = "0";
    salateBG.style.opacity = "0";
    picaBG.style.opacity = "0";
    kombinacijeBG.style.opacity = "1";

    novoSection.style.display = "none";
    malePorcijeSection.style.display = "none";
    velikePorcijeSection.style.display = "none";
    salateSection.style.display = "none";
    kombinacijeSection.style.display = "block";
    picaSection.style.display = "none";
    desertiSection.style.display = "none";
}

function picaFun()
{
    cocaCola.style.display = "block"

    if(window.matchMedia("(max-width: 700px)").matches)
    {
        cocaCola.style.display = "none"
    }
    novoBG.style.visibility = "hidden";
    desertiBG.style.visibility = "hidden";
    malePorcijeBG.style.visibility = "hidden";
    velikePorcijeBG.style.visibility = "hidden";
    salateBG.style.visibility = "hidden";
    picaBG.style.visibility = "visible";
    kombinacijeBG.style.visibility = "hidden";
    novoBG.style.opacity = "0";
    desertiBG.style.opacity = "0";
    malePorcijeBG.style.opacity = "0";
    velikePorcijeBG.style.opacity = "0";
    salateBG.style.opacity = "0";
    picaBG.style.opacity = "1";
    kombinacijeBG.style.opacity = "0";

    novoSection.style.display = "none";
    malePorcijeSection.style.display = "none";
    velikePorcijeSection.style.display = "none";
    salateSection.style.display = "none";
    kombinacijeSection.style.display = "none";
    picaSection.style.display = "block";
    desertiSection.style.display = "none";
}

function desertiFun()
{
    cocaCola.style.display = "none"
    novoBG.style.visibility = "hidden";
    desertiBG.style.visibility = "visible";
    malePorcijeBG.style.visibility = "hidden";
    velikePorcijeBG.style.visibility = "hidden";
    salateBG.style.visibility = "hidden";
    picaBG.style.visibility = "hidden";
    kombinacijeBG.style.visibility = "hidden";
    novoBG.style.opacity = "0";
    desertiBG.style.opacity = "1";
    malePorcijeBG.style.opacity = "0";
    velikePorcijeBG.style.opacity = "0";
    salateBG.style.opacity = "0";
    picaBG.style.opacity = "0";
    kombinacijeBG.style.opacity = "0";
    kombinacijeBG.style.opacity = "0";

    novoSection.style.display = "none";
    malePorcijeSection.style.display = "none";
    velikePorcijeSection.style.display = "none";
    salateSection.style.display = "none";
    kombinacijeSection.style.display = "none";
    picaSection.style.display = "none";
    desertiSection.style.display = "block";
}





