<template>
  <div class="advantages__element">
    <img :src="imgSrc" :alt="description" />
    <div class="advantages__number">{{ number }}</div>
    <div class="advantages__description" v-html="description"></div>
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: String,
    number: String,
    description: String,
  },
};
</script>


<style>

.advantages {
  margin-bottom: 240px;
}

.advantages__title {
  display: flex;
  justify-content: center;
  gap: 15px;
  align-items: center;
  margin-bottom: 80px;
}

.advantages__title h2 {
  font-size: 40px;
  font-weight: 700;
  line-height: 122.4%;
}

.advantages__list {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.advantages__element {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 8px;
}

.advantages__element img {
  width: 178px;
  height: 164px;
}

.advantages__number {
  color: #3865A7;
  font-size: 50px;
  font-weight: 700;
  line-height: 122.4%;
}

.advantages__description {
  color: #000;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 122.4%;
}

</style>