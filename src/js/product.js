import { $ } from './library/jquery.js';
import { cookie } from './library/cookie.js';
import { querystring } from './library/qs.js';



$('.slider #top').on('click', function() {
    // let id = $(this).attr('data-title'); //点击哪个a标签就获取它的data-title属性的属性值
    // let elm = $('#' + id);
    let top = $('.slider #top').offset().top;
    $('html').animate({
        scrollTop: 0
    }, 1000);
});


$('.pro-detail>.left>.list>img').on('mouseover', function() {
    // let big = $('.pro-detail .big'), //放大镜显示区域
    //     bigImg = $('.pro-detail>.big>img'), //放大镜显示区域的图片
    //     smallImg = $('.pro-detail .list>img');

    let index = $('.pro-detail>.left>.list>img').index(this);


    bigImg.attr("src", $(this).attr("src")); //在.big上显示下方选中的图片

    $(this).addClass('actived').siblings().removeClass('actived'); //给选中图片加红边框
    $('.pro-detail>.left>.showImg>.tabs').addClass('tabs').addClass('display').eq(index).removeClass('display'); //显示区域，隐藏选中图片的兄弟图片

});

let showImg = $('.showImg'),
    movebox = $('.movebox'),
    big = $('.pro-detail .big'),
    bigImg = $('.pro-detail .big>img');

showImg.on('mouseenter', function() {
    movebox.removeClass('display');
    big.removeClass('display');

    movebox.css({
        width: showImg.width() * big.width() / bigImg.width() + 'px',
        height: showImg.height() * big.height() / bigImg.height() + 'px'
    });

    showImg.on('mousemove', function(ev) {
        let top = ev.pageY - movebox.height() / 0.8;
        let left = ev.pageX - movebox.width() / 0.5;

        let ratio = bigImg.width() / showImg.width();

        if (top <= 0) {
            top = 0;
        } else if (top >= showImg.height() - movebox.height()) {
            top = showImg.height() - movebox.height();
        }

        if (left <= 0) {
            left = 0;
        } else if (left >= showImg.width() - movebox.width()) {
            left = showImg.width() - movebox.width();
        }

        movebox.css({
            top: top + 'px',
            left: left + 'px'
        });

        bigImg.css({
            top: ratio * -top + 'px',
            left: ratio * -left + 'px'
        });
        showImg.on('mouseleave', function() {
            movebox.addClass('display');
            big.addClass('display');
        });


    });



});

$('.slider #top').on('click', function() {
    // let id = $(this).attr('data-title'); //点击哪个a标签就获取它的data-title属性的属性值
    // let elm = $('#' + id);
    let top = $('.slider #top').offset().top;
    $('html').animate({
        scrollTop: 0
    }, 1000);
});
$('.slider').on('scroll', function() {
    // let id = $(this).attr('data-title'); //点击哪个a标签就获取它的data-title属性的属性值
    // let elm = $('#' + id);
    let top = $('.slider').offset().top;
    if (top == '1000px') {
        $('.slider #top').removeClass('display');
    }

});