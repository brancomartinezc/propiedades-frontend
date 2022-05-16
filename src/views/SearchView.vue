<template>

    <div class="container search-view mt-5 pt-5 pb-5">

        <div class="form-group">

            <div class="row justify-content-center">
                <!-- city filter -->
                <div class="col-md-3">
                    <label class="category mb-2" for="city">City</label>
                    <input class="form-control form-control-lg" type="text" id="city">
                </div>

                <!-- type filter -->
                <div class="col-md-2">
                    <div class="category">Type</div>
                    <div class="form-check mt-2">
                        <label class="form-check-label label-font-size">
                            <input type="radio" class="form-check-input" name="type" value="house" checked>
                            All
                        </label>
                    </div>
                    <div class="form-check mt-3">
                        <label class="form-check-label label-font-size">
                            <input type="radio" class="form-check-input" name="type" value="house">
                            House
                        </label>
                    </div>
                    <div class="form-check mt-3">
                        <label class="form-check-label label-font-size">
                            <input type="radio" class="form-check-input" name="type" value="apartment">
                            Apartment
                        </label>
                    </div>
                </div>

                <!-- sale/rent filter -->
                <div class="col-md-3">
                    <div class="category">Status</div> 
                    <div class="form-check mt-2">
                        <label class="form-check-label label-font-size">
                            <input type="radio" class="form-check-input" name="sale_rent" value="sale" checked>
                            All
                        </label>
                    </div>
                    <div class="form-check mt-3">
                        <label class="form-check-label label-font-size">
                            <input type="radio" class="form-check-input" name="sale_rent" value="sale">
                            For Sale
                        </label>
                    </div>
                    <div class="form-check mt-3">
                        <label class="form-check-label label-font-size">
                            <input type="radio" class="form-check-input" name="sale_rent" value="rent">
                            For Rent
                        </label>
                    </div>
                </div>
            </div>

            <div class="row mt-4 justify-content-center">
                <div class="col-md-4 category">Area (m2)</div>
                <div class="col-md-4 category">Price (U$D)</div>
            </div>
            <div class="row justify-content-center">
                <!-- min area filter -->
                <div class="col-md-2">
                    <label class="col-form-label col-form-label-lg" for="min_area">Min area</label>
                    <input class="form-control form-control-lg" type="number" id="min_area">
                </div>

                <!-- max area filter -->
                <div class="col-md-2">
                    <label class="col-form-label col-form-label-lg" for="max_area">Max area</label>
                    <input class="form-control form-control-lg" type="number" id="max_area">
                </div>

                <!-- min price filter -->
                <div class="col-md-2">
                    <label class="col-form-label col-form-label-lg" for="min_price">Min price</label>
                    <input class="form-control form-control-lg" type="number" id="min_price">
                </div>

                <!-- max price filter -->
                <div class="col-md-2">
                    <label class="col-form-label col-form-label-lg" for="max_price">Max price</label>
                    <input class="form-control form-control-lg" type="number" id="max_price">
                </div>
            </div>

            <!-- <div class="row mt-4">
                
            </div>
            <div class="row">
                
            </div> -->

            <div class="row mt-4 justify-content-center">
                <div class="col-md-4 category">Beds</div>
                <div class="col-md-4 category">Rooms</div>
            </div>
            <div class="row justify-content-center">
                <!-- min beds filter -->
                <div class="col-md-2">
                    <label class="col-form-label col-form-label-lg" for="min_beds">Min beds</label>
                    <input class="form-control form-control-lg" type="number" id="min_beds">
                </div>

                <!-- max beds filter -->
                <div class="col-md-2">
                    <label class="col-form-label col-form-label-lg" for="max_beds">Max beds</label>
                    <input class="form-control form-control-lg" type="number" id="max_beds">
                </div>

                <!-- min rooms filter -->
                <div class="col-md-2">
                    <label class="col-form-label col-form-label-lg" for="min_rooms">Min rooms</label>
                    <input class="form-control form-control-lg" type="number" id="min_rooms">
                </div>

                <!-- max rooms filter -->
                <div class="col-md-2">
                    <label class="col-form-label col-form-label-lg" for="max_rooms">Max rooms</label>
                    <input class="form-control form-control-lg" type="number" id="max_rooms">
                </div>
            </div>

            <!-- <div class="row mt-4">
                
            </div>
            <div class="row">
                
            </div> -->

            <div class="row mt-4">
                <div class="col-md-2"></div>
                <div class="col-md-2 category">Baths</div>
            </div>
            <div class="row">
                <!-- min baths filter -->
                <div class="col-md-2"></div>
                <div class="col-md-2">
                    <label class="col-form-label col-form-label-lg" for="min_baths">Min baths</label>
                    <input class="form-control form-control-lg" type="number" id="min_baths">
                </div>
            </div>

        </div>
    </div>

</template>

<script>

</script>

<style>
.search-view{
    background: rgb(32, 32, 32);
}

.category{
    font-size: 25px;
    color: white;
}

.label-font-size{
    font-size: 20px;;
}
</style>