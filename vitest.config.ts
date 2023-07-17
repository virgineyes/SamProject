import vue from '@vitejs/plugin-vue'

export default {
  plugins: [vue()],
  test: {
    deps: {
      inline: ['element-plus']
    },
    testTimeout: 1000000,
    environment: 'happy-dom'
  }
}
