<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-md-12 subtitle" align="center">15 properties in 5 cities</div>
    </div>

    <div class="row mt-5">
      <div class="col-md-4"> <PropertyCard propId="1"/> </div>
      <div class="col-md-4"> <PropertyCard propId="2"/> </div>
      <div class="col-md-4"> <PropertyCard propId="3"/> </div>
      <div class="col-md-4"> <PropertyCard propId="4"/> </div>
      <div class="col-md-4"> <PropertyCard propId="5"/> </div>
      <div class="col-md-4"> <PropertyCard propId="6"/> </div>
      <div class="col-md-4"> <PropertyCard propId="7"/> </div>
    </div>
  </div>
</template>

<script>
import PropertyCard from '../components/PropertyCard.vue'
</script>

<style>
.subtitle{
  font-size: 40px;
}
</style>