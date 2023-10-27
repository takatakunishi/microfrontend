<script setup lang="ts">
import { defineComponent } from "vue"
import { useRouter } from "vue-router";
// import { ROOT } from "../route"
const router = useRouter()
// // console.log("hello", ctx)
function navigate(path: string, root: string) {
    console.log("navigate", path)
    router.push({ path: root + path })
}
defineComponent({
    name: "NavigateButtons",
})
</script>
<template>
    <div class="buttons">
        <!-- <router-link :to="ROOT.runtime">RouterLink - Homeへ</router-link>
        <router-link :to="ROOT.runtime + '/about'">RouterLink - Aboutへ</router-link>
        <button :onclick="() => navigate('')">routerPush - Homeへ</button>
        <button :onclick="() => navigate('/about')">routerPush - Aboutへ</button>
        <a :href="ROOT.runtime">aタグ - Homeへ</a>
        <a :href="ROOT.runtime + '/about'">aタグ - Aboutへ</a> -->
        <router-link :to="'/nuxt-page/test'">RouterLink(nuxt-page) - testへ</router-link>
        <router-link :to="'/nuxt-page/home'">RouterLink(nuxt-page) - homeへ</router-link>
        <router-link :to="'/nuxt-page/'">RouterLink(nuxt-page) - rootへ</router-link>
        <router-link :to="'/nuxt-html/test'">RouterLink(nuxt-html) - testへ</router-link>
        <router-link :to="'/nuxt-html/home'">RouterLink(nuxt-html) - homeへ</router-link>
        <router-link :to="'/nuxt-html/'">RouterLink(nuxt-html) - rootへ</router-link>
        <router-link :to="'/runtime/nuxt/test'">RouterLink(runtime/nuxt) - testへ</router-link>
        <router-link :to="'/runtime/nuxt/home'">RouterLink(runtime/nuxt) - homeへ</router-link>
        <router-link :to="'/runtime/nuxt/'">RouterLink(runtime/nuxt) - rootへ</router-link>
        <button :onclick="() => navigate('/home', '/runtime/nuxt')">RouterLink(runtime/nuxt) - home</button>
        <!-- <nuxt-link :to="'/runtime/react'">RouterLink - React Runtimeへ (正常に動作しない)</nuxt-link> -->
        <!-- <a href="/runtime/react">aタグ - React Runtimeへ (動く)</a> -->
        <!-- <button :onclick="() => navigate('/sample', '/runtime/react')">routerPush - (正常に動作しない)</button> -->
    </div>
</template>

<style scoped>
.buttons {
    display: flex;
    flex-direction: column;
    padding: 30px;
}
</style>

