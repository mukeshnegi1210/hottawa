$(function () {
    handleTopArrowShow();

    handleFixedHeader();


    // handling on scroll header
    $(window).scroll(function () {
        handleTopArrowShow();
        handleFixedHeader();
    });

    // handle bg of header on scroll 
    function handleFixedHeader() {
        var scroll = $(window).scrollTop();
        if (scroll >= 400) {

            $("header").addClass("fixed-header");
        }
        else {
            $("header").removeClass("fixed-header");
        }
    }

    $("#ContactForm").validate();



    $('.customer-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        centerMode: true,

        initialSlide: 1,
        responsive: [

            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },


        ]
    });


    $('button[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        $('.customer-slider').slick('setPosition');
    })

    // scroll top ===============================
    function handleTopArrowShow() {
        var scroll = $(window).scrollTop();

        if (scroll >= 300) {
            $('.scrollToTop').removeClass("d-none");
        } else {
            $('.scrollToTop').addClass("d-none");
        }
    }


    $('.scrollToTop').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 100);
        return false;
    });

    // scroll top ends ===============================

    $('.menu-open').click(function () {
        $('.primary-menu-outer').addClass('active');
    })
    $('.menu-close').click(function () {

        $('.primary-menu-outer').removeClass('active');
    })
    // block scroll ===============================
    $('.primary-menu li a ').click(function () {
        $('.primary-menu-outer').removeClass('active');
        var get_scroll_id = $(this).attr('data-scroll');
        $('.primary-menu li a').removeClass("active");
        $(this).addClass("active");
        $("html, body").animate({
            scrollTop: $(get_scroll_id).offset().top - 70
        }, 600);

    });

    if (window.location.hash) {
        $('.primary-menu li a').removeClass("active");
        $(`.primary-menu li a[data-scroll="${window.location.hash}"]`).addClass("active")
        $('html, body').animate({ scrollTop: 0 }, 100);
        setTimeout(function () {
            $("html, body").delay(300).animate({
                scrollTop: $(window.location.hash).offset().top - 70
            }, 600);
        }, 1000);

    }

})

$(window).on('load', function () {
    $('#aa-preloader-area').delay(300).fadeOut('d-none');
});