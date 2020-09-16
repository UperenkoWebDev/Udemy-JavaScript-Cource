"use strict";
const category1 = 'messages';
const category2 = 'videos';
const category3 = 'funny';

//! Конкатинация - это совмещение значений строки со,скажем,значением переменной переменной. Однако метод указанынй ниже является устаревшим и усложняет работу,т.к. постоянно приходится добавлять новый элемент в ковычках.
//*сonsole.log('https://vk.com/' + category1 + '/new' + '/....');
//todo ---[https://vk.com/messages/new/....]

//! Вот новый стандарт, с применением Интерполяции. Важно,что интреполяция работает тольок с косыми-обратными ковычками [``]-"бэктики"
console.log(`https://vk.com/${category2}/saved/folder-1/${category3}`)
//todo [https://vk.com/videos/saved/folder-1/funny]

//!Управляющие последовательности и спецсимволы 
//* [\] - "символ экранирования"
//* [\t] - символ табуляции
//* [\\] - символ обратного слеша
//* [\n] - перевод строки
//* [\r] - возврат каретки(самостоятельно не исп. В текстовых файлах Windows для перевода строки исп. с \r\n)
let firstName = ['George', 'Phill', 'David', 'Michhael'],
	lastName = ['Smith', 'McClavis', 'Vachovski', 'Uperenko'];
let random = firstName[Math.floor(Math.random() * firstName.length)] + " " + lastName[Math.floor(Math.random() * lastName.length)];
console.log(random);
console.log(`I\'m Anton it\'s nice to meat you mr.${random} \u{20331}`);//I'm Anton it's nice to meat you mr.David Smith 𠌱

//!Длинна строки
console.log('hi'.length);//2
console.log('hi hi'.length);// 5
console.log('I\'m'.length);//3

//!Доступ к символам
//*Возвращают символ на указанной позиции
//* str[0] и .charAt()почти идентичны, только если указанного значения в строне нет,то srt = undefined, а charAt() = "";
let string = "ABSD";
console.log(string[5]);//undefined
console.log(string.charAt(5));//""
//*Можно воспольз методом перебора for...of
for (let value of string) {
	console.log(`This is letter ${value}`);//'This is letter A','This is letter B'...
}

//!Строки не изменяемы!
//* Нельзя просто обратиться к символу и изменить его другой
let str = 'Hello';
str[0] = 'G';//неудачная попытка создать новую строку
console.log(str);//Hello
//* Но можно создать новую строку и пометить её в туже переменную
str = 'h' + str[4];
console.log(str); //ho

//!Поиск подстроки
//*str.indexOf(subst, pos) поиск подстроки subst в строке str начиная с позиции №pos
//*Возвращает позицию,на которой расп. совпадение или возвращает -1 при отсутствии совпадений

let string1 = "Hi oops hey oops";
let stringIndex = string1.indexOf('oop', 0);
console.log(string1);//3

0
//!Если нужно найти все элементы, то исп. ЦИКЛ
let emin = "I'm not afraid, I'm not afraid...";
 let pos = 0;
let target = "n";
// while (true) {
// 	let foundPos = emin.indexOf(target, pos);
// 	if (foundPos == -1) break;//если неостановить перебор на -1, то получится беск.цикл... 
// 	//...так же не вернёт false,если target - это первый(0) элемент строки
// 	console.log(` Positions number: ${foundPos}`);//0 16
// 	pos = foundPos + 1;//важное усливое цикла,которое передёт к след. элементу индексируемой строки после первого найденного target
// }
//*или 
let pox = -1;
while ((pox = emin.indexOf(target, pox + 1)) !== -1) { //!результат помещается в pox из-за правила 
	console.log(pox);
}
//* Аналогичный метод,но ищет элементы с конца строки:
//* str.lastIndexOf(substr, position)

//! Проблема indexOf и if
//* В данном примере код работать не будет,т.к. таргет элемент находится на 0 позиции,а if(0) = false;
let song = "I'm not afraid";
if (song.indexOf('I')) { // 'I' index = 0; if(0) = false
	console.log('Working?');
}
//*Поэтому добавим проверку на -1 (или,в данном случае,на любое отриц. число)
if (song.indexOf('I') !== -1) {//*любое возвращённое из строки значение не будет равно -1, поэтому 0 = true
	console.log('Working?');//'Workig?'
}


//! Трюк с побитовым НЕ ~
//* Преобразует число в 32х разрядное целое со знаком [-(signed 32 - bit integer)]
//* Т.е. ~2 = -(2+1) = -3!, а ~-1 = -(-1 + 1) = 0
//* Таким образом можно осуществлять проверку if(~str.indexOf) - результат отличен от -1 
let s = "I'm not afraid";
if (~s.indexOf('I')) { //т.к. ~-1 == 0 == false, то выполняются все условия,кроме данного
	console.log('Working?');
}
console.log(Boolean(~-1));// 0 false
console.log(Boolean(~1));// -2 true


//!Новая альтернатива побитовому Не "~" - includes(substr, pos),startsWith(substr, pos),endsWith(substr, pos)
//*Возвращает true, если в строке str еслит подстрока substr, или false, если её нет.
//* Исп. когдэа нужно проверть,есть ли такой элемент в строке, не узнавая значение.
let inc = 'Hello sir, good to see you back';
console.log(inc.includes('bad'));// false, т.к. 'bad' нет в данной строке
console.log(inc.startsWith('He'));//true, т.к. строка начинается с этой подстроку
console.log(inc.endsWith('ack'));//true, т.к. строка заканчивается на эту подстроку


//! 3 метода Получения Подстроки  substring(start1, start2),substr(start, length), slice(start, end)
//*slice(start,end)-принимает индекс начала отсчёта(включит), и крайний индекс(не включ)
let slc = 'This is sliced string';
console.log(slc.slice(0, 6));//This i
console.log(slc.slice(0));//This is sliced string; если крайний индекс не указан,то выделяется вся строка
console.log(slc.slice(-10, -3));//10 слева и 3 справа, всё,что между - ced str
console.log(slc.slice(10, 2));//пустрая строка ''
//*substring: отличается от slice тем, что он возвращает строку МЕЖДУ start & end. start & end отсчитываются с начала
let subs = 'This substringed string';
console.log(subs.substring(4, 16));// substringed
console.log(subs.substring(16, 4));// substringed !можно задавать первое значение больше второго,чего нельзя в slice
console.log(subs.substring(-16, 4));//This
console.log(subs.substring(-6, -4));//! "", отриц значения не поддреждиваются в substring
//* substr(start, lenght) последне значение - это длинна
let subst = 'HOWDIE PARTNER, I\`M JOE!';
console.log(subst.substr(2, 8));//WDIE PAR; 8ая позиция начиная с 2х
console.log(subst.substr(-4, 2));//JO; 2символа с 4й с конца позиции ("-" отчёт идёт влево, "+" вправо)

//! метод Replace(oldSubst, newSubstr)
let rep = 'Mozilla';
rep = rep.replace('Moz', 'Van');
console.log(rep);//Vanilla

