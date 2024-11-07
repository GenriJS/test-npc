<template>
  <div id="app">
    <Header />
    <RouterView />
    <Footer />
  </div>
</template>

<script>

import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import { useRoute } from 'vue-router';

export default {
  components: {
    Header,
    Footer,
  },
  setup() {
    const route = useRoute();
    return { route };
  },
};
</script>