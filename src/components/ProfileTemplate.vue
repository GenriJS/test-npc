<template>
  <div class="container">
    <div class="profile">
      <div class="profile__avatar">
        <img :src="avatar" alt="Аватар" />
      </div>
      <div class="profile__info">
        <h2 class="profile__header">ФИО:</h2>
        <p class="profile__content">{{ fullName }}</p>
        <h2 class="profile__header">Профессия:</h2>
        <p class="profile__content">{{ profession }}</p>
        <h2 class="profile__header">Электронная почта:</h2>
        <p class="profile__content">{{ email }}</p>
        <h2 class="profile__header">Номер телефона:</h2>
        <p class="profile__content">{{ phone }}</p>
      </div>
    </div>
  </div>
</template>


<style scoped>

.profile {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

}

.profile__avatar {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
}

.profile__avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profile__header {
  margin-bottom: 5px;
  font-size: 25px;
}

.profile__content {
  font-size: 16px;
  margin-bottom: 15px;
}

</style>

<script>
export default {
  name: "ProfileTemplate",
  props: {
    avatar: String,
    fullName: String,
    profession: String,
    email: String,
    phone: String,
  },
};
</script>