<script>
export default{
    name:'AppCard',
    props:{
        name: String,
        archetype: String,
        img: String
    }
}

</script>

<template>
    <div class="card">
        <img :src="img" class="card-img-top" alt="...">
        <div class="card-body text-center">
            <h5 class="card-title text-white"> {{ name }} </h5>
            <p class="card-text"> {{ archetype }} </p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card{
    height: 100%;
    .card-body{
        background-color: orange;
    }
}
</style>