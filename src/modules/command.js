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

export default command;