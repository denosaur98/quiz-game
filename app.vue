<template>
  <NuxtPage>
    <Index/>
  </NuxtPage>
</template>

<script setup>
import Index from '~/pages/index.vue';
</script>

<style>
@font-face {
  font-family: 'UbuntuBold';
  src: url('./assets/UbuntuBold.ttf');
}
@font-face {
  font-family: 'Expressway';
  src: url('./assets/Expressway.ttf');
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Expressway';
}
</style>