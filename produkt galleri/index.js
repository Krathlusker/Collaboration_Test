console.log ("jeg virker")

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

const track = document.querySelector('.track');

let carouselWidth = document.querySelector('.carousel-container').offsetWidth;

window.addEventListener('resize' , () => {
    carouselWidth = document.querySelector('.carousel-container').offsetWidth;
}) 
//her kommer jeg i konflikt med if (index == 4)

let index = 0;

next.addEventListener('click', () => {
    index++;
    prev.classList.add('show');
    track.style.transform = `translateX(-${carouselWidth * index}px)`;

    if (index == 4) {
        next.classList.add('hide');
    }

});

prev.addEventListener('click', () => {
        index--;
        next.classList.remove('hide');
        if (index == 0) {
            prev.classList.remove('show');
        }
        track.style.transform = `translateX(-${carouselWidth * index}px)`;
    })

