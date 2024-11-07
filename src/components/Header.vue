<template>
  <header class="header">
    <div class="header__background"></div>
    <div class="container">
      <nav class="header__menu">
        <router-link
          :to="isMainPage ? '/login' : '/'"
          class="header__profile"
        >
          {{ isMainPage ? 'Личный кабинет' : 'На главную'}}
        </router-link>
        <div class="header__catalog">
          <p>Каталог услуг</p>
        </div>
        <div class="header__helper">
          <img src="/src/assets/img/help-icon.svg" alt="rocket" />
          <p>Онлайн помощник</p>
        </div>
      </nav>      
    </div>
  </header>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
export default {
  name: 'Header',
  setup() {
    const route = useRoute();
    const isMainPage = computed(() => route.path === '/');

    return { isMainPage };
  }
};
</script>

<style>

.header {
  margin: 35px 0 63px;
}

.header__menu {
  display: flex;
  align-items: center;
}

.header__profile {
  color: #FFF;
  font-size: 16px;
  font-weight: 400;
  border-radius: 50px;
  background: #FE5F5F;
  padding: 7px 30px;
}

.header__catalog {
  color: #000;
  font-size: 16px;
  font-weight: 700;
  margin-left: 27px;
}

.header__helper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  margin-left: auto;
  color: #FE5F5F;
  font-size: 16px;
  font-weight: 700;
  line-height: 122.4%;
}

</style>