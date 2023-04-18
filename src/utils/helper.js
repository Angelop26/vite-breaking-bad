import axios from "axios";
function getCards(){
    this.store.loading = true
    const params = {
        ...this.store.selectedOption && { archetype: this.store.selectedOption }  
    }
    axios.get(this.store.apiURL,{params
    }).then(resp =>{
        this.store.cards = resp.data.data
        this.store.meta = resp.data.meta
        this.store.loading = false
    }).catch(error =>{
        console.log(error);})
}

export {getCards}