"use strict";
const obj = {
	name: "anton",
	age: 25,
	married: false,
	toTravel: {
		money: false,
		desire: true
	}
};

//!Оператор delete
delete obj.married;
console.log(obj);
//
//!Перебор данных в объекте через "for ([variable] in [object name]"). Переменной является Ключ выбранного объекта.
// for (let key in obj) {
// 	console.log(`Ключ ${key} имеет значение ${obj[key]};`); //....;Ключ toTravel имеет значение [object Object];
// }
/*Т.к. в консоль выводятся данные в виде строк,то когда происходит столкновение с объектом,то программа отобраджает этот объект в виде строки слуд.образом "Ключ toTravel имеет значение [object Object]"*/

//[1]Воспользуемся методом перебора
//Однако было бы неплохо узнать сколько элементов находится в объекте.
//Важно знать,что .lenght не работает с объектами,поэтому можно или [a]Создать счётчик, или [b]Исп.метод //!Object.keys(object name).lenght;
//[a]
let counter = 0;
for (let key in obj) {
	if (typeof (obj[key]) === "object") {
		for (let key2 in obj[key]) {
			console.log(`Ключ ${key2} имеет значение ${obj[key][key2]};`);

		}
	} else {
		console.log(`Ключ ${key} имеет значение ${obj[key]};`);
		counter++;
	}
}
console.log(counter); //ответ 2,т.к. объект внутри объекта обусловлен другим условием if и не читается счётчиком как элемент
console.log(Object.keys(obj).length);
//Object.keys() превращает ключи объекта в данные массива, а .length прекрасно работает с массивами
//Object.keys() работает с верхним уровнем объекта и читает другие объекты внутри как ключи

//!Методы-это действия,которые умеет совершать наш объект и мы можем создавать СВОИ КАСТОМНЫЕ МЕТОДЫ 
let games = ['call of duty', 'fifa', 'counter strike', 'metal gear solid', 'stealth games'];
let movies = ['7y in tibet', 'the fountain', 'green mile'];
const funcObj = {
	name: "Alexander",
	occupation: "Moscow",
	age: 33,
	hobbies: {
		games: games,
		movies: movies,
		other: "other things",
	},
	customMethod: function () {
		console.log('This is one custom method,where the Key becomes a Method');
	}
}
funcObj.customMethod();

//!Деструктуризация
//Позволяет нам вытаскивать целые объекты из объектов
const { hobbies } = funcObj;
//Или ключи
const { other } = funcObj.hobbies;
console.log(other);
/////////////////////////
let person = {
	name: "Anton",
	age: 25,

};
let { name, age, civil_status = "unknown" } = person;
console.log(name);
console.log(age);
console.log(civil_status);
//ИЛИ
function objDestruction({ name, age }) {
	console.log(`Your name is ${name} and you're ${age}`);
}
objDestruction(person);