const sendForm = () => {

    const errorMessage = 'Что-то пошло не так...',
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо! Мы скоро с вами свяжемся!',
        form = document.getElementById('form1'),
        form2 = document.getElementById('form2'),
        form3 = document.getElementById('form3'),
        statusMessage = document.createElement('div');
    statusMessage.style.cssText = `
    font-size: 2rem;
    color: white;`;

        const postData = (body) => {

            return fetch('./server.php',{
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(body)
            });
        };

        const submitEvent = (event, form) => {
            event.preventDefault();

            //проверка на минимальную длину номера, имени и пустых форм
            const phone = form.querySelector('.form-phone').value,
                email = form.querySelector('.form-email').value,
                name = form.querySelector('.form-name').value;
            if(!phone || !name || !email){ 
                alert('Необходимо заполнить все поля');
                return; 
            }
            if (phone[0] === '+' && phone.length < 8) {
                alert('Необходимо ввести корректную длину номера');
                return;
            }
            if (phone[0] !== '+' && phone.length < 7) {
                alert('Необходимо ввести корректную длину номера');
                return;
            }
            if (name.length < 2) {
                alert('Необходимо ввести корректную длину имени');
                return;
            }//

            const formData = new FormData(form);
            let body = {};
				for(let val of formData.entries()){
					body[val[0]] = val[1];
					if (val[1] === '') {
						alert('Необходимо заполнить все поля');
						return;
					}
				}
            form.appendChild(statusMessage);
            statusMessage.textContent = loadMessage;
            const inputs = form.querySelectorAll('input');
            inputs.forEach(item => {
                item.value = '';
            });
            postData(body).then( (response) => {
                if (response.status !== 200) {
                    throw new Error('network status is not 200');
                }
                statusMessage.textContent = successMessage;
                setTimeout( ()=> { statusMessage.remove(); }, 3000);
                setTimeout( ()=> {
                    document.querySelector('.popup').style.display = 'none';
                    document.querySelector('.popup-content').style.top = '-80%';
                }, 5000);
            }).catch( (error) => {
                statusMessage.textContent = errorMessage;
                setTimeout( ()=> { statusMessage.remove(); }, 3000);
            });
        };
        
        form.addEventListener('submit', (event) => {
            submitEvent(event, form);
        } );
        form2.addEventListener('submit', (event) => {
            submitEvent(event, form2);
        } );
        form3.addEventListener('submit', (event) => {
            submitEvent(event, form3);
        } );
};

export default sendForm;