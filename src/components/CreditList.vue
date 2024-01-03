<template>
    <div>
        <div >
                <div v-for="credit in DataStore.CommonDuty">
                    <credit-item :credit="credit"/>
                </div>
        </div>
    </div>
</template>

<script>
import { useDataStore } from '../store/DataStore';
import CreditItem from './CreditItem.vue';
export default{
    components:{CreditItem},
    data(){
        return{
            DataStore: useDataStore()
        }
    }
}
</script>
