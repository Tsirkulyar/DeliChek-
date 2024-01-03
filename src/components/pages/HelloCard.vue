<template>
  <div class="pt-4">
  <img src="../../assets/img/check.png" class=" mx-auto">
  </div>
  <div class="h-56 sm:h-40 mx-auto mt-2 sm:mt-0">
    <div class="w-11/12 mx-auto text-center">
      <div class="pt-16 sm:pt-8">
        <h1 class="text-3xl mx-auto">ДелиЧек!</h1>
        <br />
        <h3 class="text-base">ДелиЧек - для больших компаний с раздельным бюджетом)
        </h3>
      </div>

      <div class="bg-blue w-9/12 rounded-xl mt-10 sm:mt-2 h-8 mx-auto">
        <router-link :to="{ name: 'GeneralForm' }" class="items-center">
          <my-button class="pt-1">Тыкни, чтобы начать</my-button>
        </router-link>
      </div>
    </div>
  </div>
  <div class="inset-x-0 bottom-0">
    <MyFooter />
  </div>
</template>

<script>
import MyButton from "../UI/MyButton.vue";
import MyFooter from "../UI/MyFooter.vue";
export default {
  components: { MyButton, MyFooter },
  name: "HelloCard",
};
</script>

<style scoped></style>
