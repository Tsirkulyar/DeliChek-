<template>
  <div class="app sm:w-96 mx-auto">
      <router-view></router-view>
 </div>
</template>
<script >
import router from './router';
import MyFooter from './components/UI/MyFooter.vue';
export default {
  components: { router, MyFooter },
}
</script>

