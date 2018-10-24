<!--右边悬浮显示-->
<div class="fu_box pc_box" style="display: none;">
    <p class="p1">微信扫一扫</p>
    <p class="p0">免费在线指导</p>
    <img class="fu_box_img user-wx-qr" src=""/>
    <p class="p2">手动添加微信号</p>
    <p class="p3 user-wx"></p>
</div>

<div class="touch_icon mobile_box" style="display: none;" onclick="viewWXBOX()">
    <img src="./img/wxa.gif" width="68" height="68">
</div>

<!--底部横幅显示-->
<div class="copy_wx_box_pc pc_box" style="display: none;">
    微信号：<span class="user-wx"></span>
    <img src="./img/copy_wx_btn.png" style="margin-left: 10px;" width="120" height="40"  onclick="click_copy_wx()" />
    <button type="button" class="copy_wx_btn" data-clipboard-action="copy" data-clipboard-target="#user-wx">点击复制加微信</button>
</div>
<div class="copy_wx_box mobile_box" style="display: none;">
    微信号：<span class="user-wx"></span>
    <img src="img/copy_wx_btn.png" style="margin-left: 10px;" width="120" height="40"  onclick="click_copy_wx()" />
    <button type="button" class="copy_wx_btn" data-clipboard-action="copy" data-clipboard-target="#user-wx">点击复制加微信</button>
</div>
<!--用于.copy_wx_btn按钮复制到剪贴板的内容-->
<div id="user-wx" class="user-wx" style="opacity:0;"></div>