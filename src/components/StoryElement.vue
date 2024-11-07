<template>
  <div class="stories__element">
    <img v-if="isImageFirst" :src="imgSrc" alt="hero-photo" />
    
    <div class="stories__container">
      <h3>{{ title }}</h3>
      <div class="stories__quote-container">
        <img src="/src/assets/img/stories/quote.svg" alt="arrows" class="stories__quote-img" />
        <p class="stories__quote">{{ quote }}</p>
      </div>
      <p class="stories__description">{{ description }}</p>
      <a href="#" class="stories__link">
        <p>Читать историю</p>
        <img src="/src/assets/img/stories/arrow.svg" alt="arrow" />
      </a>
    </div>
    
    <img v-if="!isImageFirst" :src="imgSrc" alt="hero-photo" />
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: String,
    title: String,
    quote: String,
    description: String,
    isImageFirst: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style>

.stories {
  margin-bottom: 225px;
}

.stories__title {
  display: flex;
  justify-content: center;
  gap: 15px;
  align-items: center;
  margin-bottom: 40px;
}

.stories__title h2 {
  font-size: 40px;
  font-weight: 700;
  line-height: 122.4%;
}

.stories__list {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 30px;
}

.stories__element {
  display: flex;
  justify-content: space-between;
  align-items: center;
  
}

.stories__container {
  max-width: 567px;
}

.stories__container h3 {
  font-size: 24px;
  font-weight: 700;
  line-height: 95.9%;
  margin-bottom: 22px;
}

.stories__quote-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  margin-bottom: 15px;
  color: #FE5F5F;
  font-size: 16px;
  font-weight: 700;
  line-height: 122.4%;
}

.stories__description {
  color: #000;
  font-size: 16px;
  font-weight: 400;
  line-height: 115.4%;
  margin-bottom: 17px;
}

.stories__link {
  display: flex;
  justify-content: center;
  gap: 13px;
  align-items: center;
  border-radius: 50px;
  background: #3864A7;
  width: 177px;
  height: 39px;
  color: #FFF;
  font-size: 14px;
  font-weight: 400;
  line-height: 122.4%;
}

</style>