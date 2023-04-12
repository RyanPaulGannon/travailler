<script setup lang="ts">
import Timer from './components/Timer.vue'
import RegisterInterest from './components/RegisterInterest.vue'
</script>

<template>
    <div class="container">
        <h1>Bienvenue à Travailler!</h1>

        <div class="row">
            <a href="https://vitejs.dev" target="_blank">
                <img src="/vite.svg" class="logo vite" alt="Vite logo" />
            </a>
        </div>

        <p class="text-red">Visit our website to learn more, coming soon.</p>

        <RegisterInterest />

        <div class="container">
            <Timer :is-running="true" />
        </div>
    </div>
</template>

<style scoped>
.logo.vite:hover {
    filter: drop-shadow(0 0 2em #747bff);
}

.logo.vue:hover {
    filter: drop-shadow(0 0 2em #249b73);
}
</style>
