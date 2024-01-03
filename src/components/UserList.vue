<template>
  <div>
    <TransitionGroup name="list" tag="ul">
    <div class="" v-for="user in DataStore.users" :key="user.id">
         <user-item :user="user" />
         </div>
      </TransitionGroup>
    
  </div>
  
</template>
<script>
import UserItem from "./UserItem.vue";
import { useDataStore } from "../store/DataStore";
import { TransitionGroup } from "vue";
export default {
  components: { UserItem, TransitionGroup },
  name: "UserList",
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
