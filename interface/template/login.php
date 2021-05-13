<?php
    // 逻辑
    // 1. 连接数据库
    // 2. 接收数据
    // 3. 根据数据在数据中查找
    // 如果找到匹配的结果则为 登陆成功
    // 如果没有找到匹配的结构为 登陆失败 用户名或密码错误

    include('../library/conn.php');

    $phone = $_REQUEST['phone'];
    $password = $_REQUEST['password'];

    $select = "select * from reged where (phone='$phone' or email='$email') and password='$password'";

    $result = $mysqli->query($select);

    $mysqli->close();

    if($result->num_rows>0){
        // 设置  谁登陆了
        $row = $result->fetch_assoc(); // 从查询结果中获得数据

        // php 设置cookie信息
        // setcookie(name,value,expires,path)

        // 每次HTTP请求时都会自动携带cookie进行发送

        // php获得当前时间 time()
        
        setcookie('phone',$row['phone'],time()+3600*24,'/');
        setcookie('isLogined','true',time()+3600*24,'/');


        echo '<script>alert("登陆成功");</script>';
        echo '<script>location.href="../../src/html/index.html";</script>';
    }else{
        echo '<script>alert("用户名或密码错误");</script>';
        echo '<script>location.href="../../src/html/login.html";</script>';
    }
?>