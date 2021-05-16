-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- 主机： localhost
-- 生成日期： 2021-05-16 16:23:56
-- 服务器版本： 5.7.26
-- PHP 版本： 7.3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `h5-2102`
--

-- --------------------------------------------------------

--
-- 表的结构 `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL COMMENT '商品id',
  `title` varchar(255) NOT NULL COMMENT '商品标题',
  `price` text NOT NULL COMMENT '商品价格',
  `number` int(11) NOT NULL COMMENT '商品数量',
  `picture` varchar(255) NOT NULL COMMENT '商品图片',
  `details` text NOT NULL COMMENT '商品详情',
  `bigTil` varchar(255) NOT NULL COMMENT '详情页标题'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `product`
--

INSERT INTO `product` (`id`, `title`, `price`, `number`, `picture`, `details`, `bigTil`) VALUES
(1, 'WATCH GT 2 Pro', '2688', 123, '[{ \"src\": \"images/pic1-1.png\" }, { \"src\": \"images/pic1-2.png\" }, { \"src\": \"images/pic1-3.png\" }, { \"src\": \"images/pic1-4.png\" }, { \"src\": \"images/pic1-5.png\" }, { \"src\": \"images/pic1-6.png\" }]', '<div class=\"del\">旗舰手表</div>', '【时尚款】HUAWEI WATCH GT 2 Pro 时尚款 星云灰（46mm）两周长续航 心率监测 蓝宝石镜面 钛合金表体 陶瓷后壳 蓝牙通话智能手表'),
(2, 'HUAWEI WATCH GT 2', '1488', 22, '[{ \"src\": \"images/pic2-1.png\" }, { \"src\": \"images/pic2-2.png\" }, { \"src\": \"images/pic2-3.png\" }, { \"src\": \"images/pic2-4.png\" }, { \"src\": \"images/pic2-5.png\" }, { \"src\": \"images/pic2-6.png\" }]', '<div class=\"del\">享3期免息</div>', 'HUAWEI WATCH GT 2 尊享款 钛银灰（46mm）麒麟A1芯片 2周续航 蓝牙通话 独立音乐播放 华为智能手表'),
(3, 'HUAWEI WATCH FIT', '799', 22, '[{ \"src\": \"images/pic3-1.png\" }, { \"src\": \"images/pic3-2.png\" }, { \"src\": \"images/pic3-3.png\" }, { \"src\": \"images/pic3-4.png\" }, { \"src\": \"images/pic3-5.png\" }, { \"src\": \"images/pic3-6.png\" }]', '<div class=\"del\">享3期免息</div>', 'HUAWEI WATCH FIT（曜石黑） 智能运动手表 心率睡眠血氧监测 10天续航+快充 50米防水 96种运动模式'),
(4, '华为手环 6', '349', 22, '[{ \"src\": \"images/pic4-1.png\" }, { \"src\": \"images/pic1-4.png\" }, { \"src\": \"images/pic4-3.png\" }, { \"src\": \"images/pic4-4.png\" }, { \"src\": \"images/pic4-5.png\" }, { \"src\": \"images/pic4-6.png\" }]', '<div class=\"del\">旗舰新品</div>', '【新品】华为手环 6 （曜石黑）炫彩全面屏 血氧心率睡眠监测 2周长续航 50米防水 96种运动模式 智能运动手环'),
(5, '华为手环 B6', '999', 22, '[{ \"src\": \"images/pic5-1.png\" }, { \"src\": \"images/pic5-2.png\" }, { \"src\": \"images/pic5-3.png\" }, { \"src\": \"images/pic5-4.png\" }, { \"src\": \"images/pic5-5.png\" }, { \"src\": \"images/pic5-6.png\" }]', '<div class=\"del\">享3期免息</div>', '华为手环 B6 运动版（曜石黑）智能通话手环 3D弧面触控彩屏 心率血氧监测睡眠分析'),
(6, '儿童手表 3 Pro', '798', 22, '[{ \"src\": \"images/pic6-1.png\" }, { \"src\": \"images/pic6-2.png\" }, { \"src\": \"images/pic6-3.png\" }, { \"src\": \"images/pic6-4.png\" }, { \"src\": \"images/pic6-5.png\" }, { \"src\": \"images/pic6-6.png\" }]', '<div class=\"del\">享3期免息</div>', '华为儿童手表 3 Pro（星云粉）视频通话 高清拍照 九重定位 4G全网通学生电话手表'),
(7, '华为智能体脂秤 3', '169', 22, '[{ \"src\": \"images/pic1.png\" }, { \"src\": \"images/pic2.png\" }, { \"src\": \"images/pic3.png\" }, { \"src\": \"images/pic4.png\" }, { \"src\": \"images/pic5.png\" }, { \"src\": \"images/pic6.png\" }]', '<div class=\"del\">运动健康 热销爆款</div>', '华为智能体脂秤 3 雅致白 14项身体数据 对标DEXA金标准 WiFi&蓝牙双连接'),
(8, '华为儿童手表 4X', '1398', 22, '[{ \"src\": \"images/pic7-1.png\" }, { \"src\": \"images/pic7-2.png\" }, { \"src\": \"images/pic7-3.png\" }, { \"src\": \"images/pic7-4.png\" }, { \"src\": \"images/pic7-5.png\" }, { \"src\": \"images/pic7-6.png\" }]', '<div class=\"del\">享3期免息</div>', '华为儿童手表4X 高清双摄 双频11重定位 50米防水16G大内存 微信交友4G全网通（映海蓝）');

-- --------------------------------------------------------

--
-- 表的结构 `reged`
--

CREATE TABLE `reged` (
  `id` int(11) NOT NULL COMMENT '用户id',
  `phone` varchar(255) NOT NULL COMMENT '电话',
  `password` varchar(255) NOT NULL COMMENT '密码',
  `email` varchar(255) NOT NULL COMMENT '邮箱',
  `birth` date NOT NULL COMMENT '出生日期'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `reged`
--

INSERT INTO `reged` (`id`, `phone`, `password`, `email`, `birth`) VALUES
(1, '15611111111', 'a123456', '15611111111@qq.com', '2021-05-01'),
(2, '15622222222', 'a11111111', '15622222222@qq.com', '2021-05-08'),
(3, '15633333333', 'a22222222', '15633333333@qq.com', '2021-05-05'),
(4, '15688886666', 'aaaa1111', '', '2000-11-28'),
(5, '15644444444', 'a44444444', '', '2000-11-28'),
(8, ' ', 'aaaa1111', 'admin@163.com', '2000-11-28'),
(10, ' ', '123456qq', '123546@qq.com', '2000-11-28');

-- --------------------------------------------------------

--
-- 表的结构 `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL COMMENT '用户id',
  `username` varchar(255) NOT NULL COMMENT '用户姓名',
  `password` varchar(255) NOT NULL COMMENT '密码',
  `email` varchar(255) NOT NULL COMMENT '邮箱',
  `phone` bigint(20) NOT NULL COMMENT '电话',
  `address` varchar(255) NOT NULL COMMENT '地址',
  `birth` varchar(11) NOT NULL COMMENT '出生日期'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `email`, `phone`, `address`, `birth`) VALUES
(1, 'root', 'a123456', 'zhangsan@163.com', 12300005555, '北京海淀', '2000.1.1'),
(2, 'lisi', 'b654321', 'lisi@163.com', 15688885555, '杭州江干', '2001.1.1'),
(3, 'wangwu', 'c789456', 'wangwu@163.com', 18022226666, '杭州西湖', '2001.1.1'),
(4, 'fengliu', 'd586947', 'fengliu@163.com', 15988882222, '杭州萧山', '2001.1.1'),
(5, 'zhouqi', 'f253614', 'zhouqi@163.com', 15422663355, '上海浦东', '2001.1.1'),
(6, 'admin', 'aaabbb', 'admin@163.com', 15622226666, '乌市铁西街', '2001.1.1');

--
-- 转储表的索引
--

--
-- 表的索引 `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `reged`
--
ALTER TABLE `reged`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '商品id', AUTO_INCREMENT=9;

--
-- 使用表AUTO_INCREMENT `reged`
--
ALTER TABLE `reged`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户id', AUTO_INCREMENT=11;

--
-- 使用表AUTO_INCREMENT `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户id', AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
