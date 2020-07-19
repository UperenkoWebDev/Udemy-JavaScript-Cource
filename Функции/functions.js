"use strict";
//!FUNCTIONS
function showFirstMessage(/*тут аргументы функции*/) {/*негласное правило :"имя функии должно представлять из себя Глагол с предпиской того, над чем вып. действие"*/
	console.log("World Hello");
}

//!/////////////////////////////////////////
/*В данном примере у нас есть аргумент text, который в последствии будет заменён на строку 'Hello brother'*/
let num = 20; //!Global variable
showFirstMessage(); //Вызываем имя ф-иию
function showSecondMessage(text) {
	console.log(text);
	let num = 20; //!Local variable
}
showSecondMessage('Hello brother');
console.log(num);

//!Функции могут использовать как свои локальные переменные,так и глобальные(если вызываемые переменные отсутствуют в самой функции{},но прописаны вне её) Это называется "Замыкание функции". В примере вышле console.log вывведет 20.;
//todo Замыкание функции - это ф-я с внешними переменными,которые ей доступны.

//! return - возвращает указанные данные и останавливает действие всей ф-и. всё,что будет прописано после return в рамках функции - работать не будет! [Unreachable]
function calc(a, b) {
	return (a + b);
	console.log(num);//Unreachable
}
console.log(clac(4, 3));
console.log(clac(4, 1));
console.log(clac(5, 2));
console.log(clac(0, 1));

function ret() { //* Function declaration - существует, ещё до ее объявления (как const). Преймущесвто в том,что с неё значенимями можно работать даже в самом верху кода;
	let num = 50;
	//code
	//code
	//code
	//code
	//code
	//code
	return (num);//результат работы функции
} //* В function declaration точка с запятой в конце не ставится
const anoterNum = ret(); //помещаем рузультат работы ret() в переменную
console.log(anoterNum);

const logger = function () {//* Function expression можно вызвать только после того,как была объявлена функция
	console.log('Hello');
};//*в function expression ; ставится
logger(); //! вызываем ф-ю только после её объявления, т.к. это функц. выражение (function expression)

//!Стрелочная Функция (ARROW FUNCTION) - New ES6 standart
const arrow = (a, b) => a + b;//* не имеет контекста вызова