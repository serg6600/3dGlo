'use strict';
const date = new Date();
const getTimeOfDay = () => {
	if (date.getHours() > 17) {
		return 'Добрый вечер';
	} else if (date.getHours() > 12) {
		return 'Добрый день';
	} else if (date.getHours() > 3) {
		return 'Доброе утро';
	} else {
		return 'Доброй ночи';
	}
};
const getDay = () => {
	if (date.getDay() === 0) { return 'Воскресенье'; } 
	else if (date.getDay() === 1) { return 'Понедельник'; } 
	else if (date.getDay() === 2) { return 'Вторник'; } 
	else if (date.getDay() === 3) { return 'Среда'; } 
	else if (date.getDay() === 4) { return 'Четверг'; } 
	else if (date.getDay() === 5) { return 'Пятница'; } 
	else if (date.getDay() === 6) { return 'Суббота'; }
};
const getRemainDays = () => {
	const dateNewYear = new Date('1 january 2022');
	const remainDays = (dateNewYear.getTime() - date.getTime()) / 1000 / 60 / 60 / 24;
	return Math.ceil(remainDays);
};

const div = document.createElement('div');
div.innerText = `${getTimeOfDay()}
Сегодня: ${getDay()}
Текущее время: ${date.toLocaleTimeString()}
До нового года осталось ${getRemainDays()} дней`;

document.body.append(div);
