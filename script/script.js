window.addEventListener('DOMContentLoaded', () => {
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
			menu = document.querySelector('menu');
		const handlerMenu = () => {
			menu.classList.toggle('active-menu');
		};
		btnMenu.addEventListener('click', handlerMenu);
		menu.addEventListener('click', (event) => {
			let target = event.target;
			if (target.closest('a')) { handlerMenu();}
		});
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
					const j=i;
					setTimeout(() => {
						popupContent.style.top = `${-80+j}%`;
					}, (j*3));
				}
			} else {popup.style.display = 'block';}
		};
		const animationUp = () => {
			if (document.documentElement.clientWidth > 768) {
				for(let i=1; i<=180; i++){
					const j=i;
					setTimeout(() => {
						popupContent.style.top = `${10-(j*j/360)}%`;
					}, j*2);
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
		popup.addEventListener('click', (event)=>{
			let target = event.target;
			if (target.classList.contains('popup-close')){ animationUp();}
			else {
				target = target.closest('.popup-content');
				if (!target){ animationUp();}
			}
		});
	};
	togglePopUp();

	//табы
	const tabs = () => {
		const tabHeader = document.querySelector('.service-header'),
			tab = tabHeader.querySelectorAll('.service-header-tab'),
			tabContent = document.querySelectorAll('.service-tab');
		const toggleTabContent = (index) => {
			for (let i = 0; i < tabContent.length; i++){
				if (index === i) {
					tab[i].classList.add('active');
					tabContent[i].classList.remove('d-none');
				} else {
					tab[i].classList.remove('active');
					tabContent[i].classList.add('d-none');
				}
			}
		};
		tabHeader.addEventListener('click', (event) =>{
			let target = event.target;
			target = target.closest('.service-header-tab');
				if (target){
					tab.forEach((item, i) => {
						if (item === target){
							toggleTabContent(i);
						}
					});
				}
		});
	};
	tabs();

	//слайдер
	const slider = () => {
		const slide = document.querySelectorAll('.portfolio-item'),
			btn = document.querySelectorAll('.portfolio-btn'),
			slider = document.querySelector('.portfolio-content'),
			ulDots = document.querySelector('.portfolio-dots'),
			dot = [];

		//добавляем точки

		for (let i = 0; i < slide.length; i++) {
			const li = document.createElement('li');
			li.classList.add('dot');
			ulDots.append(li);
			dot[i] = li;
		}

		let currentSlide = 0,
			interval;
		dot[0].classList.add('dot-active');

		const prevSlide = (elem, index, strClass) => {
			elem[index].classList.remove(strClass);
		};
		const nextSlide = (elem, index, strClass) => {
			elem[index].classList.add(strClass);
		};

		const autoPlaySlide = () => {

			prevSlide(slide, currentSlide, 'portfolio-item-active');
			prevSlide(dot, currentSlide, 'dot-active');
			currentSlide++;
			if (currentSlide >= slide.length){
				currentSlide = 0;
			}
			nextSlide(slide, currentSlide, 'portfolio-item-active');
			nextSlide(dot, currentSlide, 'dot-active');
		};

		const startSlide = (time = 3000) => {
			interval = setInterval(autoPlaySlide, time);
		};

		const stopSlide = () => {
			clearInterval(interval);
		};
		
		slider.addEventListener('click', (event) => {
			event.preventDefault();
			let target = event.target;

			if (!target.matches('#arrow-right, #arrow-left, .dot')) {
				return;
			}
			prevSlide(slide, currentSlide, 'portfolio-item-active');
			prevSlide(dot, currentSlide, 'dot-active');

			if (target.matches('#arrow-right')) {
				currentSlide++;
			} else if (target.matches('#arrow-left')) {
				currentSlide--;
			} else if (target.matches('.dot')) {
				dot.forEach((elem, index) => {
					if (elem === target) {
						currentSlide = index;
					}
				});
			}

			if (currentSlide >= slide.length) {currentSlide = 0;}
			if (currentSlide < 0) {currentSlide = slide.length - 1;}
			nextSlide(slide, currentSlide, 'portfolio-item-active');
			nextSlide(dot, currentSlide, 'dot-active');

		});

		slider.addEventListener('mouseover', (event) => {
			if (event.target.matches('.portfolio-btn') ||
				event.target.matches('.dot')) {
					stopSlide();
				}
		});

		slider.addEventListener('mouseout', (event) => {
			if (event.target.matches('.portfolio-btn') ||
				event.target.matches('.dot')) {
					startSlide();
				}
		});

		startSlide(1500);

	};
	slider();

	//смена фот команды
	const command = () => {
		const photos = document.querySelectorAll('.command__photo');
		photos.forEach((item) => {
			item.addEventListener('mouseenter', (e) => {
				const dataSet = item.getAttribute('src');
				e.target.src = e.target.dataset.img;
				e.target.dataset.img = dataSet;
			});
		});
		photos.forEach((item) => {
			item.addEventListener('mouseleave', (e) => {
				const dataSet = item.getAttribute('src');
				e.target.src = e.target.dataset.img;
				e.target.dataset.img = dataSet;
			});
		});
	};
	command();

	//проверка полей после потери фокуса
	const fieldCheck = (event) => {
		let fieldValue = event.target.value;
		fieldValue = fieldValue.replace(/\s+/g, ' ').trim();
		fieldValue = fieldValue.replace(/-+/g, '-');
		if (fieldValue[0] === '-') { fieldValue = fieldValue.slice(1); }
		if (fieldValue[fieldValue.length-1] === '-') {fieldValue = fieldValue.slice(0, fieldValue.length-1); }
		if (event.target.id === 'form2-name') {
			let string = fieldValue.split(' ');
			fieldValue = '';
			string.forEach((item) => {
				item = item[0].toUpperCase() + item.slice(1).toLowerCase();
				fieldValue += item + ' ';
			});
			
		}
		event.target.value = fieldValue.trim();
		};

	//валидация калькулятора
	const calcVerify = () => {
		const fields = document.querySelectorAll('.calc-item');
		fields.forEach((item) => {
			if (item.tagName !== 'SELECT') {
				item.addEventListener('input', () => {
					item.value = item.value.replace(/\D/g, '');
				});
			}
		});
	};
	calcVerify();

	//валидация имени и формы отправки
	const formVerify = () => {
		const fieldName = document.getElementById('form2-name'),
			fieldMessage = document.getElementById('form2-message'),
			onlyCyrillic = (field) => {
				field.addEventListener('input', () => {
					field.value = field.value.replace(/[^а-яё|\s|-]/gi, '');
				});
			};
		
		onlyCyrillic(fieldName);
		onlyCyrillic(fieldMessage);
		fieldMessage.addEventListener('blur', fieldCheck);
		fieldName.addEventListener('blur', fieldCheck);
	};
	formVerify();

	//валидация е-мэйла
	const emailVerify = () => {
		const emailField = document.getElementById('form2-email');
		emailField.addEventListener('input', () => {
			emailField.value = emailField.value.replace(/[^a-z|@|_|\.|!|~|*|'|-]/gi, '');
		});
	};
	emailVerify();

	//валидация номера телефона
	const numberVerify = () => {
		const numberField = document.getElementById('form2-phone');
		numberField.addEventListener('input', () => {
			numberField.value = numberField.value.replace(/[^0-9|(|)|-]/g, '');
		});
		numberField.addEventListener('blur', fieldCheck);
	};
	numberVerify();

});