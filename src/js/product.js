import { $ } from './library/jquery.js';
import { cookie } from './library/cookie.js';
import { querystring } from './library/qs.js';

let id = location.search.split('=')[1];
// console.log(id);
$.ajax({
    type: "get",
    url: "../../interface/template/getItem.php",
    data: {
        id: id
    },
    dataType: "json",
    success: function(res) {
        // console.log(res);
        let picture = JSON.parse(res.picture);
        // console.log(`../../src/${picture[0].src}`);

        $('.pro-detail>big.img').attr('src', `../../src/${picture[0].src}`);

        $('.showImg img:eq(0)').attr('src', `../../src/${picture[0].src}`);
        $('.showImg img:eq(1)').attr('src', `../../src/${picture[1].src}`);
        $('.showImg img:eq(2)').attr('src', `../../src/${picture[2].src}`);
        $('.showImg img:eq(3)').attr('src', `../../src/${picture[3].src}`);
        $('.showImg img:eq(4)').attr('src', `../../src/${picture[4].src}`);
        $('.showImg img:eq(5)').attr('src', `../../src/${picture[3].src}`);
        $('.showImg img:eq(6)').attr('src', `../../src/${picture[3].src}`);

        $('.list>img:eq(0)').attr('src', `../../src/${picture[0].src}`);
        $('.list>img:eq(1)').attr('src', `../../src/${picture[1].src}`);
        $('.list>img:eq(2)').attr('src', `../../src/${picture[2].src}`);
        $('.list>img:eq(3)').attr('src', `../../src/${picture[3].src}`);
        $('.list>img:eq(4)').attr('src', `../../src/${picture[4].src}`);
        $('.list>img:eq(5)').attr('src', `../../src/${picture[3].src}`);
        $('.list>img:eq(6)').attr('src', `../../src/${picture[3].src}`);


        $('h1').html(res.bigTil);

        $('.new-pri').html(res.price);

        $('.new-pic').attr('src', `../../src/${picture[0].src}`);

        //购物车数量样式
        let temp1 = `
        <input type="number" style="font-size: 18px;line-height: 40px;width: 63px;padding-left: 10px;" value="1" max="${res.number}  class="num"">
        `;

        $('.add').append(temp1);

        //加入购物车
        $('.right-bottom>div>#gouwuche').on('click', function() {
            addTtem(res.id, res.price, $('.add>input').val());
        });


    }

});

function addTtem(id, price, number) {
    let shop = cookie.get('shop');
    let product = {
            id,
            price,
            number
        }
        // console.log(product);

    //判断当前cookie中是否有购物数据

    if (shop) { //如果有数据，取出一个字符串
        shop = JSON.parse(shop);

        // 添加之前先要判断数据中有没有该商品
        if (shop.some(el => el.id === id)) {
            let _index = shop.findIndex(elm => elm.id == id);
            let count = parseInt(shop[_index].number);
            count += parseInt(number);
            shop[_index].number = count;
        } else {
            shop.push(product);
        }

    } else { // 第一次没有数据的情况 创建一个新数据
        shop = [];
        shop.push(product);
    }

    cookie.set('shop', JSON.stringify(shop), 1);

}

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