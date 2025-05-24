<template>
  <header ref="header" itemscope itemtype="http://schema.org/WPHeader">
    <img
      src="/media/images/logo.png"
      alt="Логотип фонда Зов Сердца"
      itemprop="image"
    />
    <div class="menu" @click="toggleMenu" aria-label="Меню навигации">
      <span></span>
    </div>
    <nav itemscope itemtype="http://schema.org/SiteNavigationElement">
      <a href="#about-us" @click="closeMenu" itemprop="url"
        ><span itemprop="name">О Нас</span></a
      >
      <a href="#sponsors" @click="closeMenu" itemprop="url"
        ><span itemprop="name">Для спонсоров</span></a
      >
      <a href="#requisites" @click="closeMenu" itemprop="url"
        ><span itemprop="name">Реквизиты</span></a
      >
      <a href="#feedback" @click="closeMenu" itemprop="url"
        ><span itemprop="name">Обратная связь</span></a
      >
      <a href="#volunteers" @click="closeMenu" itemprop="url"
        ><span itemprop="name">Для волонтеров</span></a
      >
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
    closeMenu() {
      this.$refs["header"].classList.remove("is-active");
    },
  },
};
</script>