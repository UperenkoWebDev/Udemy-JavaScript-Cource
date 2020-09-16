// const btn = document.getElementsByTagName('button');
// let timer,
// 	i = 0;
// btn[0].addEventListener('click', () => {
// 	timer = setInterval(logger, 500);
// });
// function logger() {
// 	if (i === 3) {
// 		clearInterval(timer);
// 	} i++;

// 	console.log('text');
// }
//!======setInterval vs рекурсивный setTimeout
//Задержка в setInterval может быть меньше,чем время,которое необходимо ф-ии чтобы выполниться, и в таком случае setInterval будет игнорировать время,необходимое функции и будет действовать строго по установленному интервалу.
//!=======setInterval========
// function one() {
//[function's params]
//[execution will take 1.5s]
// }
// setInterval = (one, 500);
//[will result bugs and errors]
//!=======/setInterval========

//!=======setTimeout========
// let id = setTimeout(function two() {
// 	console.log('Recursive func');
// 	//[func running]
// 	id = setTimeout(two, 500);
// }, 500);
//!=======/setTimeout========


//!=======Animation========
const btn = document.querySelector('button');
function myAnimation() {
	const box = document.querySelector('.box');
	let pos = 0;
	let id = setInterval(frame, 30)
	function frame() {
		if (pos == 300) {
			clearInterval(id);
		} else {
			pos++;
			box.style.top = pos + 'px';
			box.style.left = pos + 'px';
		}
	}
}
btn.addEventListener('click', myAnimation);