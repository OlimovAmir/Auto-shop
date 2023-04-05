
let slide1 = document.querySelector('#swiper')
let slide2 = document.querySelector('#swiper-wrapper')
let swiperSlide1 = document.querySelector('#swiper-slide1');
let swiperButtonPrev = document.querySelector('#buttonPrev');
let swiperButtonNext = document.querySelector('#buttonNext');
let swiper;

if (window.innerWidth <= 768) {

    swiper = new Swiper('.swiper', {

        // Optional parameters

        loop: true,

        // If we need pagination
       

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },

        
        

    });



}
window.addEventListener('resize', function () {
    setTimeout(function () {
        location.reload()
    })

})

if (window.innerWidth > 768) {
    
    slide1.classList.remove('swiper')
    slide2.classList.remove('swiper-wrapper');
    slide2.classList.add('row');
    slide2.classList.add('Block_3');
    swiperSlide1.classList.remove('swiper-slide');
    swiperButtonNext.classList.remove('swiper-button-next');
    swiperButtonPrev.classList.remove('swiper-button-prev');

    swiperSlide1.classList.add('col-lg-4');
} else {
   
    slide1.classList.add('swiper')
    swiperSlide1.classList.add('swiper-slide1');
    swiperButtonNext.classList.add('swiper-button-next');
    swiperButtonPrev.classList.add('swiper-button-prev');
    slide2.classList.add('swiper-wrapper');


    slide2.classList.remove('row');
    slide2.classList.remove('Block_3');
    
}

let swiper2 = new Swiper('#swiper2', {

    slidesPerView: 4,

    // Optional parameters

    loop: true,

    // If we need pagination
  

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: true,
    },

    spaceBetween: 20,

    breakpoints: {

        360: {
            slidesPerView: 1,
            spaceBetweenSlides: 10
        },

       // when window width is <= 499px
        499: {
            slidesPerView: 2,
            spaceBetweenSlides: 10
        },
        // when window width is <= 999px
        700: {
            slidesPerView: 2,
            spaceBetweenSlides: 10
        },

        768: {
            slidesPerView: 3,
            spaceBetweenSlides: 10
        },

        1200: {
            slidesPerView: 4,
            spaceBetweenSlides: 10
        }
    }

  });



  document.getElementById("customRange3").addEventListener("change", function() {
    console.log(this.value);
    this.max = 150;
    console.log(this.max)
  });

  function fun1() {
    var rng=document.getElementById('r1'); //rng - это Input
    var p=document.getElementById('one'); // p - абзац
    p.innerHTML=rng.value;
  }