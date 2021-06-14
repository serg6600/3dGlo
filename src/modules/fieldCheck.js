const fieldCheck = (event) => {
    let fieldValue = event.target.value;
    fieldValue = fieldValue.replace(/\s+/g, ' ').trim();
    fieldValue = fieldValue.replace(/-+/g, '-');
    fieldValue = fieldValue.replace(/\++/g, '+');
    if (fieldValue[0] === '-') { fieldValue = fieldValue.slice(1); }
    if (fieldValue[fieldValue.length-1] === '-') {fieldValue = fieldValue.slice(0, fieldValue.length-1); }

    if (event.target.id === 'form2-name' || event.target.id === 'form1-name' ||
        event.target.id === 'form3-name') {
        let string = fieldValue.split(' ');
        fieldValue = '';
        if (string[0]) {
            string.forEach((item) => {
                item = item[0].toUpperCase() + item.slice(1).toLowerCase();
                fieldValue += item + ' ';
            });
        }
        
    }
    event.target.value = fieldValue.trim();
};

export default fieldCheck;