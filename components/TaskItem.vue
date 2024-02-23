<template>
  <div class="task">
    <div class="task__content" v-for="task in mock" :key="task.title">
      <div class="content__header">
        <button class="header__close">
          <FontAwesomeIcon :icon="faXmark" class="close__icon"/>
        </button>
        <h1 class="header__title">выберите &nbsp;правильный &nbsp;ответ</h1>
        <div class="header__modal">
          <button :class="isModalOpen ? 'modal__light-active' : 'modal__light'" @click="toggleModal">
            <FontAwesomeIcon :icon="isModalOpen ? faLightbulb : LightbulbOff"/>
          </button>
          <div class="modal__window" v-if="isModalOpen" @click="toggleModal">
            <p class="window__title">Правильный ответ:</p>
            <div class="window__answers">
              <p v-for="correct in task.correct">{{ correct }}</p>
            </div>
          </div>
        </div>
      </div>
      <h1 class="content__question">{{ task.title }}</h1>
      <div class="content__variants">
        <div class="variants__pictures">
          <img v-for="(image, index) in task.images" :src="image" :key="index">
        </div>
        <div class="variants__letter">
          <p v-for="(letter, index) in task.variants" :key="index">{{ letter }}</p>
        </div>
      </div>
      <div class="content__answers">
        <button class="answer__btn" v-for="variant in task.variants">{{ variant }}</button>
        <button class="check__btn" @click="answerSubmit">ответ</button>
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
import { faLightbulb as LightbulbOff } from '@fortawesome/free-solid-svg-icons';

const isModalOpen = ref(false)
function toggleModal() {
  isModalOpen.value = !isModalOpen.value
}

function answerSubmit() {

}
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

      .header__close, .modal__light {
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

      .modal__light-active {
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
        background: #ffbf46;
        border: none;
        box-shadow: 1px 1px 10px 2px #fff;
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
      flex-direction: column;
      width: 500px;
      margin-top: 150px;

      .variants__pictures {
        display: flex;
        justify-content: space-between;
        width: 100%;

        img {
          height: 90px;
          width: 90px;
        }
      }

      .variants__letter {
        display: flex;
        justify-content: space-between;
        width: 100%;

        p {
          text-align: center;
          width: 90px;
          font-size: 25px;
        }
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

  .modal__window {
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 10px;
    width: 200px;
    height: 65px;
    background: #fff;
    border-radius: 5px;
    box-shadow: 1px 1px 10px 1px #c5c5c5;
    margin-top: 5px;
    margin-left: -160px;

    .window__title {
      font-size: 17px;
      text-transform: uppercase;
      text-decoration: underline;
    }

    .window__answers {
      display: flex;
      gap: 10px;
      font-size: 20px;
      color: #00811c;
      text-transform: uppercase;
    }
  }
}
</style>