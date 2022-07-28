$('.slider').slick({
    autoplay: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 600,
        settings:{
            slidesToShow: 1}
    }]
});

$('.hbg').click(function() {
    if($('.navbar').parent().hasClass('mobile-nav')){
        $('.navbar').parent().removeClass('mobile-nav')
        $('.hbg').attr("src", "images/icon-hamburger.svg")
    }else{
        $('.navbar').parent().addClass('mobile-nav')
        $('.hbg').attr("src", "images/icon-close.svg")
    }
});