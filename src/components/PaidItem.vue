<template>
  <div v-if="show" class="pt-4 pb-4 rounded-xl bg-grey w-10/12 mx-auto mt-8">
    <div class="float-right pr-4">
      <my-button
       @click="ClickDelete()"
       class="bg-blue rounded-xl pt-1 py-4 h-8 mx-auto text-center"
       >Делит</my-button>
    </div>

    <div>
      <div class="w-full">
        <p>Платил(а):</p>
        <p>{{ payitem.paid }}</p>
      </div>
      <div>
        <p>Кто теперь должен:</p>
        <div v-for="used in payitem.used">
          <p>{{ used }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MyButton from "./UI/MyButton.vue";
import { useDataStore } from "../store/DataStore";
export default {
    data(){
        return{
            dataStore : useDataStore(),
            show: true
        }
    },
  props: {
    payitem: {
      type: Object,
      required: true,
    },
  },
  methods:{
    ClickDelete(){
        this.dataStore.DeleteDuty(this.payitem)
        this.show = !this.show
        console.log(this.dataStore.CommonDuty)
    }
  },
  components: {MyButton}
};
</script>
<style></style>
