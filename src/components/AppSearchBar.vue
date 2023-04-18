<script>
import { store } from '../store';

export default{
    name:'AppSearchBar',
    emits:['filter'],
    data(){
        return{            
            store,
            selectionOptions:['Alien','Ally of Justice','Ancient Gear']
        }
    }
}
</script>

<template>
    <div class="container mb-3">
        <select name="" id="" class="ps-2" v-model="store.selectedOption" @change="$emit('filter')">
            <option value="">All</option>
            <option :value="option" v-for="option,index in selectionOptions" .key="index"> {{ option }} </option>
        </select>
    </div>
</template>

<style lang="scss" scoped>

</style>