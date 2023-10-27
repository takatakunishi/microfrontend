<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup(_) {
    const msg = "hi"
    return ({ msg })
  },
})
</script>

<template>
  <h1 class="ext">Hello world in Vue3 {{ msg }}</h1>a
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
  color: blueviolet;
}

.ext {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
  color: blueviolet;
}

h3 {
  font-size: 1.2rem;
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
