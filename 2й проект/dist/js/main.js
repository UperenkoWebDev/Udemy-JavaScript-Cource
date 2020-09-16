'use strict';
window.addEventListener('DOMContentLoaded', () => {
	//!==========Tabs=============
	/*Логика: 
	1.Ф-ия скрывающая контент 
	2.Ф-ия показывающая нужный контент
	3. Манипуляция этими ф-ми через заголовки табов*/

	const tabList = document.querySelector('.tabheader__items'),
		tabName = tabList.querySelectorAll('.tabheader__item'),
		tabContent = document.querySelectorAll('.tabcontent');
	//!====[1]====
	const hideTabContent = () => {
		tabContent.forEach(item => {
			item.style.display = 'none';
		});
		tabName.forEach(item => {
			item.classList.remove('tabheader__item_active');
		});
	};
	//!====[2]====
	const showTabContent = (i = 0) => {
		tabContent[i].classList.add('active');
		tabContent[i].style.display = 'block';
		tabName[i].classList.add('tabheader__item_active');
	};
	hideTabContent();
	showTabContent();
	//!====[3]====
	tabList.addEventListener('click', (Event) => {
		const target = Event.target;
		if (target && target.classList.contains('tabheader__item')) {
			tabName.forEach((item, i) => {
				if (target == item) {
					hideTabContent();
					showTabContent(i);
				}
			});
		}
	});

	//!==========/Tabs=============
});