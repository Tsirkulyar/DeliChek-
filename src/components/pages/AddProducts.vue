<template>
  <div>
    <div>
      <navbar />
      <add-products-form />
      <div class="mx-auto text-center mt-3">
        <div v-if="DataStore.showBtnCheck">
          <p>*нужно минимум 2 заказа*</p>
        </div>
        <div v-else
        class="center bg-blue w-9/12 rounded-xl h-10 mx-auto pt-2 text-center mt-8"
        >
          <router-link :to="{ name: 'CheckPage' }">
            <my-button >
              Официант! Счет!
            </my-button>
          </router-link>
        </div>
      </div>
      <products-list />
    </div>
  </div>
  <my-dialog v-model:show="DataStore.dialogVisible">
    <div>{{ DataStore.textDialog }}</div>
  </my-dialog>

  <my-dialog v-model:show="DataStore.showTotalCheck">
    <instruct-div />
  </my-dialog>

  <my-dialog v-model:show="DataStore.showSelect">
    {{ "Добвьте того, кто за всех платил..." }}
  </my-dialog>

  <my-dialog v-model:show="DataStore.showCheckBox">
    {{ "Добавьте тех, кто должен...." }}
  </my-dialog>

  <my-dialog v-model:show="DataStore.showNotPrice">
    {{ "А сколько стоит это все?" }}
  </my-dialog>

  <my-dialog v-model:show="DataStore.showCredit">
    {{ "Добавьте пж это все в чек, а потом спокойно продолжим!)" }}
  </my-dialog>
</template>

<script>
import Navbar from "../ui/navbar.vue";
import instructDiv from "../navigation/instructdiv.vue";
import AddProductsForm from "../AddProductsForm.vue";
import ProductsList from "../ProductsList.vue";
import MyButton from "../UI/MyButton.vue";
import MyFooter from "../UI/MyFooter.vue";
import MyDialog from "../UI/MyDialog.vue";
import { useDataStore } from "../../store/DataStore";
export default {
  components: {
    AddProductsForm,
    ProductsList,
    MyButton,
    MyFooter,
    MyDialog,
    instructDiv,
    Navbar,
  },
  data() {
    return {
      DataStore: useDataStore(),
    };
  },
};
</script>
<style></style>
