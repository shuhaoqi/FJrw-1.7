<template>
  <div class="home">
    <HelloWorld />
    <Lbt />
    <Xtb />
    <Cplb />
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'
import Lbt from '../components/Lbt.vue'
import Xtb from '../components/Xtb.vue'
import Cplb from '../components/Cplb'
export default {
  name: 'home',
  components: {
    HelloWorld,
    Lbt,
    Xtb,
    Cplb
  }
}
</script>
