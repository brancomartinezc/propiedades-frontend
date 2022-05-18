<template>
  <div class="container property-view mt-5 p-5 border">
    
    <div class="row justify-content-center">
        <div class="col-md-6 mt-2">
            <div :id="`carousel${propId}`" class="carousel slide border" data-bs-interval="false">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                      <img src="https://i.ibb.co/MVG3q9F/la.webp" class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                      <img src="https://i.ibb.co/PxdnjnG/la2.webp" class="d-block w-100" alt="...">
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

        <div class="col-md-6 mt-2" id="map" ref="mapElement"></div>
    </div>
    
    <div class="row mt-5">
        <div class="col-md-2"></div>
        <div class="col-md-2 mt-2 text-center" id="status-price">For Sale</div>
        <div class="col-md-3"></div>
        <div class="col-md-3 mt-2 text-center" id="status-price">$ 2.500.000</div>
    </div>

    <div class="row mt-5 justify-content-center">
        <div class="col-md-2"><div class="container mt-2 pt-3 pb-3 prop-info"><img id="area-icon" src="@/assets/icons/area1.png" alt="..."> 250 mt2</div></div>
        <div class="col-md-2"><div class="container mt-2 pt-3 pb-3 prop-info"><img src="@/assets/icons/room1.png" alt="..."> 3 Rooms</div></div>
        <div class="col-md-2"><div class="container mt-2 pt-3 pb-3 prop-info"><img src="@/assets/icons/bed1.png" alt="..."> 2 Beds</div></div>
        <div class="col-md-2"><div class="container mt-2 pt-3 pb-3 prop-info"><img src="@/assets/icons/bath1.png" alt="..."> 1 Baths</div></div>
      </div>

    <div class="row mt-5 justify-content-center">
      <div class="col-md-3"><div class="container mt-2 pt-3 pb-3 prop-info"><img id="address-icon" src="@/assets/icons/address1.png" alt="..."> Lake St. 2059</div></div>
      <div class="col-md-3"><div class="container mt-2 pt-3 pb-3 prop-info"><img id="address-icon" src="@/assets/icons/world2.png" alt="..."> Los Angeles, California, USA</div></div>
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

</div>
</template>



<script>
const tilesProvider = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
const propLocation = 'avenida alem 1053 bahia blanca';
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
.property-view{
    background: #252525;
    font-size: 22px;
}

.prop-info{
  background: rgb(66, 66, 66);
  border-radius: 10px;
}

.subtitle{
  font-size: 40px;
}

#status-price{
  font-size: 35px;
  color: white;
  background: #009007;
  font-weight: bold;
  border-radius: 10px;
}

#map{ 
  height: 400px;
  width: 600px;
}

@media (max-width: 1400px) {
  #map {
    height: 335px;
    width: 500px;
  }
}

@media (max-width: 1200px) {
  #map {
    height: 280px;
    width: 410px;
  }
}

@media (max-width: 1000px) {
  #map {
    height: 200px;
    width: 295px;
  }
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