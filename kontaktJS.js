const langEl = document.querySelector("#language")
const link = document.querySelectorAll("#language option")

const navMenuLink1 = document.querySelector("#pocetnaLink")
const navMenuLink2 = document.querySelector("#oNamaLink")
const navMenuLink3 = document.querySelector("#galerijaLink")
const navMenuLink4 = document.querySelector("#kontaktLink")
const kontaktH1 = document.querySelector(".contact-container h1")
const placeholder1 = document.querySelector(".formDiv form div:nth-child(1) input")
const placeholder2 = document.querySelector(".formDiv form div:nth-child(2) input")
const placeholder3 = document.querySelector(".formDiv form div:nth-child(3) input")
const placeholder4 = document.querySelector(".formDiv form div:nth-child(4) label")
const submitBtn = document.querySelector(".submit-button input")
const broj = document.querySelector(".contact-tel div:nth-of-type(1) span")
const adresa = document.querySelector(".contact-tel div:nth-of-type(2) span")
const dostava = document.querySelector(".contact-tel div:nth-of-type(3) span")
const vrijeme = document.querySelector(".contact-tel div:nth-of-type(4) span")
const footerHTMLg = document.querySelector(".footerHTML p")
const footerLink1 = document.querySelector(".footer-links a:nth-child(1)")
const footerLink2 = document.querySelector(".footer-links a:nth-child(2)")
const footerLink3 = document.querySelector(".footer-links a:nth-child(3)")
const footerCredits = document.querySelector(".footer-credits")

const cache = {}


langEl.addEventListener("change",langChange);

function langChange() {
  const attr = langEl.value;
  navMenuLink1.textContent = data[attr].navMenuLink1;
  navMenuLink2.textContent = data[attr].navMenuLink2;
  navMenuLink3.textContent = data[attr].navMenuLink3;
  navMenuLink4.textContent = data[attr].navMenuLink4;
  kontaktH1.textContent = data[attr].kontaktH1;
  placeholder1.placeholder = data[attr].placeholder1;
  placeholder2.placeholder = data[attr].placeholder2;
  placeholder3.placeholder = data[attr].placeholder3;
  placeholder4.textContent = data[attr].placeholder4;
  submitBtn.value = data[attr].submitBtn;
  broj.textContent = data[attr].broj;
  adresa.textContent = data[attr].adresa;
  dostava.textContent = data[attr].dostava;
  vrijeme.textContent = data[attr].vrijeme;
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
  "kontaktH1": "CONTACT",
  "placeholder1": "FULL NAME",
  "placeholder2": "EMAIL",
  "placeholder3": "NUMBER",
  "placeholder4": "Your Request",
  "submitBtn": "Send Request",
  "broj": "NUMBER",
  "adresa": "ADRESS",
  "dostava": "FREE DELIVERY!",
  "vrijeme": "WORK TIME",
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
  "kontaktH1": "KONTAKT",
  "placeholder1": "IME I PREZIME",
  "placeholder2": "EMAIL",
  "placeholder3": "BROJ",
  "placeholder4": "VAS ZAHTJEV",
  "submitBtn": "Posalji Upit",
  "broj": "BROJ",
  "adresa": "ADRESA",
  "dostava": "BESPLATNA KUCNA DOSTAVA",
  "vrijeme": "RADNO VRIJEME",
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



