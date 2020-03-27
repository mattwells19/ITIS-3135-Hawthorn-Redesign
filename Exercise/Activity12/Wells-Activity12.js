$(document).ready(function () {
    $("#slider").bxSlider({
        auto: true,
        slideWidth: 250,
        slideMargin: 10,

        //added options
        randomStart: true,
        captions: true,
        pause: 2000,
        pager: true,
        pagerType: "short",
        pagerSelector: "#pager"
    });
});