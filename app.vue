<template>
  <Header></Header>
  <router-view></router-view>
  <Footer></Footer>
</template>

<script>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
export default {
  components: { Header, Footer },
};
</script>

<style>
@import url("~/public/styles/dist/min/All.min.css");
</style>