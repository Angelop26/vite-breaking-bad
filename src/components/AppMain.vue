<script>
import AppCard from './AppCard.vue';
import {store} from '../store';
import AppLoader from './AppLoader.vue';

export default{
    name:'AppMain',
    components:{
        AppCard,
        AppLoader
    },

    data(){
        return{
            store
        }
    }

}
</script>

<template>
    <div v-if="store.loading">
        <AppLoader />
    </div>
    <main class="p-4" v-else>
        <div class="container mb-3">
            <select name="" id="" class="ps-2">
                <option value="">Alien</option>
            </select>
        </div>
        <div class="container p-4">
            <div class="container">
                <p class="text-white p-3">Found 39 cards</p>
                <div class="row row-cols-5 gb-3">
                    <div class="col mb-2" v-for="card in store.cards" :key="card.id">
                        <AppCard :name= "card.name" :archetype="card.archetype" :img="card.card_images[0].image_url_small"/>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
    main{
        background-color: orange;
        .container.p-4{
            background-color: white;
        }
        select{
            width: 15%;
        }
        p{
            background-color: black;
            margin-bottom: 0;
        }
    }

</style>