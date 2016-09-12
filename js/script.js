//Check
var isSafari = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
    navigator.userAgent && !navigator.userAgent.match('CriOS');

window.onload = function() {
    $('body').addClass('firstSection');
}


$(function() {

    $(".tab-btn .item").click(function () {
        if (!$(this).hasClass("active")) {
            banner_index($(this))
        }
        _createTimer();
        timer_slide = window.setInterval(function () {
                banner_index()
            },
            5000)
    });
    window.setTimeout(function () {
            $(".tab-btn .item").eq(0).trigger("click")
        },
        500);
});

function banner_index(btn_item) {
    var i_now;
    var i_next;
    if (btn_item == null) {
        var btn = $(".tab-btn");
        var num = btn.find(".active").index();
        if (num + 1 == btn.find(".item").length) {
            i_now = num;
            i_next = 0
        } else {
            i_now = num;
            i_next = num + 1
        }
        btn_item = btn.find(".item").eq(i_next);
    } else {
        i_now = btn_item.siblings(".active").index();
        i_next = btn_item.index();
        if (i_now == i_next) {
            return false;
        }
    }
    btn_item.trigger("mouseover").addClass("active").siblings(".active").removeClass("active").trigger("mouseleave");
    var $tab_con = $(".index-banner .tab-con");
    $tab_con.find(".active").removeClass("active").animate({
            opacity: 0
        },
        400);
    $tab_con.find(".item").eq(i_next).addClass("active").animate({
            opacity: 1
        },
        500)
}

var timer_slide;

function _createTimer() {
    window.clearInterval(timer_slide)
}

jQuery(document).ready(function($) {
    $(window).load(function() {
        /* Act on the event */
        var h1 = $(window).outerHeight();
        var h4 = $(window).innerHeight();
        console.log(h1, h4);
        var w1 = $(window).width()
        var h2 =  $('.intro').height();
        console.log(w1);

        var h3 = $('.case-top').height();
        if(w1 > 768) {
            $('.tab-con .item').height(h1 - h2);
        } else {
            if(isSafari) {
                $('.tab-con .item').height(h1 - h2);

            }else {
                $('.tab-con .item').height(h1 - h2 + 60);
            }
        }
        if(h3 < 180) {
            $('.slogan').css({
                "font-size":"24px",
                "margin-top":"5px"
            });
        }
        if(h3 >= 180) {
            $('.slogan').css({
                "font-size":"36px",
                "margin-top":"20px"
            });
        }
    });
    $(window).resize(function(event) {
        /* Act on the event */
        var h1 = $(window).outerHeight();
        var w1 = $(window).width();
        var h2 =  $('.intro').height();
        var h3 = $('.case-top').height();
        if(w1 > 768) {
            $('.tab-con .item').height(h1 - h2);
        } else {
            if(isSafari) {

                $('.tab-con .item').height(h1 - h2);
            }else {
                $('.tab-con .item').height(h1 - h2 + 60);
            }
        }

        if(h3 < 180) {
            $('.slogan').css({
                "font-size":"24px",
                "margin-top":"5px"
            });
        }

        if(h3 >= 180) {
            $('.slogan').css({
                "font-size":"36px",
                "margin-top":"20px"
            });
        }

    });

});