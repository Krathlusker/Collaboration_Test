/* Jannicks JavaScript-del */

let img360List = [
    "42172-202408-PDP-FeatureExplore_0.webp", "42172-202408-PDP-FeatureExplore_1.webp",
    "42172-202408-PDP-FeatureExplore_2.webp", "42172-202408-PDP-FeatureExplore_3.webp",
    "42172-202408-PDP-FeatureExplore_4.webp", "42172-202408-PDP-FeatureExplore_5.webp",
    "42172-202408-PDP-FeatureExplore_6.webp", "42172-202408-PDP-FeatureExplore_7.webp",
    "42172-202408-PDP-FeatureExplore_8.webp", "42172-202408-PDP-FeatureExplore_9.webp",
    "42172-202408-PDP-FeatureExplore_10.webp", "42172-202408-PDP-FeatureExplore_11.webp",
    "42172-202408-PDP-FeatureExplore_12.webp", "42172-202408-PDP-FeatureExplore_13.webp",
    "42172-202408-PDP-FeatureExplore_14.webp", "42172-202408-PDP-FeatureExplore_15.webp",
    "42172-202408-PDP-FeatureExplore_16.webp", "42172-202408-PDP-FeatureExplore_17.webp",
    "42172-202408-PDP-FeatureExplore_18.webp", "42172-202408-PDP-FeatureExplore_19.webp",
    "42172-202408-PDP-FeatureExplore_20.webp", "42172-202408-PDP-FeatureExplore_21.webp",
    "42172-202408-PDP-FeatureExplore_22.webp", "42172-202408-PDP-FeatureExplore_23.webp",
    "42172-202408-PDP-FeatureExplore_24.webp", "42172-202408-PDP-FeatureExplore_25.webp",
    "42172-202408-PDP-FeatureExplore_26.webp", "42172-202408-PDP-FeatureExplore_27.webp",
    "42172-202408-PDP-FeatureExplore_28.webp", "42172-202408-PDP-FeatureExplore_29.webp",
    "42172-202408-PDP-FeatureExplore_30.webp", "42172-202408-PDP-FeatureExplore_31.webp",
    "42172-202408-PDP-FeatureExplore_32.webp", "42172-202408-PDP-FeatureExplore_33.webp",
    "42172-202408-PDP-FeatureExplore_34.webp", "42172-202408-PDP-FeatureExplore_35.webp",
    "42172-202408-PDP-FeatureExplore_36.webp", "42172-202408-PDP-FeatureExplore_37.webp",
    "42172-202408-PDP-FeatureExplore_38.webp", "42172-202408-PDP-FeatureExplore_39.webp",
    "42172-202408-PDP-FeatureExplore_40.webp", "42172-202408-PDP-FeatureExplore_41.webp",
    "42172-202408-PDP-FeatureExplore_42.webp", "42172-202408-PDP-FeatureExplore_43.webp",
    "42172-202408-PDP-FeatureExplore_44.webp", "42172-202408-PDP-FeatureExplore_45.webp",
    "42172-202408-PDP-FeatureExplore_46.webp", "42172-202408-PDP-FeatureExplore_47.webp",
    "42172-202408-PDP-FeatureExplore_48.webp", "42172-202408-PDP-FeatureExplore_49.webp",
    "42172-202408-PDP-FeatureExplore_50.webp", "42172-202408-PDP-FeatureExplore_51.webp",
    "42172-202408-PDP-FeatureExplore_52.webp", "42172-202408-PDP-FeatureExplore_53.webp",
    "42172-202408-PDP-FeatureExplore_54.webp", "42172-202408-PDP-FeatureExplore_55.webp",
    "42172-202408-PDP-FeatureExplore_56.webp", "42172-202408-PDP-FeatureExplore_57.webp",
    "42172-202408-PDP-FeatureExplore_58.webp", "42172-202408-PDP-FeatureExplore_59.webp",
    "42172-202408-PDP-FeatureExplore_60.webp", "42172-202408-PDP-FeatureExplore_61.webp",
    "42172-202408-PDP-FeatureExplore_62.webp", "42172-202408-PDP-FeatureExplore_63.webp",
    "42172-202408-PDP-FeatureExplore_64.webp", "42172-202408-PDP-FeatureExplore_65.webp",
    "42172-202408-PDP-FeatureExplore_66.webp", "42172-202408-PDP-FeatureExplore_67.webp",
    "42172-202408-PDP-FeatureExplore_68.webp", "42172-202408-PDP-FeatureExplore_69.webp",
    "42172-202408-PDP-FeatureExplore_70.webp", "42172-202408-PDP-FeatureExplore_71.webp"
];

const img360Location = "images/360-view/";
const img360String = "42172-202408-PDP-FeatureExplore_";
const img360Format = ".webp";

const img360Image = document.getElementById('mclaren-360view-image');
const dragControl = document.getElementById('drag-control');
const dragControlHandle = document.getElementById('drag-control-handle');
const body = document.body;

let frameDivider = dragControl.getBoundingClientRect().width / (img360List.length - 1);
let handlePos =  dragControl.getBoundingClientRect().x - (dragControlHandle.getBoundingClientRect().x + (dragControlHandle.getBoundingClientRect().width / 2));
let draggingHandle = false;


/* Desktop-events */

dragControlHandle.addEventListener('mousedown', (e) => {
    draggingHandle = true;
});

window.addEventListener('mouseup', (e) => {
    draggingHandle = false;
    dragControlHandle.classList.remove('active');
});

window.addEventListener('mousemove', (e) => {
    let dragControlLeft = dragControl.getBoundingClientRect().x;
    let dragControlWidth = dragControl.getBoundingClientRect().width;
    let dragControlHandlePos = e.clientX - dragControlLeft;

    moveHandle(dragControlWidth, dragControlHandlePos);
});


/* Mobil-events */

dragControlHandle.addEventListener('touchstart', (e) => {
    draggingHandle = true;
    body.classList.add('stop-scrolling');
});

window.addEventListener('touchend', (e) => {
    draggingHandle = false;
    dragControlHandle.classList.remove('active');
    body.classList.remove('stop-scrolling');
});

window.addEventListener('touchmove', (e) => {
    let dragControlLeft = dragControl.getBoundingClientRect().x;
    let dragControlWidth = dragControl.getBoundingClientRect().width;
    let dragControlHandlePos = e.touches[0].clientX - dragControlLeft;

    moveHandle(dragControlWidth, dragControlHandlePos);
});


/* Functions */

function moveHandle(controlWidth, handlePos) {
    
    if (draggingHandle) {
        if (handlePos <= 0) {
            handlePos = 0;
        } else if (handlePos >= controlWidth) {
            handlePos = controlWidth;
        }

        dragControlHandle.classList.add('active');
        dragControlHandle.style.transform = "translateX(calc(-50% + " + Math.round(handlePos) + "px)) translateY(-50%)";

        img360Image.src = img360Location + img360String + Math.round(handlePos / frameDivider) + img360Format;
        img360Image.alt = "McLaren 360 view image number " + Math.round(handlePos / frameDivider + 1);
    }
}

/* Fade-in */

let fadeIn = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', (e) => {
    for (let i = 0; i < fadeIn.length; i++) {
        let wrapperPos = fadeIn[i].getBoundingClientRect().y;
        let fadeInPos = window.innerHeight * 0.75;
        
        if (wrapperPos < fadeInPos && !fadeIn[i].classList.contains('is-faded-in')) {
            fadeIn[i].classList.add('is-faded-in');
        }
    }
}, false);

/*Rose*/
console.log ("jeg virker")

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

const track = document.querySelector('.track');

let carouselWidth = document.querySelector('.carousel-container').offsetWidth;

window.addEventListener('resize' , () => {
    carouselWidth = document.querySelector('.carousel-container').offsetWidth;
}) 

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
});


/* Nikolaj script */
const images = [
    "images/produkt-img/image1.webp",
    "images/produkt-img/image2.webp",
    "images/produkt-img/image3.webp",
    "images/produkt-img/image4.webp",
    "images/produkt-img/image5.webp",
    "images/produkt-img/image6.webp",
    "images/produkt-img/image7.webp",
    "images/produkt-img/image8.webp",
    "images/produkt-img/image9.webp",
    "images/produkt-img/image10.webp",
    "images/produkt-img/image11.webp",
    "images/produkt-img/image12.webp",
    "images/produkt-img/image13.webp"
];

let currentIndex = 0;

// Function to update the main image display
function updateMainImage(index) {
    const mainDisplay = document.getElementById('mainDisplay');
    mainDisplay.src = images[index];
}

function initGallery() {
    const thumbnailGallery = document.querySelector('.thumbnail-gallery');

    // Loop through the images array 
    images.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Thumbnail ${index + 1}`;
        img.addEventListener('click', () => {
            currentIndex = index;
            updateMainImage(index);
        });
        thumbnailGallery.appendChild(img);
    });

    // Add event listeners to the Next and Previous buttons
    document.getElementById('nextBtn').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateMainImage(currentIndex);
    });

    document.getElementById('prevBtn').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateMainImage(currentIndex);
    });
}

window.onload = initGallery;