 'use strict';
//*Communication with the user
//alert("Hello ,World!");
//const result = confirm("How do you do?");
//console.log(result);
// const answer = prompt("Are you 18?", "11");
// console.log(answer + 5);
const answers = [];
answers[0] = prompt('Whats your name?', '');
answers[1] = prompt('Whats your family-name?', '');
answers[2] = prompt('Whats your age?', '');

document.write(answers);



//*numbers
let number = 4.5;
console.log(4 / 0);
console.log('string' / 9); //!NaN(not a number)
//*Strings
//Всегда используются ковычки
const person = 'Alex'; // лучше не смешивть ковычки из html с ковычками в js
const persona = '5'; //в данном случае 5-это трочный тип данных,а не числовой
//*Boolean 
const bool = false; // or true

//*Specific types of data 
//! null - Uncaught Refference Error ( means element doest exist)
//! undefined  (means element exists but cannot be defined)


//* OBJECTS

const obj = {
name: "Anton",
age: 25,
isMarried: false
};//объект - это сущность,содержащая в себе поля(данные) и методы(выполняемые объектом действия)
console.log(obj.name);//* или consle.log(obj["name"]); Это пример обращения к свойствам объекта



//*Arrays/Массивы
let arr = [1, "Anton", "Green", "dog", 3.14, {obj}, //[some array]
];
console.log(arr[4]);

//*Increment & decrement
let incr = 10,
		decr = 10;
		// incr++;
		// decr--;
		// console.log(incr++);//! постфиксная форма записи. увеличение/уменьшение будет происходить при следующем использовании.
		// console.log(decr--);
		console.log(++incr);//префиксная форма, увеличение/уменьшение происходит сразу.
		console.log(--decr);
		console.log( 5*3 === 10);
		//*&& and ||
		const isChecked = true,
					isClose = true;
					console.log(isChecked && !isClose);
//! Операторы:

// Операторы И-"&&", ИЛИ-"||",и отрицания "!" .

// Оператор И-"&& работает только тогда,когда 2 или более подопытных правдивы "и это правда и это правда"

//  const isChecked = true,
//           isClose = true;
//           console.log(isChecked && isClose);// console result is TRUE

//    2.Оператор ИЛИ-"||" работает только тогда,когда 1 из подопытных правдив "или это правда или то правда"

// const isChecked = true,
//           isClose = false;
//           console.log(isChecked || isClose);// console result is TRUE
// 					  3.Оператор отрицания "!"  обращает значение в обратную сторону

// const isChecked = true,
// isClose = true;
// console.log(isChecked && !isClose);// consle result is FALSE
