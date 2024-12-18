var swiperProduct = new Swiper('.swiper-product', {
    slidesPerView: 2,
    spaceBetween: 30,
    speed: 1500,
    // loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    grid: {
        fill: 'row',
        rows: 2,
    },

    navigation: {
        nextEl: '.product-navigation .next',
        prevEl: '.product-navigation .prev',
    },
    breakpoints: {
        992: {
            slidesPerView: 4,
            spaceBetween: 100,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 60,
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 30,
        },

    }
})

var swiperProduct = new Swiper($('.detail-img-slide').find('.swiper')[0], {
    slidesPerView: 1,
    spaceBetween: 50,
    speed: 1500,
    // loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    

 

    navigation: {
        nextEl: $('.detail-img-slide').find('.dif_arrow.is-next')[0],
        prevEl: $('.detail-img-slide').find('.dif_arrow.is-prev')[0]
    },

    on: {
        progress: function(swiper) {
            let progress = swiper.progress * 100;
            $('.detail-img-slide').find(".detail-img_nav-fill").css("width", progress + "%");
        }
    }
    
})


$('.site-footer').ready(function() {
    var a = $('.menu-cart-bottom').height();

    $('.site-footer').css('margin-bottom', a)
})

$('.menu-cart-bottom').each(function() {
    var $this = $(this)
    $('.btn-start', this).on('click', function(){
        $('.menu-product', $this).addClass('open-list')
        $(this).addClass('hide-b')
        $('.menu-product-list', $this).addClass('open');
        $('.title-1', $this).addClass('close')
        $('.title-2', $this).addClass('open')
    })

    $('.btn-back-2', this).on('click', function(){
        $('.menu-product', $this).removeClass('open-list')
        $('.btn-start', $this).removeClass('hide-b')
        $('.menu-product-list', $this).removeClass('open');
        $('.title-1', $this).removeClass('close')
        $('.title-2', $this).removeClass('open')
    })

    

    $('.menu-product-list a', this).on('click', function() {
        var a = $(this).data('menu');
        var b = $(this).html();
        $('.menu-product-list', $this).addClass('hide-menu-1')
        $('#'+ a).addClass('show-menu-2');
        $('.title-3', $this).addClass('open');
        $('.title-2', $this).addClass('hide-btn-2');
        $('.name-location').html(b)
    })

    $('.btn-back-3', this).on('click', function(){
        $('.menu-product-list', $this).removeClass('hide-menu-1');
        $('.menu-game-list' ,$this).removeClass('show-menu-2');
        $('.title-3', $this).removeClass('open');
        $('.title-2', $this).removeClass('hide-btn-2')
    })
})


if ($(window).width() < 992) {
    var swiperHow = new Swiper($('.how-to-container').find('.swiper-how-to')[0], {
        slidesPerView: 1,
        spaceBetween: 50,
        speed: 500,
        // loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
    
        navigation: {
            nextEl: $('.how-to-container').find('.dif_arrow.is-next')[0],
            prevEl: $('.how-to-container').find('.dif_arrow.is-prev')[0]
        },
        breakpoints: {
            992: {
                slidesPerView: 2,
                spaceBetween: 150,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 100,
            },
            600: {
                slidesPerView: 1,
                spaceBetween: 50,
            },
            576: {
                slidesPerView: 1,
                spaceBetween: 50,
            },
    
        },

        on: {
            progress: function(swiper) {
                let progress = swiper.progress * 100;
                $('.how-to-container').find(".how-to_nav-fill").css("width", progress + "%");
            }
        }
       
    })

    var swiperPick = new Swiper($('.pick-up-container').find('.swiper-how-to')[0], {
        slidesPerView: 1,
        spaceBetween: 50,
        speed: 500,
        // loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
    
        navigation: {
            nextEl: $('.pick-up-container').find('.dif_arrow.is-next')[0],
            prevEl: $('.pick-up-container').find('.dif_arrow.is-prev')[0]
        },
        breakpoints: {
            992: {
                slidesPerView: 2,
                spaceBetween: 150,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 100,
            },
            600: {
                slidesPerView: 1,
                spaceBetween: 50,
            },
            576: {
                slidesPerView: 1,
                spaceBetween: 50,
            },
    
        },

        on: {
            // slideChange: function(swiper ,data) {
            //     console.log(swiper.realIndex);
            // },
            progress: function(swiper) {
                
                let progress = swiper.progress * 100;
                $('.pick-up-container').find(".how-to_nav-fill").css("width", progress + "%");
            }
        }
       
    })

   

    
}



var swiperBlog = new Swiper('.swiper-blog', {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 1500,
    // loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },

    navigation: {
        nextEl: '.blog-navigation .next',
        prevEl: '.blog-navigation .prev',
    },
    breakpoints: {
        992: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        576: {
            slidesPerView: 1,
            spaceBetween: 30,
        },

    }
})

var swiperRelated = new Swiper('.swiper-related', {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 1000,
    // loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },

    navigation: {
        nextEl: '.blog-navigation .next',
        prevEl: '.blog-navigation .prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets'
    },
    breakpoints: {
        992: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        576: {
            slidesPerView: 1,
            spaceBetween: 30,
        },

    }
})

var swiperBanner = new Swiper('.swiper-banner-img', {
    slidesPerView: 1,
    speed: 2000,
    // effect: 'fade',
    loop: true,
    parallax: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    on: {
        init: function () {
            var swiper = this;
            for (var i = 0; i < swiper.slides.length; i++) {
                $(swiper.slides[i])
                    .find('.banner-img')
                    .attr({
                        'data-swiper-parallax': 0.75 * swiper.width
                    });
            }
        },
        resize: function () {
            this.update();
        }
    },


    navigation: {
        nextEl: '.nav-banner .btn-nav-next',
        prevEl: '.nav-banner .btn-nav-prev',
    },
})

var swiperChooseImg = new Swiper('.swiper-choose-img', {
    slidesPerView: 1,
    speed: 2000,
    // effect: 'fade',
    loop: true,
    parallax: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    on: {
        init: function () {
            var swiper = this;
            for (var i = 0; i < swiper.slides.length; i++) {
                $(swiper.slides[i])
                    .find('.img-box')
                    .attr({
                        'data-swiper-parallax': 0.75 * swiper.width
                    });
            }
        },
        resize: function () {
            this.update();
        }
    },


    navigation: {
        nextEl: '.nav-choose .btn-nav-next',
        prevEl: '.nav-choose .btn-nav-prev',
    },
    allowTouchMove: false,
    thumbs: {
        swiper: swiperChooseContent,
    },
})

var swiperChooseContent = new Swiper('.swiper-choose-content', {
    slidesPerView: 1,
    speed: 2000,
    // effect: 'fade',
    loop: true,
    parallax: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    allowTouchMove: false,
    navigation: {
        nextEl: '.nav-choose .btn-nav-next',
        prevEl: '.nav-choose .btn-nav-prev',
    },

})

var mySwiperThumb = new Swiper(".mySwiperThumb", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
var mySwiperSlider = new Swiper(".mySwiperSlider", {
    loop: true,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: mySwiperThumb,
    },
});

var swiperTour = new Swiper('.swiper-img-tour', {
    slidesPerView: 1,
    speed: 2000,
    // effect: 'fade',
    loop: true,
    parallax: true,
    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    // },
    on: {
        init: function () {
            var swiper = this;
            for (var i = 0; i < swiper.slides.length; i++) {
                $(swiper.slides[i])
                    .find('.img')
                    .attr({
                        'data-swiper-parallax': 0.75 * swiper.width
                    });
            }
        },
        resize: function () {
            this.update();
        }
    },
    pagination: {
        el: ".number-slide .swiper-pagination",
        type: "fraction",
    },
})

var swiperReview = new Swiper('.swiper-review', {
    slidesPerView: 1,
    speed: 1500,
    // effect: 'fade',
    spaceBetween: 50,
    // loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-review .swiper-pagination",
        clickable: true,
    },
    // navigation: {
    //     nextEl: '.review-slide .dif_arrow.is-next',
    //     prevEl: '.review-slide .dif_arrow.is-prev'
    // },

    // on: {
    //     progress: function(swiper) {
    //         let progress = swiper.progress * 100;
    //         $('.review-slide').find(".review-slide_nav-fill").css("width", progress + "%");
    //     }
    // },
    breakpoints: {
        992: {
            slidesPerView: 3,
            spaceBetween: 80,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 60,
        },
        576: {
            slidesPerView: 1,
            spaceBetween: 50,
        },

    },
    
})



function spaceTop() {
    var headerH = $('.site-header').height();
    $('.page-wrapper').css('margin-top', headerH)
}
$(document).ready(function () {
    spaceTop()
})

$(window).on('resize', function () {
    spaceTop()
})


wow = new WOW({
    boxClass: 'wow', // default
    animateClass: 'animate__animated', // default
    offset: 60, // default
    mobile: true, // default
    live: true // default
})
wow.init();











var lastScrollTop = 0;
$(window).scroll(function (event) {
    var st = $(this).scrollTop();
    if (st > lastScrollTop) {
        $('.site-header').addClass('scroll-down')
        $('.site-header').removeClass('scroll-up')
        $('.site-header').addClass('has-scroll')
    } else {
        $('.site-header').removeClass('scroll-down')
        $('.site-header').addClass('scroll-up')
    }
    if (st < 30) {
        $('.site-header').removeClass('scroll-down')
        $('.site-header').removeClass('scroll-up')
        $('.site-header').removeClass('has-scroll')
    }
    lastScrollTop = st;
});


$(document).ready(function () {
    $('.site-header-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991",
        // meanExpand: ['<i class="fal fa-plus"></i>'],
    });
});
$('.ham-btn').on('click', function () {
    $('.menu-mobile-container').addClass('open')
    $('.body-overlay').addClass('opened')
})

$(".mobile__close-btn").on('click', function () {
    $('.menu-mobile-container').removeClass('open')
    $('.body-overlay').removeClass('opened')
})

$(".body-overlay").on('click', function () {
    $('.menu-mobile-container').removeClass('open');
    $('.cart-container').removeClass('open');
    $(this).removeClass('opened');
})

$('.cart-btn').on('click', function () {
    $('.cart-container').addClass('open')
    $('.body-overlay').addClass('opened')
})

$(".cart-close").on('click', function () {
    $('.cart-container').removeClass('open')
    $('.body-overlay').removeClass('opened')
})

$("#search-icon").on('click', function () {
    $('.search-box-form').addClass('open')
})

$('.close-search').on('click', function () {
    $('.search-box-form').removeClass('open')
})

$(document).mouseup(function (e) {
    var container = $(".search-box-form");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.removeClass('open');
    }
});


let tl = anime.timeline({
    easing: 'easeOutExpo',
    duration: 1500,
    endDelay: 500
});

tl.add({
        targets: '.loading-container svg',
        opacity: [0, 1],
        easing: 'easeInOutSine',
        duration: 500,
    }, '0')
    .add({
        targets: '.loading-container svg *',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        delay: function (el, i) {
            return i * 50
        },
        duration: 1500,
    }, '-=1500')
    .add({
        targets: '.loading-container svg *',
        strokeOpacity: [1, 0],
        easing: 'easeInOutCubic',
        duration: 800
    }, '-=300')
    .add({
        targets: '.loading-container svg *',
        fillOpacity: [0, 1],
        easing: 'easeInOutCubic',
        duration: 1000
    }, '-=1650')

$(document).ready(function () {
    setTimeout(() => {
        $('.loading-container').fadeOut(1000)
    }, 4000);
})


$(".qtybutton").on("click", function () {
    var $qtyButton = $(this);
    var oldValue = $qtyButton.parent().find("input").val();
    if ($qtyButton.text() == "+") {
        var newVal = parseFloat(oldValue) + 1;
    } else {
        if (oldValue > 1) {
            var newVal = parseFloat(oldValue) - 1;
        } else {
            newVal = 1;
        }
    }
    $qtyButton.parent().find("input").val(newVal);
});


var swiperTeam = new Swiper(".swiper-team", {
    slidesPerView: 1,
    spaceBetween: 50,
    // loop: true,
    // autoplay: {
    //     delay: 3500,
    //     disableOnInteraction: false,
    // },
    speed: 1500,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-new .swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 50,
        }
    }
});

var $ttSpSliderThumbsSwiper = new Swiper($(".single-product-slider-thumbs").find(".swiper")[0], {
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: 15,
    preloadImages: false, // Needed for lazy loading
    watchSlidesProgress: true, // Needed for lazy loading (if slidesPerView is "auto" or more than 1)
    speed: 800,
    simulateTouch: true,
    preloadImages: false,

    lazy: {
        loadPrevNext: true,
        loadOnTransitionStart: true,
    },

    navigation: {
        nextEl: ".sps-arrow-next",
        prevEl: ".sps-arrow-prev",
        disabledClass: "sps-arrow-disabled",
    },

    breakpoints: {
        // When window width is 768px or larger
        768: {
            slidesPerView: 5,
        }
    },
});


// Init Swiper (image slider)
// =============
var $ttSpSliderSwiper = new Swiper($(".single-product-slider").find(".swiper")[0], {
    slidesPerView: 1,
    // effect: "fade",
    spaceBetween: 15,

    // Needed for lazy loading
    speed: 800,
    loop: false, // Do not enable loop! "LightGallery" is not recocnize cloned images.

    lazy: {
        loadPrevNext: true,
        loadOnTransitionStart: true,
    },

    navigation: {
        nextEl: ".sps-arrow-next",
        prevEl: ".sps-arrow-prev",
        disabledClass: "sps-arrow-disabled",
    },

    thumbs: {
        swiper: $ttSpSliderThumbsSwiper,
    },
});


$(".lightgallery").lightGallery({

    // Please read about gallery options here: http://sachinchoolur.github.io/lightGallery/docs/api.html

    // lightGallery core
    selector: '.lg-trigger',
    mode: 'lg-fade', // Type of transition between images ('lg-fade' or 'lg-slide').
    height: '100%', // Height of the gallery (ex: '100%' or '300px').
    width: '100%', // Width of the gallery (ex: '100%' or '300px').
    iframeMaxWidth: '100%', // Set maximum width for iframe.
    loop: true, // If false, will disable the ability to loop back to the beginning of the gallery when on the last element.
    speed: 600, // Transition duration (in ms).
    closable: true, // Allows clicks on dimmer to close gallery.
    escKey: true, // Whether the LightGallery could be closed by pressing the "Esc" key.
    keyPress: true, // Enable keyboard navigation.
    hideBarsDelay: 3000, // Delay for hiding gallery controls (in ms).
    controls: true, // If false, prev/next buttons will not be displayed.
    mousewheel: true, // Chane slide on mousewheel.
    download: false, // Enable download button. By default download url will be taken from data-src/href attribute but it supports only for modern browsers. If you want you can provide another url for download via data-download-url.
    counter: true, // Whether to show total number of images and index number of currently displayed image.
    swipeThreshold: 50, // By setting the swipeThreshold (in px) you can set how far the user must swipe for the next/prev image.
    enableDrag: true, // Enables desktop mouse drag support.
    enableTouch: true, // Enables touch support.
    getCaptionFromTitleOrAlt: false, // Option to get captions from alt or title tags.

    // Thumbnail plugin
    thumbnail: false, // Enable thumbnails for the gallery.
    showThumbByDefault: false, // Show/hide thumbnails by default.
    thumbMargin: 5, // Spacing between each thumbnails.
    toogleThumb: true, // Whether to display thumbnail toggle button.
    enableThumbSwipe: true, // Enables thumbnail touch/swipe support for touch devices.
    exThumbImage: 'data-exthumbnail', // If you want to use external image for thumbnail, add the path of that image inside "data-" attribute and set value of this option to the name of your custom attribute.

    // Autoplay plugin
    autoplay: false, // Enable gallery autoplay.
    autoplayControls: true, // Show/hide autoplay controls.
    pause: 6000, // The time (in ms) between each auto transition.
    progressBar: true, // Enable autoplay progress bar.
    fourceAutoplay: false, // If false autoplay will be stopped after first user action

    // Full Screen plugin
    fullScreen: true, // Enable/Disable fullscreen mode.

    // Zoom plugin
    zoom: false, // Enable/Disable zoom option.
    scale: 0.5, // Value of zoom should be incremented/decremented.
    enableZoomAfter: 50, // Some css styles will be added to the images if zoom is enabled. So it might conflict if you add some custom styles to the images such as the initial transition while opening the gallery. So you can delay adding zoom related styles to the images by changing the value of enableZoomAfter.

    // Video options
    videoMaxWidth: '1400px', // Set limit for video maximal width.

    // Youtube video options
    loadYoutubeThumbnail: true, // You can automatically load thumbnails for youtube videos from youtube by setting loadYoutubeThumbnail true.
    youtubeThumbSize: 'default', // You can specify the thumbnail size by setting respective number: 0, 1, 2, 3, 'hqdefault', 'mqdefault', 'default', 'sddefault', 'maxresdefault'.
    youtubePlayerParams: { // Change youtube player parameters: https://developers.google.com/youtube/player_parameters
        modestbranding: 0,
        showinfo: 1,
        controls: 1
    },

    // Vimeo video options
    loadVimeoThumbnail: true, // You can automatically load thumbnails for vimeo videos from vimeo by setting loadYoutubeThumbnail true.
    vimeoThumbSize: 'thumbnail_medium', // Thumbnail size for vimeo videos: 'thumbnail_large' or 'thumbnail_medium' or 'thumbnail_small'.
    vimeoPlayerParams: { // Change vimeo player parameters: https://developer.vimeo.com/player/embedding#universal-parameters
        byline: 1,
        portrait: 1,
        title: 1,
        color: 'CCCCCC',
        autopause: 1
    },

    // Hash plugin (unique url for each slides)
    hash: false, // Enable/Disable hash plugin.
    hgalleryId: 1, // Unique id for each gallery. It is mandatory when you use hash plugin for multiple galleries on the same page.

    // Rotate plugin
    rotate: false,

    // Share plugin
    share: false, // Enable/Disable share plugin.
    facebook: true, // Enable Facebook share.
    facebookDropdownText: 'Facebook', // Facebok dropdown text.
    twitter: true, // Enable Twitter share.
    twitterDropdownText: 'Twitter', // Twitter dropdown text.
    googlePlus: true, // Enable Google Plus share.
    googlePlusDropdownText: 'Google+', // Google Plus dropdown text.
    pinterest: true, // Enable Pinterest share.
    pinterestDropdownText: 'Pinterest' // Pinterest dropdown text.

});


// =======================================================================================
// tt-Tabs
// =======================================================================================

$(".tt-tabs").each(function () {
    $(this).find(".tt-tab-btn").on("click", function () {

        // Active/deactivate tab buttons
        var $ttTabButton = $(this);
        var $ttTabs = $ttTabButton.parents(".tt-tabs");

        $ttTabs.find(".tt-tab-btn").removeClass("active");
        $ttTabButton.addClass("active");

        // Show/hide tab content
        var $ttTabName = $ttTabButton.attr("data-content-id");

        $ttTabs.find(".tt-tab-content").removeClass("active");
        $ttTabs.find(".tt-tab-content-wrap #" + $ttTabName).addClass("active");

    });
});


// ================================================================
// tt-Accordion
// ================================================================

$(".tt-accordion").each(function () {

    // If accordion content has class "is-open"
    $(this).find(".tt-accordion-item").each(function () {
        var $this = $(this);

        if ($this.find(".tt-accordion-content").hasClass("is-open")) {
            $this.addClass("active");
        }
    });

    // Accordion item on click
    $(this).find(".tt-accordion-heading").on("click", function () {
        var $this = $(this);

        if ($this.parents(".tt-accordion-item").hasClass("active")) {
            $this.parents(".tt-accordion-item").removeClass("active");
            $this.next(".tt-accordion-content").slideUp(350);
        } else {
            $this.parent().parent().find(".tt-accordion-item").removeClass("active");
            $this.parent().parent().find(".tt-accordion-content").slideUp(350);
            $this.parents(".tt-accordion-item").toggleClass("active");
            $this.next(".tt-accordion-content").slideToggle(350);
        }
        return false;
    });
});

$('.single-product-color').each(function () {
    var $this = $(this);
    var title = $(".product__label span", this).text();

    $('.product__color-swatch--sibling-product', this).on('mouseover', function () {
        $(".product__label span", $this).html($(this).attr('data-sibling-cutline'));
    })

    $('.product__color-swatches--inner').on('mouseout', function () {
        $(".product__label span", $this).html(title);
    })

})

var controller = new ScrollMagic.Controller();
$('.js-text-parallax .fx-wrap').each(function (index, el) {
    var id = 'text-parallax-' + index;
    var $this = $(this);
    $this.attr('id', id);

    var offset = parseInt($this.attr('data-x'), 10) || 200;

    var tween = TweenMax.to('#' + id + ' .fx-target', 2, {
        x: offset
    });

    new ScrollMagic.Scene({
            triggerElement: '#' + id,
            triggerHook: 1,
            duration: window.innerHeight * 2
        }).setTween(tween)
        // .addIndicators()
        .addTo(controller);
});

var direction = 'vertical';
var scrollbarClass = 'awd-scrollbar';
// var scroll = new LocomotiveScroll();



Splitting();
const fx1Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect1]')];
const fx2Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect2]')];
const fx3Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect3]')];
const fx4Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect4]')];
const fx5Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect5]')];
const fx6Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect6]')];
const fx7Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect7]')];
const fx8Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect8]')];
const fx9Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect9]')];
const fx10Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect10]')];
const fx11Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect11]')];
const fx12Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect12]')];
const fx13Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect13]')];
const fx14Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect14]')];
const fx15Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect15]')];
const fx16Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect16]')];
const fx17Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect17]')];
const fx18Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect18]')];
const fx19Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect19]')];
const fx20Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect20]')];
const fx21Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect21]')];
const fx22Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect22]')];
const fx23Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect23]')];
const fx24Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect24]')];
const fx25Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect25]')];
const fx26Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect26]')];
const fx27Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect27]')];
const fx28Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect28]')];
const fx29Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect29]')];
const loadTitles = [...document.querySelectorAll('.content__title[data-splitting][data-effectload]')];
const footprint = [...document.querySelectorAll('.foot-ani')];
const loadLinePick = [...document.querySelectorAll('.pick-up-line[data-line-1]')];
const loadLinePick2 = [...document.querySelectorAll('.pick-up-line[data-line-2]')];
const loadLinePick3 = [...document.querySelectorAll('.how-to-line[data-line-3]')];
const pickImg = [...document.querySelectorAll('.pick-up-container .pick-up-item')];
const howImg = [...document.querySelectorAll('.how-to-container .how-to-item')];
const imgFade = [...document.querySelectorAll('.img-fade')];
// const load = () => {
//     loadTitles.forEach(title => {

//         const chars = title.querySelectorAll('.char');

//         gsap.fromTo(chars, {
//             'will-change': 'opacity, transform',
//             opacity: 0,
//             scale: 0.6,
//             rotationZ: () => gsap.utils.random(-20,20)
//         },
//         {
//             ease: 'power4',
//             opacity: 1,
//             scale: 1,
//             rotation: 0,
//             stagger: 0.4,
//             scrollTrigger: {
//                 trigger: title,
//                 start: 'center+=20% bottom',
//                 end: '+=50%',
//                 scrub: true
//             },
//         });

//     });
// }

// function pathPrepare($el) {
//     var lineLength = $el[0].getTotalLength();
//     $el.css("stroke-dasharray", lineLength);
//     $el.css("stroke-dashoffset", lineLength);
// }

// $('.line-ani').each(function() {
//     var $path1 = $('.line-ani');
//     pathPrepare($path1);
// })

// $('.line-ani-2').each(function() {
//     var $path2 = $('.line-ani-2');
//     pathPrepare($path2);
// })

// $('.line-ani-3').each(function() {
//     var $path3 = $('.line-ani-3');
//     pathPrepare($path3);
// })

// // var $path1 = $('.line-ani');
// // var $path2 = $('.line-ani-2');
// // var $path3 = $('.line-ani-3');
// // pathPrepare($path1);
// // pathPrepare($path2);
// // pathPrepare($path3);
// const scroll = () => {

    
//     loadLinePick.forEach(line => {

//         const loadLineItem = line.querySelectorAll('.line-ani');

//         gsap.fromTo(loadLineItem, {
            
//             // strokeDashoffset: 2000,
//         },
//         {
//             strokeDashoffset: 0,
//             ease: 'Linear.easeNone',
            
//             scrollTrigger: {
//                 trigger: line,
//                 start: 'center+=40% bottom',
//                 end: '+=80%',
//                 scrub: true
//             },
//         });

//     });
//     loadLinePick2.forEach(line2 => {

//         const loadLineItem = line2.querySelectorAll('.line-ani-2');

//         gsap.fromTo(loadLineItem, {
            
//             // strokeDashoffset: 2000,
//         },
//         {
//             strokeDashoffset: 0,
//             ease: 'Linear.easeNone',
            
//             scrollTrigger: {
//                 trigger: line2,
//                 start: 'center+=10% bottom',
//                 end: '+=80%',
//                 scrub: true
//             },
//         });

//     });

//     pickImg.forEach(img => {
        
//         gsap.fromTo(img, {
//             'will-change': 'opacity',
//             opacity: 0,
//             // strokeDashoffset: 2000,
//         },
//         {
//             opacity: 1,
//             ease: 'power1.inOut',
//             // filter: 'blur(0px)',
//             stagger: {each: 0.05},
//             scrollTrigger: {
//                 trigger: img,
//                 start: 'top+=20% bottom',
//                 end: '+=60%',
//                 scrub: true,
//                 // markers: true,
//             }
//         });

//     });

//     imgFade.forEach(img => {
        
//         gsap.fromTo(img, {
//             'will-change': 'opacity',
//             opacity: 0,
//             // strokeDashoffset: 2000,
//         },
//         {
//             opacity: 1,
//             ease: 'power1.inOut',
//             // filter: 'blur(0px)',
//             stagger: {each: 0.05},
//             scrollTrigger: {
//                 trigger: img,
//                 start: 'top+=20% bottom',
//                 end: '+=60%',
//                 scrub: true,
//                 // markers: true,
//             }
//         });

//     });

//     howImg.forEach(imghow => {


//         gsap.fromTo(imghow, {
//             'will-change': 'opacity',
//             opacity: 0,
//             // strokeDashoffset: 2000,
//         },
//         {
//             opacity: 1,
//             ease: 'power1.inOut',
//             // filter: 'blur(0px)',
//             stagger: {each: 0.05},
//             scrollTrigger: {
//                 trigger: imghow,
//                 start: 'top+=20% bottom',
//                 end: '+=60%',
//                 scrub: true,
//             }
//         });

//     });

//     loadLinePick3.forEach(line3 => {

//         const loadLineItem = line3.querySelectorAll('.line-ani-3');

//         gsap.fromTo(loadLineItem, {
            
//             // strokeDashoffset: 2000,
//         },
//         {
//             strokeDashoffset: 0,
//             ease: 'Linear.easeNone',
            
//             scrollTrigger: {
//                 trigger: line3,
//                 start: 'center+=10% bottom',
//                 end: '+=80%',
//                 scrub: true
//             },
//         });

//     });

//     footprint.forEach(foot => {

//         const footitem = foot.querySelectorAll('img');

//         gsap.fromTo(footitem, {
//             'will-change': 'opacity, transform',
//             opacity: 0,
//             // filter: 'blur(10px)',
//             // scale: 0.6,
//             // rotationZ: () => gsap.utils.random(-20,20)
//         },
//         {
//             ease: 'power1.inOut',
            
//             opacity: 1,
//             // filter: 'blur(0px)',
//             stagger: { each: 0.4},
//             scrollTrigger: {
//                 trigger: foot,
//                 start: 'center+=40% bottom',
//                 end: '+=50%',
//                 scrub: true
//             },
//         });

//     });

//     fx1Titles.forEach(title => {

//         const chars = title.querySelectorAll('.char');

//         gsap.fromTo(chars, {
//             'will-change': 'opacity, transform',
//             opacity: 0,
//             scale: 0.6,
//             rotationZ: () => gsap.utils.random(-20,20)
//         },
//         {
//             ease: 'power4',
//             opacity: 1,
//             scale: 1,
//             rotation: 0,
//             stagger: 0.4,
//             scrollTrigger: {
//                 trigger: title,
//                 start: 'center+=20% bottom',
//                 end: '+=50%',
//                 scrub: true
//             },
//         });

//     });

//     fx2Titles.forEach(title => {

//         const chars = title.querySelectorAll('.char');

//         gsap.fromTo(chars, {
//             'will-change': 'opacity, transform',
//             opacity: 0,
//             yPercent: 120,
//             scaleY: 2.3,
//             scaleX: 0.7,
//             transformOrigin: '50% 0%'
//         },
//         {
//             duration: 1,
//             ease: 'back.inOut(2)',
//             opacity: 1,
//             yPercent: 0,
//             scaleY: 1,
//             scaleX: 1,
//             stagger: 0.03,
//             scrollTrigger: {
//                 trigger: title,
//                 start: 'center bottom+=50%',
//                 end: 'bottom top+=40%',
//                 scrub: true
//             }
//         });

//     });

//     fx3Titles.forEach(title => {

//         const chars = title.querySelectorAll('.char');

//         gsap.fromTo(chars,  {
//             'will-change': 'transform',
//             transformOrigin: '50% 0%',
//             scaleY: 0
//         },
//         {
//             ease: 'back',
//             opacity: 1,
//             scaleY: 1,
//             yPercent: 0,
//             stagger: 0.03,
//             scrollTrigger: {
//                 trigger: title,
//                 start: 'center bottom-=5%',
//                 end: 'top top-=20%',
//                 scrub: true
//             }
//         });

//     });

//     fx4Titles.forEach(title => {

//         const words = title.querySelectorAll('.word');

//         for (const word of words) {

//             const chars = word.querySelectorAll('.char');

//             gsap.fromTo(chars,  {
//                 'will-change': 'opacity, transform',
//                 x: (position,_,arr) => 150*(position-arr.length/2)
//             },
//             {
//                 ease: 'power1.inOut',
//                 x: 0,
//                 stagger: {
//                     grid: 'auto',
//                     from: 'center'
//                 },
//                 scrollTrigger: {
//                     trigger: word,
//                     start: 'center bottom+=30%',
//                     end: 'top top+=15%',
//                     scrub: true,
//                 }
//             });

//         };

//     });

//     fx5Titles.forEach(title => {

//         const chars = title.querySelectorAll('.char');

//         gsap.fromTo(chars, {
//             'will-change': 'opacity, transform',
//             opacity: 0,
//             xPercent: () => gsap.utils.random(-200,200),
//             yPercent: () => gsap.utils.random(-150,150)
//         },
//         {
//             ease: 'power1.inOut',
//             opacity: 1,
//             xPercent: 0,
//             yPercent: 0,
//             stagger: { each: 0.05, grid: 'auto', from: 'random'},
//             scrollTrigger: {
//                 trigger: title,
//                 start: 'center bottom+=10%',
//                 end: 'center center+=10%',
//                 scrub: 0.9
//             }
//         });

//     });

//     fx6Titles.forEach(title => {

//         const words = title.querySelectorAll('.word');

//         for (const word of words) {

//             const chars = word.querySelectorAll('.char');

//             chars.forEach(char => gsap.set(char.parentNode, { perspective: 2000 }));

//             gsap.fromTo(chars, {
//                 'will-change': 'opacity, transform',
//                 opacity: 0,
//                 rotationX: -90,
//                 yPercent: 50
//             },
//             {
//                 ease: 'power1.inOut',
//                 opacity: 1,
//                 rotationX: 0,
//                 yPercent: 0,
//                 stagger: {
//                     each: 0.03,
//                     from: 0
//                 },
//                 scrollTrigger: {
//                     trigger: word,
//                     start: 'center bottom+=40%',
//                     end: 'bottom center-=30%',
//                     scrub: 0.9
//                 }
//             });

//         }

//     });

//     fx7Titles.forEach(title => {

//         const words = title.querySelectorAll('.word');

//         for (const word of words) {

//             const chars = word.querySelectorAll('.char');

//             chars.forEach(char => gsap.set(char.parentNode, { perspective: 2000 }));

//             gsap.fromTo(chars, {
//                 'will-change': 'opacity, transform',
//                 transformOrigin: '100% 50%',
//                 opacity: 0,
//                 rotationY: -90,
//                 z: -300
//             },
//             {
//                 ease: 'expo',
//                 opacity: 1,
//                 rotationY: 0,
//                 z: 0,
//                 stagger: { each: 0.06, from: 'end'},
//                 scrollTrigger: {
//                     trigger: word,
//                     start: 'bottom bottom+=20%',
//                     end: 'bottom top',
//                     scrub: 1
//                 }
//             });

//         }

//     });

//     const lettersAndSymbols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '!', '@', '#', '$', '%', '^', '&', '*', '-', '_', '+', '=', ';', ':', '<', '>', ','];
//     fx8Titles.forEach(title => {

//         const chars = title.querySelectorAll('.char');

//         chars.forEach((char, position) => {
//             let initialHTML = char.innerHTML;

//             gsap.fromTo(char, {
//                 opacity: 0
//             },
//             {
//                 duration: 0.03,
//                 innerHTML: () => lettersAndSymbols[Math.floor(Math.random() * lettersAndSymbols.length)],
//                 repeat: 1,
//                 repeatRefresh: true,
//                 opacity: 1,
//                 repeatDelay: 0.03,
//                 delay: (position+1)*0.18,
//                 onComplete: () => gsap.set(char, {innerHTML: initialHTML, delay: 0.03}),
//                 scrollTrigger: {
//                     trigger: title,
//                     start: 'top bottom',
//                     end: 'bottom center',
//                     toggleActions: "play resume resume reset",
//                     onEnter: () => gsap.set(char, {opacity: 0})
//                 }
//             });

//         });

//     });

//     fx9Titles.forEach(title => {

//         const words = title.querySelectorAll('.word');

//         for (const word of words) {

//             const chars = word.querySelectorAll('.char');

//             gsap.fromTo(chars,  {
//                 'will-change': 'transform',
//                 scaleX: 0,
//                 x: (_, target) => window.innerWidth/2 - target.offsetLeft - target.offsetWidth/2
//             },
//             {
//                 ease: 'power1.inOut',
//                 scaleX: 1,
//                 x: 0,
//                 scrollTrigger: {
//                     trigger: word,
//                     start: 'top bottom',
//                     end: 'top top',
//                     scrub: true
//                 }
//             });

//         }

//     });

//     fx10Titles.forEach(title => {

//         const chars = title.querySelectorAll('.char');

//         gsap.fromTo(chars, {
//             'will-change': 'opacity',
//             opacity: 0,
//             filter: 'blur(20px)'
//         },
//         {
//             duration: 0.25,
//             ease: 'power1.inOut',
//             opacity: 1,
//             filter: 'blur(0px)',
//             stagger: { each: 0.05, from: 'random'},
//             scrollTrigger: {
//                 trigger: title,
//                 start: 'top bottom',
//                 end: 'center center',
//                 toggleActions: "play resume resume reset"
//             }
//         });

//     });

//     fx11Titles.forEach(title => {

//         const chars = title.querySelectorAll('.char');
//         wrapElements(chars, 'span', 'char-wrap');

//         gsap.fromTo(chars, {
//             'will-change': 'transform',
//             transformOrigin: '0% 50%',
//             xPercent: 105,
//         },
//         {
//             duration: 1,
//             ease: 'expo',
//             xPercent: 0,
//             stagger: 0.042,
//             scrollTrigger: {
//                 trigger: title,
//                 start: 'top bottom',
//                 end: 'top top+=10%',
//                 toggleActions: "play resume resume reset",
//             }
//         });

//     });

//     fx12Titles.forEach(title => {

//         const chars = title.querySelectorAll('.char');
//         wrapElements(chars, 'span', 'char-wrap');

//         gsap.fromTo(chars, {
//             'will-change': 'transform',
//             xPercent: -250,
//             rotationZ: 45,
//             scaleX: 6,
//             transformOrigin: '100% 50%'
//         },
//         {
//             duration: 1,
//             ease: 'power2',
//             xPercent: 0,
//             rotationZ: 0,
//             scaleX: 1,
//             stagger: -0.06,
//             scrollTrigger: {
//                 trigger: title,
//                 start: 'top bottom+=10%',
//                 end: 'bottom top+=10%',
//                 scrub: true
//             }
//         });

//     });

//     fx13Titles.forEach(title => {

//         const chars = title.querySelectorAll('.char');

//         chars.forEach(char => gsap.set(char.parentNode, { perspective: 2000 }));

//         gsap.fromTo(chars, {
//             'will-change': 'opacity, transform',
//             opacity: 0,
//             rotationY: 180,
//             xPercent: -40,
//             yPercent: 100
//         },
//         {
//             ease: 'power4.inOut()',
//             opacity: 1,
//             rotationY: 0,
//             xPercent: 0,
//             yPercent: 0,
//             stagger: {
//                 each: -0.03,
//                 from: 0
//             },
//             scrollTrigger: {
//                 trigger: title,
//                 start: 'center bottom',
//                 end: 'bottom center-=30%',
//                 scrub: 0.9
//             }
//         });

//     });

//     fx14Titles.forEach(title => {

//         const chars = title.querySelectorAll('.char');

//         gsap.timeline()
//         .fromTo(title, {
//             'will-change': 'transform',
//             xPercent: 100
//         }, {
//             ease: 'none',
//             xPercent: 0,
//             scrollTrigger: {
//                 trigger: title,
//                 scrub: true,
//                 start: 'center center',
//                 end: '+=100%',
//                 pin: title.parentNode,
//             }
//         })
//         .fromTo(chars, {
//             'will-change': 'transform',
//             scale: 3,
//             yPercent: -900
//         },
//         {
//             ease: 'back(2)',
//             scale: 1,
//             yPercent: 0,
//             stagger: 0.05,
//             scrollTrigger: {
//                 trigger: title,
//                 start: 'center center',
//                 end: '+=100%',
//                 scrub: 1.9,
//             }
//         }, 0);

//     });

//     fx15Titles.forEach(title => {

//         const chars = title.querySelectorAll('.char');

//         chars.forEach(char => gsap.set(char.parentNode, { perspective: 2000 }));

//         gsap.timeline()
//         .fromTo(title, {
//             'will-change': 'transform',
//             xPercent: -80
//         }, {
//             ease: 'none',
//             xPercent: 0,
//             scrollTrigger: {
//                 trigger: title,
//                 scrub: true,
//                 start: 'center center',
//                 end: '+=100%',
//                 pin: title.parentNode,
//             }
//         })
//         .fromTo(chars, {
//             'will-change': 'opacity, transform',
//             transformOrigin: '50% 50% -200px',
//             rotationX: 380,
//             opacity: 0,
//         },
//         {
//             ease: 'expo.inOut',
//             rotationX: 0,
//             z: 0,
//             opacity: 1,
//             stagger: -0.03,
//             scrollTrigger: {
//                 trigger: title,
//                 start: 'center center',
//                 end: '+=140%',
//                 scrub: 1.2,
//             }
//         }, 0);

//     });

//     fx16Titles.forEach(title => {

//         gsap.fromTo(title, {
//             transformOrigin: '0% 50%',
//             rotate: 0
//         }, {
//             ease: 'none',
//             rotate: 0,
//             scrollTrigger: {
//                 trigger: title,
//                 start: 'top bottom-=0',
//                 end: 'top top',
//                 scrub: true,
//             }
//         });

//         gsap.fromTo(title.querySelectorAll('.word'), {
//             'will-change': 'opacity',
//             opacity: 0.1
//         }, {
//             ease: 'none',
//             opacity: 1,
//             stagger: 0.05,
//             scrollTrigger: {
//                 trigger: title,
//                 start: 'top bottom-=0%',
//                 end: 'center top+=45%',
//                 scrub: true,
//             }
//         });

//     });

//     fx17Titles.forEach(title => {

//         const chars = title.querySelectorAll('.char');

//         chars.forEach(char => gsap.set(char.parentNode, {
//             perspective: 1000
//         }));

//         gsap.fromTo(chars, {
//             'will-change': 'opacity, transform',
//             opacity: 0,
//             rotateX: () => gsap.utils.random(-120, 120),
//             z: () => gsap.utils.random(-200, 200),
//         }, {
//             ease: 'none',
//             opacity: 1,
//             rotateX: 0,
//             z: 0,
//             stagger: 0.02,
//             scrollTrigger: {
//                 trigger: title,
//                 start: 'top bottom',
//                 end: 'bottom top',
//                 scrub: true,
//             }
//         });

//     });

//     fx18Titles.forEach(title => {

//         const chars = title.querySelectorAll('.char');

//         chars.forEach(char => gsap.set(char.parentNode, {
//             perspective: 1000
//         }));

//         gsap.fromTo(chars, {
//             'will-change': 'opacity, transform',
//             opacity: 0.2,
//             z: -800
//         }, {
//             ease: 'back.out(1.2)',
//             opacity: 1,
//             z: 0,
//             stagger: 0.04,
//             scrollTrigger: {
//                 trigger: title,
//                 start: 'top bottom',
//                 end: 'bottom top',
//                 scrub: true,
//             }
//         });

//     });

//     fx19Titles.forEach(title => {

//         const chars = title.querySelectorAll('.char');

//         chars.forEach(char => gsap.set(char.parentNode, {
//             perspective: 1000
//         }));

//         gsap.fromTo(chars, {
//             'will-change': 'opacity, transform',
//             transformOrigin: '50% 0%',
//             opacity: 0,
//             rotationX: -90,
//             z: -200
//         }, {
//             ease: 'power1',
//             opacity: 1,
//             stagger: 0.05,
//             rotationX: 0,
//             z: 0,
//             scrollTrigger: {
//                 trigger: title,
//                 start: 'center bottom',
//                 end: 'bottom top+=20%',
//                 scrub: true,
//             }
//         });

//     });

//     fx20Titles.forEach(title => {

//         const chars = title.querySelectorAll('.char');

//         chars.forEach(char => gsap.set(char.parentNode, {
//             perspective: 1000
//         }));

//         gsap.fromTo(chars, {
//             'will-change': 'opacity, transform',
//             transformOrigin: '50% 100%',
//             opacity: 0,
//             rotationX: 90
//         }, {
//             ease: 'power4',
//             opacity: 1,
//             stagger: {
//                 each: 0.03,
//                 from: 'random'
//             },
//             rotationX: 0,
//             scrollTrigger: {
//                 trigger: title,
//                 start: 'center bottom',
//                 end: 'bottom top+=20%',
//                 scrub: true,
//             }
//         });

//     });

//     fx21Titles.forEach(title => {

//         const words = [...title.querySelectorAll('.word')];

//         for (const word of words) {

//             const chars = word.querySelectorAll('.char');

//             chars.forEach(char => gsap.set(char.parentNode, {
//                 perspective: 2000
//             }));

//             gsap.fromTo(chars, {
//                 'will-change': 'opacity, transform',
//                 opacity: 0,
//                 y: (position, _, arr) => -40 * Math.abs(position - arr.length / 2),
//                 z: () => gsap.utils.random(-1500, -600),
//                 rotationX: () => gsap.utils.random(-500, -200)
//             }, {
//                 ease: 'power1.inOut',
//                 opacity: 1,
//                 y: 0,
//                 z: 0,
//                 rotationX: 0,
//                 stagger: {
//                     each: 0.06,
//                     from: 'center'
//                 },
//                 scrollTrigger: {
//                     trigger: word,
//                     start: 'top bottom',
//                     end: 'top top+=15%',
//                     scrub: true,
//                 }
//             });

//         }

//     });

//     fx22Titles.forEach(title => {

//         const words = [...title.querySelectorAll('.word')];

//         for (const word of words) {
//             const chars = word.querySelectorAll('.char');
//             const charsTotal = chars.length;

//             chars.forEach(char => gsap.set(char.parentNode, {
//                 perspective: 1000
//             }));

//             gsap.fromTo(chars, {
//                 'will-change': 'transform',
//                 x: position => {
//                     const factor = position < Math.ceil(charsTotal / 2) ? position : Math.ceil(charsTotal / 2) - Math.abs(Math.floor(charsTotal / 2) - position) - 1;
//                     return (charsTotal % 2 ? Math.abs(Math.ceil(charsTotal / 2) - 1 - factor) : Math.abs(Math.ceil(charsTotal / 2) - factor)) * 200 * (position < charsTotal / 2 ? -1 : 1);
//                 },
//                 y: position => {
//                     const factor = position < Math.ceil(charsTotal / 2) ? position : Math.ceil(charsTotal / 2) - Math.abs(Math.floor(charsTotal / 2) - position) - 1;
//                     return factor * 60;
//                 },
//                 rotationY: -270,
//                 rotationZ: position => {
//                     const factor = position < Math.ceil(charsTotal / 2) ? position : Math.ceil(charsTotal / 2) - Math.abs(Math.floor(charsTotal / 2) - position) - 1;
//                     return position < charsTotal / 2 ? Math.abs(factor - charsTotal / 2) * 8 : -1 * Math.abs(factor - charsTotal / 2) * 8;
//                 }
//             }, {
//                 ease: 'power2.inOut',
//                 x: 0,
//                 y: 0,
//                 rotationZ: 0,
//                 rotationY: 0,
//                 scale: 1,
//                 scrollTrigger: {
//                     trigger: word,
//                     start: 'top bottom+=40%',
//                     end: 'top top+=15%',
//                     scrub: true,
//                 }
//             });

//         }

//     });

//     fx23Titles.forEach(title => {

//         const words = [...title.querySelectorAll('.word')];

//         for (const [wordPosition, word] of words.entries()) {

//             gsap.fromTo(word.querySelectorAll('.char'), {
//                 'will-change': 'transform',
//                 scale: 0.01,
//                 x: (pos, _, arr) => {
//                     return wordPosition % 2 ? pos * 50 : (arr.length - pos - 1) * -50
//                 }
//             }, {
//                 ease: 'power4',
//                 scale: 1,
//                 x: 0,
//                 scrollTrigger: {
//                     trigger: word,
//                     start: 'center bottom',
//                     end: 'bottom top-=40%',
//                     scrub: true,
//                 }
//             });

//         }

//     });

//     fx24Titles.forEach(title => {

//         const chars = title.querySelectorAll('.char');
//         const charsTotal = chars.length;

//         gsap.fromTo(chars, {
//             'will-change': 'transform',
//             y: position => {
//                 const factor = position < Math.ceil(charsTotal / 2) ? position : Math.ceil(charsTotal / 2) - Math.abs(Math.floor(charsTotal / 2) - position) - 1;
//                 return (charsTotal / 2 - factor + 6) * 130;
//             }
//         }, {
//             ease: 'elastic.out(.4)',
//             y: 0,
//             stagger: {
//                 amount: 0.1,
//                 from: 'center'
//             },
//             scrollTrigger: {
//                 trigger: title,
//                 start: 'top bottom',
//                 end: 'bottom top-=50%',
//                 scrub: true,
//             }
//         });

//     });

//     fx25Titles.forEach(title => {

//         gsap.fromTo(title.querySelectorAll('.char'), {
//             'will-change': 'transform',
//             transformOrigin: '50% 100%',
//             scaleY: 0
//         }, {
//             ease: 'power3.in',
//             opacity: 1,
//             scaleY: 1,
//             stagger: 0.05,
//             scrollTrigger: {
//                 trigger: title,
//                 start: 'center center',
//                 end: '+=500%',
//                 scrub: true,
//                 pin: title.parentNode,
//             }
//         });

//     });

//     fx26Titles.forEach(title => {

//         const words = [...title.querySelectorAll('.word')];
//         const tl = gsap.timeline({
//             scrollTrigger: {
//                 trigger: title,
//                 start: 'center center',
//                 end: '+=100%',
//                 scrub: true,
//                 pin: title.parentNode,
//             }
//         });
//         for (const [wordPosition, word] of words.entries()) {
//             tl.fromTo(word.querySelectorAll('.char'), {
//                 'will-change': 'transform',
//                 transformOrigin: () => !wordPosition % 2 ? '50% 0%' : '50% 100%',
//                 scaleY: 0
//             }, {
//                 ease: 'power1.inOut',
//                 scaleY: 1,
//                 stagger: {
//                     amount: 0.3,
//                     from: 'center'
//                 }
//             }, 0);

//         }

//     });

//     fx27Titles.forEach(title => {

//         const words = [...title.querySelectorAll('.word')];

//         words.forEach(word => gsap.set(word.parentNode, {
//             perspective: 1000
//         }));

//         gsap.fromTo(words, {
//             'will-change': 'opacity, transform',
//             z: () => gsap.utils.random(500, 950),
//             opacity: 0,
//             xPercent: (pos) => gsap.utils.random(-100, 100),
//             yPercent: (pos) => gsap.utils.random(-10, 10),
//             rotationX: () => gsap.utils.random(-90, 90)
//         }, {
//             ease: 'expo',
//             opacity: 1,
//             rotationX: 0,
//             rotationY: 0,
//             xPercent: 0,
//             yPercent: 0,
//             z: 0,
//             scrollTrigger: {
//                 trigger: title,
//                 start: 'center center',
//                 end: '+=300%',
//                 scrub: true,
//                 pin: title.parentNode,
//             },
//             stagger: {
//                 each: 0.006,
//                 from: 'random'
//             }
//         });

//     });

//     fx28Titles.forEach(title => {

//         const words = [...title.querySelectorAll('.word')];

//         for (const word of words) {

//             const chars = word.querySelectorAll('.char');
//             const charsTotal = chars.length;

//             gsap.fromTo(chars, {
//                 'will-change': 'transform, filter',
//                 transformOrigin: '50% 100%',
//                 scale: position => {
//                     const factor = position < Math.ceil(charsTotal / 2) ? position : Math.ceil(charsTotal / 2) - Math.abs(Math.floor(charsTotal / 2) - position) - 1;
//                     return gsap.utils.mapRange(0, Math.ceil(charsTotal / 2), 0.5, 2.1, factor);
//                 },
//                 y: position => {
//                     const factor = position < Math.ceil(charsTotal / 2) ? position : Math.ceil(charsTotal / 2) - Math.abs(Math.floor(charsTotal / 2) - position) - 1;
//                     return gsap.utils.mapRange(0, Math.ceil(charsTotal / 2), 0, 60, factor);
//                 },
//                 rotation: position => {
//                     const factor = position < Math.ceil(charsTotal / 2) ? position : Math.ceil(charsTotal / 2) - Math.abs(Math.floor(charsTotal / 2) - position) - 1;
//                     return position < charsTotal / 2 ? gsap.utils.mapRange(0, Math.ceil(charsTotal / 2), -4, 0, factor) : gsap.utils.mapRange(0, Math.ceil(charsTotal / 2), 0, 4, factor);
//                 },
//                 filter: 'blur(12px) opacity(0)',
//             }, {
//                 ease: 'power2.inOut',
//                 y: 0,
//                 rotation: 0,
//                 scale: 1,
//                 filter: 'blur(0px) opacity(1)',
//                 scrollTrigger: {
//                     trigger: word,
//                     start: 'top bottom+=40%',
//                     end: 'top top+=15%',
//                     scrub: true,
//                 },
//                 stagger: {
//                     amount: 0.15,
//                     from: 'center'
//                 }
//             });

//         }

//     });

//     fx29Titles.forEach(title => {

//         const words = [...title.querySelectorAll('.word')];

//         for (const [pos, word] of words.entries()) {

//             const chars = word.querySelectorAll('.char');

//             gsap.fromTo(chars, {
//                 'will-change': 'transform',
//                 transformOrigin: `${pos%2 ? 0 : 100}% ${pos%2 ? 100 : 0}%`,
//                 scale: 0
//             }, {
//                 ease: 'power4',
//                 scale: 1,
//                 stagger: {
//                     each: 0.03,
//                     from: pos % 2 ? 'end' : 'start'
//                 },
//                 scrollTrigger: {
//                     trigger: word,
//                     start: 'top bottom-=10%',
//                     end: 'top top',
//                     scrub: true,
//                 }
//             });
//         }

//     });
// };

// locomotiveScroll.lenisInstance.options.content.addEventListener('wheel', (event) => {
//     const paths = event.composedPath();

//     // paths.find((el) => {
//     //     if(el instanceof HTMLElement && el?.getAttribute('id') == ('modalSelector')) {
//     //         event.stopPropagation();

//     //         return;
//     //     }
//     // })
//     ScrollTrigger.update()
//     console.log('a')
// });

// const locomotiveScroll = new LocomotiveScroll({
//     el: document.querySelector('#scrollable'),
//     smooth: true,
//     getSpeed: true,
//     getDirection: true,
//     direction: direction,
//     // smoothMobile: true,
//     lerp: 0.1,
//     scrollbarClass: scrollbarClass
// });
// // Lenis smooth scrolling
// let lenis;

// Initialize Lenis smooth scrolling
const initSmoothScrolling = () => {

    lenis = new Lenis({
		// lerp: 0.2,
		// smooth: true
	});

    lenis.on('scroll', () => ScrollTrigger.update());

	const scrollFn = (time) => {
		lenis.raf(time);
		requestAnimationFrame(scrollFn);
	};

    requestAnimationFrame(scrollFn);

};

// initSmoothScrolling();
// scroll();
const loadEl = [...document.querySelectorAll('.home-banner')];

$(window).on('load', function() {
    loadTitles.forEach(title => {
        const chars = title.querySelectorAll('.char');

        var timeline = new TimelineMax();
        timeline.fromTo(chars, {
            'will-change': 'opacity',
            opacity: 0,
            filter: 'blur(20px)'
        },
        {
            duration: 0.25,
            ease: 'power1.inOut',
            opacity: 1,
            filter: 'blur(0px)',
            stagger: { each: 0.05, from: 'random'},
            scrollTrigger: {
                trigger: title,
                start: 'top bottom',
                end: 'center center',
                toggleActions: "play resume resume reset"
            }
        });


    });
    loadEl.forEach(el => {
        const elb = el.querySelectorAll('.el-b');

        var timeline = new TimelineMax();
        timeline.fromTo(elb, {
            'will-change': 'opacity',
            opacity: 0,
            filter: 'blur(10px)'
        },
        {
            duration: 0.8,
            ease: 'power1.inOut',
            opacity: 1,
            filter: 'blur(0px)',
            stagger: { each: 0.4},
            scrollTrigger: {
                trigger: el,
                start: 'top bottom',
                end: 'center center',
                toggleActions: "play resume resume reset"
            }
        });


    });
})


var swiperIcon = new Swiper(".swiper-icon", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    speed: 2000,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-icon .swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints: {
        576: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 5,
            spaceBetween: 40,
        },
        1200: {
            slidesPerView: 6,
            spaceBetween: 50,
        },
        1400: {
            slidesPerView: 6,
            spaceBetween: 70,
        },
        
    }
});