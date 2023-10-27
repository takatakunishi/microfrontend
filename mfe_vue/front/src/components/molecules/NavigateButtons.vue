<script setup lang="ts">
import { defineComponent } from "vue"
import { ROOT } from 'src/route';
import { useRouter } from "vue-router";
const router = useRouter()
function navigate(path: string, root?: string) {
    router.push((root ?? ROOT.runtime) + path)
    console.log("navigate", path)
}
defineComponent({
    name: "NavigateButtons",
})
</script>
<template>
    <div class="buttons">
        <router-link :to="ROOT.runtime">RouterLink - Homeへ</router-link>
        <router-link :to="ROOT.runtime + '/about'">RouterLink - Aboutへ</router-link>
        <button :onclick="() => navigate('')">routerPush - Homeへ</button>
        <button :onclick="() => navigate('/about')">routerPush - Aboutへ</button>
        <a :href="ROOT.runtime">aタグ - Homeへ</a>
        <a :href="ROOT.runtime + '/about'">aタグ - Aboutへ</a>
        <router-link :to="'/runtime/react'">RouterLink - React Runtimeへ (正常に動作しない)</router-link>
        <a href="/runtime/react">aタグ - React Runtimeへ (動く)</a>
        <button :onclick="() => navigate('/sample', '/runtime/react')">routerPush - (正常に動作しない)</button>
    </div>
</template>

<style scoped>
.buttons {
    display: flex;
    flex-direction: column;
    padding: 30px;
}
</style>

