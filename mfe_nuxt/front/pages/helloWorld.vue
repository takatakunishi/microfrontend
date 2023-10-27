<script lang="ts">
import { defineComponent } from 'vue';
// import { ROOT } from 'src/route';
import NavigateButtons from '../molecules/NavigateButtons.vue';
// import TodoList from '../organisms/TodoList.vue';
export default defineComponent({
  components: {
    NavigateButtons,
    // TodoList
  },
  setup(_, ctx) {
    console.log("hello", ctx)
    const msg = "Home"
    return ({ msg })
  },
})
</script>

<template>
  <h1>Hello world in Vue3 {{ msg }}</h1>
  <NavigateButtons />
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
  color: blueviolet;
}

h3 {
  font-size: 1.2rem;
}

.buttons {
  display: flex;
  flex-direction: column;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
