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

export default togglePopUp;