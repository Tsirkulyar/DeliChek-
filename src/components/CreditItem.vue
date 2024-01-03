<template>
    <div class="bg-grey w-10/12 rounded-xl pt-2 my-7 text-center mx-auto">
        <p>{{ credit.who }} должен {{ credit.whon }}: {{ Math.round(credit.sum)}} $</p>
    </div>
</template>
<script>
import { useDataStore } from '../store/DataStore';
export default{
    name: 'CreditItem',
    data(){
        return{
            DataStore: useDataStore()
        }
    },
    props : {
        credit:{
            type: Object,
            required: true
        }
    }
}
</script>
