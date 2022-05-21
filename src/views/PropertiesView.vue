<script>
let unitedAPI = 'https://branco-api-iaw.herokuapp.com/properties';
let properties;

const queryJson = {
	type: "*",
	sale_rent: "*",
	city_id: "*",
	min_area: "*",
	max_area: "*",
	min_price: "*",
	max_price: "*",
	min_beds: "*",
	max_beds: "*",
	min_rooms: "*",
	max_rooms: "*",
	min_baths: "*"
}

export default {
  data(){
    return {
      properties
    }
  },
  mounted(){
    this.getProperties();
  },
  methods: {
    async getProperties(){
      const response = await fetch(unitedAPI, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(queryJson)
      });

      this.properties = await response.json();
    }
  }
}
</script>



<template>
  <div class="container">

    <div class="row mt-5">
      <div class="col-md-12 subtitle" align="center">15 properties in 5 cities</div>
    </div>

    <div class="row mt-5">
      <div class="col-md-4" v-for="property in properties" :key="property.id"> 
        <PropertyCard 
          :propId="`${property.id}`" 
          :propStatus="`${property.sale_rent}`" 
          :propType="`${property.type}`" 
          :propAddress="`${property.address}`" 
          :propArea="`${property.area}`" 
          :propPrice="`${property.price}`" 
          :propBeds="`${property.beds}`" 
          :propRooms="`${property.rooms}`" 
          :propBaths="`${property.baths}`" 
          :propCity="`${property.city_id}`" /> 
      </div>
    </div>
    
  </div>
</template>



<style>
.subtitle{
  font-size: 40px;
}
</style>