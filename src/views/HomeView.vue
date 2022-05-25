<script>
let unitedAPI = 'https://branco-api-iaw.herokuapp.com/properties';
let propsCount;
let citiesCount;

export default {
  data(){
    this.getCounts();
    return {
      propsCount,
      citiesCount
    }
  },
  methods: {
    async getCounts(id){
      const responseProps = await fetch(`${unitedAPI}properties/count`);
      propsCount = await responseProps.json();

      const responseCities = await fetch(`${unitedAPI}cities/count`);
      citiesCount = await responseCities.json();
    }
  }
}
</script>



<template>
  <div class="container">
    
    <div class="row mt-5">
      <div align="center" class="col-md-12 subtitle"> Latest Properties </div>
    </div>

    <div class="row mt-5">
      <div class="col-md-4"> <PropertyCard propId="1"/> </div>
      <div class="col-md-4"> <PropertyCard propId="2"/> </div>
      <div class="col-md-4"> <PropertyCard propId="3"/> </div>
    </div>

    <div class="row mt-5">
      <div align="center" class="col-md-12 subtitle"> Popular Cities </div>
    </div>

    <div class="row m-3">
      <div class="col-md-4"> <CityCard cityName="Los Angeles" cityImage="https://i.ibb.co/1Xpppfk/la.jpg"/> </div>
      <div class="col-md-4"> <CityCard cityName="New York" cityImage="https://i.ibb.co/7bDDxCC/nyc.jpg"/> </div>
      <div class="col-md-4"> <CityCard cityName="Buenos Aires" cityImage="https://i.ibb.co/pwFK0jq/ba.jpg"/> </div>
    </div>

  </div>
</template>



<style>
.subtitle{
  font-size: 40px;
}
</style>
