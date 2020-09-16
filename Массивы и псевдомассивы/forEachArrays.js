//! Массивы и псевдомассивы

const num = [1, 2, 3, 4, 5];
num.pop();//удаляет последний элемент массива
num.push(10);//добавляет элемент в конец
//!.shift() & .unshift() исп. редко,т.к. удаление/добавление перого элемента массива меняет индексы всех послежующих
num.shift();//удаляет элемент из начла
num.unshift(0);//добавляет элемент из начала 
console.log(num);



//!Конструкции перебора элементов массива
//[1]
for (let i = 0; i < num2.length; i++) {
	const num2 = [0, 1, 2, 3, 4, 5];
	console.log(num2[i]);
}
//[2]
for (let value of num2) {
	console.log(value);
}
//!Важно! Т.к. первый инекс массива - 0, а метод letngth работает по формуле ([index number] + 1)Т.к. кол-во элементов должно начинаться с 1го
//!То могут вохникать опред проблеммы
let num3 = [1, 2, 3,];
num3[99] = 5;
console.log(num3);//[ 1, 2, 3, <96 empty items>, 5 ]

console.log(num3.length);//ответ 100,в то время,как в массиве,по факту 4 объектов

//*FOR EACH! Используется очень часто для перебора,но отличается от for(i=0;i<x;i++){}тем,что его нельзя досрочно прервать или пропустить ход с помощью break & continue
//! array.forEach(function([element],[index i],[array]) {
// !});
const num4 = [5, 2, 1, 10, 7, 23, 12, 0, 5];
num4.forEach(function (item, i, num4) {
	console.log(`${i}: ${item} is inside ${"num4"} array`);
});

//![Строки в массив .split("punctuation sign"); ] [Массив в строки .join("punctuation sign");]

let products = num4.join(", ");
console.log(products);

//*Сортировка .sort(), сортирует сроки в алфавитном порядке. Работая с числовым типом данных сортирует все цифры сначала по 1му числу,а потом по 2му(если число 2х значное)

const num5 = [5,1,14,2,8,33,12,22,23];

const	num6 = num5.slice();
// const num6 = [...num5];
console.log(num6);
// console.log(num5);


	num6.sort(compareNum);
function compareNum(a, b) {//! функция сортировки чисел методом быстрой сортировки('quick sort')
	return a - b;
}
console.log(num6);

//

