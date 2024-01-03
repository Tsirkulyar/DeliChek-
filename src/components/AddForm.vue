<template>
  <div>
    <div class="rounded-xl bg-grey w-11/12 mx-auto mt-6">
      <div class="">
        <div class="pt-4 text-3xl text-center">
          <h1 class=" ">Добавляй всех друзей!</h1>
        </div>
        <h3 class="text-center text-xs mx-auto w-10/12 pt-2">
          *советую писать имена целиком, потому что под вечер уже забудете кто
          есть кто*
        </h3>
      </div>
      <form @submit.prevent>
        <div class="mx-auto text-center pb-2">
          <input
            v-model="dataStore.user.name"
            class="bg-bg mt-4 w-10/12 h-10 rounded-xl text-center"
            placeholder="  Вводи своего друга"
          />
          <div class="bg-blue w-9/12 rounded-xl mt-6 h-8 mx-auto pt-1">
            <my-button @click="dataStore.AddFormCreateUser()">
              Добавить
            </my-button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import MyButton from "./UI/MyButton.vue";
import { useDataStore } from "../store/DataStore";

const dataStore = useDataStore();
</script>
