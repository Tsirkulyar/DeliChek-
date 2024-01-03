<template>
  <div class="bg-bg" style="height: 1px"></div>
  <div class="center">
    <div>
      <div>
        <div class="py-3">
          <h3>Кто из вас за это платил?</h3>
        </div>
      </div>
      <div>
        <div class="w-10/12 text-center mx-auto">
          <select v-model="selected" class="bg-bg w-10/12 h-10 rounded-xl">
            <option hidden disabled selected value>--Выбери друга--</option>
            <option
              v-for="user in dataStore.users"
              :value="user.name"
              :key="user.id"
            >
              {{ user.name }}
            </option>
          </select>
        </div>
      </div>
    </div>
    <h3 class="my-5">Кто употреблял это все?</h3>
    <div class="w-8/12 text-center mx-auto">
      <div v-for="user in dataStore.users" :key="user.id">
        <div>
          <product-users-list
            class=""
            :user="user"
            :click="click"
            @checked="AddCheked"
            @clean="ClearChecked"
          />
          <br />
        </div>
        <br />
      </div>
      <div
      class="bg-blue rounded-xl w-5/6 pt-3 py-4  mx-auto text-center pb-4 mb-2"
      >
        <my-button
          @click="CreateObj()"
          
          >Добавить в заказ</my-button
        >
      </div>
    </div>
  </div>
</template>
<script>
import ProductUsersList from "./ProductUsersList.vue";
import { useDataStore } from "../store/DataStore";
import { defineEmits } from "vue";
import MyButton from "./UI/MyButton.vue";
import { ref } from "vue";

export default {
  components: { ProductUsersList },
  setup(props, context) {
    const selected = ref("");
    const dataStore = useDataStore();
    const checkedNames = ref([]);
    const checkedNamesObj = ref([]);
    const creditObjArr1 = ref([]);
    const click = ref(false);
    const textPushBln = ref(false);
    const credit = ref({
      id: "",
      delId: "",
      who: "",
      whon: "",
      sum: "",
    });
    const visual = ref({
      id: "",
      paid: "",
      used: [],
    });
    const AddCheked = (name) => {
      checkedNames.value.push(name);
    };
    const ClearChecked = (name) => {
      checkedNames.value = checkedNames.value.filter((p) => p !== name);
    };
    const visualCheck = () => {
      visual.value.id = Math.random();
      visual.value.paid = selected.value;
      visual.value.used = checkedNames.value;
      console.log(visual.value);
      // this.$emit('createVisual', visual.value)
      context.emit("createVisual", visual.value);
      // context.parent.valueFromChild = visual.value
    };
    const CreateObj = () => {
      click.value = !click.value;
      if (selected.value == "") {
        dataStore.showSelect = !dataStore.showSelect;
      } else if (checkedNames.length == 0) {
        dataStore.showCheckBox = !dataStore.showCheckBox;
      } else if (dataStore.inputSum == "") {
        dataStore.showNotPrice = !dataStore.showNotPrice;
      } else {
        visualCheck();
        dataStore.amountProducts.push(visual.value.id);
        dataStore.controlCredit = !dataStore.controlCredit;
        textPushBln.value = !textPushBln.value;
        checkedNames.value.forEach((el) => {
          credit.value.delId = visual.value.id;
          credit.value.id = Math.random();
          credit.value.who = el;
          credit.value.whon = selected.value;
          credit.value.sum = Number(
            dataStore.inputSum / checkedNames.value.length
          );
          creditObjArr1.value.push(credit.value);
          credit.value = {
            id: "",
            delId: "",
            who: "",
            whon: "",
            sum: "",
          };
        });
        dataStore.inputSum = "";
        dataStore.CommonDuty = dataStore.CommonDuty.concat(creditObjArr1.value);
        console.log(creditObjArr1);
        console.log(dataStore.CommonDuty);
        dataStore.scoreProducts()
      }
    };
    return {
      visualCheck,
      dataStore,
      CreateObj,
      AddCheked,
      ClearChecked,
      selected,
      checkedNames,
      creditObjArr1,
      click,
      textPushBln,
      credit,
      visual,
    };
  },
};
</script>
