<template>
  <div class="">
      Cart
      <NavHeader></NavHeader>
      <router-view></router-view>
      <NavFooter></NavFooter>
  </div>
</template>

<script>
import NavHeader from './../components/NavHeader.vue';
import NavFooter from './../components/NavFooter.vue';

export default {
  
  data() {
    return {

    }
  },
  props: {

  },
  components: {
NavHeader,
NavFooter
  },
  methods: {

  },
  mounted(){

  },
}
</script>

<style lang="scss" scoped>

</style>