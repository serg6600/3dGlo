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
                headers: { 'Content-Type': 'multipart/form-data'},
                body: body
            });
        };

        const submitEvent = (event, form) => {
            event.preventDefault();

            //проверка на минимальную длину номера и пустые формы
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
            }//

            const formData = new FormData(form);
            form.appendChild(statusMessage);
            statusMessage.textContent = loadMessage;
            const inputs = form.querySelectorAll('input');
            inputs.forEach(item => {
                item.value = '';
            });
            postData(formData).then( (response) => {
                if (response.status !== 200) {
                    throw new Error('network status is not 200');
                }
                statusMessage.textContent = successMessage;
                setTimeout( ()=> { statusMessage.remove(); }, 3000);
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