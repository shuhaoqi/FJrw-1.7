<template>
  <div class="year">
    <div class="left" v-for="item in data" :key="item.index">
      <a>
        <img style="max-width: 100%;" :src="item.src" alt />
      </a>
      <div class="xin">
        <a style="width:100%;height:43px;display: block;text-align:center;">
          <p style="color:white;font-size:20px;font-weight:700;margin:0;">
            {{ item.p }}
          </p>
        </a>
        <a class="year_a" style="background:white;color:black;">
          立即抢购
          <span style="float:right;font-size:28px;line-height:40px;">→</span>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "year",
  data() {
    return {
      data: [
        {
          src:
            "https://img.adidas.com.cn/resources/2019kvbanner/Dec/924-613-sp-cny-shoes.jpg",
          p: "运动表现鞋类"
        },
        {
          src:
            "https://img.adidas.com.cn/resources/2020kvbanner/jan/CNY-feature-pc.jpg",
          p: "Originals鞋类"
        }
      ]
    };
  }
};
</script>
<style>
.year_a {
  width: 115px;
  height: 48px;
  position: absolute;
  left: 60px;
  font-size: 15px;
  padding: -40px 21px;
  background: black;
  color: white;
  line-height: 48px;
  font-weight: 1000;
}
.xin {
  position: absolute;
  bottom: 6%;
  left: 28%;
  width: 294px;
  height: 91px;
}
.left {
  width: 50%;
  padding: 0 10px;
  position: relative;
}
.year {
  width: 100%;
  height: 431px;
  margin-top: 20px;
  display: flex;
}
</style>
