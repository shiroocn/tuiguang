var arr_wx = ['MB168166*./img/zjtx/lsm_qr.jpg*./img/zjtx/lsm_qr.jpg'];
//'golden0206*./img/ztp.jpg*./img/ztpe.jpg','sxh0887*./img/xl.jpg*./img/xle.jpg','jzqh668*./img/wjg.jpg*./img/wjge.jpg'
//'ygc780312*./img/ygc.jpg*./img/ygce.jpg','Lin8001010*./img/ly.jpg*./img/lye.jpg'
   // 'xmxmyy123456*./img/sjm.jpg*./img/sjme.jpg',  
   //'xuezhao11874*./img/xyt.jpg*./img/xyte.jpg','jingxing1976*./img/zjx.jpg*./img/zjxe.jpg'
   // //'lion25868*./img/yj.jpg*./img/yje.jpg','aaa36356*./img/stzx.jpg*./img/stzxe.jpg','lmj-16868*./img/lmj.jpg*./img/lmje.jpg' 
//'guosheng0130*./img/qgs.jpg*./img/qgse.jpg','chenghaikuan168*./img/chk.jpg*./img/chke.jpg','jingxing1976*./img/zjx.jpg*./img/zjxe.jpg'  
//'zy1978011*./img/zjj.jpg*./img/zjje.jpg','chenghaikuan168*./img/chk.jpg*./img/chke.jpg' ,'z1045704*./img/zch.jpg*./img/zche.jpg','zx04245412*./img/zh.jpg*./img/zhe.jpg','mingfan1023*./img/jlht.jpg*./img/jlhte.jpg','dusen788*./img/ds.jpg*./img/dse.jpg' ,'huangbing667788*./img/hb.jpg*./img/hbe.jpg' ,'jinfu8808*./img/xhy.jpg*./img/xhye.jpg','wally528*./img/yfl.jpg*./img/yfle.jpg','zzp654789*./img/wsj.jpg*./img/wsje.jpg','wangwei7536*./img/ww.jpg*./img/wwe.jpg'
var wx_index = Math.floor((Math.random()*arr_wx.length));
var tmp = arr_wx[wx_index];
var strs = tmp.split("*");
var wx = strs[0];
var img = strs[1];
var im = strs[2];
var stxlwx = "<span id='bd_click' class='wx_click'>"+wx+"</span>";
var mess1 = "<img src='"+img+"'>";;
var mess2 = "";
var mess3 = "<img src='"+im+"'>";
var mess4 = "";
$(document).ready(function(){
	$("#header").html(mess1);
	$("#ewm").html(mess3);
	$("#weixin1").html(stxlwx);
	$("#weixin2").html(stxlwx);
	$("#weixin3").html(stxlwx);
	$("#weixin4").html(stxlwx);
	$("#weixin5").html(stxlwx);
	$("#weixin6").html(stxlwx);
	$("#weixin7").html(stxlwx);
	$("#weixin8").html(stxlwx);
});