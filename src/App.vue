<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import axios from "axios";
import { store } from './store';

export default{
    components:{
        AppHeader,
        AppMain
    },

    data(){
        return{
            store
        }
    },

    mounted(){
        axios.get(store.apiURL)
            .then((resp) =>{
                this.store.cards= resp.data.data
            })
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
