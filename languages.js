const langEl = document.querySelector("#language")
const link = document.querySelectorAll("#language option")

const navMenuLink1 = document.querySelector("#pocetnaLink")
const navMenuLink2 = document.querySelector("#oNamaLink")
const navMenuLink3 = document.querySelector("#galerijaLink")
const navMenuLink4 = document.querySelector("#kontaktLink")
const headerText = document.querySelector(".header-heading p")
const headerBottomLink = document.querySelector(".header-bottom a")
const cjenovnikHeading = document.querySelector(".cjenovnik-heading h1")
const cjenovnikLink1 = document.querySelector(".cjenovnik-menu a:nth-child(1)")
const cjenovnikLink2 = document.querySelector(".cjenovnik-menu a:nth-child(2)")
const cjenovnikLink3 = document.querySelector(".cjenovnik-menu a:nth-child(3)")
const cjenovnikLink4 = document.querySelector(".cjenovnik-menu a:nth-child(4)")
const cjenovnikLink5 = document.querySelector(".cjenovnik-menu a:nth-child(5)")
const cjenovnikLink6 = document.querySelector(".cjenovnik-menu a:nth-child(6)")
const cjenovnikLink7 = document.querySelector(".cjenovnik-menu a:nth-child(7)")
const cjenovnikNovoPileci = document.querySelector(".cjenovnik-novo .product:nth-child(1) h2")
const cjenovnikNovoPomfrit = document.querySelector(".cjenovnik-novo .product:nth-child(2) h2")
const cjenovnikDesertiNaslov = document.querySelector(".cjenovnik-deserti h2")
const desert1 = document.querySelector(".kafaCaj-ponuda div:nth-of-type(1) h3")
const desert2 = document.querySelector(".kafaCaj-ponuda div:nth-of-type(2) h3")
const desert3 = document.querySelector(".kafaCaj-ponuda div:nth-of-type(3) h3")
const desert4 = document.querySelector(".kafaCaj-ponuda div:nth-of-type(4) h3")
const desert5 = document.querySelector(".kafaCaj-ponuda div:nth-of-type(5) h3")
const desert6 = document.querySelector(".kafaCaj-ponuda div:nth-of-type(6) h3")
const desert7 = document.querySelector(".kafaCaj-ponuda div:nth-of-type(7) h3")
const desert8 = document.querySelector(".kafaCaj-ponuda div:nth-of-type(8) h3")
const desert9 = document.querySelector(".kafaCaj-ponuda div:nth-of-type(9) h3")
const pice1 = document.querySelector(".pice div:nth-child(1) h3")
const pice2 = document.querySelector(".pice div:nth-child(2) h3")
const pice3 = document.querySelector(".pice div:nth-child(3) h3")
const pice4 = document.querySelector(".pice div:nth-child(4) h3")
const pice5 = document.querySelector(".pice div:nth-child(5) h3")
const pice6 = document.querySelector(".pice div:nth-child(6) h3")
const pice7 = document.querySelector(".pice div:nth-child(7) h3")
const pice8 = document.querySelector(".pice div:nth-child(8) h3")
const pice9 = document.querySelector(".pice div:nth-child(9) h3")
const pice10 = document.querySelector(".pice div:nth-child(10) h3")
const pice11 = document.querySelector(".pice div:nth-child(11) h3")
const pice12 = document.querySelector(".pice div:nth-child(12) h3")
const pice13 = document.querySelector(".pice div:nth-child(13) h3")
const pice14 = document.querySelector(".pice div:nth-child(14) h3")
const pice15 = document.querySelector(".pice div:nth-child(15) h3")
const pice16 = document.querySelector(".pice div:nth-child(16) h3")
const pice17 = document.querySelector(".pice div:nth-child(17) h3")
const pice18 = document.querySelector(".pice div:nth-child(18) h3")
const pice19 = document.querySelector(".pice div:nth-child(19) h3")
const piceNaslov = document.querySelector(".cjenovnik-pice h2:nth-child(1)")
const kafaNaslov = document.querySelector(".cjenovnik-pice h2:nth-of-type(2)")
const caj1 = document.querySelector(".kafaCaj2 .kafaCaj-ponuda div:nth-child(1) h3")
const caj2 = document.querySelector(".kafaCaj2 .kafaCaj-ponuda div:nth-child(2) h3")
const caj3 = document.querySelector(".kafaCaj2 .kafaCaj-ponuda div:nth-child(3) h3")
const caj4 = document.querySelector(".kafaCaj2 .kafaCaj-ponuda div:nth-child(4) h3")
const caj5 = document.querySelector(".kafaCaj2 .kafaCaj-ponuda div:nth-child(5) h3")
const caj6 = document.querySelector(".kafaCaj2 .kafaCaj-ponuda div:nth-child(6) h3")
const caj7 = document.querySelector(".kafaCaj2 .kafaCaj-ponuda div:nth-child(7) h3")
const kombinacijeNaslov = document.querySelector(".cjenovnik-kombinacije h2:nth-child(1)")
const kombinacije1 = document.querySelector(".komb .kombinacije-ponuda div:nth-child(1) h3")
const kombinacije2 = document.querySelector(".komb .kombinacije-ponuda div:nth-child(2) h3")
const plateNaslov = document.querySelector(".plate-naslov")
const plate1 = document.querySelector(".plat .kombinacije-ponuda div:nth-child(1) h3")
const plate2 = document.querySelector(".plat .kombinacije-ponuda div:nth-child(2) h3")
const plate3 = document.querySelector(".plat .kombinacije-ponuda div:nth-child(3) h3")
const plate4 = document.querySelector(".plat .kombinacije-ponuda div:nth-child(4) h3")
const salateNaslov = document.querySelector(".salate h2")
const salate1 = document.querySelector(".salate-salate div:nth-child(1) h3")
const salate2 = document.querySelector(".salate-salate div:nth-child(2) h3")
const salate3 = document.querySelector(".salate-salate div:nth-child(3) h3")
const salate4 = document.querySelector(".salate-salate div:nth-child(4) h3")
const salate5 = document.querySelector(".salate-salate div:nth-child(5) h3")
const salate6 = document.querySelector(".salate-salate div:nth-child(6) h3")
const salate7 = document.querySelector(".salate-salate div:nth-child(7) h3")
const pecivoNaslov = document.querySelector(".pecivo h2")
const pecivo1 = document.querySelector(".pecivo-ponuda div:nth-child(1) h3")
const pecivo2 = document.querySelector(".saccs")
const pecivo3 = document.querySelector(".pecivo-ponuda div:nth-child(3) h3")
const pecivo4 = document.querySelector(".pecivo-ponuda div:nth-child(4) h3")
const pecivo5 = document.querySelector(".pecivo-ponuda div:nth-child(5) h3")
const pecivo6 = document.querySelector(".pecivo-ponuda div:nth-child(6) h3")
const male1 = document.querySelector(".cjenovnik-products-male .product-m1 .product-opis h2")
const male1dodatak = document.querySelector(".cjenovnik-products-male .product-m1 .product-opis .opis div:first-child")
const male2 = document.querySelector(".cjenovnik-products-male .product-m2 .product-opis h2")
const male2dodatak = document.querySelector(".cjenovnik-products-male .product-m2 .product-opis .opis div:first-child")
const male3 = document.querySelector(".cjenovnik-products-male .product-m3 .product-opis h2")
const male3dodatak = document.querySelector(".cjenovnik-products-male .product-m3 .product-opis .opis div:first-child")
const male4 = document.querySelector(".cjenovnik-products-male .product-m4 .product-opis h2")
const male4dodatak = document.querySelector(".cjenovnik-products-male .product-m4 .product-opis .opis div:first-child")
const male5 = document.querySelector(".cjenovnik-products-male .product-m5 .product-opis h2")
const male5dodatak = document.querySelector(".cjenovnik-products-male .product-m5 .product-opis .opis div:first-child")
const male6 = document.querySelector(".cjenovnik-products-male .product-m6 .product-opis h2")
const male6dodatak = document.querySelector(".cjenovnik-products-male .product-m6 .product-opis .opis div:first-child")
const male7 = document.querySelector(".cjenovnik-products-male .product-m7 .product-opis h2")
const male7dodatak = document.querySelector(".cjenovnik-products-male .product-m7 .product-opis .opis div:first-child")
const male8 = document.querySelector(".cjenovnik-products-male .product-m8 .product-opis h2")
const male8dodatak = document.querySelector(".cjenovnik-products-male .product-m8 .product-opis .opis div:first-child")
const male9 = document.querySelector(".cjenovnik-products-male .product-m9 .product-opis h2")
const male9dodatak = document.querySelector(".cjenovnik-products-male .product-m9 .product-opis .opis div:first-child")
const male10 = document.querySelector(".cjenovnik-products-male .product-m10 .product-opis h2")
const male10dodatak = document.querySelector(".cjenovnik-products-male .product-m10 .product-opis .opis div:first-child")
const male11 = document.querySelector(".cjenovnik-products-male .product-m11 .product-opis h2")
const male11dodatak = document.querySelector(".cjenovnik-products-male .product-m11 .product-opis .opis div:first-child")
const male12 = document.querySelector(".cjenovnik-products-male .product-m12 .product-opis h2")
const male12dodatak = document.querySelector(".cjenovnik-products-male .product-m12 .product-opis .opis div:first-child")
const male13 = document.querySelector(".cjenovnik-products-male .product-m13 .product-opis h2")
const male13dodatak = document.querySelector(".cjenovnik-products-male .product-m13 .product-opis .opis div:first-child")
const male14 = document.querySelector(".cjenovnik-products-male .product-m14 .product-opis h2")
const male14dodatak = document.querySelector(".cjenovnik-products-male .product-m14 .product-opis .opis div:first-child")
const velike1 = document.querySelector(".cjenovnik-products .product-v1 .product-opis h2")
const velike1dodatak = document.querySelector(".cjenovnik-products .product-v1 .product-opis .opis div:first-child")
const velike2 = document.querySelector(".cjenovnik-products .product-v2 .product-opis h2")
const velike2dodatak = document.querySelector(".cjenovnik-products .product-v2 .product-opis .opis div:first-child")
const velike3 = document.querySelector(".cjenovnik-products .product-v3 .product-opis h2")
const velike3dodatak = document.querySelector(".cjenovnik-products .product-v3 .product-opis .opis div:first-child")
const velike4 = document.querySelector(".cjenovnik-products .product-v4 .product-opis h2")
const velike4dodatak = document.querySelector(".cjenovnik-products .product-v4 .product-opis .opis div:first-child")
const velike5 = document.querySelector(".cjenovnik-products .product-v5 .product-opis h2")
const velike5dodatak = document.querySelector(".cjenovnik-products .product-v5 .product-opis .opis div:first-child")
const velike6 = document.querySelector(".cjenovnik-products .product-v6 .product-opis h2")
const velike6dodatak = document.querySelector(".cjenovnik-products .product-v6 .product-opis .opis div:first-child")
const velike7 = document.querySelector(".cjenovnik-products .product-v7 .product-opis h2")
const velike7dodatak = document.querySelector(".cjenovnik-products .product-v7 .product-opis .opis div:first-child")
const velike8 = document.querySelector(".cjenovnik-products .product-v8 .product-opis h2")
const velike8dodatak = document.querySelector(".cjenovnik-products .product-v8 .product-opis .opis div:first-child")
const velike9 = document.querySelector(".cjenovnik-products .product-v9 .product-opis h2")
const velike9dodatak = document.querySelector(".cjenovnik-products .product-v9 .product-opis .opis div:first-child")
const velike10 = document.querySelector(".cjenovnik-products .product-v10 .product-opis h2")
const velike10dodatak = document.querySelector(".cjenovnik-products .product-v10 .product-opis .opis div:first-child")
const velike11 = document.querySelector(".cjenovnik-products .product-v11 .product-opis h2")
const velike11dodatak = document.querySelector(".cjenovnik-products .product-v11 .product-opis .opis div:first-child")
const velike12 = document.querySelector(".cjenovnik-products .product-v12 .product-opis h2")
const velike12dodatak = document.querySelector(".cjenovnik-products .product-v12 .product-opis .opis div:first-child")
const velike13 = document.querySelector(".cjenovnik-products .product-v13 .product-opis h2")
const velike13dodatak = document.querySelector(".cjenovnik-products .product-v13 .product-opis .opis div:first-child")
const velike14 = document.querySelector(".cjenovnik-products .product-v14 .product-opis h2")
const velike14dodatak = document.querySelector(".cjenovnik-products .product-v14 .product-opis .opis div:first-child")
const contactNaslov = document.querySelector(".contact-us h1")
const kontaktDostava = document.querySelector(".kontaktHTML")
const footerText = document.querySelector(".footerHTML")
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
        headerText.innerHTML = data[attr].headerText;
        headerBottomLink.innerHTML = data[attr].headerBottomLink;
        cjenovnikHeading.textContent = data[attr].cjenovnikHeading;
        cjenovnikLink1.innerHTML = data[attr].cjenovnikLink1;
        cjenovnikLink2.innerHTML = data[attr].cjenovnikLink2;
        cjenovnikLink3.innerHTML = data[attr].cjenovnikLink3;
        cjenovnikLink4.innerHTML = data[attr].cjenovnikLink4;
        cjenovnikLink5.innerHTML = data[attr].cjenovnikLink5;
        cjenovnikLink6.innerHTML = data[attr].cjenovnikLink6;
        cjenovnikLink7.innerHTML = data[attr].cjenovnikLink7;
        cjenovnikNovoPileci.textContent = data[attr].cjenovnikNovoPileci;
        cjenovnikNovoPomfrit.textContent = data[attr].cjenovnikNovoPomfrit;
        cjenovnikDesertiNaslov.innerHTML = data[attr].cjenovnikDesertiNaslov;
        desert1.textContent = data[attr].desert1;
        desert2.textContent = data[attr].desert2;
        desert3.textContent = data[attr].desert3;
        desert4.textContent = data[attr].desert4;
        desert5.textContent = data[attr].desert5;
        desert6.textContent = data[attr].desert6;
        desert7.textContent = data[attr].desert7;
        desert8.textContent = data[attr].desert8;
        desert9.textContent = data[attr].desert9;
        pice1.textContent = data[attr].pice1
        pice2.textContent = data[attr].pice2
        pice3.textContent = data[attr].pice3
        pice4.textContent = data[attr].pice4
        pice5.textContent = data[attr].pice5
        pice6.textContent = data[attr].pice6
        pice7.textContent = data[attr].pice7
        pice8.textContent = data[attr].pice8
        pice9.textContent = data[attr].pice9
        pice10.textContent = data[attr].pice10
        pice11.textContent = data[attr].pice11
        pice12.textContent = data[attr].pice12
        pice13.textContent = data[attr].pice13
        pice14.textContent = data[attr].pice14
        pice15.textContent = data[attr].pice15
        pice16.textContent = data[attr].pice16
        pice17.textContent = data[attr].pice17
        pice18.textContent = data[attr].pice18
        pice19.textContent = data[attr].pice19
        piceNaslov.textContent = data[attr].piceNaslov
        kafaNaslov.textContent = data[attr].kafaNaslov
        caj1.textContent = data[attr].caj1
        caj2.textContent = data[attr].caj2
        caj3.textContent = data[attr].caj3
        caj4.textContent = data[attr].caj4
        caj5.textContent = data[attr].caj5
        caj6.textContent = data[attr].caj6
        caj7.textContent = data[attr].caj7
        kombinacijeNaslov.textContent = data[attr].kombinacijeNaslov
        kombinacije1.textContent = data[attr].kombinacije1
        kombinacije2.textContent = data[attr].kombinacije2
        plateNaslov.textContent = data[attr].plateNaslov
        plate1.textContent = data[attr].plate1
        plate2.textContent = data[attr].plate2
        plate3.textContent = data[attr].plate3
        plate4.textContent = data[attr].plate4
        salateNaslov.textContent = data[attr].salateNaslov
        salate1.textContent = data[attr].salate1
        salate2.textContent = data[attr].salate2
        salate3.textContent = data[attr].salate3
        salate4.textContent = data[attr].salate4
        salate5.textContent = data[attr].salate5
        salate6.textContent = data[attr].salate6
        salate7.textContent = data[attr].salate7
        pecivoNaslov.textContent = data[attr].pecivoNaslov
        pecivo1.textContent = data[attr].pecivo1
        pecivo2.textContent = data[attr].pecivo2
        pecivo3.textContent = data[attr].pecivo3
        pecivo4.textContent = data[attr].pecivo4
        pecivo5.textContent = data[attr].pecivo5
        pecivo6.textContent = data[attr].pecivo6
        male1.textContent = data[attr].male1
        male1dodatak.textContent = data[attr].male1dodatak
        male2.textContent = data[attr].male2
        male2dodatak.textContent = data[attr].male2dodatak
        male3.textContent = data[attr].male3
        male3dodatak.textContent = data[attr].male3dodatak
        male4.textContent = data[attr].male4
        male4dodatak.textContent = data[attr].male4dodatak
        male5.textContent = data[attr].male5
        male5dodatak.textContent = data[attr].male5dodatak
        male6.textContent = data[attr].male6
        male6dodatak.textContent = data[attr].male6dodatak
        male7.textContent = data[attr].male7
        male7dodatak.textContent = data[attr].male7dodatak
        male8.textContent = data[attr].male8
        male8dodatak.textContent = data[attr].male8dodatak
        male9.textContent = data[attr].male9
        male9dodatak.textContent = data[attr].male9dodatak
        male10.textContent = data[attr].male10
        male10dodatak.textContent = data[attr].male10dodatak
        male11.textContent = data[attr].male11
        male11dodatak.textContent = data[attr].male11dodatak
        male12.textContent = data[attr].male12
        male12dodatak.textContent = data[attr].male12dodatak
        male13.textContent = data[attr].male13
        male13dodatak.textContent = data[attr].male13dodatak
        male14.textContent = data[attr].male14
        male14dodatak.textContent = data[attr].male14dodatak
        velike1.textContent = data[attr].velike1
        velike1dodatak.textContent = data[attr].velike1dodatak
        velike2.textContent = data[attr].velike2
        velike2dodatak.textContent = data[attr].velike2dodatak
        velike3.textContent = data[attr].velike3
        velike3dodatak.textContent = data[attr].velike3dodatak
        velike4.textContent = data[attr].velike4
        velike4dodatak.textContent = data[attr].velike4dodatak
        velike5.textContent = data[attr].velike5
        velike5dodatak.textContent = data[attr].velike5dodatak
        velike6.textContent = data[attr].velike6
        velike6dodatak.textContent = data[attr].velike6dodatak
        velike7.textContent = data[attr].velike7
        velike7dodatak.textContent = data[attr].velike7dodatak
        velike8.textContent = data[attr].velike8
        velike8dodatak.textContent = data[attr].velike8dodatak
        velike9.textContent = data[attr].velike9
        velike9dodatak.textContent = data[attr].velike9dodatak
        velike10.textContent = data[attr].velike10
        velike10dodatak.textContent = data[attr].velike10dodatak
        velike11.textContent = data[attr].velike11
        velike11dodatak.textContent = data[attr].velike11dodatak
        velike12.textContent = data[attr].velike12
        velike12dodatak.textContent = data[attr].velike12dodatak
        velike13.textContent = data[attr].velike13
        velike13dodatak.textContent = data[attr].velike13dodatak
        velike14.textContent = data[attr].velike14
        velike14dodatak.textContent = data[attr].velike14dodatak
        contactNaslov.textContent = data[attr].contactNaslov
        kontaktDostava.textContent = data[attr].kontaktDostava
        footerText.innerHTML = data[attr].footerText
        footerLink1.textContent = data[attr].footerLink1
        footerLink2.textContent = data[attr].footerLink2
        footerLink3.textContent = data[attr].footerLink3
        footerCredits.textContent = data[attr].footerCredits
}


var data = {
    "english":
    {
        "navMenuLink1": "Home",
        "navMenuLink2": "About Us",
        "navMenuLink3": "Gallery",
        "navMenuLink4": "Contact Us",
        "headerText": "Welcome to the best place in the city,  Ćevabdžinica „ZMAJ“. The tastiest kebabs in the whole city, a large <br> number of old and new guests speak of the quality of food and service in this distinctive Sarajevo place.",
        "headerBottomLink": "OUR MENU <img src=\"img/arrowDown.png\" alt=\"\">",
        "cjenovnikHeading": "PRICE LIST",
        "cjenovnikLink1": "NEW OFFERS <img class=\"cjenovnik-linkBG\" src=\"img/cjenovnikBG.png\" alt=\"\">",
        "cjenovnikLink2": "SMALL PORTIONS <img class=\"cjenovnik-linkBG\" src=\"img/cjenovnikBG.png\" alt=\"\">",
        "cjenovnikLink3": "BIG PORTIONS <img class=\"cjenovnik-linkBG\" src=\"img/cjenovnikBG.png\" alt=\"\">",
        "cjenovnikLink4": "SALADS, BAGELS, ETC <img class=\"cjenovnik-linkBG\" src=\"img/cjenovnikBG.png\" alt=\"\">",
        "cjenovnikLink5": "COMBINATIONS <img class=\"cjenovnik-linkBG\" src=\"img/cjenovnikBG.png\" alt=\"\">",
        "cjenovnikLink6": "DRINKS <img class=\"cjenovnik-linkBG\" src=\"img/cjenovnikBG.png\" alt=\"\">",
        "cjenovnikLink7": "DESERTS <img class=\"cjenovnik-linkBG\" src=\"img/cjenovnikBG.png\" alt=\"\">",
        "cjenovnikDesertiNaslov": "DESERTS",
        "desert1": "TUFAHI",
        "desert2": "KALBURABASTI",
        "desert3": "BAMIYEH",
        "desert4": "BAKLAVA",
        "desert5": "ROSE BAKLAVA",
        "desert6": "CIDER CAKE",
        "desert7": "KADAIF",
        "desert8": "ICE CREAM 60GR",
        "desert9": "ICE CREAM 60GR",
        "cjenovnikNovoPileci": "CHICKEN SANDWICH",
        "cjenovnikNovoPomfrit": "FRENCH FRIES",
        "pice1": "COCACOLA",
        "pice2": "APPLE JUICE",
        "pice3": "COCACOLA ZERO",
        "pice4": "STRAWBERRY JUICE",
        "pice5": "FANTA",
        "pice6": "CURRANT JUICE",
        "pice7": "SPRITE",
        "pice8": "ORANGE JUICE",
        "pice9": "ORANGINA",
        "pice10": "SCHWEPPES BITTER LEMON",
        "pice11": "COCKTA",
        "pice12": "SCHWEPPES TONIC",
        "pice13": "WATER",
        "pice14": "SCHWEPPES TANGARINA",
        "pice15": "SPARKLING WATER",
        "pice16": "SCHWEPPES POMEGRANATE",
        "pice17": "KISELJAK SENSATION",
        "pice18": "0 ALCOHOL BEER",
        "pice19": "ICE TEA",
        "piceNaslov": "DRINKS",
        "kafaNaslov": "COFFEE AND TEA",
        "caj1": "GREEN TEA",
        "caj2": "BLACK TEA",
        "caj3": "FOREST FRUIT",
        "caj4": "MINT TEA",
        "caj5": "CHAMOMILE",
        "caj6": "COFFEE",
        "caj7": "COFFEE WITH MILK",
        "kombinacijeNaslov": "COMBINATIONS",
        "kombinacije1": "SAUSAGES, CHICKEN",
        "kombinacije2": "SAUSAGES, KEBABS",
        "plateNaslov": "PLATES",
        "plate1" : "MIXED MEAT 1#",
        "plate2" : "MIXED MEAT 2#",
        "plate3" : "MIXED MEAT 3#",
        "plate4" : "MIXED MEAT 4#",
        "salateNaslov": "SALADS",
        "salate1": "ZMAJ SALAD",
        "salate2": "CABBAGE SALAD",
        "salate3": "TOMATO SALAD",
        "salate4": "MIXED SALAD",
        "salate5": "ZMAJ CHICKEN SALAD",
        "salate6": "ZMAJ RAM STEAK SALAD",
        "salate7": "SOPA SALAD",
        "pecivoNaslov": "BAGELS AND MILK PRODUCTS",
        "pecivo1": "FLATBREAD",
        "pecivo2": "HALF FLATBREAD",
        "pecivo3": "SMALL BREAD",
        "pecivo4": "CREAM",
        "pecivo5": "YOGURT",
        "pecivo6": "AYRAN",
        "male1": "KEBABS",
        "male2": "CHICKEN STEAK",
        "male3": "BURGERS",
        "male4": "CHICKEN SKEWERS",
        "male5": "SAUSAGES",
        "male6": "CALF STEAK",
        "male7": "CHICKEN STEAK",
        "male8": "CALF FLINTS",
        "male9": "CHICKEN FILLETS",
        "male10": "CALF SKEWERS",
        "male11": "RAM STEAK",
        "male12": "CALF LIVER",
        "male13": "CALF KIDNEYS",
        "male14": "CALF SWEETBREAD",
        "male1dodatak": "140 gr (onion)",
        "male2dodatak": "230 gr (cabbage)",
        "male3dodatak": "135 gr (onion)",
        "male4dodatak": "150 gr (cabbage)",
        "male5dodatak": "135 gr (onion, mustard)",
        "male6dodatak": "130 gr (onion)",
        "male7dodatak": "200 gr (onion)",
        "male8dodatak": "130 gr (onion)",
        "male9dodatak": "200 gr (cabbage)",
        "male10dodatak": "130 gr (onion)",
        "male11dodatak": "130 gr (onion)",
        "male12dodatak": "160 gr (onion)",
        "male13dodatak": "160 gr (onion)",
        "male14dodatak": "160 gr (onion)",
        "velike1": "KEBABS",
        "velike2": "CALF STEAK",
        "velike3": "CHICKEN STEAK",
        "velike4": "CALF FLINTS",
        "velike5": "SAUSAGES",
        "velike6": "CHICKEN STEAK",
        "velike7": "BURGERS",
        "velike8": "CHICKEN SKEWERS",
        "velike9": "CHICKEN FILLETS",
        "velike10": "CALF SKEWERS",
        "velike11": "RAM STEAK",
        "velike12": "CALF LIVER",
        "velike13": "CALF KIDNEYS",
        "velike14": "CALF SWEETBREAD",
        "velike1dodatak": "280 gr (onion)",
        "velike2dodatak": "260 gr (onion)",
        "velike3dodatak": "350 gr (onion)",
        "velike4dodatak": "260 gr (onion)",
        "velike5dodatak": "220 gr (onion, mustard)",
        "velike6dodatak": "300 gr (cabbage)",
        "velike7dodatak": "220 gr (onion, cabbage)",
        "velike8dodatak": "300 gr (cabbage)",
        "velike9dodatak": "350 gr (cabbage)",
        "velike10dodatak": "260 gr (onion)",
        "velike11dodatak": "260 gr (onion)",
        "velike12dodatak": "320 gr (onion)",
        "velike13dodatak": "320 gr (onion)",
        "velike14dodatak": "320 gr (onion)",
        "contactNaslov": "CONTACT",
        "kontaktDostava": "Contact us, the delivery is free!",
        "footerText": "Ćevabdžinica Zmaj Stanica <br> Sarajevo Welcome to the best <br> ćevabdžinica in the City, Ćevabdžinica <br> „ZMAJ“ Stanica Sarajevo.",
        "footerLink1": "ABOUT US",
        "footerLink2": "GALLERY",
        "footerLink3": "CONTACT US",
        "footerCredits": "All copyrights reserved for © 2023 Ćevabdžinica Zmaj Stanica Sarajevo"
    },


    "bosnian":
    {
        "navMenuLink1": "Početna",
        "navMenuLink2": "O nama",
        "navMenuLink3": "Galerija",
        "navMenuLink4": "Kontakt",
        "headerText": "Dobrodošli na najbolje mjesto u gradu Ćevabdžinica „ZMAJ“. Najukusniji ćevapi u cijelom gradu, veliki <br> broj stari ali i novih gostiju govori o kvaliteti hrane i usluge u ovom prepoznatljivom sarajevskom mjestu.",
        "headerBottomLink": "NAS MENI <img src=\"img/arrowDown.png\" alt=\"\">",
        "cjenovnikHeading": "CJENOVNIK",
        "cjenovnikLink1": "NOVO U PONUDI <img class=\"cjenovnik-linkBG\" src=\"img/cjenovnikBG.png\" alt=\"\">",
        "cjenovnikLink2": "MALE PORCIJE <img class=\"cjenovnik-linkBG\" src=\"img/cjenovnikBG.png\" alt=\"\">",
        "cjenovnikLink3": "VELIKE PORCIJE <img class=\"cjenovnik-linkBG\" src=\"img/cjenovnikBG.png\" alt=\"\">",
        "cjenovnikLink4": "SALATE, PECIVA I SL <img class=\"cjenovnik-linkBG\" src=\"img/cjenovnikBG.png\" alt=\"\">",
        "cjenovnikLink5": "KOMBINACIJE I PLATE <img class=\"cjenovnik-linkBG\" src=\"img/cjenovnikBG.png\" alt=\"\">",
        "cjenovnikLink6": "PIĆA <img class=\"cjenovnik-linkBG\" src=\"img/cjenovnikBG.png\" alt=\"\">",
        "cjenovnikLink7": "DESERTI <img class=\"cjenovnik-linkBG\" src=\"img/cjenovnikBG.png\" alt=\"\">",
        "cjenovnikDesertiNaslov": "DEZERTI",
        "desert1": "TUFAHIJA",
        "desert2": "HURMAŠICA",
        "desert3": "TULUMBA",
        "desert4": "BAKLAVA",
        "desert5": "RUŽICA",
        "desert6": "JABUKOVAČA",
        "desert7": "KADAIF",
        "desert8": "SLADOLED KUGLA 60GR",
        "desert9": "SLADOLED PISTACIJA 60GR",
        "cjenovnikNovoPileci": "PILEĆI SENDVIČ",
        "cjenovnikNovoPomfrit": "POMFRIT",
        "pice1": "COCACOLA",
        "pice2": " SOK OD JABUKE",
        "pice3": "COCACOLA ZERO",
        "pice4": "SOK OD JAGODE",
        "pice5": "FANTA",
        "pice6": "SOK OD RIBIZLE",
        "pice7": "SPRITE",
        "pice8": "SOK OD NARANDŽE",
        "pice9": "ORANGINA",
        "pice10": "SCHWEPPES BITTER LEMON",
        "pice11": "COCKTA",
        "pice12": "SCHWEPPES TONIC",
        "pice13": "NEGAZIRANA VODA",
        "pice14": "SCHWEPPES TANGARINA",
        "pice15": "MINERALNA VODA",
        "pice16": "SCHWEPPES POMEGRANATE",
        "pice17": "KISELJAK SENSATION",
        "pice18": "BEZALKOHOLNO PIVO",
        "pice19": "LEDENI CAJ",
        "piceNaslov": "PIĆE",
        "kafaNaslov": "KAFA I CAJ",
        "caj1": "ZELENI ČAJ",
        "caj2": "CRNI ČAJ",
        "caj3": "ŠUMSKO VOĆE",
        "caj4": "MENTA",
        "caj5": "KAMILICA",
        "caj6": "KAFA",
        "caj7": "KAFA SA MLIJEKOM",
        "kombinacijeNaslov": "KOMBINACIJE",
        "kombinacije1": "SUDŽUKICE, PILETINA",
        "kombinacije2": "SUDŽUKICE, ĆEVAPI",
        "plateNaslov": "PLATE",
        "plate1" : "MJEŠANO MESO 1#",
        "plate2" : "MJEŠANO MESO 2#",
        "plate3" : "MJEŠANO MESO 3#",
        "plate4" : "MJEŠANO MESO 4#",
        "salateNaslov": "SALATE",
        "salate1": "ZMAJ SALATA",
        "salate2": "KUPUS SALATA",
        "salate3": "PARADAJZ SALATA",
        "salate4": "MJEŠANA SALATA",
        "salate5": "ZMAJ PILEĆA SALATA",
        "salate6": "ZMAJ RAMSTEK SALATA",
        "salate7": "ŠOPSKA SALATA",
        "pecivoNaslov": "PECIVO I MLIJEČNI PROIZVODI",
        "pecivo1": "SOMUN CIJELI",
        "pecivo2": "POLA SOMUNA",
        "pecivo3": "LABLA",
        "pecivo4": "KAJMAK",
        "pecivo5": "JOGURT",
        "pecivo6": "AJRAN",
        "male1": "ĆEVAPI",
        "male2": "PILEĆI STEAK",
        "male3": "PLJESKAVICE",
        "male4": "PILEĆI RAŽNJIĆI",
        "male5": "SUDŽUKICE",
        "male6": "TELEĆA ŠNICLA",
        "male7": "PILEĆA ŠNICLA",
        "male8": "TELEĆA KREMENADLA",
        "male9": "PILEĆI FILETI",
        "male10": "TELEĆI RAŽNJIĆI",
        "male11": "RAMSTEK",
        "male12": "TELEĆA JETRA",
        "male13": "TELEĆI BUBREZI",
        "male14": "TELEĆA BRIZLA",
        "male1dodatak": "140 gr (luk)",
        "male2dodatak": "230 gr (kupus)",
        "male3dodatak": "135 gr (luk)",
        "male4dodatak": "150 gr (kupus)",
        "male5dodatak": "135 gr (luk, senf)",
        "male6dodatak": "130 gr (luk)",
        "male7dodatak": "200 gr (luk)",
        "male8dodatak": "130 gr (luk)",
        "male9dodatak": "200 gr (kupus)",
        "male10dodatak": "130 gr (luk)",
        "male11dodatak": "130 gr (luk)",
        "male12dodatak": "160 gr (luk)",
        "male13dodatak": "160 gr (luk)",
        "male14dodatak": "160 gr (luk)",
        "velike1": "ĆEVAPI",
        "velike2": "TELEĆA ŠNICLA",
        "velike3": "PILEĆA ŠNICLA",
        "velike4": "TELEĆA KREMENADLA",
        "velike5": "SUDŽUKICE",
        "velike6": "PILEĆI STEAK",
        "velike7": "PLJESKAVICE",
        "velike8": "PILEĆI RAŽNJIĆI",
        "velike9": "PILEĆI FILETI",
        "velike10": "TELEĆI RAŽNJIĆI",
        "velike11": "RAMSTEK",
        "velike12": "TELEĆA JETRA",
        "velike13": "TELEĆI BUBREZI",
        "velike14": "TELEĆA BRIZLA",
        "velike1dodatak": "280 gr (luk)",
        "velike2dodatak": "260 gr (luk)",
        "velike3dodatak": "350 gr (luk)",
        "velike4dodatak": "260 gr (luk)",
        "velike5dodatak": "220 gr (luk, senf)",
        "velike6dodatak": "300 gr (kupus)",
        "velike7dodatak": "220 gr (luk, kupus)",
        "velike8dodatak": "300 gr (kupus)",
        "velike9dodatak": "350 gr (kupus)",
        "velike10dodatak": "260 gr (luk)",
        "velike11dodatak": "260 gr (luk)",
        "velike12dodatak": "320 gr (luk)",
        "velike13dodatak": "320 gr (luk)",
        "velike14dodatak": "320 gr (luk)",
        "contactNaslov": "KONTAKT",
        "kontaktDostava": "Kontaktirajte nas, dostava je besplatna!",
        "footerText": "Ćevabdžinica Zmaj Stanica <br> Sarajevo Dobrodošli u najbolju <br> ćevabdžinicu u gradu Ćevabdžinica <br> „ZMAJ“ Stanica Sarajevo.",
        "footerLink1": "O NAMA",
        "footerLink2": "GALERIJA",
        "footerLink3": "KONTAKTIRAJTE NAS",
        "footerCredits": "Sva autorska prava zadržana za © 2023 Ćevabdžinica Zmaj Stanica Sarajevo"
    },


    "turkish":
    {
        "navMenuLink1": "sadasd",
        "navMenuLink2": "awdasd Us",
        "navMenuLink3": "gasdggg",
        "navMenuLink4": "cxzvwwe Us", 
    }
}



