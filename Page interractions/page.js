const box = document.getElementById('box'),
	btns = document.getElementsByTagName('button'),
	circles = document.getElementsByClassName('circle'),
	wrapper = document.querySelector('.wrapper'),
	hearts = wrapper.querySelectorAll('.heart'),
	oneHeart = wrapper.querySelector('.heart'),
	btn = document.getElementById('btn'),
	overlay = document.querySelector('.overlay');

box.style.backgroundColor = 'green';
box.style.width = '300px';
btns[1].style.borderRadius = '10000px';

hearts[1].style.backgroundColor = "orange";
//!multiple parameters
hearts[0].style.cssText = "background-color: blue; position:absolute; bottom:50%; left:25%";
//!Чтобы выбратьмнождество элементов неелюходимо исп.перебор
// for(let i = 0;i < hearts.length;i++){
// 	hearts[i].style.cssText = 'background-color: grey; border-radius: 25px;';
// }
//*or
hearts.forEach(i => {
	i.style.cssText = 'background-color: grey; border-radius: 25px;';
});

//====================================================================

//!Создание элемента и его вставка в DOM

//!createElement('elem')
const div = document.createElement('span');
// const text = document.createTextNode('your text');

//!.classList
//Параллельно зададим сss свойства для класса black
div.classList.add('black');

//!Вставляем в DOM append,prepend,before & after
document.body.append(div);//добавляет в конец
// document.body.prepend(div);//добавляет в начало

//!before & after
hearts[0].before(div);
hearts[0].after(div);

//! Удаление элементов remove , replaceWith(old elem, new elem)
hearts[2].remove();
hearts[3].replaceWith(circles[2]);

//*старые команды
/**elem.appendChild
 * elem.insertBefore/After(before which elem, elem)
 * elem.removeChild(elem[x])
 * elem.replaceChild(elem new[x], elem old[x])
 */

//! innerHTML, textContent, value
//*Позволяет вставлять текст,элементы, узлы, скрипты
div.innerHTML = '<h1>this is \&lth1\&gt';
//*Вставляет только строки
// let user = prompt('');
//  hearts[0].textContent = `\<h1\> just wrote ${user}\</h1\> `;

//!Вставляем HTML код до,после элемента .insetrAdjascentHTML('special word', 'tag we want to insert')

btns[0].insertAdjacentHTML('beforebegin', '<h2>beforebegin</h2>');//перед началом элемента
btns[0].insertAdjacentHTML('afterbegin', '<h4>afterbegin</h4>');//В начало элемента
btns[1].insertAdjacentHTML('beforeend', '<h4>beforeend</h4>');//В конец элементав
btns[2].insertAdjacentHTML('afterend', '<h2>afterend</h2>');//После элемента
//!Event listener!
// let i = 0;
// const eventDelete = (e) => {
// 	console.log(e.target);
// 	i++;
// 	if (i == 2) {
// 		btns[0].removeEventListener('mouseenter', eventDelete);
// 	}
// };
// btns[0].addEventListener('mouseenter', eventDelete);




const deleteElem = (e) => {
	console.log(e.currentTarget);
	console.log(e);

};
btn.addEventListener('click', deleteElem);
overlay.addEventListener('click', deleteElem);