$(function() {
    var menuLink = $('.header__link');
    var menu = $('.header__menu');
    var close = $('.close-btn');



    menuLink.click(function() {
        menu.toggleClass('active-menu');
    });
    close.click(function() {
        menu.toggleClass('active-menu');
    });

});

