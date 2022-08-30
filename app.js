$(document).ready(function () {
    console.log('Page HTML : Prêt')
    loadMeteo()
    loadHome()
    menuOnClick()
});

// $(document).ready(function(){
//   $("p").click(function(){
//     $(this).hide();
//   });
// });

function menuOnClick() {
    $('li').click(function () {
        let myID = $(this).attr('id')
        switch (myID) {
            case 'home':
                loadHome()
                break;
            case 'fab':
                loadFab()
                break;
            case 'util':
                loadUtil()
                break;
            case 'elim':
                loadElim()
                break;
            case 'solu':
                loadSolu()
                break;
            case 'meteo':
                loadMeteo()
                break;
            default: console.log('option du menu non reconnu')
        }
    })
}

//
// Views
//

function loadMeteo() {
    const api_key = '553b8087a3945ba1cdd2c2a513c46785';
    const url = 'http://api.openweathermap.org/data/2.5/weather?q=Montreal,ca&mode=xml&units=metric&appid=' + api_key;

    fetch(url)
        .then(reponse => reponse.text())
        .then(xmlText => {
            let parser = new DOMParser();
            let xmlDoc = parser.parseFromString(xmlText, "application/xml");

            let city = xmlDoc.getElementsByTagName("city")[0];
            let texte = city.getAttribute("name") + "<br/>";

            let temperature = xmlDoc.getElementsByTagName("temperature")[0];
            texte += temperature.getAttribute("value") + "° <br/>";

            let weather = xmlDoc.getElementsByTagName("weather")[0];
            texte += "<img id=\"icon\" src=\"http://openweathermap.org/img/w/"
                + weather.getAttribute("icon") + ".png\" </p>";
            $("#meteo").html("<a href=\"#\">" + texte + "</a>")
        });
}

function loadHome() {
    fetch('/Accueil')
        .then(res => res.text())
        .then(html => {
            $('#section').html("<article>" + html + "</article>")
        })
}

function loadFab() {
    fetch('/Fabrication')
        .then(res => res.text())
        .then(html => {
            $('#section').html("<article>" + html + "</article>")
        })
}

function loadUtil() {
    fetch('/Utilisation')
        .then(res => res.text())
        .then(html => {
            $('#section').html("<article>" + html + "</article>")
        })
}

function loadElim() {
    fetch('/Elimination')
        .then(res => res.text())
        .then(html => {
            $('#section').html("<article>" + html + "</article>")
        })
}

function loadSolu() {
    fetch('/Solution')
        .then(res => res.text())
        .then(html => {
            $('#section').html("<article>" + html + "</article>")
        })
}






