'use strict';
// alert("Im alert funciton");//* модальное окно, останавливает загрузку всех файлов на странице когда активно, нельзя стилизовать!

//const result = confirm('Im confirm function,ok?'); //* модальное окно с вариантами ответов OK & Отмена. В завис. от ответа выводится соответсвующее булиновое значение!

//onst answer = prompt('U think this is Prompt?', '');//* Модальное окно с полем для ввода, первые ковычки - это заглавие строки ввода, вторые - placeholder.


//! ВСЕ ДАННЫЕ ОТ ПОЛЬЗОВАТЕЛЯ ЯВЛЯЮТСЯ СТРОЧНЫМИ, КРОМЕ ТЕХ, КОТОРЫЕ ИЗМЕНЕНЕНЫ С ПОМОЩЬЮ ДИНАМИЧЕСКОЙ ТИПИЗАЦИИ!. [+]

//!---const answer = +prompt('U think this is Prompt?', ''); 
//!----console.log(typeof(answer)); // console result = number.
//* В чём польза?
//*const type = +prompt("Input number","");
//*console.log(type + 5); // 17  main.js:15:9 [ type = number]

//todo Ряд вопросов с помощью Массивов
const answer = [];
answer[0] = prompt('Name', '');
answer[1] = prompt('Street', '');
answer[2] = prompt('Education', '');
answer[3] = +prompt('Age', '');
answer[4] = confirm("Is all good?")
console.log(answer) //*[Array(5) [ "Anton", "Qaboos street", "Higher", 25, true ]]