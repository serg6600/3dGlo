import fieldCheck from './fieldCheck';

const formVerify = () => {
    const fieldName1 = document.getElementById('form1-name'),
        fieldName2 = document.getElementById('form2-name'),
        fieldName3 = document.getElementById('form3-name'),
        fieldMessage = document.getElementById('form2-message'),
        onlyCyrillic = (field) => {
            field.addEventListener('input', () => {
                field.value = field.value.replace(/[^а-яё|\s|-]/gi, '');
            });
        };
    onlyCyrillic(fieldName1);
    onlyCyrillic(fieldName2);
    onlyCyrillic(fieldName3);
    fieldName1.addEventListener('blur', fieldCheck);
    fieldName2.addEventListener('blur', fieldCheck);
    fieldName3.addEventListener('blur', fieldCheck);
    fieldMessage.addEventListener('input', () => {
        fieldMessage.value = fieldMessage.value.replace(/[^а-яё|0-9|\s|,|.|!|?]/gi, '');
    });
};

export default formVerify;