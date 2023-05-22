$(function () {
    $('.main_slide').slick({
        arrows: false,
        autoplay : true,
        vertical: true,
        autoplaySpeed :3000,
        pauseOnHover: false,
        pauseOnFocus: false,
        dots : true
    });

    $(window).on('scroll', function () {
        // 변수에 스크롤한 양을 담는다
        let sct = $(window).scrollTop();
        console.log(sct);
        if (sct > 0) {
            $('header').addClass('on')
        } else {
            $('header').removeClass('on')
        }

    });

})