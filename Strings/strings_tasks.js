"use strict";
//![1]
//* Спросить задать пользователю вопрос  "Какое оффициацльное занвание JavaScript?"
//*Функция должна модифицировтаься строку пользователя,переводя нужные для прав.ответа буквы в верхний и нижний регистры...
//*... на случай,если ответ польователя верный,но регистры не совпадают.
//* Если пользователь ввёл не правильный ответ и(или) пустую строку, отмену вевести сообщение "Введите корректный ответ"...
//* И вернуть его к вопросу.
//* Правильный ответ должен быть ECMAscript с соблюдением регистра
// const ecma = () => {

// 	for (let i = 1; i <= 1; i++) {
// 		const quest = prompt("Какое оффициацльное занвание JavaScript?", "");
// 		const answ = (quest == null) ? i-- : quest.slice(0, 4).toUpperCase() + quest.slice(4);
// 		if (answ == "ECMAscript") {
// 			alert("Да, это ECMAscript");
// 		} else if (answ !== "ECMAscript" || answ == "" || answ == undefined) {
// 			alert("Введите корректный ответ");
// 			i--;
// 		}
// 	}

// };
// console.log(ecma());

//![2]
//*используя if...esle написать код,котоырй получает число через promt,а затем выводит его в alert
//* [1]если значение больше 0; [-1]еслит значение меньше 0; [0] если значение равно 0;
// let question = +prompt("Введите одно любое чисо", "");
// const token = (number) => {
// 	if (0 < number) {
// 		alert(1);
// 	} else if (number < 0) {
// 		alert(-1);
// 	}
// 	else if (number !== Number) { alert("FOOL");
// }
// 	else {
// 		alert(0);
// 	}
// };
// console.log(token(question));

//![3] 
//*Переписать if с исп. условного оператора '?'
// let result;
// if (a + b < 4){
// 	result = 'Not enough';
// }else{
// 	result = 'Too much';
// }
// result = (3 + 1 < 4) ? console.log('Not enough') : console.log('Too much');
//![4]
//*Проверка на спам. Написать ф-ю, возвр true,если строка содержит 'viagra' и 'xxx', а иначе false
//* Ф-я  должна быть не чувствительна к регистру
// const checkSpam = (spam) => {
// 	let spamCase = spam.toLowerCase();
// 	return (spamCase.includes("viagra") || spamCase.includes("xxx"));

// };
// console.log(checkSpam("vIagRa"));//true
// console.log(checkSpam("free xXxX"));//true
// console.log(checkSpam("Teddy bear"));//false
//![5]
//* Создать функцию, которая будет усекать строку,если та превосходит maxLength и заменяет конец строки на ...
//* Так,чтобы её длинна страла равна maxLength
// const truncate = (x) => {
// 	let maxLenght = 10;
// 	if (maxLenght < x.length) {
// 		return x.slice(0, 11) + "...";
// 	}else{
// 		return x;
// 	}
// };
// console.log(truncate("hello amigos im icredible"));
// console.log(truncate("Anotnio"));
//* или
// const truncate = (str, maxLength) => {
// 	return (maxLength < str.length) ? str.slice(0, maxLength - 1) + "..." : str;
// };
// console.log(truncate("Hello World!", 5));
//![6]
//*Выделить число
//*Есть стоимость в виде строки "$120", создать ф-ю,которая будет вытаскивать только число знака валюты
//!console.log('\u{0024}' === '$');//true
//*Если знак стоит в начале строки:
// let pos = -1;
// let strCur = "$120";
// while ((pos = strCur.indexOf("$", pos + 1)) !== -1) {
// 	console.log(strCur.slice(pos + 1));
// }
//*или если знак стоит или в начале или в конце
// let strEnd = "120$",
// 	strStart = "$1000";
// const func = (x) => {
// 	return (x.startsWith("$")) ? (x.slice(1)) : (x.endsWith("$")) ? (x.slice(0, x.length - 1)) : console.log('no');
// };
// console.log(func(strStart));
//*строку в  массив,фильтр и обратно в строку
// let str = "$12$0";
// const pArr = (string) =>{
// 	const strA = [...string];
// 	return strA.filter(item => item == "$" == false).join("");
// };
// console.log(pArr(str));

//! Задачи с сайта old.code.mu

//* В переменнйо date лежит дава в фомате '2020-08-12'. Преобразовать дату в формат 12/08/2020.
let date = '2020-08-12';
let arr = date.split("-");
console.log(arr);//[ '2020', '08', '12' ]
let newStr = arr[2] + '/' + arr[1] + '/' + arr[0];
console.log(newStr);//12/08/2020

//*Найти позицию слова учу и вырезать его 3мя разными способами 
// let oldCode = 'я учу javascript';
// console.log(oldCode.indexOf('учу',0));
// console.log(oldCode.slice(2,5));
// console.log(oldCode.substring(5,2));
// console.log(oldCode.substr(2,4));
//*Дана строка "Я-учу-javascript". заменит все дефисы на юникод с помощью глобального поиска и замены
// let oldCode2 = 'Я-учу-javascript';
// console.log(oldCode2.replace(/-/g,'!'));// регулярное выражение
//*Написать ф-ю, которая будет преобразовывать первую букву каждого слова в верхнйи регистр
