const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const source1 = document.getElementById('source-1');
const source2 = document.getElementById('source-2');
const hero_img = document.getElementById('hero-img');
const carousele_indicators = document.querySelectorAll('.carousele-indicator__rect');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('hidden');
})

const carousele = () => {
    let index = 0;
    let images = [];
    if(window.innerWidth < 768) {
        images = [];
        images.push('./resources/assets/home/mobile/image-hero-paramour.jpg')
        images.push('./resources/assets/home/mobile/image-hero-federal.jpg')
        images.push('./resources/assets/home/mobile/image-hero-seraph.jpg')
        images.push('./resources/assets/home/mobile/image-hero-trinity.jpg')
    };
    if(window.innerWidth > 768 && window.innerWidth < 1024) {
        images = [];
        images.push('./resources/assets/home/tablet/image-hero-paramour.jpg')
        images.push('./resources/assets/home/tablet/image-hero-federal.jpg')
        images.push('./resources/assets/home/tablet/image-hero-seraph.jpg')
        images.push('./resources/assets/home/tablet/image-hero-trinity.jpg')
    };
    if(window.innerWidth > 1024) {
        images = [];
        images.push('./resources/assets/home/desktop/image-hero-paramour.jpg')
        images.push('./resources/assets/home/desktop/image-hero-federal.jpg')
        images.push('./resources/assets/home/desktop/image-hero-seraph.jpg')
        images.push('./resources/assets/home/desktop/image-hero-trinity.jpg')
    };
    setInterval(() => {
        index++;
        if(index > images.length - 1) {index = 0};
        hero_img.src = images[index];
        carousele_indicators.forEach(indicator => indicator.classList.remove('active'));
        carousele_indicators[index].classList.add('active');
    }, 3000);
};

carousele();