<template>
  <div>
  <navbar/>
    <add-form />
    <h3 class="text-center mt-4" v-if="DataStore.showUs">
      {{ DataStore.scoreUser() }}
    </h3>
    <div v-else class="center bg-blue w-9/12 rounded-xl h-10 mx-auto pt-2 text-center mt-8">
      <router-link :to="{ name: 'AddProducts' }">
        <my-button>
          {{ DataStore.scoreUser() }}
        </my-button>
      </router-link>
    </div>
    <user-list />
  </div>
  <MyFooter />

  <my-dialog v-model:show="DataStore.dialogVisible">
    <div>{{ DataStore.textDialog }}</div>
  </my-dialog>

  <my-dialog v-model:show="DataStore.showTotalCheck">
    <instruct-div/>
  </my-dialog>
</template>

<script>
import Navbar from "../ui/navbar.vue";
import instructDiv from "../navigation/instructDiv.vue";
import MyDialog from "../UI/MyDialog.vue";
import AddForm from "../AddForm.vue";
import UserList from "../UserList.vue";
import MyButton from "../UI/MyButton.vue";
import MyFooter from "../UI/MyFooter.vue";
import { useDataStore } from "../../store/DataStore";

export default {
  name: "general-form",
  components: { AddForm, UserList, MyButton, MyDialog, MyFooter, instructDiv, Navbar },
  data() {
    return {
      DataStore: useDataStore(),
    };
  },
};
</script>

<style scoped></style>
