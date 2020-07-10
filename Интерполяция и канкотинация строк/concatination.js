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