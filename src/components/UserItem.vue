<template>
    <div class="pt-4 pb-4 rounded-xl bg-grey w-9/12 mx-auto mt-8">
      <div class="grid grid-cols-2 items-center">
        <div>
          <h3 class="text-center">{{ user.name }}</h3>
        </div>
        <div class="bg-blue w-9/12 rounded-xl pt-1 h-8 mx-auto text-center">
          <my-button @click="DataStore.removeUser(user)"> дэлит </my-button>
        </div>
      </div>
    </div>
</template>
<script>
import MyButton from "./UI/MyButton.vue";
import { useDataStore } from "../store/DataStore";
export default {
  components: { MyButton },
  name: "UserItem",
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      DataStore: useDataStore(),
    };
  },
};
</script>
<style scoped>

</style>
