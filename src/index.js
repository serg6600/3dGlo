'use strict';
import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import tabs from './modules/tabs';
import slider from './modules/slider';
import command from './modules/command';
import calcVerify from './modules/calcVerify';
import formVerify from './modules/formVerify';
import emailVerify from './modules/emailVerify';
import numberVerify from './modules/numberVerify';
import calculator from './modules/calculator';
import sendForm from './modules/sendForm';

	//Timer
	countTimer('25 june 2021');
	//Меню
	toggleMenu();
	//popup
	togglePopUp();
	//табы
	tabs();
	//слайдер
	slider();
	//смена фот команды
	command();
	//валидация калькулятора
	calcVerify();
	//валидация имени и формы отправки
	formVerify();
	//валидация е-мэйла
	emailVerify();
	//валидация номера телефона
	numberVerify();
	//калькулятор
	calculator(100);
	//send-ajax-form
	sendForm();