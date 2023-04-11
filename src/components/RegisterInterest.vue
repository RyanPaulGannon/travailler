<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')

async function registerInterest() {
    alert(`Keep an eye on your emails, ${email.value}`)
}
</script>

<template>
    <div class="card">
        <input id="greet-input" v-model="email" placeholder="Enter your email" />
        <button type="button" @click="registerInterest()">Register</button>
    </div>
</template>
