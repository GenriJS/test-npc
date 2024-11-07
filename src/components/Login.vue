<template>
  <div class="container">
    <h1 >Вход</h1>
      <form class="auth" id="login-form" @submit.prevent="submitForm">
        <div class="auth__input-container">
          <input class="auth__input" id="login" type="tel" placeholder="Логин" name="login" v-model="login" required />
          <p class="auth__login-text" id="login-response">{{ loginError }}</p>
        </div>

        <div class="auth__input-container">
          <input class="auth__input" id="pass" type="password" placeholder="Пароль" name="password" v-model="password" required />
          <p class="auth__login-text" id="pass-response">{{ passError }}</p>
        </div>
        
        <button id="btn" class="auth__btn" type="submit">Войти</button>
      </form>
  </div>
</template>

<style scoped>

  h1 {
    text-align: center;
    margin-bottom: 30px;
    font-size: 35px;
  }

  .auth__input-container {
    margin-bottom: 30px;
    position: relative;
  }

  .auth__input,
  .auth__btn {
    border-radius: 20px;
    font-size: 16px;
  }

  .auth__input {
    width: 300px;
    height: 20px;
    padding: 20px 20px;
    border: 1px solid #000;
    
  }

  .auth__login-text {
    position: absolute;
    top: 65px;
    left: 10px;
    color: rgb(254, 95, 95);
  }

  .auth__btn {
    width: 340px;
    height: 60px;
    border: none;
    color: #FFF;
    background-color: rgb(254, 95, 95);
  }

</style>


<script>
export default {
  data() {
    return {
      login: '',
      password: '',
      loginError: '',
      passError: ''
    };
  },
  methods: {
    submitForm() {
      const formData = new URLSearchParams();
      formData.append('login', this.login);
      formData.append('password', this.password);

      fetch('http://localhost:3000/login', {   // i used local node js server for auth, just write /profile to url for redirect
        method: 'POST',
        body: formData
      })
      .then((response) => {
        if (response.status === 200) {
          this.$router.push('/profile');
        } else if (response.status === 401) {
          this.loginError = "Некорректный логин";
          this.passError = "Некорректный пароль";
          document.getElementById('login').style.borderColor = 'red';
          document.getElementById('pass').style.borderColor = 'red';
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }
  }
};
</script>