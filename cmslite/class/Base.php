<?php
/**
 * Created by PhpStorm.
 * User: xkq72
 * Date: 2019/1/4
 * Time: 9:57
 */

namespace cms;

class Base
{
    public $config;
    public function __construct()
    {
        $this->config=include (__DIR__.'/../config.php');
    }

    public function start(){
        var_dump($this->config);
        var_dump($_GET['p']);
    }
    public function show(){

    }

}