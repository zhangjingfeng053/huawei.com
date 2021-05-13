import { $ } from './library/jquery.js';
import { cookie } from './library/cookie.js';
import { querystring } from './library/qs.js';


$('.swap').html($('.news_li').html());
var x = $('.news_li');
let y = $('.swap');
let h = $('.news_li li').length * 20; //20为每个li的高度
var hh = $('.news_li li').length;
if (hh > 1)
//setTimeout(b,3000);//滚动间隔时间 现在是3秒
    b();
b();

function b() {
    let t = parseInt(x.css('top'));
    //alert(t)
    y.css('top', '20px');
    x.animate({
        top: t - 20 + 'px'
    }, 'slow'); //20为每个li的高度
    if (Math.abs(t) == h - 20) { //20为每个li的高度
        y.animate({
            top: '0px'
        }, 'slow');
        let z = x;
        x = y;
        y = z;
    }
    setTimeout(b, 3000); //滚动间隔时间 现在是3秒
}

$('.header2>.right>.text').on('click', function() {
    $('.header2>.right>a').addClass('display');

});
$('.header2>.right>.text').on('blur', function() {
    $('.header2>.right>a').removeClass('display');

});
$('.container>.left .right').on('click', function() {
    $('.thelast').attr({

        'class': 'thelast',
        'style': function() {

            return 'right:34px';
        }


    });
    $('.container .laul').attr({

        'class': 'laul display',
        'style': function() {
            return 'right:81px';
        }

    });
});
$('.container>.left .left').on('click', function() {
    $('.thelast').attr({

        'class': 'thelast display',
        'style': function() {

            return 'right:-90px';
        }


    });
    $('.container .laul').attr({
        'class': 'laul',
        'style': function() {
            return 'right:32px';
        }
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