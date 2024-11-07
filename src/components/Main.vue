<template>
  <main class="main">

    <div class="main__background"></div>

    <div class="container">

      <div class="welcome">
        <img class="welcome__logo" src="/src/assets/img/logo.svg" alt="logo" />
        <h1 class="welcome__title">Мой бизнес - цифровая платформа для тех, кто хочет открыть и развивать свой бизнес</h1>
      </div>

      <div class="question-container">
        <p class="question">
          Для начала работы ответьте на вопрос,<br>
          есть ли у вас уже существующий бизнес?
        </p>
        <div class="question__link-container">
          <a class="question__link question__link-color-red" href="#">Да, у меня уже есть бизнес</a>
          <a class="question__link question__link-color-blue" href="#">Нет, но планирую открыть</a>
        </div>
      </div>

      <div class="advantages">
        <div class="advantages__title">
          <svg width="10" height="9" viewBox="0 0 10 9" fill="none">
            <path d="M4.8685 8.37855e-05L0 4.43091L4.8685 8.86173L9.737 4.43091L4.8685 8.37855e-05Z" fill="#FE5F5F"/>
          </svg>
          <h2>Преимущества</h2>
          <svg width="10" height="9" viewBox="0 0 10 9" fill="none">
            <path d="M4.8685 8.37855e-05L0 4.43091L4.8685 8.86173L9.737 4.43091L4.8685 8.37855e-05Z" fill="#FE5F5F"/>
          </svg>
        </div>

        <div class="advantages__list">
          <AdvantageElement
            imgSrc="/src/assets/img/advatages/buildings.png"
            number="482"
            description="Организаций поддержки<br>по Российской Федерации"
          />
          <AdvantageElement
            imgSrc="/src/assets/img/advatages/smartphones.png"
            number="5240"
            description="Оказано услуг<br>государственной поддержки"
          />
          <AdvantageElement
            imgSrc="/src/assets/img/advatages/participants.png"
            number="1360"
            description="Зарегистрировано<br>участников проекта"
          />
        </div>
      </div>

      <div class="stories">
        <div class="stories__title">
          <svg width="10" height="9" viewBox="0 0 10 9" fill="none">
            <path d="M4.8685 8.37855e-05L0 4.43091L4.8685 8.86173L9.737 4.43091L4.8685 8.37855e-05Z" fill="#FE5F5F"/>
          </svg>
          <h2>Истории успеха</h2>
          <svg width="10" height="9" viewBox="0 0 10 9" fill="none">
            <path d="M4.8685 8.37855e-05L0 4.43091L4.8685 8.86173L9.737 4.43091L4.8685 8.37855e-05Z" fill="#FE5F5F"/>
          </svg>
        </div>

        <div class="stories__list">
          <StoryElement
            imgSrc="/src/assets/img/stories/hero-backery.png"
            title="Пекарня 'Русские традиции'"
            quote="Как говорит сам Владимир: «мне хотелось, чтобы все узнали, что такое русская кухня», «обьяснить, что она жива»."
            description="Чтобы мини-пекарня стала рентабельным бизнесом, необходимы строгие расчеты, учет рисков и перспектив, анализ рынка, налаживание сбыта."
          />
          <StoryElement

            imgSrc="/src/assets/img/stories/hero-mechanic.png"
            title="Автомастерская"
            quote="Первые дни независимости. Когда не нужно рано вставать, когда не нужно отпрашиваться, что бы успеть съездить в магазин, когда удобно."
            description="Встреча в городе Н с моими будущими партнерами была плодотворной. Я не смог заснуть до пяти утра – не потому что не спалось, но потому что мысли о будущих перспективах просто взрывали мой мозг."
            :isImageFirst="false"
          />
          <StoryElement
            imgSrc="/src/assets/img/stories/hero-beauty.png"
            title="Салон красоты “Эмират”"
            quote="Когда же появилась возможность открыть свой бизнес, я рассматривала различные варианты, изучала всевозможные направления."
            description=""
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import AdvantageElement from './AdvantageElement.vue';
import StoryElement from './StoryElement.vue';

export default {
  components: {
    AdvantageElement,
    StoryElement,
  },
};
</script>


<style>

.main {
  position: relative;
}

/* welcome title */

.welcome {
  max-width: 576px;
  margin-bottom: 550px;
}

.welcome__logo {
  margin-bottom: 63px;
}

.welcome__title {
  color: #2B2B2B;
  font-size: 35px;
  font-weight: 700;
  line-height: 111.4%;
}

/* welcome background */

.main__background {
  position: absolute;
  z-index: -1;
  top: -137px; 
  pointer-events: none;
  width: 100vw;
  height: 1287px;
  background-image: url("/src/assets/img/header/background.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

/* main question */

.question-container {
  margin-bottom: 289px;
}

.question {
  font-size: 30px;
  font-weight: 700;
  line-height: 117.4%;
  text-align: center;
  margin-bottom:39px;
}

.question__link-container {
  display: flex;
  justify-content: center;
  gap: 27px;
}

.question__link {
  color: #FFF;
  font-size: 22px;
  font-weight: 400;
  line-height: 122.4%;
  border-radius: 50px;
  padding: 13px 70px;
}

.question__link-color-red {
  background: #FE5F5F;
}

.question__link-color-blue {
  background: #3865A7;
}

</style>