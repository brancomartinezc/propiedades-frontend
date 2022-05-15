<template>
<RouterLink :to="`/property/${propId}`">
<div class="card mb-3 rounded-0">

  <div :id="`carousel${propId}`" class="carousel slide" data-bs-interval="false">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://i.ibb.co/MVG3q9F/la.webp" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="https://i.ibb.co/kKChfG9/img2.webp" class="d-block w-100" alt="...">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" :data-bs-target="`#carousel${propId}`" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" :data-bs-target="`#carousel${propId}`" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
    <div class="sale-rent-label">for rent</div>
    <div class="price-label">$ 2.500.000</div>
  </div>

  <div class="card-body">
    <!--<div class="row justify-content-between">
      <div class="col-md-5">SALE</div>
      <div class="col-md-7" align="right" id="price">$ 2.500.000</div>
    </div>-->
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
    <!--<div class="row justify-content-center mt-4">
      <a href="#" class="col-md-4 btn btn-success rounded-0">View more</a>
    </div>-->
  </div>
  
</div>
</RouterLink>
</template>

<script>
export default {
    name: 'PropertyCard',
    props: ['propId'],
}
</script>

<style>
.card-body{
  font-size: 20px;
  color: white;
}

#price{
  font-size: 30px;
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