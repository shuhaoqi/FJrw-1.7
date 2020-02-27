<template>
  <div class="hello">
    <div class="header">
      <div class="header_two">
        <div class="header_two_head">
          <div class="header_two_head1">
            <ul>
              <li>
                <a style="font-size:12px;color: #A1A4A5;">订单追踪</a>
                <i class="el-icon-s-order" style="color:white;"></i>
              </li>
              <li>
                <a style="font-size:12px;color: #A1A4A5;">帮助中心</a>
                <i class="el-icon-search" style="color:white;"></i>
              </li>
              <li>
                <a style="font-size:12px;color: #A1A4A5;">在线客服</a>
                <i class="el-icon-chat-dot-square" style="color:white;"></i>
              </li>
              <li style="padding-right:0px;">
                <a style="font-size:12px;color: #A1A4A5;">登录</a>
                <i class="el-icon-s-check" style="color:white;"></i>
              </li>
            </ul>
          </div>
        </div>
        <div class="header_two_foot">
          <div class="header_two_foot1">
            <div style="flex:6">
              <h1
                style="width:93px;height:50px;position: relative;float:left;margin:0;"
              >
                <a style="position: absolute;left: 0;top: -10px;">
                  <img
                    src="https://static.adidas.com.cn/images/logo-new.png"
                    style="width:64px;height:44px;"
                  />
                </a>
              </h1>
              <ul class="head_ul">
                <li>男子</li>
                <li>女子</li>
                <li>儿童</li>
                <li>|</li>
                <li>运动</li>
                <li>品牌</li>
                <li style="position: relative;">
                  新年造新象
                  <span
                    style="position: absolute;top: -4px;right: -16px;color:#2ada71;font-size:10px;"
                    >HOT</span
                  >
                </li>
              </ul>
            </div>
            <div style="flex:2"></div>
            <ul style="flex:3;display:flex;">
              <li style="flex:10;height: 50px;">
                <form style="width:100%;position: relative;">
                  <input type="text" name="" id="input" />
                  <a
                    style="position: absolute;top: 1px;left: 0;width: 32px;height: 32px;"
                  >
                    <i
                      class="el-icon-search"
                      style="font-weight: 1000;color:black;position: absolute;top: 9px;left: 7px;"
                    ></i>
                  </a>
                </form>
              </li>
              <li style="flex:2;height: 32px;margin-top:9px">
                <i
                  class="el-icon-s-order"
                  style="font-size: 22px;color:white;"
                ></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div style="flex:4">
      <i
        class="el-icon-close"
        style="float:right;color:white;font-size:20px;margin-right:80px;"
      ></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  methods: {}
};
</script>

<style scoped>
.header_bottom {
  position: absolute;
  left: 0;
  top: 136px;
  height: 30px;
  width: 99%;
  margin-left: 8px;
  display: flex;
  background: black;
  position: fixed;
  z-index: 1000;
}
#input {
  border-radius: 0;
  background: #fff;
  outline: 0;
  width: 75%;
  padding: 0 34px;
  font-size: 12px;
  color: #000;
  height: 32px;
  line-height: 16px;
  border: 1px solid #000;
}
.head_ul li {
  padding: 0 15px;
  height: 50px;
  line-height: 50px;
  float: left;
  font-size: 18px;
  color: white;
  font-weight: 1000;
}
.head_ul {
  width: 85%;
  height: 50px;
  margin-top: -9px;
  float: right;
}
.header_two_foot1 {
  padding: 0 20px;
  height: 50px;
  width: 89%;
  margin: 10px 50px;
  display: flex;
}
.header_two_foot {
  position: relative;
  width: 100%;
  height: 50px;
}
.header_two_head1 ul li {
  padding: 0 20px;
}
.header_two_head1 ul {
  height: 30px;
  float: right;
  margin: 0;
  line-height: 30px;
}
.header_two_head1 {
  padding: 0 20px;
  height: 30px;
  width: 89%;
  margin: 0 50px;
}
.header_two_head {
  position: relative;
  width: 100%;
  height: 30px;
}
.header_two {
  width: 100%;
  height: 100px;
  z-index: 11;
  background: #000;
}
.header {
  width: 100%;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 11;
  position: fixed;
  z-index: 1000;
  width: 99%;
  margin-left: 8px;
}
.header_one {
  width: 100%;
  height: 56px;
}
.header_one img {
  width: 100%;
  height: 56px;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
li {
  display: inline-block;
}
</style>
