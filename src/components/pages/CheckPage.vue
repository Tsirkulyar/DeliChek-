<template>
  <div>
    <navbar />
    <div>
      <div
        class="rounded-xl bg-grey w-11/12 mx-auto mt-6 text-center mt-12 py-4"
      >
        <h2 class="text-3xl">Давайте расчитаемся!</h2>
        <p class="pt-4">
          Ну что, накушали вы с друзьями на крупную сумму:
          {{ dataStore.sumTtl }}
        </p>
      </div>
      <credit-list />
    </div>


    <my-dialog v-model:show="dataStore.showTotalCheck">
    <instruct-div/>
  </my-dialog>
  </div>
</template>

<script setup>
import navbar from "../ui/navbar.vue";
import { onMounted } from "vue";
import { useDataStore } from "../../store/DataStore";
import CreditList from "../CreditList.vue";
import MyDialog from "../UI/MyDialog.vue";
import instructDiv from "../navigation/instructDiv.vue";

const dataStore = useDataStore();

onMounted(() => {
  dataStore.TotalSum();
  dataStore.RecountDuty();
  dataStore.reverseDuty();
});
</script>
