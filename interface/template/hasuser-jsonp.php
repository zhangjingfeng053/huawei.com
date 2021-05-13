<?php
    include('../library/conn.php');

    $username = $_GET['username'];
    $cb = $_GET['cb'];

    $sql = "select * from users where username='$username'";

    $result = $mysqli->query($sql);

    $mysqli->close();

    if($result->num_rows>0){
        // callback({"username":"zhangsan","has":true,"msg":"用户名已存在"})
        echo $cb.'({"username":"'.$username.'","has":true,"msg":"用户名已存在"})';
    }else{
        echo $cb.'({"username":"'.$username.'","has":false,"msg":"用户名可以使用"})';
    }
?>