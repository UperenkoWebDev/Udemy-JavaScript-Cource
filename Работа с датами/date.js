//data - это объект,облад методами и свойст
const now = new Date();
console.log(now);//2020-09-16T08:29:30.801Z текущая дата
//* ======Методы ПОЛУЧЕНИЯ компонентов даты======
//getFullYear()
console.log(now.getFullYear());
//getMonth(),getDate(),etc...
console.log(now.getMonth());
//getDay() нумеранция начинается с воскресенья
console.log(now.getDay());
//getHours vs getUTCHours
console.log(now.getHours());
console.log(now.getUTCHours());
//*===============================================
console.log(now.getTimezoneOffset()); // разница между местным и utc временеи
console.log(now.getTime());//кол-во мс с 1го января 1970 года

//*==================Методы УСТАНОВКИ даты==================
//!console of VSCode  rely only om utc time zone
const set = new Date();
console.log(set.setHours(18, 20, 15));
console.log(set);
//====Parsing====
const a1 = new Date('2020-09-16');
//==========and==========
// new Date.parse('2020-09-16');
//=======is the same!=====

//*==============Получаем разницу(BENCHMARKS)============== 
let start = new Date();//дата начала
for (let i = 0; i< 100000; i++){
	let some = i ** 3;
}
let end = new Date();//data конца

alert(`цикл отработал за ${end - start} миллисекунд`);





