const langEl = document.querySelector("#language")
const link = document.querySelectorAll("#language option")

const navMenuLink1 = document.querySelector("#pocetnaLink")
const navMenuLink2 = document.querySelector("#oNamaLink")
const navMenuLink3 = document.querySelector("#galerijaLink")
const navMenuLink4 = document.querySelector("#kontaktLink")
const aboutH1_1 = document.querySelector(".about-h1-1")
const aboutH1_2 = document.querySelector(".header-heading-h1Img")
const aboutH1_3 = document.querySelector(".about-h1-3")
const aboutH1_p = document.querySelector(".about-h1 p")
const headerButton = document.querySelector(".header-bottom a")
const onama_h1_1 = document.querySelector(".about-poceci h1")
const onama_p = document.querySelector(".about-poceci p")
const onama_h1_2 = document.querySelector(".dobrodosli h1")
const onama_p2 = document.querySelector(".dobrodosli p")

const kontaktH1 = document.querySelector(".contact-container h1")
const kontaktText = document.querySelector(".contact-container-text a")
const footer_p = document.querySelector(".footerHTML p")
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
  aboutH1_1.textContent = data[attr].aboutH1_1;
  aboutH1_2.innerHTML = data[attr].aboutH1_2;
  aboutH1_3.textContent = data[attr].aboutH1_3;
  aboutH1_p.textContent = data[attr].aboutH1_p;
  headerButton.innerHTML = data[attr].headerButton;
  onama_h1_1.textContent = data[attr].onama_h1_1;
  onama_p.textContent = data[attr].onama_p;
  onama_h1_2.textContent = data[attr].onama_h1_2;
  onama_p2.innerHTML = data[attr].onama_p2;
  kontaktH1.textContent = data[attr].kontaktH1;
  kontaktText.textContent = data[attr].kontaktText;
  footer_p.innerHTML = data[attr].footer_p;
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

  "aboutH1_1": "WELCOME TO BEST",
  "aboutH1_2": "PLACE IN TOWN <img src=\"img/titleBG.png\" alt=\"\">",
  "aboutH1_3": "CEVABDŽINICA „ZMAJ“.",
  "aboutH1_p": "The tastiest kebabs in the whole city, a large number of old and new guests speaks of the quality of food and service in this recognizable place in Sarajevo.",
  "headerButton": "ABOUT US <img src=\"img/arrowDown.png\" alt=\"\">",
  "onama_h1_1": "BEGINNINGS",
  "onama_p": "The first shop was opened in 1986 and operated successfully in the Sarajevo settlement of Dobrinja until the war. After 1996, the \"ZMAJ\" čevadzinica in its full glory began operating at the current address. The tradition of making kebabs as well as other meat delicacies dates back 27 years, which speaks of their quality.",
  "onama_h1_2": "WELCOME",
  "onama_p2": "Welcome to the best place in the city of Ćevabdžinica \"ZMAJ\". <br><br> The tastiest kebabs in the whole city, a large number of old and new guests speaks of the quality of food and service in this recognizable Sarajevo place. <br><br> The smell of great food that entices you and always brings you back to the place of the best food and great pleasure for all gourmets. Visit us and simply enjoy food prepared with great love for all guests. What we have no doubt is that you will come back again. Cevabdzinica \"ZMAJ\" Your right choice.",
  "kontaktH1": "Contact",
  "kontaktText": "Contact us, the delivery is free",
  "footer_p": "Ćevabdžinica Zmaj Stanica <br> Sarajevo Welcome to the best <br> kebab shop u gradu Ćevabdžinica <br> „ZMAJ“ Stanica Sarajevo.",
  "footerLink1": "ABOUT US",
  "footerLink2": "GALLERY",
  "footerLink3": "CONTACT US NAS",
  "footerCredits": "All copyrights reserved for © 2023 Ćevabdžinica Zmaj Stanica Sarajevo",

},


"bosnian":
{
  "navMenuLink1": "Početna",
  "navMenuLink2": "O nama",
  "navMenuLink3": "Galerija",
  "navMenuLink4": "Kontakt",
  "aboutH1_1": "DOBRODOŠLI NA NAJBOLJE",
  "aboutH1_2": "MJESTO U GRADU <img src=\"img/titleBG.png\" alt=\"\">",
  "aboutH1_3": "CEVABDŽINICA „ZMAJ“.",
  "aboutH1_p": "Najukusniji ćevapi u cijelom gradu, veliki broj stari ali i novih gostiju govori o kvaliteti hrane i usluge u ovom prepoznatljivom sarajevskom mjestu",
  "headerButton": "O NAMA <img src=\"img/arrowDown.png\" alt=\"\">",
  "onama_h1_1": "POČECI",
  "onama_p": "Prva radnja otvorena je 1986. godine i poslovala je uspješno u sarajevskom naselju Dobrinja sve do rata. Nakon 1996. godine, ćevadžinica “ZMAj” u svom punom sjaju počinje sa radom na današnjoj adresi.Ćevabdžinica “ZMAJ” je nasljednik porodične tradicije. Tradicija pravljenja ćevapa kao i drugih delicija od mesa datira punih 27 godina, što govori o njihovom kvalitetu.Ćevabdžinica “ZMAJ” je jedna i jedina koja dosljedno nastavlja tu tradiciju svojim kvalitetom, ambijentom i uslugom.",
  "onama_h1_2": "DOBRO DOŠLI",
  "onama_p2": "Dobrodošli na najbolje mjesto u gradu Ćevabdžinica „ZMAJ“. <br><br> Najukusniji ćevapi u cijelom gradu, veliki broj stari ali i novih gostiju govori o kvaliteti hrane i usluge u ovom prepoznatljivom sarajevskom mjestu. <br><br> Miris odlične hrane koji Vas mami i baš uvijek vraća na mjesto najbolje hrane i velikog užitka za sve gurmane. Posjetite nas i jednostavno uživajte u hrani spremljenoj sa velikom ljubavlju prema svim gostima.Ono u što ne sumnjamo jeste da ćete se vratiti opet. Ćevabdžinica „ZMAJ“ Vaš pravi izbor.",

  "kontaktH1": "KONTAKT",
  "kontaktText": "Kontaktirajte nas, dostava je besplatna!",
  "footer_p": "Ćevabdžinica Zmaj Stanica <br> Sarajevo Dobrodošli u najbolju <br> ćevabdžinicu u gradu Ćevabdžinica <br> „ZMAJ“ Stanica Sarajevo.",
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







const aboutHeading1HTML = document.querySelector(".about-h1-1")
const aboutHeading2HTML = document.querySelector(".header-heading-h1Img")
const aboutHeading3HTML = document.querySelector(".about-h1-3")
var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addEventListener(myFunction) // Attach listener function on state changes
function myFunction(x) {
    if (x.matches) { // If media query matches
      aboutHeading1HTML.innerHTML = "DOBRODOŠLI NA"
      aboutHeading2HTML.innerHTML = "NAJBOLJE<img src=\"img/titleBG.png\" alt=\"\">"
      aboutHeading3HTML.innerHTML = "MJESTO U GRADU CEVABDŽINICA „ZMAJ“."

    }
  }