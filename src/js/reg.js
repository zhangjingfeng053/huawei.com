import { $ } from './library/jquery.js';
import { cookie } from './library/cookie.js';
import { querystring } from './library/qs.js';


$('.center .lis>.left>.shouji').on('click', function() {

    $('.shouji-li').removeClass('display');
    $('.youxiang-li').addClass('display');
    // console.log($('.shouji-li'));

});

$('.center .lis>.left>.youxiang').on('click', function() {

    $('.shouji-li').addClass('display');
    $('.youxiang-li').removeClass('display');

});

//手机号验证

$('#phone').on('blur', function() {
    let phone = $('#phone').val();
    let regPhone = /^1\d{10}$/;

    if (regPhone.test(phone) == false) {
        $('.warning-phone').removeClass('display');
        return false;
    } else {
        $('.warning-phone').addClass('display');
    }
    return true;
});

//密码验证

$('#password').on('input', function() {

    let password1 = /^.{8,}$/;
    let password2 = /(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]/;
    let regpwd1 = password1.test($('#password').val());
    let regpwd2 = password2.test($('#password').val());

    //输入密码，提示窗出现
    $('.waring-pwd').removeClass('display');

    if (regpwd1 && regpwd2) {
        $('.waring-pwd>:nth-child(2)').css('color', ' #41ce48');
        $('.waring-pwd>:nth-child(3)').css('color', ' #41ce48');
        $('.waring-pwd>:nth-child(5)').css('background', ' #41ce48');
    } else if (regpwd1) {
        $('.waring-pwd>:nth-child(2)').css('color', ' #41ce48');
        $('.waring-pwd>:nth-child(3)').css('color', ' #ddd');
        $('.waring-pwd>:nth-child(5)').css('background', ' red');

    }
});

$('#password').on('blur', function() {
    $('.waring-pwd').addClass('display');
});


//确认密码验证

$('.mima1>input').on('blur', function() {
    let pwd1 = $('#password').val();
    let pwd2 = $(this).val();
    if (pwd1 == pwd2) {
        $('.warning-cor').addClass('display');
    } else {
        $('.warning-cor').removeClass('display');
    }
});

//查看密码
let count = 1;
$('.mima0>.icon-yanjing-guan').on('click', function() {

    if (count % 2) {
        $('.mima0>input').attr('type', 'text');
    } else {
        $('.mima0>input').attr('type', 'password');
    }
    count++;
});

$('.mima1>.icon-yanjing-guan').on('click', function() {
    if (count % 2) {
        $('.mima1>input').attr('type', 'text');
    } else {
        $('.mima1>input').attr('type', 'password');
    }
    count++;
});

//邮箱验证



//新建邮箱

$('#email').on('blur', function() {
    let email = $('#email').val();
    let regEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;

    if (regEmail.test(email) == false) {
        $('.warning-email').removeClass('display');
        return false;
    } else {
        $('.warning-email').addClass('display');
    }
    return true;
});





//密码验证

$('.mima2>input').on('input', function() {
    let password1 = /^.{8,}$/;
    let password2 = /(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]/;
    let regpwd1 = password1.test($('.mima2>input').val());
    let regpwd2 = password2.test($('.mima2>input').val());

    //输入密码，提示窗出现
    $('.waring-pwd2').removeClass('display');

    if (regpwd1 && regpwd2) {
        $('.waring-pwd2>:nth-child(2)').css('color', ' #41ce48');
        $('.waring-pwd2>:nth-child(3)').css('color', ' #41ce48');
        $('.waring-pwd2>:nth-child(5)').css('background', ' #41ce48');
    } else if (regpwd1) {
        $('.waring-pwd2>:nth-child(2)').css('color', ' #41ce48');
        $('.waring-pwd2>:nth-child(3)').css('color', ' #ddd');
        $('.waring-pwd2>:nth-child(5)').css('background', ' red');

    }
});

$('#password3').on('blur', function() {
    $('.waring-pwd3').addClass('display');
});

//密码确认
$('.mima3>input').on('blur', function() {
    let pwd1 = $('#password3').val();
    let pwd2 = $(this).val();
    if (pwd1 == pwd2) {
        $('.warning-cor2').addClass('display');
    } else {
        $('.warning-cor2').removeClass('display');
    }
});

//查看密码
let count2 = 1;
$('.mima2>.icon-yanjing-guan').on('click', function() {

    if (count2 % 2) {
        $('.mima2>input').attr('type', 'text');
    } else {
        $('.mima2>input').attr('type', 'password');
    }
    count2++;
});

$('.mima3>.icon-yanjing-guan').on('click', function() {
    if (count2 % 2) {
        $('.mima3>input').attr('type', 'text');
    } else {
        $('.mima3>input').attr('type', 'password');
    }
    count2++;
});