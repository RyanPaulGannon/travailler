<script setup lang="ts">
import { ref, defineEmits } from 'vue'

const timer = ref('Start')
const emits = defineEmits(['toggle-timer'])

function toggleTimer() {
    timer.value = timer.value === 'Start' ? 'Stop' : 'Start'
    emits('toggle-timer')
}
</script>

<template>
    <div class="card">
        <button
            type="button"
            @click="toggleTimer"
            :class="{ start: timer === 'Start', stop: timer === 'Stop' }"
        >
            {{ timer }}
        </button>
    </div>
</template>

<style scoped>
.start {
    background-color: green;
    color: white;
}

.stop {
    background-color: red;
    color: white;
}
</style>
