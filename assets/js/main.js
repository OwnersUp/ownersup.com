jQuery(document).ready(function ($) {

    $(document).foundation();

    AOS.init({
        duration: 300,
        easing: 'ease-out-quad',
        delay: 100,
        once:true	
    });

    $(".swiper-container").each(function () {

        var sliderId = "#" + $(this).attr("id");

        var quoteSwiper = new Swiper(sliderId, {
            speed:1000,
            parallax: true,
            pagination: '.swiper-pagination',
            paginationClickable: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev'
        });

    });

});