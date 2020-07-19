"use strict";
//!Задание
/*1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */


//* Задание - 1

let numberofFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
const personalMovieDB = {
    count: numberofFilms,
    movies: {
    },
    actors: {},
    genres: [],
    privat: false,
};
// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;//! В данном случае в объект movies помещаем переменную для этого объекта, имя которой будет являться ответом пользователя на ранее заданный вопрос "Один из последних просмотренных фильмов?" Стоит заметить что эта переменная не берётся в ковычки! А я сначала брал,и делал из переменной обычный строчный элемент. а значение переменной присваивается через знак присваивания [=];
console.log(personalMovieDB);

//* Задание - 2
//Автоматизируем вопросы
for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", ""),
        b = prompt("На сколько вы его оцените?", "");

    if (a != null && b != null && a != "" && b != "" && a.length < 50 && b.length < 50) {
        alert("hooray!");
    }
    else {
        alert("Please refresh the page and fill all the fields");
        i--;
    }
    if (personalMovieDB.count >= 1 && personalMovieDB.count < 10) {
        alert("Not enough movies have been watched");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert("You are a classical viewer");
    } else if (30 <= personalMovieDB.count) {
        alert("Wow");
    }else if( personalMovieDB.count <= 0){
        alert("Error");
    }

    personalMovieDB.movies[a] = b;
}
