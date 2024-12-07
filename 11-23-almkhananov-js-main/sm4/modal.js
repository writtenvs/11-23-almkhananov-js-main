document.addEventListener('DOMContentLoaded', () => {
    const clearButton = document.getElementById('clearButton');
    const openModalButton = document.getElementById('openModalButton');
    const modal = document.querySelector('.modal');
    const closeButton = document.querySelector('.close-button');

    // Удаление всех дочерних элементов из .wrapper
    clearButton.addEventListener('click', () => {
        const wrapper = document.querySelector('.wrapper');
        while (wrapper.firstChild) {
            wrapper.removeChild(wrapper.firstChild);
        }
    });

    // Открытие модального окна
    openModalButton.addEventListener('click', () => {
        modal.classList.add('open');
    });

    // Закрытие модального окна
    closeButton.addEventListener('click', () => {
        modal.classList.remove('open');
    });
});
