<template>
  <div>
    <div class="two2">
      <a style="position: relative;">
        <img style="max-width: 100%;" src="../assets/图片1.png" alt />

        <a class="two_a">
          立即抢购
          <span style="float:right;font-size:28px;line-height:40px;">→</span>
        </a>
        <a class="two_a2">
          了解更多
          <span style="float:right;font-size:28px;line-height:40px;">→</span>
        </a>
      </a>
    </div>
    <img style="width:100%; height:240px" src="../assets/列表鞋.png" alt="" />
  </div>
</template>
<script>
export default {
  name: "shoes"
};
</script>
<style>
.two_a2 {
  width: 115px;
  height: 48px;
  position: absolute;
  bottom: 108px;
  left: 158px;
  font-size: 15px;
  padding: 0 21px;
  background: white;
  color: black;
  line-height: 48px;
  font-weight: 1000;
}
.two_a {
  width: 115px;
  height: 48px;
  position: absolute;
  bottom: 175px;
  left: 158px;
  font-size: 15px;
  padding: 0 21px;
  background: white;
  color: black;
  line-height: 48px;
  font-weight: 1000;
}
.two {
  width: 100%;
  /* height: 505px; */
  margin-top: 45px;
}
</style>
