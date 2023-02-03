// swiper

var swiper = new Swiper('.swiper-container', {
    loop: false,
    spaceBetween: 50,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 6000,
        disableOnInteraction: false
    },
    loop: true
});

$('.btn_prev').on('click', function () {
    $(this).hide();
    $(this).prev().show();
})

$('.btn_next').on('click', function () {
    $(this).hide();
    $(this).next().show();
})

// open 

$('#header .open').on('click', function () {
    $(this).toggleClass('active')
    $('#header .cd').toggleClass('active')
    $('#section').toggleClass('active')
    $('.homeLogo.logo1').toggleClass('active')
    $('.navUl').toggleClass('active')
})

$('#header #nav').on('mouseover', function () {
    $(this).find('.depth2').stop().slideDown();

})
$('#header #nav').on('mouseout', function () {
    $(this).find('.depth2').stop().slideUp();

})
$('#header .open').on('click', function () {
    $(this).toggleClass('on')
})
