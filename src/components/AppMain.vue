<script>
import AppCard from './AppCard.vue';
import AppSearchBar from './AppSearchBar.vue';
import {store} from '../store';
import AppLoader from './AppLoader.vue';
import { getCards } from '../utils/helper';

export default{
    name:'AppMain',
    components:{
        AppCard,
        AppSearchBar,
        AppLoader
    },

    data(){
        return{
            store
        }
    },
    
    methods:{
        getCards
    }

}
</script>

<template>
    <div v-if="store.loading">
        <AppLoader />
    </div>
    <main class="p-4" v-else>
        <AppSearchBar @filter="getCards" />
        <div class="container p-4">
            <div class="container">
                <p class="text-white p-3">Found {{ store.meta.total_rows }} cards</p>
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