"use strict";

const personalMovieDB = {
    count: 0,
    movies: {
    },
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        while (personalMovieDB.count === '' || personalMovieDB.count === null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt("Один из последних просмотренных фильмов?", ""),
                b = prompt("На сколько вы его оцените?", "");

            if (a != null && b != null && a != "" && b != "" && a.length < 50 && b.length < 50) {

            }
            else {
                alert("Please refresh the page and fill all the fields");
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
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
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function (shown) {
        if (!shown) {
            personalMovieDB.privat = true;
        }
        else {
            personalMovieDB.privat = false;
        }
    },
    writeYourGenres: function (noSkipGenres) {
        let i;
        for (i = 1; i <= 3; i++) {
            const genres = prompt(`Ваш любимый жанр под номером ${i}`);
            noSkipGenres[i - 1] = genres;
            if (genres === "" || genres === null) {
                i--;    
            }
            else {
                noSkipGenres.forEach(function (genre, number) {
                    console.log(`Любимый жанр № ${number + 1} - это ${genre}`);
                });
            }
        }
    }
};
// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.showMyDB(personalMovieDB.privat);
// personalMovieDB.toggleVisibleMyDB(personalMovieDB.privat);
personalMovieDB.writeYourGenres(personalMovieDB.genres);
console.log(personalMovieDB);


