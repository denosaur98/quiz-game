<template>
  <div class="header">
    <nav class="header__navigation">
      <NuxtLink to="#" class="nav__link">О нас</NuxtLink>
      <NuxtLink to="#" class="nav__link">О нас</NuxtLink>
      <NuxtLink to="#" class="nav__link">О нас</NuxtLink>
    </nav>
    <Authorization/>
  </div>
</template>

<script setup>
import Authorization from '~/components/Authorization.vue';
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 280px 20px 300px;
  background: #fff;
  border-bottom: 2px solid #b1b1b1;
  height: 70px;

  .header__navigation {
    display: flex;
    justify-content: space-between;
    width: 500px;
    
    .nav__link {
      font-size: 20px;
      color: #000;
      text-decoration: none;
      text-transform: uppercase;

      &:hover {
        opacity: 0.5;
        transition: 0.3s;
      }
    }
  }
}
</style>