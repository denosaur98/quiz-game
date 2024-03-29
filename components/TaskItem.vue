<template>
  <div class="task">
    <div class="task__content" v-if="currentTask" :key="currentTask.id">
      <div class="content__header">
        <button class="header__close" @click="removeTask">
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
              <p v-for="correct in currentTask.correct">{{ correct }}</p>
            </div>
          </div>
        </div>
      </div>
      <h1 class="content__question">{{ currentTask.title }}</h1>
      <div class="content__variants">
        <div class="variants__pictures">
          <img v-for="(image, index) in currentTask.images" :src="image" :key="index">
        </div>
        <div class="variants__letter">
          <p v-for="(letter, index) in currentTask.variants" :key="index">{{ letter }}</p>
        </div>
      </div>
      <div class="content__warring">
        <p v-if="incorrectAnswer">{{ warring }}</p>
      </div>
      <div class="content__answers">
        <button 
          :class="{ 'answer__btn': !selectedVariants.includes(variant), 'answer__btn-active': selectedVariants.includes(variant) }" 
          v-for="variant in currentTask.variants" 
          @click="toggleVariants(variant)">
          {{ variant }}
        </button>
        <button class="check__btn" @click="submitAnswer(currentTask.id)">ответ</button>
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

const selectedVariants = ref([])
function toggleVariants(variant) {
  const index = selectedVariants.value.indexOf(variant)
  if(index === -1) {
    selectedVariants.value.push(variant)
  } else {
    selectedVariants.value.splice(index, 1)
  }
}

const currentTask = ref(mock.tasks[0])
const incorrectAnswer = ref(false)
const warring = 'неверный ответ'
function submitAnswer(id) {
  const taskIndex = mock.tasks.findIndex(i => i.id === id)
  const task = mock.tasks.find(i => i.id === id)
  const variants = selectedVariants.value.slice().sort().toString()
  const correct = task.correct.slice().sort().toString()

  if(variants === correct) {
    if(mock.tasks.length - 1 > taskIndex) {
      currentTask.value = mock.tasks[taskIndex + 1]
      selectedVariants.value = []
      incorrectAnswer.value = false
    } else {
      currentTask.value = mock.tasks[0]
      selectedVariants.value = []
      incorrectAnswer.value = false
    }
  } else {
    currentTask.value = mock.tasks[taskIndex]
    selectedVariants.value = []
    incorrectAnswer.value = true
  }
}
</script>

<style lang="scss" scoped>
.task {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 849.4px;
  min-height: 849.4px;
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

      @media (max-width: 1300px) {
        padding: 100px 100px 0;
      }

      @media (max-width: 800px) {
        padding: 100px 50px 0;
      }

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
        text-align: center;

        @media (max-width: 1300px) {
          text-align: center;
          letter-spacing: 1px;
          font-size: 25px;
        }

        @media (max-width: 800px) {
          font-size: 20px;
          padding: 10px;
        }
      }
    }

    .content__question {
      margin-top: 20px;
      font-size: 50px;

      @media (max-width: 850px) {
        font-size: 45px;
        text-align: center;
        padding: 10px;
      }

      @media (max-width: 650px) {
        font-size: 45px;
        width: 500px;
        text-align: center;
        margin-top: 30px;
      }

      @media (max-width: 500px) {
        font-size: 40px;
        width: 450px;
      }

      @media (max-width: 450px) {
        font-size: 35px;
        width: 400px;
      }

      @media (max-width: 400px) {
        width: 330px;
        font-size: 30px;
      }
    }

    .content__warring {
      display: flex;
      justify-content: center;
      margin-top: auto;
      width: 100%;

      p {
        color: #d30000;
        font-size: 40px;
        font-weight: 700;
        text-transform: uppercase;
      }
    }

    .content__variants {
      display: flex;
      flex-direction: column;
      width: 500px;
      margin-top: 150px;

      @media (max-width: 580px) {
        width: 400px;
      }

      @media (max-width: 400px) {
        width: 330px;
      }

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
        opacity: 1;

        &:hover {
          background: #ffe5e5;
          transition: 0.3s;
        }
      }

      .answer__btn-active {
        cursor: pointer;
        width: 100%;
        border: none;
        border-radius: 5px;
        font-size: 50px;
        text-transform: uppercase;
        background: #319b00;

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