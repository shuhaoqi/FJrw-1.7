<template>
  <div class="lun">
    <div class="lun_one">
      <h3 class="h3">本月主推</h3>
      <div class="lunbo">
        <el-carousel indicator-position="outside">
          <el-carousel-item>
            <img
              style="width:100%"
              src="http://img0.imgtn.bdimg.com/it/u=3895100990,635512922&fm=26&gp=0.jpg"
              alt=""
            />
          </el-carousel-item>
          <el-carousel-item>
            <img
              style="width:100%"
              src="http://img1.imgtn.bdimg.com/it/u=1197345756,3520149347&fm=26&gp=0.jpg"
              alt=""
            />
          </el-carousel-item>
          <el-carousel-item>
            <img
              style="width:100%"
              src="http://img2.imgtn.bdimg.com/it/u=3649872642,2652588450&fm=26&gp=0.jpg"
              alt=""
            />
          </el-carousel-item>
          <el-carousel-item>
            <img
              style="width:100%"
              src="http://img3.imgtn.bdimg.com/it/u=663569452,257036219&fm=26&gp=0.jpg"
              alt=""
            />
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "lun"
};
</script>
<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.lunbo {
  width: 100%;
  height: 100%;
}
.h3 {
  font-size: 28px;
  text-align: left;
  padding-bottom: 20px;
  font-weight: 400;
  padding-left: 6px;
  padding-right: 6px;
}
.lun_one {
  max-width: 1252px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0 20px;
  margin-bottom: 20px;
}
.lun {
  width: 100%;
  height: 460px;
  padding-top: 30px;
}
</style>
