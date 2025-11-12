let btn = document.querySelectorAll(".secondsection__seemore");
let modeimg = document.querySelector(".header__modeimg");
let mode = document.querySelector("#mode");
let m = true;

btn[0].addEventListener("click", act);
btn[1].addEventListener("click", act);
btn[2].addEventListener("click", act);

function act() {
    document.querySelector(".notice").classList.add("secondsection__notice");
    document.querySelector(".notice").innerHTML = "Извините, мы банкроты";
}


mode.addEventListener("click", ()=>{
    if (m) {
        //Подключает файл с тёмной темой
        document.querySelector(".head__darkness").setAttribute("href", "css/darkness.css");

        //Изменяет картинки на версии для тёмного режима
        document.querySelector(".header__title").setAttribute("src", "/img/darkness/title.png");
        document.querySelectorAll(".header__navuserimg")[0].setAttribute("src", "/img/darkness/account.png");
        document.querySelectorAll(".header__navuserimg")[1].setAttribute("src", "/img/darkness/search.png");
        document.querySelectorAll(".header__navuserimg")[2].setAttribute("src", "/img/darkness/heart.png");
        document.querySelectorAll(".header__navuserimg")[3].setAttribute("src", "/img/darkness/shop.png");

        //Изменяет кнопку для переключения темы
        modeimg.setAttribute("src", "/img/sun.jpg");

        m = false;
    } else {
        //Отключаем файл с тёмной темой
        document.querySelector(".head__darkness").setAttribute("href", "");

        //Изменяет картинки на версии для светлого режима
        document.querySelector(".header__title").setAttribute("src", "/img/title.png");
        document.querySelectorAll(".header__navuserimg")[0].setAttribute("src", "/img/account.png");
        document.querySelectorAll(".header__navuserimg")[1].setAttribute("src", "/img/search.png");
        document.querySelectorAll(".header__navuserimg")[2].setAttribute("src", "/img/heart.png");
        document.querySelectorAll(".header__navuserimg")[3].setAttribute("src", "/img/shop.png");

        //Изменяет кнопку для переключения темы
        modeimg.setAttribute("src", "/img/moon.jpg");

        m = true;
    }
});