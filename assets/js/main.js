function init() {
    
    //Animations library
    AOS.init({
        duration: 300,
        easing: 'ease-out-quad',
        delay: 0,
        once: true
    });

    //Swipe Sliders
    var mySwiper = new Swiper('.swiper-container', {
        speed: 1000,
        parallax: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
    });

    //Waypoint for header
    var site = document.getElementById("site");
    var sticky_header = document.getElementById("sticky");

    var waypoint = new Waypoint({
        element: site,
        handler: function (direction) {
            if (direction == "down") {
                sticky_header.className += "is-stuck";
            } else {
                sticky_header.className = "";
            }
        },
        offset: -150
    });
}
