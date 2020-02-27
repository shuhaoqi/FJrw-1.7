<template>
  <div style="height:20px;margin-top:20px">
    <div class="block">
      <span class="demonstration"></span>
      <el-carousel height="150px">
        <el-carousel-item>
          <img style="width:100%;"
               src="https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2394972844,3024358326&fm=26&gp=0.jpg"
               alt="">
        </el-carousel-item>
        <el-carousel-item>
          <img style="width:100%;"
               src="https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3381573685,1866477444&fm=26&gp=0.jpg"
               alt="">
        </el-carousel-item>
        <el-carousel-item>
          <img style="width:100%;"
               src="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2229864841,4232235061&fm=26&gp=0.jpg"
               alt="">
        </el-carousel-item>
        <el-carousel-item>
          <img style="width:100%;"
               src="https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3437217665,1564280326&fm=26&gp=0.jpg"
               alt="">
        </el-carousel-item>
      </el-carousel>

    </div>
    <!-- 时间线 -->
    <div class="block"
         style="width:300px;">
      <div class="radio">
        排序：
        <el-radio-group v-model="reverse">
          <el-radio :label="true">倒序</el-radio>
          <el-radio :label="false">正序</el-radio>
        </el-radio-group>
      </div>

      <el-timeline :reverse="reverse">
        <el-timeline-item v-for="(activity, index) in activities"
                          :key="index"
                          :timestamp="activity.timestamp"
                          :size="activity.size">
          {{activity.content}}
        </el-timeline-item>
      </el-timeline>
    </div>
    <div style="margin-left: 80px; height: 200px;">
      <el-collapse-transition>
        <div v-show="show3">
          <div class="transition-box">你好，我是皮皮这一年快要结束了，我渴望作业的力量但我几分宁静阿迪可怕模块； 蒙地卡罗马赛克没打吗麦科马克但我能简单就能批获得第五次都没立刻马上来你才是多少的委屈我的钱名；a</div>
        </div>
      </el-collapse-transition>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show3: true,
      radio: "1",
      reverse: true,
      size: "large",
      activities: [
        {
          content: "天行健君子以自强不息地势坤君子以厚德载物",
          timestamp: "2020_01_10"
        },
        {
          content: "我觉得我最大的优点是过于挑战自己",
          timestamp: "2020_01_11"
        },
        {
          content: "寒假作业我要写很多作业",
          timestamp: "2020_01_12"
        }
      ]
    };
  }
};
</script>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.transition-box {
  margin-bottom: 10px;
  width: 700px;
  height: 50px;
  border-radius: 4px;
  background-color: #dee1e6;
  color: #929293;
  padding: 40px 20px;
  margin-right: 20px;
  font-size: 10px;
}
</style>