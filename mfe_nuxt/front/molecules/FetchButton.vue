<script setup>
function RunFetch() {
    fetch("http://localhost:9000/test/health", {
        'Content-Type': 'application/json',
        accept: 'application/json',
        credentials: 'include'
    })
}
</script>

<template>
    <button :onclick="RunFetch">fetch</button>
</template>