<template>
  <div class="container border">
    <div class="row justify-content-center m-5">
        <div class="col-md-2 text-center"><a class="btn btn-success btn-lg" href="#"><img src="/public/icons/home3.png" alt="..." class="icons"></a></div>
        <div class="col-md-2 text-center"><a class="btn btn-success btn-lg" href="#"><img src="/public/icons/building1.png" alt="..." class="icons"></a></div>
    </div>

    <div class="row mt-5">
      <div class="col-md-4"> <PropertyCard carouselId="1"/> </div>
      <div class="col-md-4"> <PropertyCard carouselId="2"/> </div>
      <div class="col-md-4"> <PropertyCard carouselId="3"/> </div>
    </div>

  </div>
</template>

<style>
.icons{
  max-width:45px;
}
</style>
