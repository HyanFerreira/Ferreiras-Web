// herdar header e footer

// $( "#header" ).load( "layout/header.html" );
$( "#footer" ).load( "layout/footer.html" );

// carrossel dos serviços na página home

var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
});

// hamburguer responsive

const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".ul-menu");

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
});

function redirecionarContato () {
    window.location.href = "contato.html";
}

// botão contato

const buttonContact = document.querySelector("#button-contact")
const boxOutside = document.querySelector(".box-outside")

buttonContact.addEventListener("click", () => {
    if(boxOutside.style.display === 'block') {
        boxOutside.style.display = 'none';
    } else {
        boxOutside.style.display = 'block';
    }
});

// function menuShow() {
//     let menuMobile = document.querySelector('.hamburguer');
//     if (menuMobile.classList.contains('active')) {
//         menuMobile.classList.remove('active');
//     } else {
//         menuMobile.classList.add('active');
//     }
// }