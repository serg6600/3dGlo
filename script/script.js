'use strict';
	//Timer
	const countTimer = (deadline) => {
		let idInterval,
			timerHours = document.querySelector('#timer-hours'),
			timerMinutes = document.querySelector('#timer-minutes'),
			timerSeconds = document.querySelector('#timer-seconds');

		const getTimeRemaining = () => {
			const dateStop = new Date(deadline).getTime(),
				dateNow = new Date().getTime(),
				timeRemaining = (dateStop - dateNow) / 1000,
				seconds = Math.floor(timeRemaining % 60),
				minutes = Math.floor((timeRemaining / 60) % 60),
				hours = Math.floor(timeRemaining / 60 / 60);
			return { timeRemaining, hours, minutes, seconds };
		};
		const fixPrint = (x) => {
			if (x < 10) {
				return '0' + x;
			}
			return x;
		};
		const updateClock = () => {
			const timer = getTimeRemaining();
			timerHours.textContent = fixPrint(timer.hours);
			timerMinutes.textContent = fixPrint(timer.minutes);
			timerSeconds.textContent = fixPrint(timer.seconds);
			if (timer.timeRemaining > 0) {
				if (idInterval) {
					return;
				} else {
					idInterval = setInterval(updateClock, 1000);
				}
			} else {
				clearInterval(setInterval(updateClock, 1000));
				timerHours.textContent = '00';
				timerMinutes.textContent = '00';
				timerSeconds.textContent = '00';
			}
		};

		updateClock();
	};
	countTimer('25 may 2021');

	//Меню
	const toggleMenu = () =>{
		const btnMenu = document.querySelector('.menu'),
			menu = document.querySelector('menu'),
			menuItems = menu.querySelectorAll('ul>li'),
			closeBtn = document.querySelector('.close-btn');
		const handlerMenu = () => {
			menu.classList.toggle('active-menu');
		};
		btnMenu.addEventListener('click', handlerMenu);
		closeBtn.addEventListener('click', handlerMenu);
		menuItems.forEach((item) => item.addEventListener('click', handlerMenu));
	};
	toggleMenu();

	//popup
	const togglePopUp = () => {
		const popup = document.querySelector('.popup'),
			popupClose = document.querySelector('.popup-close'),
			popupBtn = document.querySelectorAll('.popup-btn'),
			popupContent = document.querySelector('.popup-content');
			//popup animation
		const animationDown = () => {
			if (document.documentElement.clientWidth > 768) {
			popupContent.style.top = '-80%';
			popup.style.display = 'block';
				for(let i=1; i<=90; i++){
					setTimeout(() => {
						popupContent.style.top = `${-80+i}%`;
					}, (i*3));
				}
			} else {popup.style.display = 'block';}
		};
		const animationUp = () => {
			if (document.documentElement.clientWidth > 768) {
				for(let i=1; i<=180; i++){
					setTimeout(() => {
						popupContent.style.top = `${10-(i*i/360)}%`;
					}, i*2);
				}	
				setTimeout(() => {
					popup.style.display = 'none';
					popupContent.style.top = '10%';
				}, 180*3);
			} else {popup.style.display = 'none';}
		};
		popupBtn.forEach((elem) => {
			elem.addEventListener('click',animationDown);
		});
		popupClose.addEventListener('click', animationUp);
	};
	togglePopUp();
