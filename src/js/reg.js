import { $ } from './library/jquery.js';
import { cookie } from './library/cookie.js';
import { querystring } from './library/qs.js';


$('.center .lis>.left>.shouji').on('click', function() {

    $('.shouji-li').removeClass('display');
    $('.youxiang-li').addClass('display');
    console.log($('.shouji-li'));

});

$('.center .lis>.left>.youxiang').on('click', function() {

    $('.shouji-li').addClass('display');
    $('.youxiang-li').removeClass('display');

});