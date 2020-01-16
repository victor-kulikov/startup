jQuery(document).ready(function() {

    // Меню бургер
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });



    //slider-staff
    $('.slider-staff').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
        prevArrow: '<i class="fa fa-angle-left slick-prev arrow" aria-hidden="true"></i>',
        nextArrow: '<i class="fa fa-angle-right slick-next arrow" aria-hidden="true"></i>',
        dots: false,
        responsive: [{
                breakpoint: 990,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false
                }

            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]

    });

    $('.slider-clients').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        responsive: [{
                breakpoint: 767,
                settings: {
                    dots: false
                }

            },
            {
                breakpoint: 480,
                settings: {
                    dots: false
                }
            }
        ]

    });


    //works - portfolio
    $(function() {
        $('.project-maxitup').mixItUp();
    });


    $('.header__list').onePageNav({
        currentClass: 'current',
        scrollSpeed: 1000,
        begin: function() {},
        end: function() {},
        scrollChange: function(jQuerycurrentListItem) {}
    });



    $(window).scroll(function(event) {
        if($('body').hasClass('lock')){
            event.preventDefault();
            return false;
        }else{
                var scr=$(this).scrollTop();
            if(scr>0){
                $('header').addClass('fixed');
            }else{
                $('header').removeClass('fixed');
            }
            sectors(scr);
        }
    });
    function sectors(scr){
            var w=$(window).outerWidth();
            var h=$(window).outerHeight();
        $.each($('.sector'), function(index, val) {
                var th=$(this).outerHeight();
                var tot=$(this).offset().top;
            if(scr>tot-h/1 && scr<tot+th){
                    $(this).addClass('active');
            }
            else{
                    $(this).removeClass('active');
            }
            if(scr>tot-h && scr<tot+th){
                $(this).addClass('view');
            }
            else{
                $(this).removeClass('view');
            }
        });
    }

    // анимация при скролле
    new WOW().init();

});