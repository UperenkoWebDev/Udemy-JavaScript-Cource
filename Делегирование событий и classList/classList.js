//! classList
const btns = document.querySelectorAll('button');
// У classList есть свойства и методы
//===============Кол-во классов========================
// console.log(btns[0].classList.length);

//===============Позволяет получить класс=======================
// 
//console.log(btns[0].classList.item(0))

//=============Добавляет и удаляет==========================
// btns[0].classList.add('class','class2','classN');
// btns[0].classList.remove('class');

//===========Toggle=================
//Toggle примечателен тем,что,если класса нет,то он его добавляет,но если его нет,то при вып.дейсвтия класс удалится
// btns[1].addEventListener('click', () => {
// 	btns[1].classList.toggle('red');
// });

//========classList.contains, classList.matches======
// contains возвращает булиновы значния
// if (btns[0].classList.contains('red')) {
// 	console.log('red');
// }
// *btns[0].addEventListener('click', () => {
// *	if (!btns[1].classList.contains('red')) {
// *		btns[1].classList.add('red');
// *	} else {
// *		btns[1].classList.remove('red');
// *	}
// *})
//=================или==================
//* btns[0].addEventListener('click', () => {
//* 	btns[1].classList.toggle('red');
//* })

//!========Делигирование===========
//Это приём,позволяющий навешивать обработчики события,на динамически добалвенные элементы.

const wrapper = document.querySelector('.wrapper');
btns.forEach(btn => {
	btn.addEventListener('click', () => {
		btn.classList.toggle('red');
	})
});
//=====Конструкции перебора не будут рабоать на денамически добавленные элементы=====
let newBtn = document.createElement('button');
newBtn.textContent = 'Im dynamicaly added';
wrapper.append(newBtn);
//============Событие назначается на родителя==============
wrapper.addEventListener('click', (e) => {
//console.dir(e.target); смотрим имя тега
if(e.target && e.target.tagName == 'BUTTON')//или e.target.matches('button.red')
{
	newBtn.classList.toggle('purple');
	console.log('hi');
}
	
});