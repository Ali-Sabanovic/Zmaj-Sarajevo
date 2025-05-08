const langEl = document.querySelector("#language")
const link = document.querySelectorAll("#language option")

const navMenuLink1 = document.querySelector("#pocetnaLink")
const navMenuLink2 = document.querySelector("#oNamaLink")
const navMenuLink3 = document.querySelector("#galerijaLink")
const navMenuLink4 = document.querySelector("#kontaktLink")

const galerijaH1 = document.querySelector(".galerija-heading h1")
const footerHTMLg = document.querySelector(".footerHTML p")
const footerLink1 = document.querySelector(".footer-links a:nth-child(1)")
const footerLink2 = document.querySelector(".footer-links a:nth-child(2)")
const footerLink3 = document.querySelector(".footer-links a:nth-child(3)")
const footerCredits = document.querySelector(".footer-credits p")

langEl.addEventListener("change", langChange);

function langChange() {
    const attr = langEl.value;
    navMenuLink1.textContent = data[attr].navMenuLink1;
    navMenuLink2.textContent = data[attr].navMenuLink2;
    navMenuLink3.textContent = data[attr].navMenuLink3;
    navMenuLink4.textContent = data[attr].navMenuLink4;

    galerijaH1.textContent = data[attr].galerijaH1;
    footerHTMLg.innerHTML = data[attr].footerHTMLg;
    footerLink1.textContent = data[attr].footerLink1;
    footerLink2.textContent = data[attr].footerLink2;
    footerLink3.textContent = data[attr].footerLink3;
    footerCredits.textContent = data[attr].footerCredits;
}

var data = {
"english":
{
  "navMenuLink1": "Home",
  "navMenuLink2": "About Us",
  "navMenuLink3": "Gallery",
  "navMenuLink4": "Contact Us",
  "galerijaH1": "GALLERY",
  "footerHTMLg": "Ćevabdžinica Zmaj Stanica <br> Sarajevo Weldome to the best <br> kebab house in the town Ćevabdžinica <br> „ZMAJ“ Stanica Sarajevo.",
  "footerLink1": "ABOUT US",
  "footerLink2": "GALLERY",
  "footerLink3": "CONTACT US",
  "footerCredits": "All copyrights reserved for © 2023 Ćevabdžinica Zmaj Stanica Sarajevo",



},


"bosnian":
{
  "navMenuLink1": "Početna",
  "navMenuLink2": "O nama",
  "navMenuLink3": "Galerija",
  "navMenuLink4": "Kontakt",
  "galerijaH1": "GALERIJA",
  "footerHTMLg": "Ćevabdžinica Zmaj Stanica <br> Sarajevo Dobrodošli u najbolju <br> ćevabdžinicu u gradu Ćevabdžinica <br> „ZMAJ“ Stanica Sarajevo.",
  "footerLink1": "O NAMA",
  "footerLink2": "GALERIJA",
  "footerLink3": "KONTAKTIRAJTE NAS",
  "footerCredits": "Sva autorska prava zadržana za © 2023 Ćevabdžinica Zmaj Stanica Sarajevo",
},


"turkish":
{
  "navMenuLink1": "sadasd",
  "navMenuLink2": "awdasd Us",
  "navMenuLink3": "gasdggg",
  "navMenuLink4": "cxzvwwe Us", 
}
}








const slides = document.querySelectorAll('.slide');
const slidesImg = document.querySelectorAll('.slide img');

const prev = document.getElementById("prevButton")
const next = document.getElementById("nextButton")

let currentSlide = 0;

function showSlide(n) {
    slides[currentSlide].style.transform = "translate(-120%, 0%)"
    slides[currentSlide+1].style.transform = "translate(240%, 0%)"
    slidesImg[currentSlide].style.opacity = "0"
    slidesImg[currentSlide+1].style.opacity = "0"

    
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].style.transform = "translate(0%, 0%)"
    slides[currentSlide+1].style.transform = "translate(120%, 0%)"
    slidesImg[currentSlide].style.opacity = "1"
    slidesImg[currentSlide+1].style.opacity = "1"

  }

function nextSlide() {
    if (currentSlide != 20) {
        prev.style.opacity = "1"
        showSlide(currentSlide + 1);
    }

    if (currentSlide == 20) {
        next.style.opacity = ".5"
    }
}

function prevSlide() {
    if (currentSlide != 0) {
        next.style.opacity = "1"
        showSlide(currentSlide - 1);
    }

    if (currentSlide == 0) {
        prev.style.opacity = ".5"
    }
}




