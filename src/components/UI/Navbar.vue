<template>
  <div class="w-11/12 mx-auto grid grid-cols-2 items-center justify-between">
    <div class="bg-blue w-14 h-14 rounded-xl mt-8">
      <my-button @click="DataStore.totalCheck()">
        <img src="../../assets/img/instr.png" height="50" />
      </my-button>
    </div>
  </div>
</template>
<script>
import instructDiv from "../navigation/instructDiv.vue";
import MyButton from "./MyButton.vue";
import { useDataStore } from '../../store/DataStore';
export default {
  name: "navbar",
  components: {
    instructDiv,
    MyButton,
  },
  data(){
    return{
        DataStore: useDataStore()
    }
  }
};
</script>
<style></style>
