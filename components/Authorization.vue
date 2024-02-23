<template>
  <div class="autorization__sign">
    <div class="sign__wrapper">
      <div class="sign__avatar">
        <FontAwesomeIcon :icon="faUser" class="avatar__icon"/>
      </div>
      <button class="sign__btn" @click="toggleSign" v-if="!loggedUser">войти</button>
      <div class="user__info" v-else>
        <p class="info__title">вы вошли как:</p>
        <div class="info__description">
          <p class="user__name">{{ loginValue }}</p>
          <div class="user__coins">
            <p class="coin">{{ userCoins }}</p>
            <img src="~/assets/coin.png">
          </div>
        </div>
      </div>
    </div>
    <div class="sign__overlay" v-if="isSignOpen" @click="toggleSign"></div>
    <div class="sign__modal" v-if="isSignOpen">
      <button class="modal__close">
        <FontAwesomeIcon :icon="faXmark" class="close__icon"/>
      </button>
      <h1 class="modal__title">вход</h1>
      <div class="modal__inputs">
        <input class="login" placeholder="введите логин:" v-model="loginInp">
        <input class="password" placeholder="введите пароль:" type="password" v-model="passwordInp">
      </div>
      <button class="model__enter" @click="signIn">войти</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import store from '~/store/index.js'

const isSignOpen = ref(false)
function toggleSign() {
  isSignOpen.value = !isSignOpen.value
}

const loginInp = ref('')
const passwordInp = ref('')
const loggedUser = ref(false)
const loginValue = ref('')
const userCoins = ref(0)
function signIn() {
  const userId = store.state.users.length + 1
  store.dispatch('signIn', {
    id: userId,
    login: loginInp.value,
    password: passwordInp.value,
    coins: 0
  })
  loginValue.value = store.state.users[0].login
  userCoins.value = store.state.users[0].coins
  isSignOpen.value = false
  loginInp.value = ''
  passwordInp.value = ''
  loggedUser.value = true
}
</script>

<style lang="scss" scoped>
.autorization__sign {
  display: flex;
  flex-direction: column;

  .sign__wrapper {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 10px;
    align-items: center;

    .sign__avatar {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      padding: 10px;
      box-shadow: 1px 1px 5px 0.5px #5c5c5c;
      border-radius: 50%;
      background: none;
    }

    .sign__btn {
      cursor: pointer;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 5px;
      border: none;
      background: none;
      font-size: 17px;
      width: 120px;

      &:hover {
        opacity: 0.5;
        transition: 0.3s;
      }
    }

    .user__info {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      
      .info__title {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        border: none;
        background: none;
        font-size: 17px;
        width: 120px;
      }

      .user__name {
        text-decoration: underline;
      }

      .info__description {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-right: auto;
        min-width: 105px;

        .user__coins {
          display: flex;
          min-width: 20px;
          justify-content: flex-start;
          gap: 5px;

          img {
            width: 20px;
            height: 20px;
          }
        }
      }
    }
  }

  .sign__overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgb(0, 0, 0, 0.5);
    z-index: 1;
    top: 0;
    left: 0;
  }
  
  .sign__modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 20px;
    border-radius: 5px;
    z-index: 2;
    position: fixed;
    width: 510px;
    height: 510px;
    top: 50%;
    left: 50%;
    background: #fff;
    transform: translate(-50%, -50%);
    box-shadow: 1px 1px 10px 1px #c5c5c5;

    .modal__title {
      font-size: 50px;
      font-family: 'UbuntuBold';
      margin-top: 30px;
    }

    .modal__close {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      background: none;
      border: none;
      margin-left: auto;

      .close__icon {
        font-size: 30px;
      }
    }

    .modal__inputs {
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin-top: 80px;
      width: 100%;

      .login, .password {
        width: 100%;
        border: none;
        outline: none;
        padding: 8px 10px;
        box-shadow: 1px 1px 5px 1px #5c5c5c;
        font-size: 20px;
        border-radius: 5px;
      }
    }

    .model__enter {
      cursor: pointer;
      text-transform: uppercase;
      font-size: 20px;
      padding: 10px;
      background: none;
      box-shadow: 1px 1px 5px 1px #5c5c5c;
      border: none;
      border-radius: 5px;
      width: 120px;
      margin-top: 30px;

      &:hover {
        background: #ffe5e5;
        transition: 0.3s;
      }
    }
  }
}
</style>