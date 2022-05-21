<script>
export default {
    name: 'Carousel',
    props: ['propId'],
}
</script>



<template>
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
</div>
</template>
