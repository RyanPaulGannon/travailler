<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import TimerButton from './TimerButton.vue'

const secondsElapsed = ref(0)
const isRunning = ref(false)
const intervalId = ref()

const formatTime = computed(() => {
    const hours = Math.floor(secondsElapsed.value / 3600)
    const minutes = Math.floor((secondsElapsed.value % 3600) / 60)
    const seconds = secondsElapsed.value % 60
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
})

function pad(num: number) {
    return num.toString().padStart(2, '0')
}

function toggleTimer() {
    isRunning.value = !isRunning.value
}

watch(isRunning, (newValue) => {
    if (newValue) {
        const startTime = Date.now() - secondsElapsed.value * 1000
        intervalId.value = setInterval(() => {
            secondsElapsed.value = Math.floor((Date.now() - startTime) / 1000)
        }, 1000)
    } else {
        clearInterval(intervalId.value!)
        intervalId.value = null
    }
})
</script>

<template>
    <div class="timer">
        {{ formatTime }}
    </div>
    <TimerButton :is-running="isRunning" @toggle-timer="toggleTimer" />
</template>

<style scoped>
.timer {
    font-size: 2em;
    text-align: center;
    margin-bottom: 10px;
}
</style>
