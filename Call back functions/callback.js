"use strict";
//!CALLBACK Функции
//Вызывая функции мы ожидаем,что они будут выполняться одна за другой, но к сожалению так происходит не вегда т.к. присутсвуют другие факторы, вроде задержки ответа от сервера, которые могут вызвать задержку вызова ф-ии. для этого придумали callback.\
//![1] 2 является одновременно и аргументом и функцией,которую мы вызовем далее
function learnJS(/*1*/lang, /*2*/callback) {
	console.log(`Я учу: ${lang}`);
	callback();
}

//![2] вызываем функцую learnJS и присваиваем аргументам значения, как видим для callback мы присвоили анонимную функцию function(), свойства которой мы описываем в том же коде { console.log('I have completed this lesson');};
learnJS(/*1*/'JavaScript',/*2*/function () {
	console.log('I have completed this lesson');
})

/////////////////////
//!Пример присваивания НЕ анонимной функции:
function learnJS2(lang2, callback2) {
	console.log(`I learn java script and ${lang2}`);
	callback2();
}
function done() {
	console.log(`I've completed this lesson as well`);
}
learnJS2(`CSS`, done);//![3] Заметим,что мы не используем круглые скобочки после done, именно так должны вызывать callback ф-ии.
