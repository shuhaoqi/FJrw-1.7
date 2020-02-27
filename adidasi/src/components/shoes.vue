<template>
  <div>
    <div class="shoes">
      <a style="position: relative;">
        <img
          style="max-width: 100%;"
          src="https://img.adidas.com.cn/resources/2020kvbanner/jan/cp/1920-720-20-cny.jpg"
          alt
        />
        <a class="shoes_a">
          立即抢购
          <span style="float:right;font-size:28px;line-height:40px;">→</span>
        </a>
      </a>
    </div>
    <div style="margin-top:-5px;">
      <a style="position: relative;">
        <video
          autoplay
          muted
          style="width: 100%;"
          src="https://cm11-c110-2.play.bokecc.com/flvs/ca/Qxdgv/uOISkydwGn-30.mp4?t=1581421618&key=6950B15282FE139533D0138690B6B4B4&tpl=10"
        ></video>
        <a class="shoes_a" style="background:white;color:black;">
          了解更多
          <span style="float:right;font-size:28px;line-height:40px;">→</span>
        </a>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "shoes"
};
</script>
<style>
.shoes_a {
  width: 115px;
  height: 48px;
  position: absolute;
  bottom: 108px;
  left: 158px;
  font-size: 15px;
  padding: 0 21px;
  background: black;
  color: white;
  line-height: 48px;
  font-weight: 1000;
}
.shoes {
  width: 100%;
  height: 505px;
  margin-top: 80px;
}
</style>
