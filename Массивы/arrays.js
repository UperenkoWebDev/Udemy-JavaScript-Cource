"use strict";
//!ARRAYS
let russian = [];
let cars = ["honda", "lada", "mitsubisi", "hunday", "bmw", russian = ["lada", "volga", "zaporozjec"], "suzuki", 24, 13, "lada"];
let games = ["gears of war", "spider-man", "mma", "metal gear"];
cars[2];
console.log(cars[2], cars[5]); // доступ к элементам массива
games[0] = "metal gear:solid"; // изменение элемента массива
games[25] = "final fantasy";//Добавление элемента с присвоемнием индекса
cars[5]; // обращение к массиву russian в массиве cars
cars[5][2];// обращение к элементу массива russian
cars.length// узнать длину массива
cars[cars.length - 1];// Метод,которым можно получить последний элемент массива,не зависимо от его длинны
//
games.push("counter strike");// добавляет элемент в Конец массива
//
games.unshift("dota 2 "); // добавляет элемент в начало массива
//
var deleteLastGame = games.pop();//удаляет последний элемент массива и возвращает жтот элесент в виде значения.
deleteLastGame;
console.log(deleteLastGame);
//
var deleteFirstGame = games.shift();//удаляет первый элемент массива
//
let GamesAndCars = games.concat(cars);//Объеденение 2х массивов. При жтом массивы не удаляются и их так же можно вызвать.
console.log(GamesAndCars);
//
cars.indexOf('lada');// получаем порядковый номер вызываемого элемента. Если элементов 2, то возвращается тот,который ближе к 0. 
//
GamesAndCars.join(" - ");//превращает массив в строку, в скобках указывается знак,котоырй будет между новыми строчными значениями.
console.log(games);


//!12 ОПЕРАЦИЙ С МАССИВАМИ
//todo 
//![1]Как в массиве оставить только уникальные значения .from(new Set(arr)) & [...new Set(arr)]
const carNames = ['bmw', 'toyota', 'lada', 'mitsubisi', 'lada', 'mazda', 'bmw', 'lada', 'toyota', 'mazda'];
const uniqueCars = Array.from(new Set(carNames));
console.log(uniqueCars);//[ 'bmw', 'toyota', 'lada', 'mitsubisi', 'mazda000' ];
const uniqueCars2 = [...new Set(carNames)];
console.log(uniqueCars2);//[ 'bmw', 'toyota', 'lada', 'mitsubisi', 'mazda' ]

//![2] Замена, Удаление значений в массиве , delete, method splice(Start, values to remove from Start, values to add);
const carNames2 = ['bmw', 'toyota', 'lada', 'mitsubisi'];
//console.log(delete carNames2[2]);//[ 'bmw', 'toyota', <1 empty item>, 'mitsubisi' ] Оставляет пустое место.
console.log((carNames2.splice(0, 2, 'gazel\'', 'ziguli')));//[ 'bmw', 'toyota' ] - возвращает массив из удалённых элементов
console.log((carNames2));//[ "gazel'", 'ziguli', 'lada', 'mitsubisi' ] - новый массив

//![3]Трансформация массив метод map(),from()
//*Map позволяет применить заданную ф-ю для КАЖДОГО элемента массива,не изменняя исходный и новый изменённый массив.
//(1)
let newArr = ['a', 1, 3, 5, 'b'];
let mapFunc = newArr.map(function (elem, index, newArr) {
	return elem * 2;
});
console.log(mapFunc);//[ NaN, 2, 6, 10, NaN ]


//*from()
const friends = [
	{ name: 'David' },
	{ name: 'a' },
	{ name: 'b' },
	{ name: 'c' },
	{ secondName: 'gina' },
	{ secondName: 'uper' },
	{ secondName: 'lol' },

];
const friendsArray = Array.from(friends, ({ secondName }) => secondName);
console.log(friendsArray);//[ undefined, undefined, undefined, undefined,'gina','uper','lol']
//!map()

const friendsArray2 = friends.map(function (e, i) {
	return e.name;
});
console.log(friendsArray2);//['David','a','b','c',undefined,undefined,undefined]

//![4] Быстро очистить массив arr.length = 0
friends.length = 0;
console.log(friends);//[]
//![5] Массив в объект
const friends2 = [
	{ name: 'David' },
	{ secondName: 'gina' },

];
const friendsObj = { friends2 };
console.log(friendsObj);//{ friends2: [ { name: 'David' }, { secondName: 'gina' } ] }

//![6] Заполнить массив одинак значениями
const newArray = new Array(5).fill(1);
console.log(newArray);//[ 1, 1, 1, 1, 1 ]

//![7] Объеденение нескольких массивов concat() & spread
const veggies = ['carrot', 'cabbage', 'onion'],
	meat = ['beef', 'chicken', 'pork'];
//(1) concat
const foodConcat = veggies.concat(meat);
console.log(foodConcat);//[ 'carrot', 'cabbage', 'onion', 'beef', 'chicken', 'pork' ]
//(2) spread
const foodSpread = [...veggies, ...meat];
console.log(foodSpread);//[ 'carrot', 'cabbage', 'onion', 'beef', 'chicken', 'pork' ]
//![8] Как найти пересечение 2х массивов (убедиться,что значения не дублируются)
const numOne = [1, 3, 4, 6],
	numTwo = [1, 2, 3, 4, 5];

const duplicatedValues = [... new Set(numOne)].filter(elem => numTwo.includes(elem));
console.log(duplicatedValues);//[ 1, 3, 4 ] 

//![9] Удалить ложные значения из массива
const mixedArr = [1, false, 2, null, "null", true, undefined, 5, 0, 11, NaN];
const trueArr = mixedArr.filter(Boolean);
console.log(trueArr);//[ 1, 2, 'null', true, 5, 11 ]

//![10] Получить рандомное значение массива
const arrNumbers = [5, 2, 15, 2, 56, 20, 22, 33, 100, 123, 2, 4, 5, 6];
const randomNumbers = arrNumbers[(Math.floor(Math.random() * arrNumbers.length))];
console.log(randomNumbers);

//![11] Метод lastIndexOf()
//*Позволяет найти индекс последнего указанного значения (первого с конца);
const array = [0, 1, 2, 3, 1];
const lastIndex = array.lastIndexOf(1);
console.log(lastIndex);//4

//![12] Просуммировать все значения reduce()
const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const sum = nums.reduce((x, y) => x + y);
console.log(sum);//36




