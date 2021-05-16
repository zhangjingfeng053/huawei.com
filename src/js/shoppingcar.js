import { $ } from './library/jquery.js';
import { cookie } from './library/cookie.js';
import { querystring } from './library/qs.js';

let shop = cookie.get('shop');
if (shop) {
    shop = JSON.parse(shop);

    let idList = shop.map(el => el.id).join();

    $.ajax({
        type: "get",
        url: "../../interface/template/getItems.php",
        data: { idList: idList },
        dataType: "json",
        success: function(res) {
            console.log(res)
            let temp = '';
            let count = 0;
            let totPrice = 0;

            res.forEach(elm => {
                let picture = JSON.parse(elm.picture);

                //让ajax请求到的数据结果中遍历后的id与cookie中数据的id相同
                let current = shop.filter(val => val.id == elm.id);

                temp += `
                
                <div class="right">
                    <input type="checkbox" style="float: left;" class="checkbox">
                    <img src="../${picture[0].src}" alt="">
                    <div class="det">
                        <div class="title">
                            <div class="til">${elm.bigTil}</div>
                            <div class="col">雅致白</div>
                        </div>

                        <div class="price">
                            <div class="new">￥${parseFloat(elm.price).toFixed(2)}</div>
                            <div class="old">￥169.00</div>
                        </div>
                        <div class="num">
                            <span class="left">-</span>
                            <input class="mild" value="${current[0].number}" max="${elm.number}" min="1" style="width:20px;height:16px;outline:none;border:0;">
                            
                            <sapn class="right">+</sapn>
                        </div>
                        <div class="fin">
                            <div class="price">￥${(elm.price * current[0].number).toFixed(2)}</div>
                            
                        </div>
                        <a href="javascript:;" class="delete" data-id="${elm.id}">删除</a>
                    </div>


                </div>
                
                
                
                `;
                count += parseInt(current[0].number); // 总件数
                totPrice += elm.price * current[0].number; // 总价格


            });
            $('.center-c>.center').append(temp).find('.delete').on('click', function() {
                let res = shop.filter(elm => elm.id != $(this).attr('data-id'));
                cookie.set('shop', JSON.stringify(res), 1);
                location.reload();
            });

            // 取消勾选
            $('.checkbox').on('click', function() {
                $("input:checkbox:first").prop("checked", $(this).prop("checked"));
                $("input:checkbox:last").prop("checked", $(this).prop("checked"));
            })

            // 总价格
            $('.bot .top>.span2').html(totPrice.toFixed(2));

            // 总件数
            $('.bot .bottom>.span1').html(count);

        }
    });

    // 默认打开页面复选框就全选
    $("input:checkbox").attr("checked", "checked");
    // 第一个、最后一个复选框 点击全选和全不选
    $("input:checkbox:first").on("click", function() {
        $("input:checkbox:not(:first)").prop("checked", $(this).prop("checked"));
    });
    $("input:checkbox:last").on("click", function() {
        $("input:checkbox:not(:last)").prop("checked", $(this).prop("checked"));
    });

}