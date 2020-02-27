<template>
  <div class="header">
    <!-- 头部 -->
    <div class="header-center">
      <a href="" class="logo">
        <img src="../assets/sf.png" alt="顺丰速运" />
      </a>
      <ul class="topleft">
        <li class="topli">首页</li>
        <li class="topli">物流</li>
        <li class="topli">金融</li>
        <li class="topli">成功案例</li>
        <li class="topli">服务支持</li>
        <li class="topli">顺丰控股投资者关系</li>
        <li class="topli">关于我们</li>
      </ul>
      <div class="topright">
        <div style="padding:0 10px">
          <span class="icon"></span>
          <a href="" class="topa">快速登录/注册</a>
          <a href="" class="flag"></a>
        </div>
      </div>
    </div>
    <!-- 轮播图 -->
    <div class="banner">
      <!--动态将图片轮播图的容器高度设置成与图片一致-->
      <el-carousel :interval="5000" arrow="never">
        <el-carousel-item v-for="item in list" :key="item">
          <img :src="item" class="banner-img" />
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- 全功能 -->
    <div class="biliti">
      <div class="content">
        <ul>
          <li>
            <a href="" class="zz">
              运单追踪
            </a>
          </li>
          <li>
            <a href="" class="jd">
              我要寄件
            </a>
          </li>
          <li>
            <a href="" class="sx">
              运费时效查询
            </a>
          </li>
          <li>
            <a href="" class="wd">
              服务网点查询
            </a>
          </li>
          <li>
            <a href="" class="fw">
              收寄范围查询
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "heade",
  data() {
    return {
      list: [
        "https://www.sf-express.com/cn/sc/download/IMG20190905_170942.jpg",
        "https://www.sf-express.com/cn/sc/download/IMG20190905_170942.jpg"
      ]
    };
  }
};
</script>

<style scoped>
.fw {
  background: url(../assets/smallBanner-icon.png) no-repeat 0 -152px;
}
.wd {
  background: url(../assets/smallBanner-icon.png) no-repeat 0 -115px;
}
.sx {
  background: url(../assets/smallBanner-icon.png) no-repeat 0 -77px;
}
.jd {
  background: url(../assets/smallBanner-icon.png) no-repeat 0 -38px;
}
.zz {
  background: url(../assets/smallBanner-icon.png) no-repeat;
}
.content ul li a {
  color: #fff;
  padding: 5px 0 5px 41px;
  font-size: 16px;
}
.content ul li {
  float: left;
  width: 256px;
  height: 100%;
  text-align: center;
  line-height: 98px;
  position: relative;
  background: url(../assets/pb-wrapper-line.png) no-repeat center right;
}
.content {
  width: 1280px;
  height: 100%;
  margin: auto;
}
.biliti {
  width: 100%;
  height: 98px;
  background: #dc1e32;
}
.banner-img {
  width: 100%;
  height: 500px;
}
.banner {
  width: 100%;
}
.flag {
  width: 20px;
  height: 20px;
  background: url(../assets/header-phoneicon.png) no-repeat 12px -83px;
  display: inline-block;
  padding: 0 10px;
  margin-bottom: -5px;
}
.topa {
  color: black;
}
.icon {
  width: 20px;
  height: 20px;
  display: inline-block;
  margin-bottom: -5px;
  background: url(../assets/header-phoneicon.png) no-repeat 1px -27px;
}
.topright {
  float: right;
}
.topli {
  padding: 0 14px;
  float: left;
}
.topleft {
  float: left;
  margin-left: 30px;
}
.header {
  width: 100%;
  line-height: 70px;
  font-size: 14px;
}
.header-center {
  width: 1280px;
  height: 70px;
  margin: auto;
}
.logo {
  float: left;
  height: 44px;
  margin-top: 13px;
}
</style>
