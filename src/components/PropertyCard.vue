<script>
export default {
    name: 'PropertyCard',
    props: ['propId'],
}
</script>



<template>
<RouterLink :to="`/property/${propId}`">
<div class="card mb-3 rounded-0">

  <Carousel :propId="`${propId}`" />

  <div class="card-body">
    <div class="row justify-content-left mt-4">
      <div class="col-md-6"><img id="area-icon" src="@/assets/icons/area1.png" alt="..."> 250 mt2</div>
      <div class="col-md-6"><img src="@/assets/icons/room1.png" alt="..."> 3 Rooms</div>
    </div>
    <div class="row justify-content-left">
      <div class="col-md-6"><img src="@/assets/icons/bed1.png" alt="..."> 2 Bedrooms</div>
      <div class="col-md-6"><img src="@/assets/icons/bath1.png" alt="..."> 1 Baths</div>
    </div>
    <div class="row justify-content-left mt-4">
      <div class="col-md-12"><img id="address-icon" src="@/assets/icons/address1.png" alt="..."> E Hyde Park Blvd 2059</div>
    </div>
    <div class="row justify-content-left mt-2">
      <div class="col-md-12"><img id="address-icon" src="@/assets/icons/world2.png" alt="..."> Los Angeles</div>
    </div>
  </div>
  
</div>
</RouterLink>
</template>



<style>
.card-body{
  font-size: 20px;
  color: white;
}

#area-icon{
  max-width: 35px;
}

#address-icon{
  max-width: 30px;
}

#city-icon{
  max-width: 30px;
}

.sale-rent-label {
    background-color: #29852A;
    box-shadow: 0 1px 2px rgb(0 0 0 / 20%);
    color: #fff;
    font-size: 1.1em;
    font-weight: 700;
    padding: 4px 8px;
    position: absolute;
    left: 12px;
    top: 12px;
    text-transform: uppercase;
}

.price-label {
    background-color: #29852A;
    box-shadow: 0 1px 2px rgb(0 0 0 / 20%);
    color: #fff;
    font-size: 1.1em;
    font-weight: 700;
    padding: 4px 8px;
    position: absolute;
    right: 12px;
    top: 12px;
    text-transform: uppercase;
}
</style>