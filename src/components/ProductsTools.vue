<template>
  <div>
  <div v-if="checkWindow">
  <div class="mx-auto">
    <div class="bg-grey rounded-xl pt-2 ">
      <div class=" w-full h-14 inline-block mb-1">
        <div class="inline-block mb-3 float-left w-10/12">
          <div class="w-full text-center inline-block">
            <h3 class="text-center text-xl">{{ product.name }}</h3>
          </div>
          <div class="inline-block text-center mx-auto pt-1">
            <input
              class="w-full bg-bg rounded text-center mx-auto"
              type="number"
              placeholder="сколько деняк?"
              v-model="DataStore.inputSum"
            />
          </div>
        </div>
        <div class="inline-block float-right pr-3 pt-2">
          <div class="center bg-blue w-10 rounded-xl h-10 text-center right-0">
            <my-button @click="showTools()" class="pt-2"> ≡ </my-button>
          </div>
        </div>
      </div>
      <div v-if="show">
        <product-cbox  :checkWindow="checkWindow" @changeValue="ChangeEl" @createVisual="returnVisual"/>
      </div>
    </div>
  </div>
</div>
<div v-else>
  <!-- <p>{{ returnVisual }}</p> -->
  <paid-item :payitem="payitem"/>

</div>
</div>
</template>
<script>
import MyButton from "./UI/MyButton.vue";
import ProductCbox from "./ProductCbox.vue";
import { useDataStore } from "../store/DataStore";
import MyInput from "./UI/MyInput.vue";
import PaidItem from "./PaidItem.vue";

export default {
  name: "products-tools",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      payitem: {},
      checkWindow: true,
      show: false,
      DataStore: useDataStore(),
      textBtn: '≡',
      visualCheck: {
        id: '',
        who: this.product.name,
        paid: '',
        used: []
      }
    };
  },
  components: { MyButton, ProductCbox, MyInput, PaidItem },
  methods: {
    returnVisual(visual){
      let i = 0
      console.log(visual)
      // console.log(`${e.paid} + ${++i}`)
      this.checkWindow = !this.checkWindow
      this.payitem = visual
    },
    showTools() {
      if(this.DataStore.controlCredit){
        this.DataStore.showCredit = !this.DataStore.showCredit 
      }else{
        this.show = !this.show;
        this.DataStore.controlCredit = !this.DataStore.controlCredit
      }
    },
    ChangeEl(e){
      this.checkWindow = e
    }
  },
};
</script>
