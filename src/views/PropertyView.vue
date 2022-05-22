<script>
const tilesProvider = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
const propLocation = 'E Hyde Park Blvd 2059 los angeles';
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

  L.marker([latitude, longitude]).addTo(map);
}

export default {
    name: 'PropertyView',
    data() {
      return {
        id: this.$route.params.id
      }
    },
    mounted () {
      setMap();
    }
}
</script>



<template>
  <div class="container property-view mt-5 p-5">

    <div class="row">

        <!-- left column (info) -->
        <div class="col-md-6">
            
            <div class="row mt-5 justify-content-center">
                <div class="col-md-5"><div class="container mt-2 pt-3 pb-3 prop-info"><img id="area-icon" src="@/assets/icons/area1.png" alt="..."> 250 mt2</div></div>
                <div class="col-md-5"><div class="container mt-2 pt-3 pb-3 prop-info"><img src="@/assets/icons/room1.png" alt="..."> 3 Rooms</div></div>
            </div>

            <div class="row mt-5 justify-content-center">
                <div class="col-md-5"><div class="container mt-2 pt-3 pb-3 prop-info"><img src="@/assets/icons/bed1.png" alt="..."> 2 Beds</div></div>
                <div class="col-md-5"><div class="container mt-2 pt-3 pb-3 prop-info"><img src="@/assets/icons/bath1.png" alt="..."> 1 Baths</div></div>
            </div>

            <div class="row mt-5 justify-content-center">
                <div class="col-md-5"><div class="container mt-2 pt-3 pb-3 prop-info"><img id="address-icon" src="@/assets/icons/address1.png" alt="..."> E Hyde Park Blvd 2059</div></div>
                <div class="col-md-5"><div class="container mt-2 pt-3 pb-3 prop-info"><img id="address-icon" src="@/assets/icons/world2.png" alt="..."> Los Angeles, California, USA</div></div>
            </div>

        </div>

        <!-- right column (photos) -->
        <div class="col-md-6 mt-4">
            <div class="row mt-2">
                <Carousel :propId="`${id}`" />
            </div>
        </div>

    </div>

    <!-- type, status and price -->
    <div class="row justify-content-around mt-5">
        <div class="col-md-4 text-center status-price">Apartment for Sale</div>
        <div class="col-md-3 text-center status-price">$ 2.500.000</div>
    </div>

    <!-- description -->
    <div class="row mt-5 justify-content-center">
        <div class="col-md-10">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis facere, 
          quis officia sequi, iure nisi unde cumque asperiores doloribus expedita inventore accusantium 
          blanditiis. Incidunt blanditiis saepe, asperiores quas neque temporibus!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis facere, 
          quis officia sequi, iure nisi unde cumque asperiores doloribus expedita inventore accusantium 
          blanditiis. Incidunt blanditiis saepe, asperiores quas neque temporibus!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis facere, 
          quis officia sequi, iure nisi unde cumque asperiores doloribus expedita inventore accusantium 
          blanditiis. Incidunt blanditiis saepe, asperiores quas neque temporibus!</p>
        </div>
    </div>

    <!-- map -->
    <div class="row justify-content-center">
        <div class="col-md-6 mt-5" id="map" ref="mapElement"></div>
    </div>

</div>
</template>



<style>
p{
  text-align: justify;
}

.property-view{
  background: #252525;
  font-size: 22px;
}

.prop-info{
  background: rgb(66, 66, 66);
  border-radius: 10px;
}

.status-price{
  font-size: 35px;
  color: white;
  background: #009007;
  font-weight: bold;
  border-radius: 10px;
}

#map{ 
  height: 400px;
  width: 1000px;
}

@media (max-width: 1400px) {
  #map {
    height: 300px;
    width: 850px;
  }
}

#area-icon{
  max-width: 35px;
}

#address-icon, #city-icon{
  max-width: 30px;
}

</style>