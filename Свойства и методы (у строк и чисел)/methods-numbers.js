"use strict";
//!МЕТОДЫ И СВОЙСТВА (строк и чисел)
//Методы - это вспомогательные функции.
//Свойства - это вспомогательные значения.
//Для работы с числами сущесвует отдельная большая библиотека Math.value()
const num = 25.5;
console.log(Math.round(num));//Округляет до ближайшено целого . result = 26;
////////////////////////
const test = "12.2px";
console.log(parseInt(test));//Округлили 12.2 до 12 и превратили в числовой тип данных
console.log(typeof(parseInt(test)));// result = number;
///////////////
const test2 = "12.2px";
console.log(parseFloat(test2));//НЕ округлиляя 12.2 превратили его тип данных
console.log(typeof(parseFloat(test2)));//result = number;


