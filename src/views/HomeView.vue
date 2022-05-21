<template>
  <div class="container">
    <!--<div class="row justify-content-center m-5">
        <div class="col-md-2 text-center"><a class="btn btn-success btn-lg" href="#"><img src="icons/home3.png" alt="..." class="icons"></a></div>
        <div class="col-md-2 text-center"><a class="btn btn-success btn-lg" href="#"><img src="icons/building1.png" alt="..." class="icons"></a></div>
    </div>-->

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
