<template>
  <Transition name="slide-fade">
    <div class="dialog" v-if="show" @click.stop="hideDialog">
      <div @click.stop class="dialog__content sm:w-7/12">
        <slot></slot>
      </div>
    </div>
    </Transition>
  </template>
  
  <script>
  export default {
    name: "MyDialog",
    props: {
      show: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      hideDialog(){
        this.$emit('update:show', false)
      }
    }
  }
  </script>
  
  <style>
  .dialog{
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    /* position: absolute; */
    display: flex;
  
  }
  .dialog__content{
    margin: auto;
    background: #192948;
    border-radius: 12px;
    min-height: 50px;
    min-width: 300px;
    padding: 20px;
  }
  .slide-fade-enter-active {
  transition: all 0.4s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}
  </style>