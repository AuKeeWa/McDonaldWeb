<template>
  <div class="product">
    <div class="content">
      <!-- 宣传图 -->
      <div v-if="(activeName == 'first')" class="item-bg-1"></div>
      <div v-if="(activeName == 'second')" class="item-bg-2"></div>
      <div v-if="(activeName == 'third')" class="item-bg-3"></div>
      <div v-if="(activeName == 'fourth')" class="item-bg-4"></div>
      <div v-if="(activeName == 'fifth')" class="item-bg-5"></div>
      <div v-if="(activeName == 'sixth')" class="item-bg-6"></div>
      <el-backtop class="backtop"></el-backtop>
      <div class="asset-detail-tabs">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="汉堡" name="first">
            <div class="content-box container-fluid">
              <div class="row">
                <div class="col-md-12 col-sm-12 col-xs-12">
                  <div class="inner">
                    <div class="product-info">
                      <!-- <h3>汉堡</h3> -->
                      <!-- <p></p> -->
                    </div>
                    <div class="food-list container-fluid">
                      <div class="row">
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Big-Mac">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208081011205699.png"
                                alt="">
                            </div>
                            <span class="name">巨无霸</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Hamburger">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208081011488477.png"
                                alt="">
                            </div>
                            <span class="name">汉堡包</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Spicy-Chicken-Filet">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208081012023493.png"
                                alt="">
                            </div>
                            <span class="name">麦辣鸡腿汉堡</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Grilled-Chicken-Sandwich">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208081012161806.png"
                                alt="">
                            </div>
                            <span class="name">原味板烧鸡腿堡</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/McChicken">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208081013011355.png"
                                alt="">
                            </div>
                            <span class="name">麦香鸡</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Filet-O-Fish">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208081013175111.png"
                                alt="">
                            </div>
                            <span class="name">麦香鱼</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Cheeseburger">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208081013284833.png"
                                alt="">
                            </div>
                            <span class="name">吉士汉堡包</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Double-Cheeseburger">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208081013411846.png"
                                alt="">
                            </div>
                            <span class="name">双层吉士汉堡</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/beef-sausage">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208081014088917.png"
                                alt="">
                            </div>
                            <span class="name">不素之霸双层牛堡</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/double-fof">
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208111413054231.png"
                                alt="">
                            </div>
                            <span class="name">双层深海鳕鱼堡</span>
                          </a>
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Thick-Angus-Beef-Burger-with-Bacon">
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208081022028042.png"
                                alt="">
                            </div>
                            <span class="name">安格斯MAX厚牛培根堡</span>
                          </a>
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Cheese-Angus">
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208081022182900.png"
                                alt="">
                            </div>
                            <span class="name">安格斯MAX厚牛芝士堡</span>
                          </a>
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Thick-Angus-Double-Beef-Burger-with-Bacon">
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208081022345223.png"
                                alt="">
                            </div>
                            <span class="name">双层安格斯MAX厚牛培根堡</span>
                          </a>
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Thick-Angus-Double-Beef-Burger-with-Cheese-Sauce">
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208081023547031.png"
                                alt="">
                            </div>
                            <span class="name">双层安格斯MAX厚牛芝士堡</span>
                          </a>
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Bacon-Lettuce-Tomato-Double-Beef-Burger">
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/09/202209261029176483.png"
                                alt="">
                            </div>
                            <span class="name">培根蔬萃双层牛堡</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="cmsMainBox">
              <img
                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/photo_db/2021/08/04/202108041611589888/202108041611589888.gif?&rand=0827">
            </div>
          </el-tab-pane>
          <el-tab-pane label="小食" name="second">
            <div class="content-box container-fluid">
              <div class="row">
                <!-- CMS -->
                <div class="col-md-12 col-sm-12 col-xs-12">
                  <div class="inner">
                    <div class="food-list container-fluid">
                      <div class="row">
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/French-Fries">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208091547349086.png"
                                alt="">
                            </div>
                            <span class="name">薯条</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Chicken-McNuggets">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208091547543048.png"
                                alt="">
                            </div>
                            <span class="name">麦乐鸡 (5块)</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Corn-Cup">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208091548118821.png"
                                alt="">
                            </div>
                            <span class="name">玉米杯</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Spicy-McWings">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208091548313714.png"
                                alt="">
                            </div>
                            <span class="name">麦辣鸡翅</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Green-Prickleyash-Flavored-Half-Chicken">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/07/202207062141422440.png"
                                alt="">
                            </div>
                            <span class="name">青花椒风味半鸡</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Big-Chicken-Cutlet">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208091551151077.png"
                                alt="">
                            </div>
                            <span class="name">那么大鸡排</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Apple-Slice">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208091552098343.png"
                                alt="">
                            </div>
                            <span class="name">苹果片</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/V-cut">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208091552349326.png"
                                alt="">
                            </div>
                            <span class="name">薯角</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/BIC-drumstick">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208091552597366.png"
                                alt="">
                            </div>
                            <span class="name">麦麦脆汁鸡（琵琶腿）</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/BIC-breast">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208151147383858.png"
                                alt="">
                            </div>
                            <span class="name">麦麦脆汁鸡（鸡胸）</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/snacks-box">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208091554068580.png"
                                alt="">
                            </div>
                            <span class="name">三拼小食盒</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/人气堡堡桶">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208091711212667.png"
                                alt="">
                            </div>
                            <span class="name">人气堡堡桶</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/炸鸡天团桶">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208091555208803.png"
                                alt="">
                            </div>
                            <span class="name">炸鸡天团桶</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/麦麦炸鸡桶">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208091555353574.png"
                                alt="">
                            </div>
                            <span class="name">麦麦炸鸡桶</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/麦麦汉堡桶">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208091555536682.png"
                                alt="">
                            </div>
                            <span class="name">麦麦汉堡桶</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/四拼小食桶">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208091556082657.png"
                                alt="">
                            </div>
                            <span class="name">四拼小食桶</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="cmsMainBox-1">
              <img
                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/photo_db/2022/08/27/202208271610061166/202208271610061166_640_0.jpg?&rand=0827">
            </div>
          </el-tab-pane>
          <el-tab-pane label="饮料" name="third">
            <div class="content-box container-fluid">
              <div class="row">
                <!-- CMS -->
                <div class="col-md-12 col-sm-12 col-xs-12">
                  <div class="inner">
                    <div class="food-list container-fluid">
                      <div class="row">
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Coca-Cola">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208091541242793.png"
                                alt="">
                            </div>
                            <span class="name">可口可乐</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Coca-Cola-Zero">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208091542266222.png"
                                alt="">
                            </div>
                            <span class="name">零度可口可乐</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/0度泡泡啤">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/07/202207062221334334.png"
                                alt="">
                            </div>
                            <span class="name">0度泡泡啤</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Fuze-Tea">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208091542431830.png"
                                alt="">
                            </div>
                            <span class="name">柠檬红茶味饮料</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/coconut-water">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208091543175806.png"
                                alt="">
                            </div>
                            <span class="name">椰子水</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Sprite">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208091543354438.png"
                                alt="">
                            </div>
                            <span class="name">雪碧</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/bubble-tea">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208091543535269.png"
                                alt="">
                            </div>
                            <span class="name">原味珍珠奶茶</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Minute-Maid-Sunshine-Orange-Juice-2">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208091544122824.png"
                                alt="">
                            </div>
                            <span class="name">美汁源阳光橙</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Minute-Maid-100-Apple-Juice">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208091545045176.png"
                                alt="">
                            </div>
                            <span class="name">美汁源100%苹果汁</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Soybean-Milk">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208091545242971.png"
                                alt="">
                            </div>
                            <span class="name">优品豆浆</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Drink-11">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208091545443839.png"
                                alt="">
                            </div>
                            <span class="name">纯牛奶（UHT)</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Hot-Chocolate">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208091546041601.png"
                                alt="">
                            </div>
                            <span class="name">热朱古力</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Hot-Tea">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208091546249996.png"
                                alt="">
                            </div>
                            <span class="name">锡兰红茶</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Brewed-Coffee">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208091546442662.png"
                                alt="">
                            </div>
                            <span class="name">鲜煮咖啡</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Ice-Dew-Packaged-Drinking-Water-2">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208091547025735.png"
                                alt="">
                            </div>
                            <span class="name">冰露包装饮用水</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="cmsMainBox-1">
              <img
                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/photo_db/2022/08/27/202208271610061166/202208271610061166_640_0.jpg?&rand=0827">
            </div>
          </el-tab-pane>
          <el-tab-pane label="甜点" name="fourth">
            <div class="content-box container-fluid">
              <div class="row">
                <!-- CMS -->
                <div class="col-md-12 col-sm-12 col-xs-12">
                  <div class="inner">
                    <div class="food-list container-fluid">
                      <div class="row">
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Cone">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2020/05/202005270949182813.png"
                                alt="">
                            </div>
                            <span class="name">圆筒冰淇淋</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Chocolate-Sundae">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2020/03/202003191510126381.png"
                                alt="">
                            </div>
                            <span class="name">朱古力新地</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Strawberry-Sundae">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2020/03/202003191449258974.png"
                                alt="">
                            </div>
                            <span class="name">草莓新地</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Oreo-Mcflurry">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2020/03/202003191447419769.png"
                                alt="">
                            </div>
                            <span class="name">麦旋风™奥利奥原味</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Strawberry-Oreo-Mcflurry">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2020/03/202003191447495324.png"
                                alt="">
                            </div>
                            <span class="name">麦旋风™奥利奥草莓口味</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Taro-Pie">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208091556569394.png"
                                alt="">
                            </div>
                            <span class="name">香芋派</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Pineapple-Pie">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208091557147058.png"
                                alt="">
                            </div>
                            <span class="name">菠萝派</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="cmsMainBox-2">
              <img
                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/photo_db/2022/08/27/202208271610061166/202208271610061166_640_0.jpg?&rand=0827">
            </div>
          </el-tab-pane>
          <el-tab-pane label="早餐" name="fifth">
            <div class="content-box container-fluid">
              <div class="row">
                <!-- CMS -->
                <div class="col-md-12 col-sm-12 col-xs-12">
                  <div class="inner">
                    <div class="food-list container-fluid">
                      <div class="row">
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Sausage-McMuffin">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208091558332871.png"
                                alt="">
                            </div>
                            <span class="name">猪柳麦满分</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Sausage-McMuffin-With-Egg">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208091558498724.png"
                                alt="">
                            </div>
                            <span class="name">猪柳蛋麦满分</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Egg-McMuffin">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208091559253305.png"
                                alt="">
                            </div>
                            <span class="name">烟肉蛋麦满分</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Egg-Cheese-Muffin">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208151024483735.png"
                                alt="">
                            </div>
                            <span class="name">吉士蛋麦满分</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Ham-Muffin">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208091559476910.png"
                                alt="">
                            </div>
                            <span class="name">火腿扒麦满分</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Crispy-Chicken-Muffin">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208091600076790.png"
                                alt="">
                            </div>
                            <span class="name">大脆鸡扒麦满分</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Grilled-Chicken-Muffin">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/09/202209301037275168.png"
                                alt="">
                            </div>
                            <span class="name">原味板烧鸡腿麦满分</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Double-Grilled-Chicken-Muffin">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/09/202209301037584746.png"
                                alt="">
                            </div>
                            <span class="name">双层原味板烧鸡腿麦满分</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Sausage-Scrambled-Double-Egg-Burger">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208091601375124.png"
                                alt="">
                            </div>
                            <span class="name">猪柳炒双蛋堡</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Cheese-Scrambled-Double-Egg-Burger">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208091602095400.png"
                                alt="">
                            </div>
                            <span class="name">吉士炒双蛋堡</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Scrambled-Egg-German-Flavor-Sausage-Burger">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208091602274643.png"
                                alt="">
                            </div>
                            <span class="name">德式图林根香肠炒双蛋堡</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/火腿扒早安营养卷">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208021616493001.png"
                                alt="">
                            </div>
                            <span class="name">火腿扒早安营养卷</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/图林根香肠早安营养卷">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208021618177760.png"
                                alt="">
                            </div>
                            <span class="name">图林根香肠早安营养卷</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Big-Breakfast-Pork-Sausage-Patty-Fried-Egg-Hash-Brown-Muffin">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208091603529074.png"
                                alt="">
                            </div>
                            <span class="name">悠享早晨全餐</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Big-Breakfast-Grilled-Chicken-Patties-Fried-Egg-Hash-Brown-Muffin">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208091604117258.png"
                                alt="">
                            </div>
                            <span class="name">板烧鸡腿香肠早晨全餐</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Big-Breakfast-Bacon-Fried-Egg-Hash-Brown-Muffin">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208091604294820.png"
                                alt="">
                            </div>
                            <span class="name">鲜美烟肉早晨全餐</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Croissant-8">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/07/202207011142065646.png"
                                alt="">
                            </div>
                            <span class="name">法式经典可颂</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Croissant-bacon-cheese-3">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/07/202207011047175483.png"
                                alt="">
                            </div>
                            <span class="name">芝香培根可颂</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Croissant-bacon-cheese-egg-2">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/07/202207011059599373.png"
                                alt="">
                            </div>
                            <span class="name">芝香培根蛋可颂</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/croissant-ham-cheese-2">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/07/202207011109521241.png"
                                alt="">
                            </div>
                            <span class="name">火腿扒蛋可颂</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Congee-with-Chicken-and-preserved-egg">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2020/05/202005061021247170.png"
                                alt="">
                            </div>
                            <span class="name">皮蛋鸡肉粥</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Congee-with-Pickled-cabbage-and-bamboo-shoot">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2020/05/202005061023475981.png"
                                alt="">
                            </div>
                            <span class="name">雪菜脆笋鸡肉粥</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Hash-Brown">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208091604513345.png"
                                alt="">
                            </div>
                            <span class="name">脆薯饼</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Asian-Dough-Stick">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208091605077842.png"
                                alt="">
                            </div>
                            <span class="name">脆香油条</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/egg">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2021/04/202104191500563514.png"
                                alt="">
                            </div>
                            <span class="name">能量蛋</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/德式图灵根香肠">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2021/04/202104191521441185.png"
                                alt="">
                            </div>
                            <span class="name">德式图灵根香肠</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Soybean-Milk-3">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208091605428830.png"
                                alt="">
                            </div>
                            <span class="name">优品豆浆</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="cmsMainBox">
              <img
                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/photo_db/2022/07/13/202207131540578143/202207131540578143_1120_340.jpg?&rand=0827">
            </div>
            <div class="cmsMainBox">
              <img
                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/photo_db/2020/06/19/202006191219264390/202006191219264390_1120_340.jpg?&rand=0827">
            </div>
          </el-tab-pane>
          <el-tab-pane label="咖啡" name="sixth">
            <div class="content-box container-fluid">
              <div class="row">
                <!-- CMS -->
                <div class="col-md-12 col-sm-12 col-xs-12">
                  <div class="inner">
                    <div class="food-list container-fluid">
                      <div class="row">
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Iced-Nai-Tie">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208292204543004.png"
                                alt="">
                            </div>
                            <span class="name">冰奶铁</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Hot-Nai-Tie">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208292205408283.png"
                                alt="">
                            </div>
                            <span class="name">热奶铁</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Iced-Oatly-Nai-Tie">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208292206117637.png"
                                alt="">
                            </div>
                            <span class="name">冰燕麦奶铁</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Hot-Oatly-Nai-Tie">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208292206368008.png"
                                alt="">
                            </div>
                            <span class="name">热燕麦奶铁</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Iced-Coconut-Nai-Tie">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208292207039697.png"
                                alt="">
                            </div>
                            <span class="name">冰厚椰奶铁</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Hot-Coconut-Nai-Tie">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208292207258716.png"
                                alt="">
                            </div>
                            <span class="name">热厚椰奶铁</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Iced-Milky-Nai-Tie">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208292207475459.png"
                                alt="">
                            </div>
                            <span class="name">冰厚乳奶铁</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Hot-Milky-Nai-Tie">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208292208143160.png"
                                alt="">
                            </div>
                            <span class="name">热厚乳奶铁</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Iced-Americano">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208292208383944.png"
                                alt="">
                            </div>
                            <span class="name">冰美式</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Hot-Americano">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208292209017033.png"
                                alt="">
                            </div>
                            <span class="name">热美式</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Iced-Caramel-Macchiato-2">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208292209215242.png"
                                alt="">
                            </div>
                            <span class="name">冰焦糖玛奇朵</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Hot-Caramel-Macchiato-2">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208292209422511.png"
                                alt="">
                            </div>
                            <span class="name">热焦糖玛奇朵</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Cappuccino">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208292210057378.png"
                                alt="">
                            </div>
                            <span class="name">卡布奇诺</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Iced-Mocha-2">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208292210247885.png"
                                alt="">
                            </div>
                            <span class="name">冰摩卡</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Hot-Mocha">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208292210418143.png"
                                alt="">
                            </div>
                            <span class="name">热摩卡</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/MC-Espresso">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2020/11/202011152311386312.png"
                                alt="">
                            </div>
                            <span class="name">浓缩咖啡</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Drip-Bag-Coffee">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208292213069691.png"
                                alt="">
                            </div>
                            <span class="name">麦咖啡挂耳咖啡</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Iced-Chocolate-Oatly-Milk">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208292214326960.png"
                                alt="">
                            </div>
                            <span class="name">冰特浓燕麦巧克力</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/热特浓燕麦巧克力">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208301011268722.png"
                                alt="">
                            </div>
                            <span class="name">热特浓燕麦巧克力</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Iced-Oatly-Milk">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208292214522529.png"
                                alt="">
                            </div>
                            <span class="name">冰燕麦奶</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Hot-Oatly-Milk-3">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208292215082309.png"
                                alt="">
                            </div>
                            <span class="name">热燕麦奶</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Iced-Matcha-Milk">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208292216395610.png"
                                alt="">
                            </div>
                            <span class="name">冰特浓抹茶牛奶</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Hot-Matcha-Milk">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208292216596791.png"
                                alt="">
                            </div>
                            <span class="name">热特浓抹茶牛奶</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Iced-Chocolate-Milk">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208292217199815.png"
                                alt="">
                            </div>
                            <span class="name">冰特浓巧克力</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Hot-Chocolate-Milk">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208292217366580.png"
                                alt="">
                            </div>
                            <span class="name">热特浓巧克力</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Hot-Matcha">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208292218004686.png"
                                alt="">
                            </div>
                            <span class="name">热特浓抹茶纯茶</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Twinings-Black-Tea">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208292218186895.png"
                                alt="">
                            </div>
                            <span class="name">川宁伯爵红茶</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Iced-Milk">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208292218348675.png"
                                alt="">
                            </div>
                            <span class="name">冰牛奶</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Hot-Milk-3">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208292218491274.png"
                                alt="">
                            </div>
                            <span class="name">热牛奶</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Matcha-Frappe">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208292219089745.png"
                                alt="">
                            </div>
                            <span class="name">特浓抹茶雪冰</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Whipped-Cream-Frape">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208292219367274.png"
                                alt="">
                            </div>
                            <span class="name">特浓奶香雪冰</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Chocolate-Frappe-2">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208292219557802.png"
                                alt="">
                            </div>
                            <span class="name">特浓巧克力雪冰</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Mango-Frappe-2">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208292220125925.png"
                                alt="">
                            </div>
                            <span class="name">芒果雪冰</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Mini-Matcha-Ice-Cream">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208301107245898.png"
                                alt="">
                            </div>
                            <span class="name">迷你抹茶冰淇淋</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Mini-Coffee-Ice-Cream">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208292229059564.png"
                                alt="">
                            </div>
                            <span class="name">迷你咖啡冰淇淋</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/macaroons-chocolate-2">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208301046297631.png"
                                alt="">
                            </div>
                            <span class="name">巧克力马卡龙</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Macaroons-mixberry-2">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208301049494247.png"
                                alt="">
                            </div>
                            <span class="name">莓果马卡龙</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Lamington-stawberry-2">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208301052308047.png"
                                alt="">
                            </div>
                            <span class="name">草莓拉明顿</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <a href="/product/Lamington-lemon-2">
                            <!-- <a href="javascript:;"> -->
                            <div class="pic">
                              <img
                                src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208301101497085.png"
                                alt="">
                            </div>
                            <span class="name">柠檬拉明顿</span>
                          </a>
                          <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>

      <!-- 视频播放 -->
      <div class="item-video">
        <h2>比拿铁更奶更浓，<br />麦咖啡奶铁问世！</h2>
        <p>麦咖啡全新独家拼配M10 PLUS咖啡豆，配方荣获2022 IIAC国际咖啡品鉴大赛金奖。
          <br />被誉为“咖啡界的奥斯卡”，获奖配方全线应用在升级后的麦咖啡饮品中。
        </p>
        <!-- <br /><br />M10 PLUS咖啡豆 -->
        <h2>M10 PLUS咖啡豆</h2>
        <p>
          <br />由危地马拉、埃塞俄比亚、哥伦比亚和卢旺达四国咖啡豆拼配而成，
          <br />自带柑橘、焦糖、黑巧风味。
        </p>
        <!-- 背景图片 -->
        <div class="video-bg" @click="openVideo"></div>
        <!-- 视频盒子 -->
        <div class="video-box" v-show="showSlide">
          <!-- 遮罩 -->
          <div class="overlay"></div>
          <div class="video" :class="showSlide">
            <!-- 关闭按钮 -->
            <span class="icon-close" @click="closeVideo"></span>
            <!-- 视频 -->
            <video src="/images/dishes/cafe/video.mp4" muted autoplay controls="controls"></video>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  name: 'product',
  data() {
    return {
      showSlide: '', //控制动画效果
      product: {}, //商品信息
      activeName: 'first',
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log({ tab }, { event });
    },
    // 打开视频
    openVideo() {
      this.showSlide = 'slideDown';
    },
    // 关闭视频
    closeVideo() {
      this.showSlide = 'slideUp';
      setTimeout(() => {
        this.showSlide = '';
      }, 600);
    }
  }
};
</script>
<style lang="scss" >

.backtop {
  background-color: $colorA;
  color: #fff;

  &:hover {
    background-color: #DA6C44;
  }
}

.tabs {
  text-align: center;
  top: 0px;
  left: 0px;
  position: relative;
  text-align: center;
  // margin-top: auto;
}

.el-tabs {
  background-color: #ffffff;
  color: #000;
  border-radius: 17px;
  left: 0px;
  top: 0px;
  width: 980px;
  height: 83px;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1985px;
  position: relative;
  text-align: center;
}

// * {
//   outline: solid #f00 1px !important;
//   background: #000 !important;
//   color: #fff !important;
// }

/* 去除灰色横条 */
.el-tabs__nav-wrap::after {
  position: static !important;
}

/* 设置滑块颜色 */
.el-tabs__active-bar {
  background-color: $colorA !important;
}

/* 设置滑块停止位置 */
.el-tabs__active-bar.is-top {
  height: 45px;
  width: 104px ! important;
  border-radius: 17px;
  top: 0px !important;
  left: 5px !important;
  position: absolute !important;
  z-index: 1;
}

/* 设置当前选中样式 */
.el-tabs__item.is-active {
  color: #ffffff !important;
  z-index: 2;
}

/* 设置未被选中样式 */
.el-tabs__item {
  padding: 0 20px !important;
  width: 154px;
  height: 100px;
  font-size: xx-large;
  box-sizing: border-box;
  display: inline-block;
  position: relative !important;
  color: $colorA !important;
  z-index: 2;
}

.product {
  .content {
    .item-bg-1 {
      background: url('https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/photo_db/2022/06/27/202206271514102834/202206271514102834_1120_340.jpg?&rand=0827') no-repeat center;
      height: 340px;
      text-align: center;
    }

    .item-bg-2 {
      background: url('https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/photo_db/2020/06/18/202006181627374124/202006181627374124_1120_340.jpg?&rand=0827') no-repeat center;
      height: 340px;
      text-align: center;
    }

    .item-bg-3 {
      background: url('https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/photo_db/2020/06/18/202006181627596520/202006181627596520_1120_340.jpg?&rand=0827') no-repeat center;
      height: 340px;
      text-align: center;
    }

    .item-bg-4 {
      background: url('https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/photo_db/2020/06/18/202006181626316868/202006181626316868_1120_340.jpg?&rand=0827') no-repeat center;
      height: 340px;
      text-align: center;
    }

    .item-bg-5 {
      background: url('https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/photo_db/2020/06/18/202006181627189078/202006181627189078_1120_340.jpg?&rand=0827') no-repeat center;
      height: 340px;
      text-align: center;
    }

    .item-bg-6 {
      background: url('https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/photo_db/2022/08/30/202208301823392793/202208301823392793_1120_340.jpg?&rand=0827') no-repeat center;
      height: 340px;
      text-align: center;
    }

    .cmsMainBox img {
      display: block;
      max-width: 100%;
      width: auto;
      height: auto;
      margin: 0 auto;
    }

    .cmsMainBox-1 img {
      display: block;
      // max-width: 100%;
      width: 820px;
      height: auto;
      margin: 0 auto;
      // transform: scale(1.8);
    }

    .cmsMainBox-2 img {
      padding-top: 100px;
      display: block;
      max-width: 100%;
      width: 1000px;
      height: auto;
      margin: 0 auto;
    }

    .item-bg-8 {
      background: url(/imgs/product/product-bg-3.png) no-repeat center;
      // height: 638px;
      // background-size: cover;
    }

    // .item-swiper {
    //   margin: 36px auto 52px;

    //   .desc {
    //     font-size: 18px;
    //     color: #333333;
    //     text-align: center;
    //   }

    //   img {
    //     width: 100%;
    //   }
    // }

    .item-video {
      height: 1120px;
      background-color: #ffffff;
      // margin-top: 76px;
      margin-bottom: 0px;
      color: #000000;
      text-align: center;

      h2 {
        font-size: 60px;
        padding-top: 11px;
        margin-bottom: 8px;
        color: $colorA;
      }

      p {
        font-size: 24px;
        margin-bottom: 8px;
      }

      .video-bg {
        background: url('https://sghimages.shobserver.com/img/catch/2022/09/03/fefcb29b-da84-4fe6-bc3f-e233a75ca302.jpg') no-repeat center;
        background-size: cover;
        width: 1080px;
        height: 675px;
        margin: 0 auto 120px;
        cursor: pointer;
      }

      // 视频盒子
      .video-box {

        // 遮罩
        .overlay {
          @include position(fixed);
          background-color: #333333;
          opacity: 0.4;
          z-index: 10;
        }

        // 动画下滑
        @keyframes slideDown {
          from {
            top: -50%;
            opacity: 0;
          }

          to {
            top: 50%;
            opacity: 1;
          }
        }

        // 动画上滑
        @keyframes slideUp {
          from {
            top: 50%;
            opacity: 1;
          }

          to {
            top: -50%;
            opacity: 0;
          }
        }

        // 视频
        .video {
          position: fixed;
          top: -50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 10;
          width: 1000px;
          height: 536px;
          opacity: 1;

          // 下滑
          &.slideDown {
            animation: slideDown 0.6s linear;
            top: 50%; // 动画结束后位置
          }

          // 上滑
          &.slideUp {
            animation: slideUp 0.6s linear;
          }

          // 关闭按钮
          .icon-close {
            position: absolute;
            top: 20px;
            right: 20px;
            @include bgImg(20px, 20px, '/imgs/icon-close.png');
            cursor: pointer;
            z-index: 11;
          }

          video {
            width: 100%;
            height: 100%;
            object-fit: cover;
            outline: none;
          }
        }
      }
    }
  }

  button {
    margin-left: 10px;
  }

  .product-list .content-box {
  margin-bottom: 75px;
}

.content-box {
  position: relative;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0;
}

.row {
  margin-right: -15px;
  margin-left: -15px;
}

.col-lg-1,
.col-lg-10,
.col-lg-11,
.col-lg-12,
.col-lg-2,
.col-lg-3,
.col-lg-4,
.col-lg-5,
.col-lg-6,
.col-lg-7,
.col-lg-8,
.col-lg-9,
.col-md-1,
.col-md-10,
.col-md-11,
.col-md-12,
.col-md-2,
.col-md-3,
.col-md-4,
.col-md-5,
.col-md-6,
.col-md-7,
.col-md-8,
.col-md-9,
.col-sm-1,
.col-sm-10,
.col-sm-11,
.col-sm-12,
.col-sm-2,
.col-sm-3,
.col-sm-4,
.col-sm-5,
.col-sm-6,
.col-sm-7,
.col-sm-8,
.col-sm-9,
.col-xs-1,
.col-xs-10,
.col-xs-11,
.col-xs-12,
.col-xs-2,
.col-xs-3,
.col-xs-4,
.col-xs-5,
.col-xs-6,
.col-xs-7,
.col-xs-8,
.col-xs-9 {
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}

.content-box .row>.col-md-9>.inner,
.content-box .row>.col-md-12>.inner,
.news-detail .content-box .row>.col-md-12>.inner,
.image-news-detail .content-box .row>.col-md-12>.inner,
.product-safety-detail .content-box .row>.col-md-12>.inner,
.product-list .content-box .row>.col-md-12>.inner,
.product-detail .content-box .row>.col-md-12>.inner,
.page-detail .content-box .row>.col-md-9>.inner,
.page-detail .content-box .row>.col-md-12>.inner {
  margin-bottom: 20px;
  padding-bottom: 50px;
  // background: #333;
  background: #f7f7f7;
}

// .product-info {
//   max-width: 645px;
//   margin: 0 auto;
//   padding: 40px 0 20px;
//   font-size: xx-large;
// }

.food-list {
  position: relative;
  // max-width: 645px;
  margin: 0 auto;
  padding-top: 30px;
  border-top: 1px solid #2e2e2e;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.container-fluid {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

.food-list .col-md-3 {
  margin-bottom: 30px;
  padding: 0 10px;
  text-align: center;
  font-size: larger;
}

.col-md-3 {
  width: 25%;
}

.col-md-1,
.col-md-10,
.col-md-11,
.col-md-12,
.col-md-2,
.col-md-3,
.col-md-4,
.col-md-5,
.col-md-6,
.col-md-7,
.col-md-8,
.col-md-9 {
  float: left;
}

.col-lg-1,
.col-lg-10,
.col-lg-11,
.col-lg-12,
.col-lg-2,
.col-lg-3,
.col-lg-4,
.col-lg-5,
.col-lg-6,
.col-lg-7,
.col-lg-8,
.col-lg-9,
.col-md-1,
.col-md-10,
.col-md-11,
.col-md-12,
.col-md-2,
.col-md-3,
.col-md-4,
.col-md-5,
.col-md-6,
.col-md-7,
.col-md-8,
.col-md-9,
.col-sm-1,
.col-sm-10,
.col-sm-11,
.col-sm-12,
.col-sm-2,
.col-sm-3,
.col-sm-4,
.col-sm-5,
.col-sm-6,
.col-sm-7,
.col-sm-8,
.col-sm-9,
.col-xs-1,
.col-xs-10,
.col-xs-11,
.col-xs-12,
.col-xs-2,
.col-xs-3,
.col-xs-4,
.col-xs-5,
.col-xs-6,
.col-xs-7,
.col-xs-8,
.col-xs-9 {
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  background-color: #f7f7f7;
  box-sizing: border-box;
}

a,
a:hover,
a:visited,
a:focus {
  text-decoration: none;
  outline: none;
}

a {
  color: #DA6C44;
  text-decoration: none;
}

a {
  background-color: transparent;
}

.food-list .row {
  margin: 0 -10px;
}

.food-list img {
  display: inline-block;
  width: 100%;
  height: auto;
  vertical-align: bottom;
}

.food-list .pic {
  display: block;
  height: 138px;
  margin: 0 auto 5px auto;
  text-align: center;
  font-size: 0;
  width: 138px;
}

img {
  border: 0;
}
}

div {
  display: block;
}


</style>