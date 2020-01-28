$(document).ready(function () {

    $('.sliders').owlCarousel({
        loop:true,

        nav:true,
        dots: false,
        navText: [],
        responsive:{
            0:{
                items:1
            },
            480:{
                items:1
            },
            768:{
                items:2
            },
            1024:{
                items:3
            },
            1600:{
                items:3
            }
        }
    });
});