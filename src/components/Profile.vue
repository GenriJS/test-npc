<template>
    <ProfileTemplate
      avatar="src/assets/img/profile/photo.JPG"
      fullName="Antipov Genrikh Alekseevich"
      profession="Frontend Developer"
      email="genrikhantipov@gmail.com"
      phone="+79995250530"
    />
</template>

<script>
import ProfileTemplate from './ProfileTemplate.vue';

export default {
  name: "Profile",
  components: {
    ProfileTemplate,
  },
};
</script>