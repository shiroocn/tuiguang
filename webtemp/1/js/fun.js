/*var userName="林智宏";
var userWX="cici111888cici";
var userWXQR="./img/zjtx/lzh_qr.jpg";
var userPortrait="./img/zjtx/lzh.jpg";
var userPortraitBanner="./img/zjtx/lzh_banner_new.png";*/

/*var userName="卜明";
var userWX="dibgding3350";
var userWXQR="./img/zjtx/bm_qr.jpg";
var userPortrait="./img/zjtx/bm.jpg";
var userPortraitBanner="./img/zjtx/bm_banner_new.png";*/

/*var userName="刘少明";
var userWX="MB168166";
var userWXQR="./img/zjtx/lsm_qr.png";
var userPortrait="./img/zjtx/lsm.jpg";
var userPortraitBanner="./img/zjtx/lsm_banner_new.jpg";*/

/*var userName="陈鼎新";
var userWX="chendingxin68";
var userWXQR="./img/zjtx/cdx_qr.jpg";
var userPortrait="./img/zjtx/cdx.jpg";
var userPortraitBanner="./img/zjtx/cdx_banner.png";*/

/*var userName="刘国华";
var userWX="liuguohua28";
var userWXQR="./img/zjtx/lgh_qr.png";
var userPortrait="./img/zjtx/lgh.jpg";
var userPortraitBanner="./img/zjtx/lgh_banner_new.png";*/

/*var userName="叶昌华";
var userWX="yechanghua88";
var userWXQR="./img/zjtx/ych_qr.jpg";
var userPortrait="./img/zjtx/ych.jpg";
var userPortraitBanner="./img/zjtx/ych_banner_new.jpg";*/

/*var userName="陈鼎新";
var userWX="chendingxin90";
var userWXQR="./img/zjtx/cdx1_qr.png";
var userPortrait="./img/zjtx/cdx1.jpg";
var userPortraitBanner="./img/zjtx/cdx1_banner_new.png";*/

/*var userName="林智宏";
var userWX="cici111888cici";
var userWXQR="./img/zjtx/lzh_qr.jpg";
var userPortrait="./img/zjtx/lzh.jpg";
var userPortraitBanner="./img/zjtx/lzh_banner_new.png";*/

/*var userName="温祝";
var userWX="wenzhu076900";
var userWXQR="./img/zjtx/wz_qr.jpg";
var userPortrait="./img/zjtx/wz.jpg";
var userPortraitBanner="./img/zjtx/wz_banner_new.png";*/

/*var userName="边老师";
var userWX="bianji863";
var userWXQR="./img/zjtx/bls_qr.jpg";
var userPortrait="./img/zjtx/bls.jpg";
var userPortraitBanner="./img/zjtx/bls_banner_new.png";*/

/*var userName="陈鼎新";
var userWX="chendingxin88";
var userWXQR="./img/zjtx/cdx_qr_88.jpg";
var userPortrait="./img/zjtx/cdx.jpg";
var userPortraitBanner="./img/zjtx/cdx_banner.png";*/

/*var userName="陈德明";
var userWX="liuguohua28";
var userWXQR="./img/zjtx/cdm_qr.png";
var userPortrait="./img/zjtx/cdm.jpg";
var userPortraitBanner="./img/zjtx/cdm_banner_new.png";*/

/*var userName="杨子宏";
var userWX="yzh19780612";
var userWXQR="./img/zjtx/yzh_qr.png";
var userPortrait="./img/zjtx/yzh.jpg";
var userPortraitBanner="./img/zjtx/yzh_banner_new.png";*/

/*var userName="叶国财";
var userWX="ygc780312";
var userWXQR="./img/zjtx/ygc_qr.jpg";
var userPortrait="./img/zjtx/ygc.jpg";
var userPortraitBanner="./img/zjtx/ygc_banner_new.png";*/

var userName="陈德胜";
var userWX="chendesheng886";
var userWXQR="./img/zjtx/cds_qr.jpg";
var userPortrait="./img/zjtx/cds.jpg";
var userPortraitBanner="./img/zjtx/cds_banner_new.png";

//var userCopyright="版权所有:金创互动科技（深圳）有限公司";
//var userCopyright="版权所有:韩城集升商贸有限公司";
//var userCopyright="版权所有:厦门小小雨点金融信息服务有限公司";
//var userCopyright="版权所有:陕西卓创信息科技有限公司";
//var userCopyright="版权所有：深圳市美易互动科技有限公司";
//var userCopyright="版权所有：北京经纬诚信投资公司";
//var userCopyright="版权所有：金石期货有限公司上海营业部";
var userCopyright="深圳君银证券投资咨询顾问有限公司河北分公司";

function viewImg(obj) {
    console.log(obj.src);
    $('#viewImg').attr('src',obj.src);
    $('#exampleModalCenter').modal('toggle');
}
function IsPC(){
    var userAgentInfo = navigator.userAgent;
    var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }
    }
    return flag;
}
function click_copy_wx() {
    $(".copy_wx_btn").click();
}
function viewWXBOX() {
    layer.open({
        type: 1,
        shade: false,
        offset:'auto',
        title: false, //不显示标题
        content: "<div class='wx_box'><div class='a'>微信号："+userWX+"</div><div class='b'><img src='"+userWXQR+"' width='200' height='200' /> </div><div class='c'><img src='img/copy_wx_btn.png' width='120' height='40'  onclick='click_copy_wx()' /></div></div>"

    });
}
$(function () {
    $(".user-name").html(userName);
    $(".user-portrait").attr("src",userPortrait);
    $(".user-wx").html(userWX);
    $(".user-copyright").html(userCopyright);
    $(".user-portrait-banner").attr("src",userPortraitBanner);
    $(".user-wx-qr").attr("src",userWXQR);

    if(IsPC()){
        //给样式为.pc_font_b的元素，添加单独的样式
        $(".pc_font_b").css({"font-size":"20px","font-weight":"bold"});
        //class="pc_box"的设置显示，mobile的不可视
        $(".pc_box").css("display","");
        $(".mobile_box").css("display","none");
    }else{
        $(".pc_box").css("display","none");
        $(".mobile_box").css("display","");
    }

    var clipboard = new ClipboardJS('.copy_wx_btn');

    clipboard.on('success', function(e) {
        console.info('Action:', e.action);
        console.info('Text:', e.text);
        console.info('Trigger:', e.trigger);
        location.href="weixin://";
        alert("微信号复制成功，请添加朋友！");
        e.clearSelection();
    });

    clipboard.on('error', function(e) {
        console.error('Action:', e.action);
        console.error('Trigger:', e.trigger);
    });

});



