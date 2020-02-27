<template>
  <div class="home">
    <HelloWorld />
    <Shoes />
    <Year />
    <Two2 />
    <Two />
    <Three />
    <Qjf />
    <Lun />
    <Footer />
  </div>
</template>

<script>
import Shoes from "../components/shoes";
import HelloWorld from "../components/HelloWorld";
import Year from "../components/year";
import Two2 from "../components/two2";
import Two from "../components/two";
import Three from "../components/three";
import Qjf from "../components/qjf";
import Lun from "../components/lun";
import Footer from "../components/footer";

export default {
  name: "home",
  components: {
    HelloWorld,
    Shoes,
    Year,
    Two2,
    Two,
    Three,
    Qjf,
    Lun,
    Footer
  }
};
</script>
