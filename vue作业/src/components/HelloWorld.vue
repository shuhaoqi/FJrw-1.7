<template>
  <div class="hello">
    <div class="heade-01">
      <div class="heade-ys-02">
        分类
      </div>
      <div class="heade-ys-03">
        <input class="heade-ys-03-01" type="text" placeholder="手机" />
      </div>
      <div class="heade-ys-04">
        +
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.heade-01 {
  width: 100%;
  height: 50px;
  /* border: 1px solid red; */
}
.heade-ys-02 {
  float: left;
  margin: 15px 20px;
  color: #999999;
}
.heade-ys-03 {
  float: left;
  margin: 10px 0px;
}
.heade-ys-03-01{
  width: 200px;
  height:25px;
  border-radius: 15px;
  background-color: #F0F0F0;
}
.heade-ys-04 {
  float: left;
  margin: 5px 39px;
  padding-right: -20px;
  color: red;
  font-size: 30px;
}
</style>
