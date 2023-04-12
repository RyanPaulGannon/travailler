import { defineConfig } from 'unocss'
import presetUno from '@unocss/preset-uno'

export default defineConfig({
    presets: [presetUno()],
    shortcuts: {
        'text-red': 'color: #EF4444',
    },
})
