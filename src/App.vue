<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppLoader from './components/AppLoader.vue'
import axios from "axios";
import { store } from './store';

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
        store.loading = true
        axios.get(store.apiURL)
            .then((resp) =>{
                this.store.cards= resp.data.data
                store.loading = false
            })
    }
}
</script>

<template>
    <AppLoader />
    <AppHeader title="YU-GI-OH API"/>
    <AppMain />
</template>

<style lang="scss">
@use "./style/general.scss";
</style>
