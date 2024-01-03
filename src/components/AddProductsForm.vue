<template>
  <div>
    <div class="bg-grey mx-auto w-11/12 rounded-xl mt-6">
      <h1 class="pt-8 text-2xl text-center">Давай добавлять продукты!</h1>
      <div class="text-xs text-center py-2">
        <p>*рекомендую называть продукты целиком))</p>
      </div>
      <div class="mx-auto text-center">
        <input
          v-model="dataStore.product.name"
          placeholder="Что заказали?"
          class="w-10/12 bg-bg h-12 rounded-xl mx-auto text-center"
        />
      </div>
      <div class="mb-3">
        <div
          class="center bg-blue w-9/12 rounded-xl h-10 pt-2 mx-auto text-center mt-4 mb-3"
        >
          <my-button @click="dataStore.createProducts()"> берём! </my-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useDataStore } from "../store/DataStore";
import MyButton from "./UI/MyButton.vue";

const dataStore = useDataStore();
</script>
<style scoped></style>
