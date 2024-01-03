<template>
  <div>
    <div class="flex">
      <input
        type="checkbox"
        class="bg-bg h-7 w-7 mb-4"
        @change="AddPerson"
        v-model="checked"
        label="{{user.name}}"
      />
      <h4 class="mx-auto ">{{ user.name }}</h4>
    </div>
  </div>
</template>

<script>
import { useDataStore } from "../store/DataStore.js";
export default {
  data() {
    return {
      checked: false,
      DataStore: useDataStore(),
    };
  },
  name: "product-user-list",
  props: {
    user: {
      type: Object,
      required: true,
    },
    click: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    AddPerson() {
      if (this.checked == true) {
        this.$emit("checked", this.user.name);
      } else {
        this.$emit("clean", this.user.name);
      }
    },
  },
};
</script>

<style scoped></style>
