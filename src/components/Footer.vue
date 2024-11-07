<template>
  <footer class="footer">
    <div class="container">

      <div class="footer__question">
        <div class="footer__title">Есть вопросы?</div>
        <div class="footer__text">Задайте интересующие вас вопросы<br>онлайн помощнику</div>
        <div class="footer__helper">
          <img src="/src/assets/img/rocket.svg" alt="rocket">
          <p>Онлайн помощник</p>
        </div>
      </div>

      <div class="footer__bar">
        <div class="footer__links">
          <a href="#">Услуги  и поддержка</a>
          <a href="#">Сервисы для бизнеса</a>
          <a href="#">Общая информация </a>
          <a href="#">Защита бизнеса</a>
        </div>
        <div class="footer__contacts">
          <a href="mailto:service@in-line.ru">service@in-line.ru</a>
          <a href="tel:88002007430">8-800-200-74-30</a>
        </div>
      </div>

    </div>

<div class="footer__question-background">
</div>

<div class="footer__bar-background"></div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>


<style>

.footer {
  position: relative;
}

.footer__question {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 68px;
}

.footer__title {
  color: #000;
  text-align: center;
  font-size: 35px;
  font-weight: 700;
  margin-bottom: 7px;
}

.footer__text {
  color: #000;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 29px;
}

.footer__helper {
  display: flex;
  justify-self: center;
  align-items: center;
  gap: 10px;
  border-radius: 50px;
  background: #FE5F5F;
  color: #FFF;
  font-size: 16px;
  font-weight: 700;
  line-height: 122.4%;
  padding: 10px 50px 10px;
}

.footer__helper p {
  margin-top: 3px;
}

.footer__bar {
  height: 86px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer__links,
.footer__contacts {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer__links {
  width: 60%;
}

.footer__contacts {
  width: 25%;
}

.footer__bar a,
.footer__bar a:visited {
  color: #FFF;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.16px;
}

.footer__question-background {
  position: absolute;
  z-index: -1;
  top: -48px; 
  pointer-events: none;
  width: 100vw;
  height: 300px;
  background-image: url("/src/assets/img/footer/background.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.footer__bar-background {
  position: absolute;
  z-index: -1;
  pointer-events: none;
  bottom: 0px;
  background-color: #2F2F2F;
  height: 86px;
  width: 100vw;
}

</style>