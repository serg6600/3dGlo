import fieldCheck from './fieldCheck';

const numberVerify = () => {
    const numberField1 = document.getElementById('form1-phone'),
        numberField2 = document.getElementById('form2-phone'),
        numberField3 = document.getElementById('form3-phone'),
        putListeners = (field) => {
            field.addEventListener('input', () => {
                field.value = field.value.replace(/[^0-9|+]/g, '');
                if (field.value) {
                    field.value = field.value[0] + field.value.slice(1).replace(/\+/g, '');
                    if (field.value[0] === '+' && field.value.length > 12) {
                        alert('Необходимо ввести корректную длину номера');
                        field.value = field.value.slice(0, field.value.length-1);
                    }
                    if (field.value[0] !== '+' && field.value.length > 11) {
                        alert('Необходимо ввести корректную длину номера');
                        field.value = field.value.slice(0, field.value.length-1);
                    }
                }
            });
            field.addEventListener('blur', fieldCheck);
        };
    putListeners(numberField1);
    putListeners(numberField2);
    putListeners(numberField3);
    
};

export default numberVerify;