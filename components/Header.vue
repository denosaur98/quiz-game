<template>
  <div class="header">
    <nav class="header__navigation">
      <NuxtLink to="#" class="nav__link">главная</NuxtLink>
      <NuxtLink to="#" class="nav__link">приложение</NuxtLink>
      <NuxtLink to="#" class="nav__link">о нас</NuxtLink>
    </nav>
    <button class="burger__menu" @click="toggleDropdown">
      <FontAwesomeIcon :icon="faBars" class="menu__icon"/>
    </button>
    <div class="burger__dropdown" v-if="isDropdownOpen">
      <NuxtLink class="menu__items" to="#" v-for="item in dropdown">{{ item }}</NuxtLink>
    </div>
    <Authorization/>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Authorization from '~/components/Authorization.vue';

const dropdown = [
  "главная",
  "приложение",
  "о нас"
]
const isDropdownOpen = ref(false)
function toggleDropdown() {
  isDropdownOpen.value = !isDropdownOpen.value
}
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

  @media (max-width: 1300px) {
    padding: 20px 80px 20px 100px;
  }

  @media (max-width: 800px) {
    padding: 20px 30px 20px 50px;
  }

  .header__navigation {
    display: flex;
    justify-content: space-between;
    width: 500px;

    @media (max-width: 1300px) {
      width: 350px;
    }

    @media (max-width: 650px) {
      width: 300px;
    }

    @media (max-width: 580px) {
      display: none;
    }
    
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

  .burger__menu {
    display: none;

    @media (max-width: 580px) {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 50px;
      background: none;
      border: none;

      .menu__icon {
        width: 30px;
        height: 30px;
      }
    }
  }

  .burger__dropdown {
    display: none;

    @media (max-width: 580px) {
      display: flex;
      flex-direction: column;
      position: absolute;
      margin-top: 120px;
      margin-left: 10px;
      background: #fff;
      justify-content: center;
      padding: 10px;
      border-radius: 5px;
      box-shadow: 1px 1px 10px 1px #c5c5c5;
      gap: 10px;

      .menu__items {
        height: 15px;
        color: #000;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: 600;
      }
    }
  }
}
</style>