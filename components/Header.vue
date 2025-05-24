<template>
  <header ref="header">
    <img src="/media/images/logo.png" alt="" />
    <div class="menu" @click="toggleMenu">
      <span></span>
    </div>
    <nav>
      <a href="">О Нас</a>
      <a href="">Для спонсоров</a>
      <a href="">Реквизиты</a>
      <a href="">Обратная связь</a>
      <a href="">Для волонтеров</a>
    </nav>
  </header>
</template>

<style scoped>
@import url("~/public/styles/dist/min/Header.min.css");
</style>

<script>
export default {
  methods: {
    toggleMenu() {
      this.$refs["header"].classList.toggle("is-active");
    },
  },
};
</script>