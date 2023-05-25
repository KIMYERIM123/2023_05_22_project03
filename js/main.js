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

    $('.contnet_slide').slick({
        slidesToShow : 3,
        slidesToScroll : 1,
        arrows : false
    });


    $('.sub_content02 .arrows .left').on('click', function () {
        $('.contnet_slide').slick('slickPrev');
    });
    $('.sub_content02 .arrows .right').on('click', function () {
        $('.contnet_slide').slick('slickNext');
    });


   
    

})