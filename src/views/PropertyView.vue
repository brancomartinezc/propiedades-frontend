<template>
  <div class="container border">

    <div class="row mt-5 justify-content-center">
        <div class="col-md-8">
            <div :id="`carousel${propId}`" class="carousel slide border" data-bs-interval="false">
                <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://i.ibb.co/MVG3q9F/la.webp" class="d-block w-50" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="https://i.ibb.co/PxdnjnG/la2.webp" class="d-block w-50" alt="...">
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
            </div>
        </div>
    </div>

     <div class="row mt-5 justify-content-between">
        <div class="col-md-2 border"></div>
        <div class="col-md-2 border"><img id="address-icon" src="@/assets/icons/world2.png" alt="..."> For Sale</div>
        <div class="col-md-2 border"><img id="address-icon" src="@/assets/icons/world2.png" alt="..."> $ 2500000</div>
        <div class="col-md-2 border"></div>
    </div>

    <div class="row mt-5 justify-content-center">
        <div class="col-md-2"><img id="area-icon" src="@/assets/icons/area1.png" alt="..."> 250 mt2</div>
        <div class="col-md-2"><img src="@/assets/icons/room1.png" alt="..."> 3 Rooms</div>
        <div class="col-md-2"><img src="@/assets/icons/bed1.png" alt="..."> 2 Bedrooms</div>
        <div class="col-md-2"><img src="@/assets/icons/bath1.png" alt="..."> 1 Baths</div>
    </div>

    <div class="row mt-5 justify-content-center">
        <div class="col-md-2"><img id="address-icon" src="@/assets/icons/address1.png" alt="..."> E Hyde Park Blvd 2059</div>
        <div class="col-md-2"><img id="address-icon" src="@/assets/icons/world2.png" alt="..."> Los Angeles</div>
    </div>

    <div class="row mt-5 justify-content-center">
        <div class="col-md-10">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis facere, 
          quis officia sequi, iure nisi unde cumque asperiores doloribus expedita inventore accusantium 
          blanditiis. Incidunt blanditiis saepe, asperiores quas neque temporibus!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis facere, 
          quis officia sequi, iure nisi unde cumque asperiores doloribus expedita inventore accusantium 
          blanditiis. Incidunt blanditiis saepe, asperiores quas neque temporibus!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis facere, 
          quis officia sequi, iure nisi unde cumque asperiores doloribus expedita inventore accusantium 
          blanditiis. Incidunt blanditiis saepe, asperiores quas neque temporibus!
          </div>
    </div>

    <div class="row mt-5 justify-content-center">
        <div class="border" id="map" ref="mapElement"></div>
    </div>

</div>
</template>



<script>
const tilesProvider = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
const propLocation = 'E Hyde Park Blvd 2059 Los Angeles';
const propLocationQuery = propLocation.replace(/ /g, '+');
const nominatimAPI = `https://nominatim.openstreetmap.org/search?q=${propLocationQuery}&format=json`;

let latitude;
let longitude;

let getCoords = async () => {

  const response = await fetch(nominatimAPI);
  let coords = await response.json();

  latitude = coords[0].lat;
  longitude = coords[0].lon;
};

let setMap = async () => {

  await getCoords();

  let map = L.map('map').setView([latitude, longitude], 13);

  L.tileLayer(tilesProvider,{
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 30
  }).addTo(map);

  /*let markerIcon = L.icon({
    iconUrl: '../src/assets/icons/marker.png'
  });

  L.marker([latitude, longitude], {
    icon: markerIcon
  }).addTo(map);*/

  L.marker([latitude, longitude]).addTo(map);
}

export default {
    name: 'PropertiesView',
    props: ['propId'],
    mounted () {
      setMap();
    }
}
</script>



<style>
.subtitle{
  font-size: 40px;
}

#map{ 
  height: 300px;
  width: 600px;
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
</style>