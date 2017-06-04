/*
Navicat MySQL Data Transfer

Source Server         : yh
Source Server Version : 50527
Source Host           : localhost:3306
Source Database       : ordermanager

Target Server Type    : MYSQL
Target Server Version : 50527
File Encoding         : 65001

Date: 2017-05-30 17:22:55
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for `itmes`
-- ----------------------------
DROP TABLE IF EXISTS `itmes`;
CREATE TABLE `itmes` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `itmes_no` varchar(50) DEFAULT NULL,
  `itmes_name` varchar(50) DEFAULT NULL,
  `itmes_spec` varchar(40) DEFAULT NULL,
  `price` float(30,2) DEFAULT NULL,
  `count` int(20) DEFAULT NULL,
  `discount_price` float(30,2) DEFAULT NULL,
  `discribe` varchar(120) DEFAULT NULL,
  `itmes_photo` varchar(100) DEFAULT NULL,
  `itmes_url` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of itmes
-- ----------------------------
INSERT INTO itmes VALUES ('1', 'SP00001', '洽洽瓜子', '1*180克/袋', '10.00', '7659', '9.88', '洽洽焦糖味瓜子', null, null);
INSERT INTO itmes VALUES ('2', 'SP00002', '有友泡椒凤爪', '1*223克/袋', '15.00', '4352', '13.99', '有友泡椒味凤爪，新品上市', null, null);
INSERT INTO itmes VALUES ('3', 'SM00001', '华硕笔记本', 'ASUS-SonicMaster', '2999.00', '231', '2899.00', '华硕笔记本电脑，13寸，2014年上市', null, null);
INSERT INTO itmes VALUES ('4', 'SM00002', '米3手机', 'MIC3', '1499.00', '234', '1499.00', '米3手机，黑色外壳', null, null);
INSERT INTO itmes VALUES ('5', 'SH00001', '心相印纸巾', '1*6*300抽(大袋装)', '22.40', '4365', '21.99', '心相印纸巾大袋装，每袋300抽纸巾，畅销品', null, null);
INSERT INTO itmes VALUES ('6', 'SH00002', '飘柔', '220ml', '22.30', '342', '21.90', '长效护发，经典款', null, null);
INSERT INTO itmes VALUES ('7', 'SP00003', 'V美(蓝莓味)', '1*450ml', '5.00', '4354', '4.88', '新希望乳业出品，最畅销的单品之一', null, null);
INSERT INTO itmes VALUES ('8', 'SP00004', 'V美(草莓味)', '1*450ml', '5.00', '2324', '4.88', '新希望乳业出品，最畅销的单品之一', null, null);
INSERT INTO itmes VALUES ('9', 'SP00005', 'V美(菠萝味)', '1*450ml', '5.00', '3434', '4.88', '新希望乳业出品，最畅销的单品之一', null, null);
INSERT INTO itmes VALUES ('10', 'SP00006', '草莓牛奶', '1*450ml', '7.00', '543', '6.88', '新希望乳业出品，最畅销的单品之一', null, null);
INSERT INTO itmes VALUES ('11', 'SP00007', '香蕉牛奶', '1*450ml', '7.00', '6546', '6.88', '新希望乳业出品，最畅销的单品之一', null, null);
INSERT INTO itmes VALUES ('12', 'SP00008', '椰汁牛奶', '1*450ml', '7.00', '343', '6.88', '新希望乳业出品，最畅销的单品之一', null, null);
INSERT INTO itmes VALUES ('13', 'SM00003', '苹果手机5', 'iphone5plus', '5566.00', '432', '5499.00', 'iphone系列经典款', null, null);

-- ----------------------------
-- Table structure for `userinfo`
-- ----------------------------
DROP TABLE IF EXISTS `userinfo`;
CREATE TABLE `userinfo` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `login_name` varchar(30) NOT NULL,
  `login_pwd` varchar(30) NOT NULL,
  `nickname` varchar(50) DEFAULT NULL,
  `role` tinyint(2) DEFAULT NULL,
  `regist_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of userinfo
-- ----------------------------
INSERT INTO userinfo VALUES ('1', '1', '1', '开发人员', '1', '2017-05-28 22:08:44');
INSERT INTO userinfo VALUES ('2', '2', '2', '管理员', '2', '2017-05-28 22:08:50');
