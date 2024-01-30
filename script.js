document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const images = document.querySelectorAll('.image');
    const closeBtn = document.getElementById('close');

    images.forEach(image => {
        image.addEventListener('click', () => {
            modal.style.display = 'block';
            modalImg.src = image.querySelector('img').src;
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
