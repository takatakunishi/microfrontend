<template>
    <TodoItemForm />
    <ul>
        <li v-for="item in todoItems" :key="item.id" class="mfe-vue-todolist-li">
            <div class="mfe-vue-todolist-li-wapper">
                <!-- <p>{{ item.title }}</p> -->
                <p class="mfe-vue-todolist-check">{{ item.isComplete ? "✅" : "-" }}</p>
                <p>{{ item.content }}</p>
                <!-- <hr /> -->
            </div>
        </li>
    </ul>
</template>
<script lang="ts">
import { defineComponent, computed } from "@vue/runtime-core";
import { useStore } from "src/store"
import TodoItemForm from "../molecules/TodoItemForm.vue";
export default defineComponent({
    setup() {
        const store = useStore();
        const todoItems = computed(() => store.state.todoListState);
        return {
            todoItems
        };
    },
    components: { TodoItemForm }
});
</script>

<style scoped>
p {
    height: fit-content;
    width: fit-content;
    margin: 0px;
}

.mfe-vue-todolist-li-wapper {
    display: flex;
    width: fit-content;
    flex-direction: row;
}

.mfe-vue-todolist-check {
    display: flex;
    width: fit-content;
    padding: 0px 16px;
}
</style>