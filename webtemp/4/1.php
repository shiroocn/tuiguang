<?php
/**
 * Created by PhpStorm.
 * User: xkq72
 * Date: 2018/12/21
 * Time: 16:50
 */
error_reporting(E_ERROR);
$url=$_SERVER['HTTP_REFERER'];
$result=strpos($url,'1.html');
if($result!=false){
    //跳转
    echo('通过跳转进来的。');
}else{
    //直接输入
    echo('直接输入地址进来的。');
}

