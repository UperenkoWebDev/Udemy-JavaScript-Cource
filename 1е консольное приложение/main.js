"use strict";


let numberofFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
let a;
let b;

function start() {
    numberofFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    while (numberofFilms === '' || numberofFilms === null || isNaN(numberofFilms)) {
        numberofFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}
start();

const personalMovieDB = {
    count: numberofFilms,
    movies: {
    },
    actors: {},
    genres: [],
    privat: false,
};



//* Задание - 2
//Автоматизируем вопросы
function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        a = prompt("Один из последних просмотренных фильмов?", "");
        b = prompt("На сколько вы его оцените?", "");

        if (a != null && b != null && a != "" && b != "" && a.length < 50 && b.length < 50) {

        }
        else {
            alert("Please refresh the page and fill all the fields");
            i--;
        }
    }
}
rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count >= 1 && personalMovieDB.count < 10) {
        alert("Not enough movies have been watched");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert("You are a classical viewer");
    } else if (30 <= personalMovieDB.count) {
        alert("Wow");
    } else if (personalMovieDB.count <= 0) {
        alert("Error");
    }

    personalMovieDB.movies[a] = b;
}
detectPersonalLevel();
// function showMyDB() { //!Это простой код,который написал я, он рабочий. ниже будет приведен код записанный через аргумент
//     if (personalMovieDB.privat == false) {
//         console.log(personalMovieDB);
//     }
// }
// showMyDB();
function showMyDB(hidden){ //[1]// !Важно! тут мы имеем дело с булиновыми значениями и в [2] мы создадим условие,которое будет проверять является ли это значение false
    if (!hidden){//[2]"if(!hidden)" Если hidden = false,то....
        console.log(personalMovieDB);//[3]
    }
} 
showMyDB(personalMovieDB.privat);//[4] Аргумент,который помещается в [1]


function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимы жанр под номером ${i}`, "");; //если не записать i - 1, то в массиве будет 4 элемента,первый из которых empty.
    }

}
writeYourGenres();
console.log(personalMovieDB);
