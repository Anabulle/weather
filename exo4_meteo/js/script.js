let p1, p2, p3, img, article;
let selectSection = document.querySelector("section");
let button = document.querySelector("#valider");
let countArticle = 0;

button.addEventListener("click", () => {
    let inputVille = document.querySelector("#ville");
    let openWeatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${inputVille.value}&units=metric&lang=fr&appid=0aed0e2b0209555a79d87f8af65fec56`;
    console.log(openWeatherApi);
    fetch(openWeatherApi)
        .then(function (response) {
            return response.json()
        })
        .then(function (array) {
            let icon = array.weather[0].icon;
            let temp = array.main.temp;
            let desc = array.weather[0].description;

            if (countArticle == 0) {
                createElement();
                fill(array.name, desc, icon, temp);
                append();
                console.log(countArticle);
                countArticle++;
                console.log(countArticle);
            } else {
                article.remove();
                createElement();
                fill(array.name, desc, icon, temp);
                append();
            }

        });
});

function createElement() {
    article = document.createElement("article");
    h2 = document.createElement("h2");
    p2 = document.createElement("p");
    img = document.createElement("img");
    p3 = document.createElement("p");
}

function fill(arrayName, arrayDesc, arrayIcon, arrayTemp) {
    h2.textContent = arrayName;
    p2.textContent = arrayDesc;
    img.setAttribute("src", "http://openweathermap.org/img/w/" + arrayIcon + ".png");
    p3.textContent = arrayTemp;
}

function append() {
    selectSection.append(article);
    article.append(h2);
    article.append(p2);
    article.append(img);
    article.append(p3);
}