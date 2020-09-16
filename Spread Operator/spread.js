"use strict";
//!Передача по ссылке или по значению (а так же поверхностные копии объектов)


//!Передача данных по значению осуществляется только с Примитивными типами данных: числа,строки,булины!
let a = 5,
	b = a;//значение
b += 5;
console.log(b); //10
console.log(a); //5 как видим,исходное значение переменной "a" не изменилось

//!Но при работе с объектами,а объекты - это ф-ии,массивы,спец.объекты, то передача данных осуществляется по ссылке
const obj = {
	a: 4,
	b: 3
};
const copy = obj;//ccылка
copy.a = 15;
console.log(copy);//{ a: 15, b: 3 } 
console.log(obj);//{ a: 15, b: 3 }//* как видим изначальные значения объекта ПЕРЕЗАПИСАЛИСЬ,несмотря на то,что подифицировали копию;
//////////////////////////////////
//!Как создавать копии объектов и массивов:
//[1]Циклы
function copyObjFunc(mainObj/*(1)изначальный объект*/) {
	let objCopy = {};/*объект в который будут заноситься данные из изначального*/
	let key;
	for (key in mainObj) {
		objCopy[key] = mainObj[key];
	}
	return objCopy;
} //! Эта функция позволяет копировать данные из одного объекта в другой,не перезаписывая изначальный
const numbers = {
	a: 5,
	b: 1,
	c: {
		x: 4,
		y: 0,
	}
};
const newNumbers = copyObjFunc(numbers/*(1)*/);
newNumbers.a = 110;//*Поверхностная копия

console.log(newNumbers);//{ a: 110, b: 1, c: { x: 4, y: 0 } }
console.log(numbers);//{ a: 5, b: 1, c: { x: 4, y: 0 } }//!значение ключа "a" не перезаписались
newNumbers.c.x = 16;//*Глубокая копия копирует ссылкой
console.log(newNumbers);//{ a: 110, b: 1, c: { x: 16, y: 0 } }
console.log(numbers);//{ a: 5, b: 1, c: { x: 16, y: 0 } }//!значение ключа "х" перезаписались
//////////////////////////////////
//[2] Object.assign соед. 2 объекта
const numbers2 = {
	a: 5,
	b: 1,
};
const newObj = {
	c: "hi",
	d: "world"
};
//!Создаём независимую копию оюъекта из 2х существующих
console.log(Object.assign(numbers2/*объект В который помещаем*/, newObj));//{ a: 5, b: 1, c: 'hi', d: 'world' }

//!Создаём независимую копию объекта из 1го пустого и заполненного

const clone = Object.assign({}, newObj);
clone.d = "Universe";
clone.e = "My name is Anton";
console.log(newObj);//{ c: 'hi', d: 'world' }
console.log(clone);//{ c: 'hi', d: 'Universe', e: 'My name is Anton' }
//////////////////////////////////
//[3] .slice(); Для объеденения массивов
//! Для массива:
const oldArray = [1, 2, 3, 4];
const newArray = oldArray.slice();
newArray.push("Welcome");
console.log(newArray);//[ 1, 2, 3, 4, 'Welcome' ]
console.log(oldArray);//[ 1, 2, 3, 4 ]
//////////////////////////////////
//[4] Spread оператор [...] (оператор разворота)
const video = ["youtube", "vimeo", "rutube"],
	blogs = ["WP", "live journal", "blogger"],
	internet = [...video, ...blogs, "vk", "facebook"];
console.log(internet);
//////////////////////////////////
function log(a, b, c) {
	console.log(a);
	console.log(b);
	console.log(c);
}
//Допустим,что num - массив с сервера,которырй содержит в себе данные о видео, и все эти данные необходимо передать в функцию log
const num = [2, 5, 7];
//передаём аргументы через spread оператор
log(...num);
///////////////
const array = ["a", "b"];
const spreadArray = [...array];
const object = {
	one: 1,
	two: 2
};
const spreadObj = {...object };
console.log(spreadObj);
