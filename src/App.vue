<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppLoader from './components/AppLoader.vue'
import { store } from './store';
import { getCards } from './utils/helper';

export default{
    components:{
        AppHeader,
        AppMain,
        AppLoader
    },

    data(){
        return{
            store
        }
    },
    
    mounted(){
        this.getCards()
    },
    
    methods:{
        getCards,
        handlerFilter(){
            this.getCards()
        }
    }
}
</script>

<template>
    <AppHeader title="YU-GI-OH API"/>
    <AppMain />
</template>

<style lang="scss">
@use "./style/general.scss";
</style>
