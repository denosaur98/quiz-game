<template>
  <div class="home">
    <Header/>
    <TaskItem/>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Header from '~/components/Header.vue';
import TaskItem from '~/components/TaskItem.vue'
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
  width: 100%;
  background-size: cover;
  background: url('~/assets/app_field.png') no-repeat center center fixed;
}
</style>