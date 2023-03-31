const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const carousele_indicators = document.querySelectorAll('.carousele-indicator__rect');
const carousele_items = document.querySelectorAll('.carousele__item');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('hidden');
})

const carousele = () => {
    let index = 0;
    setInterval(() => {
        if(index > carousele_items.length - 1) {index = 0};
        carousele_items.forEach(item => item.style = 'display: none');
        carousele_items[index].style = 'display: block';
        carousele_indicators.forEach(indicator => indicator.classList.remove('active'));
        carousele_indicators[index].classList.add('active');
        index++;
    }, 3000);
};

carousele();