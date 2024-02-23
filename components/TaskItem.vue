<template>
  <div class="task">
    <div class="task__content" v-for="task in mock" :key="task.title">
      <div class="content__header">
        <button class="header__close">
          <FontAwesomeIcon :icon="faXmark" class="close__icon"/>
        </button>
        <h1 class="header__title">выберите &nbsp;правильный &nbsp;ответ</h1>
        <button class="header__close">
          <FontAwesomeIcon :icon="faLightbulb"/>
        </button>
      </div>
      <h1 class="content__question">{{ task.title }}</h1>
      <div class="content__variants">
        <img class="variants__image" v-for="(image, index) in task.images" :src="image" :key="index">
      </div>
      <div class="content__answers">
        <button class="answer__btn">a</button>
        <button class="answer__btn">b</button>
        <button class="answer__btn">c</button>
        <button class="check__btn">ответ</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import mock from '~/store/mock.json'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';
// import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
</script>

<style lang="scss" scoped>
.task {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 92.4vh;
  width: 100%;

  .task__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;

    .content__header {
      display: flex;
      justify-content: space-between;
      padding: 100px 300px 0;
      width: 100%;

      .header__close {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        font-size: 25px;
        width: 40px;
        height: 40px;
        background: none;
        border-radius: 5px;
        background: #ebebeb;
        border: none;
        box-shadow: 1px 1px 5px 1px #5c5c5c;
      }

      .header__title {
        letter-spacing: 3px;
        text-transform: uppercase;
        width: 510px;
        font-size: 30px;
      }
    }

    .content__question {
      margin-top: 20px;
      font-size: 50px;
    }

    .content__variants {
      display: flex;
      justify-content: space-between;
      width: 500px;
      margin-top: 150px;

      .variants__image {
        height: 90px;
        width: 90px;
      }
    }

    .content__answers {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding: 20px;
      background: rgba(220, 220, 225, 0.8);
      margin-top: auto;
      height: 100px;
      gap: 30px;

      .answer__btn {
        cursor: pointer;
        width: 100%;
        border: none;
        border-radius: 5px;
        font-size: 50px;
        text-transform: uppercase;

        &:hover {
          background: #ffe5e5;
          transition: 0.3s;
        }
      }

      .check__btn {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;
        width: 200px;
        height: 100%;
        padding: 15px;
        border: none;
        border-radius: 5px;
        text-transform: uppercase;

        &:hover {
          background: #ffe5e5;
          transition: 0.3s;
        }
      }
    }
  }
}
</style>