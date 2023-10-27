<template>
    <form>
        <label for="title">
            title
            <input type="text" id="title" v-model="form.title" />
        </label>
        <label for="content">
            content
            <input type="text" id="content" v-model="form.content" />
        </label>
        <input type="submit" value="submit" @click.prevent="onSubmit" />
    </form>
</template>
  
<script lang="ts">
import { defineComponent, reactive } from "@vue/runtime-core";
import { useStore } from "src/store";
import * as MutationTypes from "src/store/mutationTypes";

export default defineComponent({
    setup() {
        const form = reactive({
            title: "",
            content: ""
        });

        const clearForm = () => {
            form.title = "";
            form.content = "";
        };

        const store = useStore();

        const onSubmit = () => {
            store.commit(MutationTypes.ADD_TODO_ITEM, {
                id: Math.floor(Math.random() * 100000), // 仮でランダムなIDを設定
                content: form.content,
                isCompleted: false
            });
            clearForm();
        };

        return {
            onSubmit,
            form
        };
    }
});
</script>