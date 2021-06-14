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

export default calcVerify;