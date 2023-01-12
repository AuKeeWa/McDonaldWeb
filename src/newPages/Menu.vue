<template>
    <div class="Order">
        <div class="menu">
            <!-- 菜单侧边栏导航 -->
            <div class="MenuNav">
                <el-backtop class="backtop"></el-backtop>
                <div class="logo">
                    <img src="/images/logo-80 2.png" @click="goToIndex">
                </div>
                <ul class="NavUI">
                    <li id="tag00">
                        <div class="liInit">
                            <a data-cl-id="2022120700" @click="goToIndex">返回首页</a>
                        </div>
                    </li>
                    <li id="tag01">
                        <div class="liInit">
                            <a :class="{active: active===0}" @click="goToAnchor('#Category01');scrollTo(0)" data-cl-id="2022120701">鸡肉汉堡</a>
                        </div>
                    </li>
                    <li id="tag02">
                        <div class="liInit">
                            <a :class="{active: active===1}" @click="goToAnchor('#Category02');scrollTo(1)" data-cl-id="2022120702">巨无霸牛鱼肉堡</a>
                        </div>
                    </li>
                    <li id="tag03">
                        <div class="liInit">
                            <a :class="{active: active===2}" @click="goToAnchor('#Category03');scrollTo(2)" data-cl-id="2022120703">炸鸡</a>
                        </div>
                    </li>
                    <li id="tag04">
                        <div class="liInit">
                            <a :class="{active: active===3}" @click="goToAnchor('#Category04');scrollTo(3)" data-cl-id="2022120704">金拱门桶</a>
                        </div>
                    </li>
                    <li id="tag05">
                        <div class="liInit">
                            <a :class="{active: active===4}" @click="goToAnchor('#Category05');scrollTo(4)" data-cl-id="2022120705">开心乐园餐</a>
                        </div>
                    </li>
                    <li id="tag06">
                        <div class="liInit">
                            <a :class="{active: active===5}" @click="goToAnchor('#Category06');scrollTo(5)" data-cl-id="2022120706">500大卡套餐</a>
                        </div>
                    </li>
                    <li id="tag07">
                        <div class="liInit">
                            <a :class="{active: active===6}" @click="goToAnchor('#Category07');scrollTo(6)" data-cl-id="2022120707">小食甜品/其他</a>
                        </div>
                    </li>
                    <li id="tag08">
                        <div class="liInit">
                            <a :class="{active: active===7}" @click="goToAnchor('#Category08');scrollTo(7)" data-cl-id="2022120708">饮品</a>
                        </div>
                    </li>

                </ul>
            </div>
            <!-- 菜单详情 -->
            <div class="MenuMain">
                <div class="mheaderFixed">
                    <!--登录、购物车 todo-->
                    <div class="mheader">
                        <div class="mheader_swiper_container highLight">
                            <div class="el-carousel">
                                <div class="el-carousel_container"></div>
                            </div>
                            <ul class="el-carousel_indicators"></ul>
                        </div>
                        <!-- 右上角图标 -->
                        <div class="userInfo highLight">
                            <ul class="loginInfo">
                                <li>
                                    <span class="displayblock iconfont icon-yonghu fontsize30">
                                    </span>
                                    <!-- <span class="displayblock" href="javascript:;" v-if="username">
                                        {{username}}
                                    </span> -->
                                    <span class="displayblock" href="javascript:;" v-if="!username" @click="goLogin()">
                                        登录
                                    </span>
                                    <span class="displayblock" href="javascript:;" v-if="username" @click="goLogout()">
                                        退出
                                    </span>
                                </li>
                                <li>
                                    <span class="displayblock iconfont icon-gouwuche fontsize30" @click="goCart()">
                                    </span>
                                    <span class="displayblock" href="javascript:;" @click="goCart()">
                                        餐车
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="FoodContentBox">
                    <!-- 鸡肉汉堡 -->
                    <div id="Category01" class="FoodContent MainClassify">
                        <div class="spaceRound Subclassify">
                            <div id="tag">
                                <div class="PCategoryName">
                                    <span class="CaName">
                                        鸡肉汉堡
                                    </span>
                                    <span class="CaArrow"></span>
                                </div>
                                <div class="cateBox displayinlinebock">
                                    <!-- 麦辣鸡腿堡套餐 示例说明-->
                                    <div class="displayinlineblock FoodBox">
                                        <div class="FoodImgBox">
                                            <!-- 餐品图片地址 -->
                                            <img src="../../public/images/menu/鸡肉汉堡/麦辣鸡腿堡套餐.png">
                                            <div class="imgBoxMask">
                                                <span class="content">
                                                    <!-- 餐品描述 -->
                                                    1个麦辣鸡腿堡+1份小食+1杯饮料
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodDesc">
                                            <div class="name">
                                                <!-- 餐品名 -->
                                                麦辣鸡腿堡套餐
                                            </div>
                                            <div class="food-desc">
                                                <span class="promotion">
                                                    <!-- 餐品Tag -->
                                                    经典之选
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodOpeator">
                                            <div class="foodPrice">
                                                <div class="displayinlineblock">
                                                    <span class="pricebox">
                                                        <span class="big">
                                                            <!-- 价格 -->
                                                            ¥32
                                                        </span>
                                                    </span>
                                                </div>
                                                <div class="BtnPos">
                                                    <div>
                                                        <div class="add-check flexPos">
                                                            <!-- <div class="left">
                                                                <span class="dmicon iconfont icon-tubiaomianxing02-08">
                                                                    
                                                                </span>
                                                            </div>
                                                            <div class="number">
                                                                <span class="text"></span>
                                                            </div> -->
                                                            <div class="right">
                                                                <span class="dmicon iconfont icon-tubiaomianxing02-05" @click="addCart(3)">
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="displayinlineblock FoodBox">
                                        <div class="FoodImgBox">
                                            <img src="../../public/images/menu/鸡肉汉堡/板烧鸡腿堡套餐.png">
                                            <div class="imgBoxMask">
                                                <span class="content">
                                                    1个板烧鸡腿堡+1份小食+1杯饮料
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodDesc">
                                            <div class="name">
                                                板烧鸡腿堡套餐
                                            </div>
                                            <div class="food-desc">
                                                <span class="promotion">
                                                    经典之选
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodOpeator">
                                            <div class="foodPrice">
                                                <div class="displayinlineblock">
                                                    <span class="pricebox">
                                                        <span class="big">
                                                            ¥33
                                                        </span>
                                                    </span>
                                                </div>
                                                <div class="BtnPos">
                                                    <div>
                                                        <div class="add-check flexPos">
                                                            <div class="right">
                                                                <span class="dmicon iconfont icon-tubiaomianxing02-05" @click="addCart(2)">
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="displayinlineblock FoodBox">
                                        <div class="FoodImgBox">
                                            <img src="../../public/images/menu/鸡肉汉堡/麦麦咔滋脆鸡腿堡套餐.png">
                                            <div class="imgBoxMask">
                                                <span class="content">
                                                    1个麦麦咔滋脆鸡腿堡+1份小食+1杯饮料
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodDesc">
                                            <div class="name">
                                                麦麦咔滋脆鸡腿堡套餐
                                            </div>
                                            <div class="food-desc">
                                                <span class="promotion">
                                                    超值热门
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodOpeator">
                                            <div class="foodPrice">
                                                <div class="displayinlineblock">
                                                    <span class="pricebox">
                                                        <span class="big">
                                                            ¥36
                                                        </span>
                                                    </span>
                                                </div>
                                                <div class="BtnPos">
                                                    <div>
                                                        <div class="add-check flexPos">
                                                            <div class="right">
                                                                <span class="dmicon iconfont icon-tubiaomianxing02-05" @click="addCart(1)">
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="displayinlineblock FoodBox">
                                        <div class="FoodImgBox">
                                            <img src="../../public/images/menu/鸡肉汉堡/麦香鸡套餐.png">
                                            <div class="imgBoxMask">
                                                <span class="content">
                                                    1个麦香鸡+1份小食+1杯饮料
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodDesc">
                                            <div class="name">
                                                麦香鸡套餐
                                            </div>
                                            <div class="food-desc">
                                                <span class="promotion">
                                                    经典之选
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodOpeator">
                                            <div class="foodPrice">
                                                <div class="displayinlineblock">
                                                    <span class="pricebox">
                                                        <span class="big">
                                                            ¥24
                                                        </span>
                                                    </span>
                                                </div>
                                                <div class="BtnPos">
                                                    <div>
                                                        <div class="add-check flexPos">
                                                            <div class="right">
                                                                <span class="dmicon iconfont icon-tubiaomianxing02-05" @click="addCart(4)">
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="displayinlineblock FoodBox">
                                        <div class="FoodImgBox">
                                            <img src="../../public/images/menu/鸡肉汉堡/麦辣鸡腿汉堡.png">
                                            <div class="imgBoxMask">
                                                <span class="content">
                                                    金黄脆辣的外皮，里面是鲜嫩幼滑的鸡腿肉，搭配清爽生菜和美味沙拉酱，多重滋味，一次打动您挑剔的味蕾
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodDesc">
                                            <div class="name">
                                                麦辣鸡腿堡
                                            </div>
                                            <div class="food-desc">
                                                <span class="promotion">
                                                    经典之选
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodOpeator">
                                            <div class="foodPrice">
                                                <div class="displayinlineblock">
                                                    <span class="pricebox">
                                                        <span class="big">
                                                            ¥21
                                                        </span>
                                                    </span>
                                                </div>
                                                <div class="BtnPos">
                                                    <div>
                                                        <div class="add-check flexPos">
                                                            <div class="right">
                                                                <span class="dmicon iconfont icon-tubiaomianxing02-05" @click="addCart(5)">
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="displayinlineblock FoodBox">
                                        <div class="FoodImgBox">
                                            <img src="../../public/images/menu/鸡肉汉堡/板烧鸡腿堡.png">
                                            <div class="imgBoxMask">
                                                <span class="content">
                                                    原块去骨鸡排嫩滑多汁，加洋葱及胡椒调味，与翠绿新鲜的生菜和香浓烧鸡酱搭配，口感丰富。煎制过程0油添加，绝对让人食指大动！
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodDesc">
                                            <div class="name">
                                                板烧鸡腿堡
                                            </div>
                                            <div class="food-desc">
                                                <span class="promotion">
                                                    经典之选
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodOpeator">
                                            <div class="foodPrice">
                                                <div class="displayinlineblock">
                                                    <span class="pricebox">
                                                        <span class="big">
                                                            ¥22
                                                        </span>
                                                    </span>
                                                </div>
                                                <div class="BtnPos">
                                                    <div>
                                                        <div class="add-check flexPos">
                                                            <div class="right">
                                                                <span class="dmicon iconfont icon-tubiaomianxing02-05" @click="addCart(7)">
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="displayinlineblock FoodBox">
                                        <div class="FoodImgBox">
                                            <img src="../../public/images/menu/鸡肉汉堡/麦麦咔滋脆鸡腿堡.png">
                                            <div class="imgBoxMask">
                                                <span class="content">
                                                    甄选大块去骨鸡腿肉，中西复合秘制腌料入味，裹上麦当劳独家网状结构的酥脆裹粉，配合秘制麻担酱融合了坚果芝麻和淡淡椒麻等风味，与鲜嫩多汁的大脆鸡腿排相得益彰。
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodDesc">
                                            <div class="name">
                                                麦麦咔滋脆鸡腿堡
                                            </div>
                                            <div class="food-desc">
                                                <span class="promotion">
                                                    超值热门
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodOpeator">
                                            <div class="foodPrice">
                                                <div class="displayinlineblock">
                                                    <span class="pricebox">
                                                        <span class="big">
                                                            ¥25
                                                        </span>
                                                    </span>
                                                </div>
                                                <div class="BtnPos">
                                                    <div>
                                                        <div class="add-check flexPos">
                                                            <div class="right">
                                                                <span class="dmicon iconfont icon-tubiaomianxing02-05" @click="addCart(6)">
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="displayinlineblock FoodBox">
                                        <div class="FoodImgBox">
                                            <img src="../../public/images/menu/鸡肉汉堡/麦香鸡.png">
                                            <div class="imgBoxMask">
                                                <span class="content">
                                                    清脆爽口的生菜，给你植物纤维；金黄酥脆的鸡肉来自精心培育的优质嫩鸡。营养搭配，让你多一个好滋味的健康选择
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodDesc">
                                            <div class="name">
                                                麦香鸡
                                            </div>
                                            <div class="food-desc">
                                                <span class="promotion">
                                                    经典之选
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodOpeator">
                                            <div class="foodPrice">
                                                <div class="displayinlineblock">
                                                    <span class="pricebox">
                                                        <span class="big">
                                                            ¥15
                                                        </span>
                                                    </span>
                                                </div>
                                                <div class="BtnPos">
                                                    <div>
                                                        <div class="add-check flexPos">
                                                            <div class="right">
                                                                <span class="dmicon iconfont icon-tubiaomianxing02-05" @click="addCart(8)">
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 巨无霸牛鱼肉堡 -->
                    <div id="Category02" class="FoodContent MainClassify">
                        <div class="spaceRound Subclassify">
                            <div id="tag">
                                <div class="PCategoryName">
                                    <span class="CaName">
                                        巨无霸牛鱼肉堡
                                    </span>
                                    <span class="CaArrow"></span>
                                </div>
                                <div class="cateBox displayinlinebock">
                                    <div class="displayinlineblock FoodBox">
                                        <div class="FoodImgBox">
                                            <img src="../../public/images/menu/巨无霸牛鱼肉堡/巨无霸套餐.png">
                                            <div class="imgBoxMask">
                                                <span class="content">
                                                    1个巨无霸+1份小食+1杯饮料
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodDesc">
                                            <div class="name">
                                                巨无霸套餐
                                            </div>
                                            <div class="food-desc">
                                                <span class="promotion">
                                                    经典之选
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodOpeator">
                                            <div class="foodPrice">
                                                <div class="displayinlineblock">
                                                    <span class="pricebox">
                                                        <span class="big">
                                                            ¥35
                                                        </span>
                                                    </span>
                                                </div>
                                                <div class="BtnPos">
                                                    <div>
                                                        <div class="add-check flexPos">
                                                            <div class="right">
                                                                <span class="dmicon iconfont icon-tubiaomianxing02-05" @click="addCart(9)">
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="displayinlineblock FoodBox">
                                        <div class="FoodImgBox">
                                            <img src="../../public/images/menu/巨无霸牛鱼肉堡/培根蔬萃双层牛堡套餐.png">
                                            <div class="imgBoxMask">
                                                <span class="content">
                                                    1个培根蔬萃双层牛堡+1份小食+1杯饮料
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodDesc">
                                            <div class="name">
                                                培根蔬萃双层牛堡套餐
                                            </div>
                                            <div class="food-desc">
                                                <span class="promotion">
                                                    超值热门
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodOpeator">
                                            <div class="foodPrice">
                                                <div class="displayinlineblock">
                                                    <span class="pricebox">
                                                        <span class="big">
                                                            ¥33
                                                        </span>
                                                    </span>
                                                </div>
                                                <div class="BtnPos">
                                                    <div>
                                                        <div class="add-check flexPos">
                                                            <div class="right">
                                                                <span class="dmicon iconfont icon-tubiaomianxing02-05" @click="addCart(17)">
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="displayinlineblock FoodBox">
                                        <div class="FoodImgBox">
                                            <img src="../../public/images/menu/巨无霸牛鱼肉堡/吉士汉堡包套餐.png">
                                            <div class="imgBoxMask">
                                                <span class="content">
                                                    1个吉士汉堡包+1份小食+1杯饮料
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodDesc">
                                            <div class="name">
                                                吉士汉堡包套餐
                                            </div>
                                            <div class="food-desc">
                                                <span class="promotion">
                                                    超值热门
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodOpeator">
                                            <div class="foodPrice">
                                                <div class="displayinlineblock">
                                                    <span class="pricebox">
                                                        <span class="big">
                                                            ¥24
                                                        </span>
                                                    </span>
                                                </div>
                                                <div class="BtnPos">
                                                    <div>
                                                        <div class="add-check flexPos">
                                                            <div class="right">
                                                                <span class="dmicon iconfont icon-tubiaomianxing02-05" @click="addCart(11)">
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="displayinlineblock FoodBox">
                                        <div class="FoodImgBox">
                                            <img src="../../public/images/menu/巨无霸牛鱼肉堡/双层吉士汉堡套餐.png">
                                            <div class="imgBoxMask">
                                                <span class="content">
                                                    1个双层吉士汉堡+1份小食+1杯饮料
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodDesc">
                                            <div class="name">
                                                双层吉士汉堡套餐
                                            </div>
                                            <div class="food-desc">
                                                <span class="promotion">
                                                    超值热门
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodOpeator">
                                            <div class="foodPrice">
                                                <div class="displayinlineblock">
                                                    <span class="pricebox">
                                                        <span class="big">
                                                            ¥32
                                                        </span>
                                                    </span>
                                                </div>
                                                <div class="BtnPos">
                                                    <div>
                                                        <div class="add-check flexPos">
                                                            <div class="right">
                                                                <span class="dmicon iconfont icon-tubiaomianxing02-05" @click="addCart(19)">
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="displayinlineblock FoodBox">
                                        <div class="FoodImgBox">
                                            <img src="../../public/images/menu/巨无霸牛鱼肉堡/麦香鱼套餐.png">
                                            <div class="imgBoxMask">
                                                <span class="content">
                                                    1个麦香鱼+1份小食+1杯饮料
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodDesc">
                                            <div class="name">
                                                麦香鱼套餐
                                            </div>
                                            <div class="food-desc">
                                                <span class="promotion">
                                                    超值热门
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodOpeator">
                                            <div class="foodPrice">
                                                <div class="displayinlineblock">
                                                    <span class="pricebox">
                                                        <span class="big">
                                                            ¥27
                                                        </span>
                                                    </span>
                                                </div>
                                                <div class="BtnPos">
                                                    <div>
                                                        <div class="add-check flexPos">
                                                            <div class="right">
                                                                <span class="dmicon iconfont icon-tubiaomianxing02-05" @click="addCart(15)">
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="displayinlineblock FoodBox">
                                        <div class="FoodImgBox">
                                            <img src="../../public/images/menu/巨无霸牛鱼肉堡/双层深海鳕鱼堡套餐.png">
                                            <div class="imgBoxMask">
                                                <span class="content">
                                                    1个双层深海鳕鱼堡+1份小食+1杯饮料
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodDesc">
                                            <div class="name">
                                                双层深海鳕鱼堡套餐
                                            </div>
                                            <div class="food-desc">
                                                <span class="promotion">
                                                    超值热门
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodOpeator">
                                            <div class="foodPrice">
                                                <div class="displayinlineblock">
                                                    <span class="pricebox">
                                                        <span class="big">
                                                            ¥29
                                                        </span>
                                                    </span>
                                                </div>
                                                <div class="BtnPos">
                                                    <div>
                                                        <div class="add-check flexPos">
                                                            <div class="right">
                                                                <span class="dmicon iconfont icon-tubiaomianxing02-05" @click="addCart(21)">
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="displayinlineblock FoodBox">
                                        <div class="FoodImgBox">
                                            <img src="../../public/images/menu/巨无霸牛鱼肉堡/巨无霸.png">
                                            <div class="imgBoxMask">
                                                <span class="content">
                                                    全新升级巨无霸超霸登场！两块百分百纯牛肉搭配洋葱煎制，风味增强；增加50%美味酱料，浓郁拉满，搭配新升级满满嚼劲面包，芝士，生菜与腌黄瓜，味蕾层层爆炸
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodDesc">
                                            <div class="name">
                                                巨无霸
                                            </div>
                                            <div class="food-desc">
                                                <span class="promotion">
                                                    超值热门
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodOpeator">
                                            <div class="foodPrice">
                                                <div class="displayinlineblock">
                                                    <span class="pricebox">
                                                        <span class="big">
                                                            ¥24
                                                        </span>
                                                    </span>
                                                </div>
                                                <div class="BtnPos">
                                                    <div>
                                                        <div class="add-check flexPos">
                                                            <div class="right">
                                                                <span class="dmicon iconfont icon-tubiaomianxing02-05" @click="addCart(13)">
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="displayinlineblock FoodBox">
                                        <div class="FoodImgBox">
                                            <img src="../../public/images/menu/巨无霸牛鱼肉堡/培根蔬萃双层牛堡.png">
                                            <div class="imgBoxMask">
                                                <span class="content">
                                                    一层脆生菜，一片鲜番茄，两片培根，两片牛肉，一层特别酱料！
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodDesc">
                                            <div class="name">
                                                培根蔬萃双层牛堡
                                            </div>
                                            <div class="food-desc">
                                                <span class="promotion">
                                                    超值热门
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodOpeator">
                                            <div class="foodPrice">
                                                <div class="displayinlineblock">
                                                    <span class="pricebox">
                                                        <span class="big">
                                                            ¥22
                                                        </span>
                                                    </span>
                                                </div>
                                                <div class="BtnPos">
                                                    <div>
                                                        <div class="add-check flexPos">
                                                            <div class="right">
                                                                <span class="dmicon iconfont icon-tubiaomianxing02-05" @click="addCart(16)">
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="displayinlineblock FoodBox">
                                        <div class="FoodImgBox">
                                            <img src="../../public/images/menu/巨无霸牛鱼肉堡/吉士汉堡包.png">
                                            <div class="imgBoxMask">
                                                <span class="content">
                                                    百分百纯牛肉与香软芝士融为一体，配合美味番茄酱丰富口感一咬即爆发
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodDesc">
                                            <div class="name">
                                                吉士汉堡包
                                            </div>
                                            <div class="food-desc">
                                                <span class="promotion">
                                                    经典之选
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodOpeator">
                                            <div class="foodPrice">
                                                <div class="displayinlineblock">
                                                    <span class="pricebox">
                                                        <span class="big">
                                                            ¥13
                                                        </span>
                                                    </span>
                                                </div>
                                                <div class="BtnPos">
                                                    <div>
                                                        <div class="add-check flexPos">
                                                            <div class="right">
                                                                <span class="dmicon iconfont icon-tubiaomianxing02-05" @click="addCart(10)">
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="displayinlineblock FoodBox">
                                        <div class="FoodImgBox">
                                            <img src="../../public/images/menu/巨无霸牛鱼肉堡/双层吉士汉堡.png">
                                            <div class="imgBoxMask">
                                                <span class="content">
                                                    百分百纯牛肉与双层香软芝士融为一体，加上松软面包及美味酱料，双倍滋味诱惑，无人能挡
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodDesc">
                                            <div class="name">
                                                双层吉士汉堡
                                            </div>
                                            <div class="food-desc">
                                                <span class="promotion">
                                                    超值热门
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodOpeator">
                                            <div class="foodPrice">
                                                <div class="displayinlineblock">
                                                    <span class="pricebox">
                                                        <span class="big">
                                                            ¥20
                                                        </span>
                                                    </span>
                                                </div>
                                                <div class="BtnPos">
                                                    <div>
                                                        <div class="add-check flexPos">
                                                            <div class="right">
                                                                <span class="dmicon iconfont icon-tubiaomianxing02-05" @click="addCart(18)">
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="displayinlineblock FoodBox">
                                        <div class="FoodImgBox">
                                            <img src="../../public/images/menu/巨无霸牛鱼肉堡/麦香鱼.png">
                                            <div class="imgBoxMask">
                                                <span class="content">
                                                    由深海鳕鱼制成，外皮炸得金黄酥脆，内里又保留了鱼肉的鲜嫩多汁，是美味与营养并存的选择
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodDesc">
                                            <div class="name">
                                                麦香鱼
                                            </div>
                                            <div class="food-desc">
                                                <span class="promotion">
                                                    经典之选
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodOpeator">
                                            <div class="foodPrice">
                                                <div class="displayinlineblock">
                                                    <span class="pricebox">
                                                        <span class="big">
                                                            ¥20
                                                        </span>
                                                    </span>
                                                </div>
                                                <div class="BtnPos">
                                                    <div>
                                                        <div class="add-check flexPos">
                                                            <div class="right">
                                                                <span class="dmicon iconfont icon-tubiaomianxing02-05" @click="addCart(14)">
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="displayinlineblock FoodBox">
                                        <div class="FoodImgBox">
                                            <img src="../../public/images/menu/巨无霸牛鱼肉堡/双层深海鳕鱼堡.png">
                                            <div class="imgBoxMask">
                                                <span class="content">
                                                    双层深海鳕鱼堡，特选两整块深海鳕鱼，肉质洁白细腻，鱼肉清爽，富含丰富优质的蛋白质，搭配经典的车达芝士和浓郁风味酱，每一口都唇齿留香
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodDesc">
                                            <div class="name">
                                                双层深海鳕鱼堡
                                            </div>
                                            <div class="food-desc">
                                                <span class="promotion">
                                                    超值热门
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodOpeator">
                                            <div class="foodPrice">
                                                <div class="displayinlineblock">
                                                    <span class="pricebox">
                                                        <span class="big">
                                                            ¥22
                                                        </span>
                                                    </span>
                                                </div>
                                                <div class="BtnPos">
                                                    <div>
                                                        <div class="add-check flexPos">
                                                            <div class="right">
                                                                <span class="dmicon iconfont icon-tubiaomianxing02-05" @click="addCart(20)">
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="displayinlineblock FoodBox">
                                        <div class="FoodImgBox">
                                            <img src="../../public/images/menu/巨无霸牛鱼肉堡/汉堡包.png">
                                            <div class="imgBoxMask">
                                                <span class="content">
                                                    百分百纯牛肉配搭爽脆酸瓜洋葱粒与美味番茄酱，经典滋味让你无处遁逃
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodDesc">
                                            <div class="name">
                                                汉堡包
                                            </div>
                                            <div class="food-desc">
                                                <span class="promotion">
                                                    经典之选
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodOpeator">
                                            <div class="foodPrice">
                                                <div class="displayinlineblock">
                                                    <span class="pricebox">
                                                        <span class="big">
                                                            ¥12
                                                        </span>
                                                    </span>
                                                </div>
                                                <div class="BtnPos">
                                                    <div>
                                                        <div class="add-check flexPos">
                                                            <div class="right">
                                                                <span class="dmicon iconfont icon-tubiaomianxing02-05" @click="addCart(12)">
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 炸鸡 -->
                    <div id="Category03" class="FoodContent MainClassify">
                        <div class="spaceRound Subclassify">
                            <div id="tag">
                                <div class="PCategoryName">
                                    <span class="CaName">
                                        炸鸡

                                    </span>
                                    <span class="CaArrow"></span>
                                </div>
                                <div class="cateBox displayinlinebock">
                                    <div class="displayinlineblock FoodBox">
                                        <div class="FoodImgBox">
                                            <img src="../../public/images/menu/炸鸡/麦辣鸡翅4块套餐.png">
                                            <div class="imgBoxMask">
                                                <span class="content">
                                                    4块麦辣鸡翅+1份小食+1杯饮料
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodDesc">
                                            <div class="name">
                                                麦辣鸡翅4块套餐
                                            </div>
                                            <div class="food-desc">
                                                <span class="promotion">
                                                    经典之选
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodOpeator">
                                            <div class="foodPrice">
                                                <div class="displayinlineblock">
                                                    <span class="pricebox">
                                                        <span class="big">
                                                            ¥35
                                                        </span>
                                                    </span>
                                                </div>
                                                <div class="BtnPos">
                                                    <div>
                                                        <div class="add-check flexPos">
                                                            <div class="right">
                                                                <span class="dmicon iconfont icon-tubiaomianxing02-05" @click="addCart(23)">
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="displayinlineblock FoodBox">
                                        <div class="FoodImgBox">
                                            <img src="../../public/images/menu/炸鸡/麦麦脆汁鸡套餐.png">
                                            <div class="imgBoxMask">
                                                <span class="content">
                                                    1块鸡胸+1块琵琶腿+1份小食+1杯饮料
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodDesc">
                                            <div class="name">
                                                麦麦脆汁鸡套餐
                                            </div>
                                            <div class="food-desc">
                                                <span class="promotion">
                                                    脆汁精选
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodOpeator">
                                            <div class="foodPrice">
                                                <div class="displayinlineblock">
                                                    <span class="pricebox">
                                                        <span class="big">
                                                            ¥33.5
                                                        </span>
                                                    </span>
                                                </div>
                                                <div class="BtnPos">
                                                    <div>
                                                        <div class="add-check flexPos">
                                                            <div class="right">
                                                                <span class="dmicon iconfont icon-tubiaomianxing02-05" @click="addCart(28)">
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="displayinlineblock FoodBox">
                                        <div class="FoodImgBox">
                                            <img src="../../public/images/menu/炸鸡/麦麦脆汁鸡小食餐.png">
                                            <div class="imgBoxMask">
                                                <span class="content">
                                                    1块麦麦脆汁鸡-鸡腿+5块麦乐鸡+1份小食+1杯饮料
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodDesc">
                                            <div class="name">
                                                麦麦脆汁鸡小食餐
                                            </div>
                                            <div class="food-desc">
                                                <span class="promotion">
                                                    脆汁精选
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodOpeator">
                                            <div class="foodPrice">
                                                <div class="displayinlineblock">
                                                    <span class="pricebox">
                                                        <span class="big">
                                                            ¥33
                                                        </span>
                                                    </span>
                                                </div>
                                                <div class="BtnPos">
                                                    <div>
                                                        <div class="add-check flexPos">
                                                            <div class="right">
                                                                <span class="dmicon iconfont icon-tubiaomianxing02-05" @click="addCart(29)">
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="displayinlineblock FoodBox">
                                        <div class="FoodImgBox">
                                            <img src="../../public/images/menu/炸鸡/麦乐鸡套餐.png">
                                            <div class="imgBoxMask">
                                                <span class="content">
                                                    5块麦乐鸡+1份小食+1杯饮料
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodDesc">
                                            <div class="name">
                                                麦乐鸡套餐
                                            </div>
                                            <div class="food-desc">
                                                <span class="promotion">
                                                    经典之选
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodOpeator">
                                            <div class="foodPrice">
                                                <div class="displayinlineblock">
                                                    <span class="pricebox">
                                                        <span class="big">
                                                            ¥23.5
                                                        </span>
                                                    </span>
                                                </div>
                                                <div class="BtnPos">
                                                    <div>
                                                        <div class="add-check flexPos">
                                                            <div class="right">
                                                                <span class="dmicon iconfont icon-tubiaomianxing02-05" @click="addCart(25)">
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="displayinlineblock FoodBox">
                                        <div class="FoodImgBox">
                                            <img src="../../public/images/menu/炸鸡/麦麦脆汁鸡1块.png">
                                            <div class="imgBoxMask">
                                                <span class="content">
                                                    1块鸡胸或1块鸡腿
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodDesc">
                                            <div class="name">
                                                麦麦脆汁鸡1块
                                            </div>
                                            <div class="food-desc">
                                                <span class="promotion">
                                                    脆汁精选
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodOpeator">
                                            <div class="foodPrice">
                                                <div class="displayinlineblock">
                                                    <span class="pricebox">
                                                        <span class="big">
                                                            ¥13.5
                                                        </span>
                                                    </span>
                                                </div>
                                                <div class="BtnPos">
                                                    <div>
                                                        <div class="add-check flexPos">
                                                            <div class="right">
                                                                <span class="dmicon iconfont icon-tubiaomianxing02-05" @click="addCart(26)">
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="displayinlineblock FoodBox">
                                        <div class="FoodImgBox">
                                            <img src="../../public/images/menu/炸鸡/麦麦脆汁鸡2块.png">
                                            <div class="imgBoxMask">
                                                <span class="content">
                                                    1块鸡胸+1块琵琶腿（或1块上腿排）
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodDesc">
                                            <div class="name">
                                                麦麦脆汁鸡2块
                                            </div>
                                            <div class="food-desc">
                                                <span class="promotion">
                                                    脆汁精选
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodOpeator">
                                            <div class="foodPrice">
                                                <div class="displayinlineblock">
                                                    <span class="pricebox">
                                                        <span class="big">
                                                            ¥26
                                                        </span>
                                                    </span>
                                                </div>
                                                <div class="BtnPos">
                                                    <div>
                                                        <div class="add-check flexPos">
                                                            <div class="right">
                                                                <span class="dmicon iconfont icon-tubiaomianxing02-05" @click="addCart(27)">
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="displayinlineblock FoodBox">
                                        <div class="FoodImgBox">
                                            <img src="../../public/images/menu/炸鸡/麦辣鸡翅.png">
                                            <div class="imgBoxMask">
                                                <span class="content">
                                                    火辣惹味的鸡翅炸得金黄热辣，辣味瞬间爆棚！1对麦辣鸡翅
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodDesc">
                                            <div class="name">
                                                麦辣鸡翅
                                            </div>
                                            <div class="food-desc">
                                                <span class="promotion">
                                                    经典之选
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodOpeator">
                                            <div class="foodPrice">
                                                <div class="displayinlineblock">
                                                    <span class="pricebox">
                                                        <span class="big">
                                                            ¥13
                                                        </span>
                                                    </span>
                                                </div>
                                                <div class="BtnPos">
                                                    <div>
                                                        <div class="add-check flexPos">
                                                            <div class="right">
                                                                <span class="dmicon iconfont icon-tubiaomianxing02-05" @click="addCart(22)">
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="displayinlineblock FoodBox">
                                        <div class="FoodImgBox">
                                            <img src="../../public/images/menu/炸鸡/麦乐鸡.png">
                                            <div class="imgBoxMask">
                                                <span class="content">
                                                    严格挑选优质鸡肉，秘制蘸料，精密控制火候，锁住肉汁和相位，令外面金黄酥脆，内在鲜嫩多汁
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodDesc">
                                            <div class="name">
                                                麦乐鸡
                                            </div>
                                            <div class="food-desc">
                                                <span class="promotion">
                                                    经典之选
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodOpeator">
                                            <div class="foodPrice">
                                                <div class="displayinlineblock">
                                                    <span class="pricebox">
                                                        <span class="big">
                                                            ¥13
                                                        </span>
                                                    </span>
                                                </div>
                                                <div class="BtnPos">
                                                    <div>
                                                        <div class="add-check flexPos">
                                                            <div class="right">
                                                                <span class="dmicon iconfont icon-tubiaomianxing02-05" @click="addCart(24)">
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 金拱门桶 -->
                    <div id="Category04" class="FoodContent MainClassify">
                        <div class="spaceRound Subclassify">
                            <div id="tag">
                                <div class="PCategoryName">
                                    <span class="CaName">
                                        金拱门桶

                                    </span>
                                    <span class="CaArrow"></span>
                                </div>
                                <div class="cateBox displayinlinebock">
                                    <div class="displayinlineblock FoodBox">
                                        <div class="FoodImgBox">
                                            <img src="../../public/images/menu/金拱门桶/炸鸡天团桶.png">
                                            <div class="imgBoxMask">
                                                <span class="content">
                                                    1块麦麦脆汁鸡-鸡腿+1块麦麦脆汁鸡-鸡胸+4块麦辣鸡翅+5块麦乐鸡
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodDesc">
                                            <div class="name">
                                                炸鸡天团桶
                                            </div>
                                            <div class="food-desc">
                                                <span class="promotion">
                                                    桶桶开心
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodOpeator">
                                            <div class="foodPrice">
                                                <div class="displayinlineblock">
                                                    <span class="pricebox">
                                                        <span class="big">
                                                            ¥39.9
                                                        </span>
                                                    </span>
                                                </div>
                                                <div class="BtnPos">
                                                    <div>
                                                        <div class="add-check flexPos">
                                                            <div class="right">
                                                                <span class="dmicon iconfont icon-tubiaomianxing02-05" @click="addCart(33)">
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="displayinlineblock FoodBox">
                                        <div class="FoodImgBox">
                                            <img src="../../public/images/menu/金拱门桶/人气堡堡桶.png">
                                            <div class="imgBoxMask">
                                                <span class="content">
                                                    1个麦辣鸡腿汉堡+1个板烧鸡腿堡+1块麦麦脆汁鸡-鸡腿+2块麦辣鸡翅+5块麦乐鸡+1份中薯条+3杯饮料
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodDesc">
                                            <div class="name">
                                                人气堡堡桶
                                            </div>
                                            <div class="food-desc">
                                                <span class="promotion">
                                                    桶桶开心
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodOpeator">
                                            <div class="foodPrice">
                                                <div class="displayinlineblock">
                                                    <span class="pricebox">
                                                        <span class="big">
                                                            ¥69
                                                        </span>
                                                    </span>
                                                </div>
                                                <div class="BtnPos">
                                                    <div>
                                                        <div class="add-check flexPos">
                                                            <div class="right">
                                                                <span class="dmicon iconfont icon-tubiaomianxing02-05" @click="addCart(31)">
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="displayinlineblock FoodBox">
                                        <div class="FoodImgBox">
                                            <img src="../../public/images/menu/金拱门桶/55金拱门桶.png">
                                            <div class="imgBoxMask">
                                                <span class="content">
                                                    6块麦辣鸡翅+5块麦乐鸡+V-cut薯角+2杯饮料
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodDesc">
                                            <div class="name">
                                                55金拱门桶
                                            </div>
                                            <div class="food-desc">
                                                <span class="promotion">
                                                    桶桶开心
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodOpeator">
                                            <div class="foodPrice">
                                                <div class="displayinlineblock">
                                                    <span class="pricebox">
                                                        <span class="big">
                                                            ¥55
                                                        </span>
                                                    </span>
                                                </div>
                                                <div class="BtnPos">
                                                    <div>
                                                        <div class="add-check flexPos">
                                                            <div class="right">
                                                                <span class="dmicon iconfont icon-tubiaomianxing02-05" @click="addCart(30)">
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="displayinlineblock FoodBox">
                                        <div class="FoodImgBox">
                                            <img src="../../public/images/menu/金拱门桶/四拼小食桶.png">
                                            <div class="imgBoxMask">
                                                <span class="content">
                                                    1块麦麦脆汁鸡-鸡腿+2块麦辣鸡翅+1份中薯条+5块麦乐鸡
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodDesc">
                                            <div class="name">
                                                四拼小食桶
                                            </div>
                                            <div class="food-desc">
                                                <span class="promotion">
                                                    桶桶开心
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodOpeator">
                                            <div class="foodPrice">
                                                <div class="displayinlineblock">
                                                    <span class="pricebox">
                                                        <span class="big">
                                                            ¥39.9
                                                        </span>
                                                    </span>
                                                </div>
                                                <div class="BtnPos">
                                                    <div>
                                                        <div class="add-check flexPos">
                                                            <div class="right">
                                                                <span class="dmicon iconfont icon-tubiaomianxing02-05" @click="addCart(32)">
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 开心乐园餐 -->
                    <div id="Category05" class="FoodContent MainClassify">
                        <div class="spaceRound Subclassify">
                            <div id="tag">
                                <div class="PCategoryName">
                                    <span class="CaName">
                                        开心乐园餐

                                    </span>
                                    <span class="CaArrow"></span>
                                </div>
                                <div class="cateBox displayinlinebock">
                                    <div class="displayinlineblock FoodBox">
                                        <div class="FoodImgBox">
                                            <img src="../../public/images/menu/开心乐园餐/鱼排堡开心乐园餐.png">
                                            <div class="imgBoxMask">
                                                <span class="content">
                                                    1个鱼排堡+1份迷你薯条+1份小食+1杯饮料+1个免费玩具
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodDesc">
                                            <div class="name">
                                                鱼排堡开心乐园餐
                                            </div>
                                            <div class="food-desc">
                                                <span class="promotion">
                                                    儿童最爱
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodOpeator">
                                            <div class="foodPrice">
                                                <div class="displayinlineblock">
                                                    <span class="pricebox">
                                                        <span class="big">
                                                            ¥22.5
                                                        </span>
                                                    </span>
                                                </div>
                                                <div class="BtnPos">
                                                    <div>
                                                        <div class="add-check flexPos">
                                                            <div class="right">
                                                                <span class="dmicon iconfont icon-tubiaomianxing02-05" @click="addCart(37)">
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="displayinlineblock FoodBox">
                                        <div class="FoodImgBox">
                                            <img src="../../public/images/menu/开心乐园餐/汉堡开心乐园餐.png">
                                            <div class="imgBoxMask">
                                                <span class="content">
                                                    1个汉堡包+1份迷你薯条+1份小食+1杯饮料+1个免费玩具
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodDesc">
                                            <div class="name">
                                                汉堡开心乐园餐
                                            </div>
                                            <div class="food-desc">
                                                <span class="promotion">
                                                    儿童最爱
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodOpeator">
                                            <div class="foodPrice">
                                                <div class="displayinlineblock">
                                                    <span class="pricebox">
                                                        <span class="big">
                                                            ¥22
                                                        </span>
                                                    </span>
                                                </div>
                                                <div class="BtnPos">
                                                    <div>
                                                        <div class="add-check flexPos">
                                                            <div class="right">
                                                                <span class="dmicon iconfont icon-tubiaomianxing02-05" @click="addCart(34)">
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="displayinlineblock FoodBox">
                                        <div class="FoodImgBox">
                                            <img src="../../public/images/menu/开心乐园餐/开心亲子双人餐.png">
                                            <div class="imgBoxMask">
                                                <span class="content">
                                                    麦乐鸡开心乐园餐，搭配培根安格斯厚牛堡套餐，一起牛气冲天
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodDesc">
                                            <div class="name">
                                                开心亲子双人餐
                                            </div>
                                            <div class="food-desc">
                                                <span class="promotion">
                                                    亲子最爱
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodOpeator">
                                            <div class="foodPrice">
                                                <div class="displayinlineblock">
                                                    <span class="pricebox">
                                                        <span class="big">
                                                            ¥70
                                                        </span>
                                                    </span>
                                                </div>
                                                <div class="BtnPos">
                                                    <div>
                                                        <div class="add-check flexPos">
                                                            <div class="right">
                                                                <span class="dmicon iconfont icon-tubiaomianxing02-05" @click="addCart(35)">
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="displayinlineblock FoodBox">
                                        <div class="FoodImgBox">
                                            <img src="../../public/images/menu/开心乐园餐/麦乐鸡开心乐园餐.png">
                                            <div class="imgBoxMask">
                                                <span class="content">
                                                    4块麦乐鸡+1份玉米杯+1份苹果片+1杯饮料+1个免费玩具
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodDesc">
                                            <div class="name">
                                                麦乐鸡开心乐园餐
                                            </div>
                                            <div class="food-desc">
                                                <span class="promotion">
                                                    儿童最爱
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodOpeator">
                                            <div class="foodPrice">
                                                <div class="displayinlineblock">
                                                    <span class="pricebox">
                                                        <span class="big">
                                                            ¥23.5
                                                        </span>
                                                    </span>
                                                </div>
                                                <div class="BtnPos">
                                                    <div>
                                                        <div class="add-check flexPos">
                                                            <div class="right">
                                                                <span class="dmicon iconfont icon-tubiaomianxing02-05" @click="addCart(36)">
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 500大卡套餐 -->
                    <div id="Category06" class="FoodContent MainClassify">
                        <div class="spaceRound Subclassify">
                            <div id="tag">
                                <div class="PCategoryName">
                                    <span class="CaName">
                                        500大卡套餐

                                    </span>
                                    <span class="CaArrow"></span>
                                </div>
                                <div class="cateBox displayinlinebock">
                                    <div class="displayinlineblock FoodBox">
                                        <div class="FoodImgBox">
                                            <img src="../../public/images/menu/500大卡套餐/霸气五色套餐.png">
                                            <div class="imgBoxMask">
                                                <span class="content">
                                                    1个培根蔬萃双层牛堡+1份苹果片+1杯饮料(低卡)
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodDesc">
                                            <div class="name">
                                                霸气五色套餐
                                            </div>
                                            <div class="food-desc">
                                                <span class="promotion">
                                                    控卡之选
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodOpeator">
                                            <div class="foodPrice">
                                                <div class="displayinlineblock">
                                                    <span class="pricebox">
                                                        <span class="big">
                                                            ¥27.5
                                                        </span>
                                                    </span>
                                                </div>
                                                <div class="BtnPos">
                                                    <div>
                                                        <div class="add-check flexPos">
                                                            <div class="right">
                                                                <span class="dmicon iconfont icon-tubiaomianxing02-05" @click="addCart(38)">
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="displayinlineblock FoodBox">
                                        <div class="FoodImgBox">
                                            <img src="../../public/images/menu/500大卡套餐/鸡不可失套餐.png">
                                            <div class="imgBoxMask">
                                                <span class="content">
                                                    2块麦辣鸡翅+5块麦乐鸡+1杯饮料（低卡）
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodDesc">
                                            <div class="name">
                                                鸡不可失套餐
                                            </div>
                                            <div class="food-desc">
                                                <span class="promotion">
                                                    控卡之选
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodOpeator">
                                            <div class="foodPrice">
                                                <div class="displayinlineblock">
                                                    <span class="pricebox">
                                                        <span class="big">
                                                            ¥24.5
                                                        </span>
                                                    </span>
                                                </div>
                                                <div class="BtnPos">
                                                    <div>
                                                        <div class="add-check flexPos">
                                                            <div class="right">
                                                                <span class="dmicon iconfont icon-tubiaomianxing02-05" @click="addCart(39)">
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="displayinlineblock FoodBox">
                                        <div class="FoodImgBox">
                                            <img src="../../public/images/menu/500大卡套餐/苹板支撑套餐.png">
                                            <div class="imgBoxMask">
                                                <span class="content">
                                                    1个原味板烧鸡腿堡+1份苹果片+1杯饮料（低卡）
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodDesc">
                                            <div class="name">
                                                苹板支撑套餐
                                            </div>
                                            <div class="food-desc">
                                                <span class="promotion">
                                                    控卡之选
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodOpeator">
                                            <div class="foodPrice">
                                                <div class="displayinlineblock">
                                                    <span class="pricebox">
                                                        <span class="big">
                                                            ¥37.5
                                                        </span>
                                                    </span>
                                                </div>
                                                <div class="BtnPos">
                                                    <div>
                                                        <div class="add-check flexPos">
                                                            <div class="right">
                                                                <span class="dmicon iconfont icon-tubiaomianxing02-05" @click="addCart(40)">
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="displayinlineblock FoodBox">
                                        <div class="FoodImgBox">
                                            <img src="../../public/images/menu/500大卡套餐/无肉不欢套餐.png">
                                            <div class="imgBoxMask">
                                                <span class="content">
                                                    1个吉士汉堡+2块麦辣鸡翅+1杯饮料（低卡）
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodDesc">
                                            <div class="name">
                                                无肉不欢套餐
                                            </div>
                                            <div class="food-desc">
                                                <span class="promotion">
                                                    控卡之选
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodOpeator">
                                            <div class="foodPrice">
                                                <div class="displayinlineblock">
                                                    <span class="pricebox">
                                                        <span class="big">
                                                            ¥24
                                                        </span>
                                                    </span>
                                                </div>
                                                <div class="BtnPos">
                                                    <div>
                                                        <div class="add-check flexPos">
                                                            <div class="right">
                                                                <span class="dmicon iconfont icon-tubiaomianxing02-05" @click="addCart(41)">
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="displayinlineblock FoodBox">
                                        <div class="FoodImgBox">
                                            <img src="../../public/images/menu/500大卡套餐/只爱甜的套餐.png">
                                            <div class="imgBoxMask">
                                                <span class="content">
                                                    1份香芋派+1份苹果片+1杯美汁源阳光橙❥(^_-)
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodDesc">
                                            <div class="name">
                                                只爱甜的套餐
                                            </div>
                                            <div class="food-desc">
                                                <span class="promotion">
                                                    控卡之选
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodOpeator">
                                            <div class="foodPrice">
                                                <div class="displayinlineblock">
                                                    <span class="pricebox">
                                                        <span class="big">
                                                            ¥24.5
                                                        </span>
                                                    </span>
                                                </div>
                                                <div class="BtnPos">
                                                    <div>
                                                        <div class="add-check flexPos">
                                                            <div class="right">
                                                                <span class="dmicon iconfont icon-tubiaomianxing02-05" @click="addCart(42)">
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 小食甜品/其他 -->
                    <div id="Category07" class="FoodContent MainClassify">
                        <div class="spaceRound Subclassify">
                            <div id="tag">
                                <div class="PCategoryName">
                                    <span class="CaName">
                                        小食甜品/其他

                                    </span>
                                    <span class="CaArrow"></span>
                                </div>
                                <div class="cateBox displayinlinebock">
                                    <div class="displayinlineblock FoodBox">
                                        <div class="FoodImgBox">
                                            <img src="../../public/images/menu/小食甜品/薯条.png">
                                            <div class="imgBoxMask">
                                                <span class="content">
                                                    是超好吃的薯条！
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodDesc">
                                            <div class="name">
                                                薯条
                                            </div>
                                            <div class="food-desc">
                                                <span class="promotion">
                                                    人人都爱
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodOpeator">
                                            <div class="foodPrice">
                                                <div class="displayinlineblock">
                                                    <span class="pricebox">
                                                        <span class="big">
                                                            ¥9.5
                                                        </span>
                                                    </span>
                                                </div>
                                                <div class="BtnPos">
                                                    <div>
                                                        <div class="add-check flexPos">
                                                            <div class="right">
                                                                <span class="dmicon iconfont icon-tubiaomianxing02-05" @click="addCart(47)">
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="displayinlineblock FoodBox">
                                        <div class="FoodImgBox">
                                            <img src="../../public/images/menu/小食甜品/玉米杯.png">
                                            <div class="imgBoxMask">
                                                <span class="content">
                                                    是超好吃的玉米杯！
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodDesc">
                                            <div class="name">
                                                玉米杯
                                            </div>
                                            <div class="food-desc">
                                                <span class="promotion">
                                                    人人都爱
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodOpeator">
                                            <div class="foodPrice">
                                                <div class="displayinlineblock">
                                                    <span class="pricebox">
                                                        <span class="big">
                                                            ¥12
                                                        </span>
                                                    </span>
                                                </div>
                                                <div class="BtnPos">
                                                    <div>
                                                        <div class="add-check flexPos">
                                                            <div class="right">
                                                                <span class="dmicon iconfont icon-tubiaomianxing02-05" @click="addCart(49)">
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="displayinlineblock FoodBox">
                                        <div class="FoodImgBox">
                                            <img src="../../public/images/menu/小食甜品/香芋派.png">
                                            <div class="imgBoxMask">
                                                <span class="content">
                                                    是超好吃的香芋派！
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodDesc">
                                            <div class="name">
                                                香芋派
                                            </div>
                                            <div class="food-desc">
                                                <span class="promotion">
                                                    人人都爱
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodOpeator">
                                            <div class="foodPrice">
                                                <div class="displayinlineblock">
                                                    <span class="pricebox">
                                                        <span class="big">
                                                            ¥8
                                                        </span>
                                                    </span>
                                                </div>
                                                <div class="BtnPos">
                                                    <div>
                                                        <div class="add-check flexPos">
                                                            <div class="right">
                                                                <span class="dmicon iconfont icon-tubiaomianxing02-05" @click="addCart(48)">
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="displayinlineblock FoodBox">
                                        <div class="FoodImgBox">
                                            <img src="../../public/images/menu/小食甜品/菠萝派.png">
                                            <div class="imgBoxMask">
                                                <span class="content">
                                                    是超好吃的菠萝派！
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodDesc">
                                            <div class="name">
                                                菠萝派
                                            </div>
                                            <div class="food-desc">
                                                <span class="promotion">
                                                    人人都爱
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodOpeator">
                                            <div class="foodPrice">
                                                <div class="displayinlineblock">
                                                    <span class="pricebox">
                                                        <span class="big">
                                                            ¥8
                                                        </span>
                                                    </span>
                                                </div>
                                                <div class="BtnPos">
                                                    <div>
                                                        <div class="add-check flexPos">
                                                            <div class="right">
                                                                <span class="dmicon iconfont icon-tubiaomianxing02-05" @click="addCart(44)">
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="displayinlineblock FoodBox">
                                        <div class="FoodImgBox">
                                            <img src="../../public/images/menu/小食甜品/奥利奥麦旋风.png">
                                            <div class="imgBoxMask">
                                                <span class="content">
                                                    是超好吃的奥利奥麦旋风！
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodDesc">
                                            <div class="name">
                                                奥利奥麦旋风
                                            </div>
                                            <div class="food-desc">
                                                <span class="promotion">
                                                    人人都爱
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodOpeator">
                                            <div class="foodPrice">
                                                <div class="displayinlineblock">
                                                    <span class="pricebox">
                                                        <span class="big">
                                                            ¥13
                                                        </span>
                                                    </span>
                                                </div>
                                                <div class="BtnPos">
                                                    <div>
                                                        <div class="add-check flexPos">
                                                            <div class="right">
                                                                <span class="dmicon iconfont icon-tubiaomianxing02-05" @click="addCart(43)">
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="displayinlineblock FoodBox">
                                        <div class="FoodImgBox">
                                            <img src="../../public/images/menu/小食甜品/草莓麦旋风.png">
                                            <div class="imgBoxMask">
                                                <span class="content">
                                                    是超好吃的草莓麦旋风！
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodDesc">
                                            <div class="name">
                                                草莓麦旋风
                                            </div>
                                            <div class="food-desc">
                                                <span class="promotion">
                                                    人人都爱
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodOpeator">
                                            <div class="foodPrice">
                                                <div class="displayinlineblock">
                                                    <span class="pricebox">
                                                        <span class="big">
                                                            ¥13
                                                        </span>
                                                    </span>
                                                </div>
                                                <div class="BtnPos">
                                                    <div>
                                                        <div class="add-check flexPos">
                                                            <div class="right">
                                                                <span class="dmicon iconfont icon-tubiaomianxing02-05" @click="addCart(45)">
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="displayinlineblock FoodBox">
                                        <div class="FoodImgBox">
                                            <img src="../../public/images/menu/小食甜品/朱古力新地.png">
                                            <div class="imgBoxMask">
                                                <span class="content">
                                                    是超好吃的朱古力新地！
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodDesc">
                                            <div class="name">
                                                朱古力新地
                                            </div>
                                            <div class="food-desc">
                                                <span class="promotion">
                                                    人人都爱
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodOpeator">
                                            <div class="foodPrice">
                                                <div class="displayinlineblock">
                                                    <span class="pricebox">
                                                        <span class="big">
                                                            ¥11
                                                        </span>
                                                    </span>
                                                </div>
                                                <div class="BtnPos">
                                                    <div>
                                                        <div class="add-check flexPos">
                                                            <div class="right">
                                                                <span class="dmicon iconfont icon-tubiaomianxing02-05" @click="addCart(51)">
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="displayinlineblock FoodBox">
                                        <div class="FoodImgBox">
                                            <img src="../../public/images/menu/小食甜品/草莓新地.png">
                                            <div class="imgBoxMask">
                                                <span class="content">
                                                    是超好吃的草莓新地！
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodDesc">
                                            <div class="name">
                                                草莓新地
                                            </div>
                                            <div class="food-desc">
                                                <span class="promotion">
                                                    人人都爱
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodOpeator">
                                            <div class="foodPrice">
                                                <div class="displayinlineblock">
                                                    <span class="pricebox">
                                                        <span class="big">
                                                            ¥11
                                                        </span>
                                                    </span>
                                                </div>
                                                <div class="BtnPos">
                                                    <div>
                                                        <div class="add-check flexPos">
                                                            <div class="right">
                                                                <span class="dmicon iconfont icon-tubiaomianxing02-05" @click="addCart(46)">
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="displayinlineblock FoodBox">
                                        <div class="FoodImgBox">
                                            <img src="../../public/images/menu/小食甜品/圆筒冰淇淋.png">
                                            <div class="imgBoxMask">
                                                <span class="content">
                                                    是超好吃的圆筒冰淇淋！
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodDesc">
                                            <div class="name">
                                                圆筒冰淇淋
                                            </div>
                                            <div class="food-desc">
                                                <span class="promotion">
                                                    人人都爱
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodOpeator">
                                            <div class="foodPrice">
                                                <div class="displayinlineblock">
                                                    <span class="pricebox">
                                                        <span class="big">
                                                            ¥5
                                                        </span>
                                                    </span>
                                                </div>
                                                <div class="BtnPos">
                                                    <div>
                                                        <div class="add-check flexPos">
                                                            <div class="right">
                                                                <span class="dmicon iconfont icon-tubiaomianxing02-05" @click="addCart(50)">
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 饮品 -->
                    <div id="Category08" class="FoodContent MainClassify">
                        <div class="spaceRound Subclassify">
                            <div id="tag">
                                <div class="PCategoryName">
                                    <span class="CaName">
                                        饮品

                                    </span>
                                    <span class="CaArrow"></span>
                                </div>
                                <div class="cateBox displayinlinebock">
                                    <div class="displayinlineblock FoodBox">
                                        <div class="FoodImgBox">
                                            <img src="../../public/images/menu/饮品/鲜煮咖啡.png">
                                            <div class="imgBoxMask">
                                                <span class="content">
                                                    商务人士的最爱！
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodDesc">
                                            <div class="name">
                                                鲜煮咖啡
                                            </div>
                                            <div class="food-desc">
                                                <span class="promotion">
                                                    商务之选
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodOpeator">
                                            <div class="foodPrice">
                                                <div class="displayinlineblock">
                                                    <span class="pricebox">
                                                        <span class="big">
                                                            ¥9
                                                        </span>
                                                    </span>
                                                </div>
                                                <div class="BtnPos">
                                                    <div>
                                                        <div class="add-check flexPos">
                                                            <div class="right">
                                                                <span class="dmicon iconfont icon-tubiaomianxing02-05" @click="addCart(52)">
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="displayinlineblock FoodBox">
                                        <div class="FoodImgBox">
                                            <img src="../../public/images/menu/饮品/锡兰红茶.png">
                                            <div class="imgBoxMask">
                                                <span class="content">
                                                    商务人士的最爱！
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodDesc">
                                            <div class="name">
                                                锡兰红茶
                                            </div>
                                            <div class="food-desc">
                                                <span class="promotion">
                                                    商务之选
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodOpeator">
                                            <div class="foodPrice">
                                                <div class="displayinlineblock">
                                                    <span class="pricebox">
                                                        <span class="big">
                                                            ¥10.5
                                                        </span>
                                                    </span>
                                                </div>
                                                <div class="BtnPos">
                                                    <div>
                                                        <div class="add-check flexPos">
                                                            <div class="right">
                                                                <span class="dmicon iconfont icon-tubiaomianxing02-05" @click="addCart(53)">
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="displayinlineblock FoodBox">
                                        <div class="FoodImgBox">
                                            <img src="../../public/images/menu/饮品/可口可乐.png">
                                            <div class="imgBoxMask">
                                                <span class="content">
                                                    是每个人都爱喝的可口可乐！
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodDesc">
                                            <div class="name">
                                                可口可乐
                                            </div>
                                            <div class="food-desc">
                                                <span class="promotion">
                                                    人人都爱
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodOpeator">
                                            <div class="foodPrice">
                                                <div class="displayinlineblock">
                                                    <span class="pricebox">
                                                        <span class="big">
                                                            ¥9
                                                        </span>
                                                    </span>
                                                </div>
                                                <div class="BtnPos">
                                                    <div>
                                                        <div class="add-check flexPos">
                                                            <div class="right">
                                                                <span class="dmicon iconfont icon-tubiaomianxing02-05" @click="addCart(54)">
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="displayinlineblock FoodBox">
                                        <div class="FoodImgBox">
                                            <img src="../../public/images/menu/饮品/无糖可口可乐.png">
                                            <div class="imgBoxMask">
                                                <span class="content">
                                                    是控糖人士爱喝的可口可乐！
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodDesc">
                                            <div class="name">
                                                无糖可口可乐
                                            </div>
                                            <div class="food-desc">
                                                <span class="promotion">
                                                    人人都爱
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodOpeator">
                                            <div class="foodPrice">
                                                <div class="displayinlineblock">
                                                    <span class="pricebox">
                                                        <span class="big">
                                                            ¥9.5
                                                        </span>
                                                    </span>
                                                </div>
                                                <div class="BtnPos">
                                                    <div>
                                                        <div class="add-check flexPos">
                                                            <div class="right">
                                                                <span class="dmicon iconfont icon-tubiaomianxing02-05" @click="addCart(55)">
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="displayinlineblock FoodBox">
                                        <div class="FoodImgBox">
                                            <img src="../../public/images/menu/饮品/雪碧.png">
                                            <div class="imgBoxMask">
                                                <span class="content">
                                                    什么，想尝尝不一样的口味？喝杯雪碧，透心凉心飞扬！
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodDesc">
                                            <div class="name">
                                                雪碧
                                            </div>
                                            <div class="food-desc">
                                                <span class="promotion">
                                                    透心之选
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodOpeator">
                                            <div class="foodPrice">
                                                <div class="displayinlineblock">
                                                    <span class="pricebox">
                                                        <span class="big">
                                                            ¥9
                                                        </span>
                                                    </span>
                                                </div>
                                                <div class="BtnPos">
                                                    <div>
                                                        <div class="add-check flexPos">
                                                            <div class="right">
                                                                <span class="dmicon iconfont icon-tubiaomianxing02-05" @click="addCart(56)">
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="displayinlineblock FoodBox">
                                        <div class="FoodImgBox">
                                            <img src="../../public/images/menu/饮品/美汁源阳光橙.png">
                                            <div class="imgBoxMask">
                                                <span class="content">
                                                    人人爱，摇起来，开心就会活力澎湃，活得精彩
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodDesc">
                                            <div class="name">
                                                美汁源阳光橙
                                            </div>
                                            <div class="food-desc">
                                                <span class="promotion">
                                                    人人都爱
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodOpeator">
                                            <div class="foodPrice">
                                                <div class="displayinlineblock">
                                                    <span class="pricebox">
                                                        <span class="big">
                                                            ¥12.5
                                                        </span>
                                                    </span>
                                                </div>
                                                <div class="BtnPos">
                                                    <div>
                                                        <div class="add-check flexPos">
                                                            <div class="right">
                                                                <span class="dmicon iconfont icon-tubiaomianxing02-05" @click="addCart(57)">
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="displayinlineblock FoodBox">
                                        <div class="FoodImgBox">
                                            <img src="../../public/images/menu/饮品/Fuze Tea柠檬红茶味饮料.png">
                                            <div class="imgBoxMask">
                                                <span class="content">
                                                    来杯Lemon Tea~ 提神醒脑
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodDesc">
                                            <div class="name">
                                                Fuze Tea柠檬红茶味饮料
                                            </div>
                                            <div class="food-desc">
                                                <span class="promotion">
                                                    下午茶歇
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodOpeator">
                                            <div class="foodPrice">
                                                <div class="displayinlineblock">
                                                    <span class="pricebox">
                                                        <span class="big">
                                                            ¥9.5
                                                        </span>
                                                    </span>
                                                </div>
                                                <div class="BtnPos">
                                                    <div>
                                                        <div class="add-check flexPos">
                                                            <div class="right">
                                                                <span class="dmicon iconfont icon-tubiaomianxing02-05" @click="addCart(58)">
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="displayinlineblock FoodBox">
                                        <div class="FoodImgBox">
                                            <img src="../../public/images/menu/饮品/纯牛奶.png">
                                            <div class="imgBoxMask">
                                                <span class="content">
                                                    小朋友喝牛奶才会长高高
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodDesc">
                                            <div class="name">
                                                纯牛奶
                                            </div>
                                            <div class="food-desc">
                                                <span class="promotion">
                                                    营养之选
                                                </span>
                                            </div>
                                        </div>
                                        <div class="FoodOpeator">
                                            <div class="foodPrice">
                                                <div class="displayinlineblock">
                                                    <span class="pricebox">
                                                        <span class="big">
                                                            ¥10
                                                        </span>
                                                    </span>
                                                </div>
                                                <div class="BtnPos">
                                                    <div>
                                                        <div class="add-check flexPos">
                                                            <div class="right">
                                                                <span class="dmicon iconfont icon-tubiaomianxing02-05" @click="addCart(59)">
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- END -->

                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import { debug } from 'console';

// import Modal from '@/components/Modal.vue';
import { mapState } from 'vuex';
export default {
    name: 'index',
    // components: { ServiceBar, Modal, Swiper, SwiperSlide },
    data() {
        return {
            active: 0   //激活的导航索引
        }
    },
    mounted() {
        this.init();
        window.addEventListener('scroll', this.onScroll, false);
    },
    destroy(){
        window.removeEventListener('scroll', this.onScroll);
    },
    computed: {
    // 获取store中state值
    // 方式一：
    // username() {
    //   return this.$store.state.username;
    // },
    // cartCount() {
    //   return this.$store.state.cartCount;
    // }
    // 方式二：
        ...mapState(['username', 'cartCount'])
    },
    methods: {
        // 初始化商品列表
        init() {
            /*this.$api.mall
                .goodsList({
                    categoryId: 100012,
                    pageSize: 14
                })
                .then((res) => {
                    console.log('res', res);
                    res.list = res.list.slice(6, 14);
                    this.phoneList = [res.list.slice(0, 4), res.list.slice(4, 8)];
                });*/
        },
        // 登录
        goLogin() {
            this.$router.push('/login');
        },
        // 退出
        goLogout() {
            this.$api.mall.logout().then(() => {
                this.$message.success('退出成功');
                // 清除用户ID
                this.$cookie.set('userId', '', { expires: '-1' });
                // 清除用户名
                this.$store.dispatch('saveUserName', '');
                // 清空购物车数量
                this.$store.dispatch('saveCartCount', 0);
            });
        },
        // 加入购物车
        addCart(id) {
            let params = {
                productId: id,
                selected: true
            };
            this.$api.mall.addCart(params).then((res = { cartProductVoList: 0 }) => {
                this.$store.dispatch('saveCartCount', res.cartProductVoList.length + 1);
                this.showModal = true;
            });
        },
        // 去购物车
        goCart() {
            this.$router.push('/cart');
        },
        goToIndex() {
            this.$router.push('/index');
        },
        onScroll(){
            // 获取所有锚点元素
            const navContents = document.querySelectorAll('.CaName')
            
            // 所有锚点元素的 offsetTop
            const offsetTopArr = []
            navContents.forEach(item => {
                offsetTopArr.push(item.offsetTop)
            })
            // 获取当前文档流的 scrollTop
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
            // 定义当前点亮的导航下标
            let navIndex = 0
            for (let n = 0; n < offsetTopArr.length; n++) {
                // 如果 scrollTop 大于等于第n个元素的 offsetTop 则说明 n-1 的内容已经完全不可见
                // 那么此时导航索引就应该是n了
                if (scrollTop + 150 >= offsetTopArr[n]) {
                    navIndex = n
                }
            }
            this.active = navIndex
        },
        // 跳转到指定索引的元素
        scrollTo(index) {
            // 获取目标的 offsetTop
            // css选择器是从 1 开始计数，我们是从 0 开始，所以要 +1
            const targetOffsetTop = document.querySelector(`.CaName:nth-child(${index + 1})`).offsetTop
            // 获取当前 offsetTop
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
            // 定义一次跳 50 个像素，数字越大跳得越快，但是会有掉帧得感觉，步子迈大了会扯到蛋
            const STEP = 50
            // 判断是往下滑还是往上滑
            if (scrollTop > targetOffsetTop) {
                // 往上滑
                smoothUp()
            } else {
                // 往下滑
                smoothDown()
            }
            // 定义往下滑函数
            function smoothDown() {
                // 如果当前 scrollTop 小于 targetOffsetTop 说明视口还没滑到指定位置
                if (scrollTop < targetOffsetTop) {
                    // 如果和目标相差距离大于等于 STEP 就跳 STEP
                    // 否则直接跳到目标点，目标是为了防止跳过了。
                    if (targetOffsetTop - scrollTop >= STEP) {
                        scrollTop += STEP
                    }
                    else {
                        console.log(scrollTop)
                        console.log(targetOffsetTop)
                        scrollTop = targetOffsetTop
                    }
                    document.body.scrollTop = scrollTop+1
                    document.documentElement.scrollTop = scrollTop+1
                    // 关于 requestAnimationFrame 可以自己查一下，在这种场景下，相比 setInterval 性价比更高
                    requestAnimationFrame(smoothDown)
                }else{
                    console.log('else')
                }
            }
            // 定义往上滑函数
            function smoothUp() {
                if (scrollTop > targetOffsetTop) {
                    if (scrollTop - targetOffsetTop >= STEP) {
                        scrollTop -= STEP
                    } else {
                        scrollTop = targetOffsetTop
                    }
                    document.body.scrollTop = scrollTop+1
                    document.documentElement.scrollTop = scrollTop+1
                    requestAnimationFrame(smoothUp)
                }
            }
        },
        goToAnchor(selector) {
            this.$el.querySelector(selector).scrollIntoView();
        }

    }
};
</script>

<style lang="scss">
.menu {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    text-align: center;
}

.displayinlineblock,
.FoodBox {
    display: inline-block;
    padding: 5px;
    transform: scale(0.85);
}

.menu {
    line-height: 1.5;
    color: #515a6e;
}

.menu *,
:before,
:after {
    box-sizing: border-box;
}

.menu .MenuNav {
    position: fixed;
    width: 220px;
    background: #fff;
    min-height: 100%;
    box-shadow: 2px 0 10px #ddd;
    z-index: 9;
}

.menu .MenuNav .logo {
    padding: 0 0;
    text-align: center;
    padding-top: 30px;
    padding-bottom: 10px;
    padding-right: 70px;
}

.menu .MenuNav .logo img {
    width: 100px;
    // border-radius: 30px;
}

.logo {
    cursor: pointer;
}

img {
    border-style: none;
}

.menu .MenuNav .NavUI {
    margin-top: 0;
    text-align: left;
    font-weight: 400;
    padding-top: 35px;
}

li,
ul {
    list-style: none;
}

.menu .MenuNav .NavUI li {
    font-size: 18px;
    position: relative;
}

.menu .MenuNav .NavUI li .liInit {
    padding: 6px;
    cursor: pointer;
    padding-top: 15px;
    padding-left: 25px;
    font-size: x-large;
}



.menu .MenuNav .NavUI li a {
    color: #ffa700;
    cursor: pointer;
    font-weight: 700;
}



a {
    text-decoration: none;
    background: 0 0;
    outline: 0;
    transition: color .2s ease;
}

.menu .MenuNav .NavUI li .on,
.menu .MenuNav .NavUI li .on::after {
    background: #d30008 !important;
}

.menu .MenuNav .NavUI li .on a,
.menu .MenuNav .NavUI li .on span::after {
    color: #fff;
}

.menu .MenuNav .NavUI li a.active {
    // background: #d30008 !important;
    color: #d30008;
}

.menu .MenuMain {
    margin-left: 220px;
    background: #fff;
    min-width: 1000px;
    padding-bottom: 450px;
}

.menu .MenuMain .mheaderFixed {
    position: fixed;
    z-index: 9;
    top: 0;
    right: 0;
    left: 220px;
}

.mheader {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 70px;
    background: #f9f9f9;
    color: #fff;
}


.mheader .mheader_swiper_container {
    -webkit-box-flex: 1;
    flex: 1;
    height: 70px;
    text-align: left;
}

.mheader .mheader_swiper_container .highLight {
    background: #f9f9f9;
}

.el-carousel {
    position: relative;
    overflow-y: hidden;
    width: 100%;
    height: 100%;
}

.mheader .userInfo {
    padding-right: 30px;
    padding-left: 20px;
    height: 70px;
    display: flex;
}

.mheader .userInfo.highLight {
    background-color: #ffa700;
}

.mheader .userInfo .loginInfo {
    display: flex;
    padding-right: 6px;
}

.mheader .userInfo .loginInfo li {
    cursor: pointer;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    justify-content: space-around;
    -webkit-box-align: center;
    align-items: center;
    padding: 6px;
}

.mheader .userInfo .loginInfo li .displayblock.iconfont {
    height: 40px;
    display: flex;
    -webkit-box-align: start;
    align-items: flex-start;
}

.fontsize30 {
    font-size: 30px;
}

.displayblock {
    display: block;
}

.iconfont {
    font-family: iconfont !important;
    font-style: normal;
}

.menu .MenuMain .FoodContentBox {
    padding-top: 70px;
}

.menu .FoodContent {
    text-align: left;
    margin: 0;
}

/* 这一行要自适应捏 */
/* .PCategoryName{
    margin-left: auto;
} */

.menu .MenuMain .FoodContentBox .PCategoryName .CaName {
    background: #ffa700;
    display: inline-block;
    color: #fff;
    padding: 12px 40px;
    border-radius: 10px 0 10px 0;
    margin-top: 10px;
    margin-bottom: 10px;
    font-weight: 700;
    font-size: 18px;
    position: relative;
}

.displayinlineblock {
    display: inline-block;
}

.menu .FoodContent .cateBox {
    display: flex;
    flex-wrap: wrap;
}

/* 这一行也要自适应marginleft marginright */
.menu .FoodContent .FoodBox {
    -webkit-box-flex: 0;
    flex: 0 0 210px;
    padding-bottom: 16px;
    box-shadow: 0 2px 5px #ddd;
    margin-left: 15px;
    border-radius: 14px;
    position: relative;
    border: 3px solid #ff8e2b;
}

.menu .FoodContent .FoodBox .FoodImgBox {
    width: 210px;
    text-align: center;
    position: relative;
}

.menu .FoodContent .FoodBox .FoodImgBox img {
    width: 100%;
    height: 100%;
    height: 172px;
    display: block;
    border-radius: 12px 12px 0 0;
}

.menu .FoodContent .FoodBox .FoodImgBox .imgBoxMask {
    display: none;
    position: absolute;
    width: 100%;
    height: 172px;
    border-radius: 12px 12px 0 0;
    top: 0;
    padding: 15px;
    background: rgba(0, 0, 0, .7);
    overflow: hidden;
}

.menu .FoodContent .FoodBox .FoodImgBox .imgBoxMask .content {
    color: #f7d37d;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    height: 143px;
    overflow: hidden;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
}

.menu .FoodContent .FoodBox .FoodImgBox:hover .imgBoxMask {
    display: block;
}

.menu .FoodContent .FoodBox .FoodDesc {
    padding-left: 13px;
}

.menu .FoodContent .FoodBox .FoodDesc .name {
    display: flex;
    font-weight: 700;
    padding-bottom: 10px;
    -webkit-box-align: center;
    align-items: center;
    width: 196px;
    white-space: normal;
    word-break: break-all;
}

.food-desc {
    display: flex;
    padding-right: 8px;
    -webkit-box-pack: justify;
    justify-content: space-between;
}

.menu .FoodContent .FoodBox .FoodDesc .promotion {
    background: #d00;
    color: #fff;
    display: inline-block;
    padding: 4px 10px;
    border-radius: 16px;
    font-size: 14px;
    font-weight: 700;
    margin-top: 4px;
}

.menu .FoodContent .FoodBox .FoodOpeator .foodPrice {
    color: #d00;
    font-weight: 700;
    padding-top: 10px;
}

.menu .FoodContent .FoodBox .FoodOpeator .foodPrice .pricebox {
    padding-left: 10px;
    display: inline-block;
    padding-left: 13px;
}

.menu .FoodContent .FoodBox .FoodOpeator .foodPrice .big {
    font-size: 18px;
}

.menu .FoodContent .FoodBox .FoodOpeator .BtnPos {
    position: absolute;
    right: 6px;
    bottom: 2px;
}

.add-check {
    min-width: 80px;
    display: inline-flex;
    padding-bottom: 2px;
}

.add-check.flexPos {
    -webkit-box-pack: end;
    justify-content: flex-end;
}

.add-check>div {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: end;
    justify-content: flex-end;
    padding: 0;
}

.add-check>div.right {
    padding-left: 0;
}

.add-check>div.left {
    opacity: 0;
    padding-right: 0;
}

.span.text {
    opacity: 0; //这个为0 不可见
    transition: all .3s;
    font-size: 14px;
    font-weight: 700;
}

.dmicon {
    opacity: 1;
    border-radius: 50%;
    transition: all .3s linear;
}

.add-check .dmicon {
    font-size: 34px;
    color: #d00;
    border: none;
    cursor: pointer;
    font-weight: 400;
}

.backtop {
    background-color: #d00;
    color: #fff;

    &:hover {
        background-color: #ffa700;
    }
}
</style>