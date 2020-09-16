"use strict";
//! new Map() Oбъект имеет пары ключ-значение и сохраняет порядок вставки. Объекты и примитивы могут быть использованы в качестве ключей.
//todo синтаксис: new Map([iterable])
//* Map и Set обладают унаследованной от своего прототипа итерацией (@@iterator метод). Т.е. они обладают дефолтным поведением перебора по умолчанию. Object такого поведения не имеет.
let zoo = new Map();

zoo.set('Zebra', 10);
zoo.set('Gorilla', 30);
zoo.set('Monkey', 130);


let monkeyCount = zoo.get('Monkey');
console.log(monkeyCount);

console.log(typeof (zoo));
//////////////////
//* Объект Map итерируется в порядке вставки его элементов - цикл for...of будет возвращать массив [key, value] на каждой итерации.
for (let [key, value] of zoo) {
	console.log(key + ":" + value);

}

//!Использование Map
const myMap = new Map();
const keyObj = {
	a: 3,
	b: "Anton",
	c: 12
},
	keyFunc = function () { },
	keyString = 'a string';
//Задание значений 
myMap.set(keyString, "vallue associated with a string;");
myMap.set(keyObj, "vallue associated with object;");
myMap.set(keyFunc, "vallue associated with a function");
myMap.size;//3
//Получение значений 
myMap.get(keyString);
myMap.get(keyObj);
myMap.get(keyFunc);
console.log(myMap.get("a string"));//vallue associated with a string; т.к. keyString = 'a string';

myMap.get({});//undefined; т.к. keyObj !== {}; ({} - это литеральная нотация конструктора класса Object)
myMap.get(function () { });//undefined; т.к. keyFunc !== function (){}

//Итерация при помщи for...of
//* Из примера можно увидеть,что ключом Map может быть не только строка или символ, а любой тип данных
const numbers = new Map();
let a = "number one",
	b = "number two",
	c = "number three";
	function newFunc(){
		console.log("This is new function");
	}
	const aboutMe = {
		name:"Anton",
		age: 25,
		hobbies: "Movies,games"
	}

numbers.set(a, 1);
numbers.set(b, 2);
numbers.set(c, 3);
numbers.set(newFunc, "are you sure that this fucntion is a new one?" );
numbers.set(aboutMe, "Briefly about me");
//![1]
for (let [key, value] of numbers) {
	console.log(`This key name is ${key} and it has value ${value}`);//This key name is number one and it has value 1...

}
//![2]
for (let key of numbers.keys()) {
	console.log(key+ " The KEYS");// [object Object] The KEYS...
}
//![3]
for (let values of numbers.values()) {
	console.log(values + " The VALUES");//1...
}
//![4]
for (let [key, values] of numbers.entries()) {
	console.log(key + " = " + values);//number one = 1...
}
//![5]
myMap.forEach(function(value,key){
	console.log(`${key} => ${value}`);
	
});