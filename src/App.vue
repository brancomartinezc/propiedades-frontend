<template>
  <Navbar />
  <RouterView />
  <h1 align="center">footer</h1>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import PropertyCard from './components/PropertyCard.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    PropertyCard,
  }
}
</script>

<style>
.container{
  font-family: 'Nunito';
}
</style>