<template>
  <Navbar />
  <div class="w3-display-container">
    <img class="bg-image w3-opacity-min" src="../assets/bg-page.jpg" alt="Fondo">
    <div class="w3-display-middle">
      <Login />
    </div>
  </div>
</template>

<script setup>

  import Navbar from '../components/Navbar.vue'
  import Login from '../components/Login.vue';

</script>

<style scoped>

  .bg-image {
    width:      100%;
    height:     500px;
    object-fit: cover;
  }

</style>