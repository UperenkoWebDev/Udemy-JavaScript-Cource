"use strict";
//Задачи с сайта wm-school-ru
//![1]Клонировать массив не изменяя оригинального
//*(1)
let veggetables = ['капуста', 'репа', 'редиска', 'морковка'];
// 	function arrayClone(v) {
// 		let arr1 = [];
// 		for(let i of v){
// 			arr1.push(i);
// 		}
// 		return arr1;
// 		}
// 		arr1 = arrayClone(veggetables);
// 		console.log(arr1);

//*(2)
// function arrayClone(v) {
// 	return v.slice(0);
// }
// let arr1 = arrayClone(veggetables);
// console.log(arr1);
//
//*(3)
// let arr1 = veggetables.map((e) => {
// 	return e;
// });
// console.log(arr1);
//*(4)
// let arr1 = Array.from(veggetables, (e) => {
// 	return e;
// });
// console.log(arr1);

//![2] Преобразование массива в строку
// function string(s) {
//*(1)
// return s.join("; ");
//*(2)
// return s.toString();
//*(3)
// return "".concat(s);
//*(4)
// return "" + s;
// }
// string(veggetables);
// console.log(string(veggetables));
//![3] Двоеточие между нечетными числами
/*Пользователь вводит многознчное число через prompt. Написать функцию colonOdd(num), которая принимает число num в качества аргумента и вставляет : между двумя нечётными числами. Например, если вводится число  55639217, то на выходе должно быть 5:563:921:7*/
// const num = prompt("Введите число", "");
// console.log(num.length);

// function colonOdd(n) {
// 	let str = n.toString();
// 	let result = [str[0]];
// 	console.log(typeof (str));

// 	for (let i = 0; i <= str.length; i++) {
// 		if (str[i] % 2 !== 0) {
// 			result.push(':', str[i]);
// 		} else {
// 			result.push(str[i]);
// 		}
// 	}
// 	console.log(result);



// 	return result.join("");
// }
// console.log(colonOdd(num));




function quest() {
	for (let i = 1; i <= 1; i++) {
		const ecma = prompt("Название", "");
		const y =  (ecma == null) ? i-- : ecma.toString().slice(0, 4).toUpperCase() + ecma.slice(4).toLowerCase();
		if (y == "ECMAscript") {
			alert("Yes, its ECMAscript!");
		} else if (y == null || y !== "ECMAscript" || y == "" || y == undefined) {
			alert("Please, input correct answer");
			i--;
		}

	}

}
quest();

console.log(null.toString);
