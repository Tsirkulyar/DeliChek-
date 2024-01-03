<template>
  <div class="mx-auto w-11/12 text-center">
    <TransitionGroup name="list" tag="ul">
      <div
        v-for="product in DataStore.products"
        :key="product.id"
        class="rounded-xl mt-10 mb-10"
      >
        <ProductsTools :product="product" :key="product.id" />
      </div>
    </TransitionGroup>
  </div>
</template>
<script>
import { TransitionGroup } from "vue";
import ProductsTools from "./ProductsTools.vue";
import { useDataStore } from "../store/DataStore";

export default {
  name: "products-list",
  components: { ProductsTools },

  data() {
    return {
      DataStore: useDataStore(),
    };
  },
};
</script>
<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.4s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(40px);
}
</style>
