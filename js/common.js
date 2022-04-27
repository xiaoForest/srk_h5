jQuery(document).ready(function ($) {
    animateImg();

    function animateImg() {
        // var wow = new WOW({
        //     mobile: false,
        //     live: true
        // });
        // wow.init();
        // http://michalsnik.github.io/aos/
        AOS.init({
            disable: 'mobile',
            // easing: 'ease-out-back',
            duration: 1000
        });
    }

    function changeHeader() {

        let $mainMenuState = $('#srkMainMenuState');
        if ($mainMenuState.length) {
            // animate mobile menu
            $mainMenuState.change(function (e) {
                let $menu = $('#srkMainMenuJs');
                if (this.checked) {
                    $menu.hide().slideDown(250, function () {
                        // $menu.css('display', '');
                    });
                } else {
                    $menu.show().slideUp(250, function () {
                        // $menu.css('display', '');
                    });
                }
            });
        }

        $(window).scroll(function () {
            let headerTop = $('.headerTopWrapper').outerHeight(true)
            let scrollTop = $(window).scrollTop();
            if (scrollTop < headerTop) {
                $('.headerNavWrapper').removeClass('pft')
            } else {
                $('.headerNavWrapper').addClass('pft')
            }
        })

    }
    changeHeader()
    $(window).resize(function () {
        changeHeader()
    })
    let hover = false;
    let headHover = true

    if ($(window).width() > 767) {
        $('.srkMainMenu li').mouseover(function () {
            headHover = true
            $(this).addClass('on').siblings().removeClass('on');
        }).mouseleave(function () {
            headHover = false
            setTimeout(() => {
                if (headHover == false) {
                    $('.srkMainMenu li').removeClass('on')
                    hover = false
                }
            }, 300)
        })
    } else {
        $('.srkMainMenu li').on('click', ' a', function (evt) {
            let hasClassIcon = $('.srkMainMenu li a span').attr('class')
            if (evt.target.className == hasClassIcon) {
                evt.preventDefault();
            }
            let $saCon = $(this).next('.srkASubmenus')
            if (!$saCon.hasClass('active')) {
                $saCon.hide().slideDown(250, function () {});
                $saCon.addClass('active')
            } else {
                $saCon.show().slideUp(250, function () {});
                $saCon.removeClass('active')
            }

        })
    }

    $('.srkChangeMore').on('click', function () {
        $(this).toggleClass('show')
    })


    if ($('.srkGoodsImgsSwiper').length) {
        var srkGoodsImgsSwiper = new Swiper(".srkGoodsImgsSwiper", {
            spaceBetween: 10,
            slidesPerView: 6,
            slideToClickedSlide: true,
            watchSlidesVisibility: true,
            /*避免出现bug*/
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
            thumbs: {
                swiper: srkProductBannersSwiper,
            },
        });
    }
    if ($('.srkProductBannersSwiper').length) {
        var srkProductBannersSwiper = new Swiper('.srkProductBannersSwiper', {
            effect: 'fade', // cards
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
            thumbs: {
                swiper: srkGoodsImgsSwiper,
            },
        })
    }

    function changeStop() {
        srkProductBannersSwiper.autoplay.stop();
        srkGoodsImgsSwiper.autoplay.stop();
    }

    function changeStart() {
        srkProductBannersSwiper.autoplay.start();
        srkGoodsImgsSwiper.autoplay.start();
    }
    srkProductBannersSwiper.el.onmouseover = function () {
        changeStop()
    }
    srkProductBannersSwiper.el.onmouseleave = function () {
        changeStart()
    }
    srkGoodsImgsSwiper.el.onmouseover = function () {
        changeStop()
    }
    srkGoodsImgsSwiper.el.onmouseleave = function () {
        changeStart()
    }
    // $(window).resize(function () {

    // });


})