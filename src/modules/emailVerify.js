const emailVerify = () => {
    const emailFields = document.querySelectorAll('.form-email');
    emailFields.forEach((item) => {
        item.addEventListener('input', () => {
            item.value.trim();
            item.value = item.value.replace(/[^a-z|@|_|\.|!|~|*|'|-]/gi, '');
            item.value = item.value.replace(/\.+/g, '.');
            item.value = item.value.replace(/\@+/g, '@');
            for (let i = 0; i < item.value.length; i++) {
                if (item.value[i] === '@') {
                    let email = item.value.split('@');
                    for (let i = 0; i < email[1].length; i++) {
                        if (email[1][i] === '.') {
                            const emailSecondPart = email[1].split('.');
                            if (emailSecondPart[2]) { 
                                emailSecondPart[1] = emailSecondPart[1] + emailSecondPart[2]; }
                            email[1] = emailSecondPart[0] + '.' + emailSecondPart[1].replace(/\./g, '');
                        }
                    }
                    item.value = email[0] + '@' + email[1].replace(/@/g, '');
                }
            }
        if (item.value[0] === '.') { item.value = item.value.slice(1); }
        });
    });
};

export default emailVerify;