<template>
  <Navbar />
  <RouterView />
  <h1 class="mt-5" align="center">footer</h1>
</template>

<script>
import Navbar from './components/Navbar.vue';
import PropertyCard from './components/PropertyCard.vue';
import('@/assets/mdb.dark.css');

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