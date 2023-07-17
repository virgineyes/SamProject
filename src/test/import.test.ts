import { describe, test, expect } from 'vitest'
describe('import vue components', () => {
  test('normal imports as expected', async () => {
    const cmp = await import('../components/HelloWorld.vue')
    expect(cmp).toBeDefined()
  }, { timeout: 1000000 })

  test('template string imports as expected', async () => {
    // eslint-disable-next-line @typescript-eslint/quotes
    const cmp = await import('../components/HelloWorld.vue')
    expect(cmp).toBeDefined()
  }, { timeout: 1000000 })

  test('dynamic imports as expected', async () => {
    const name = 'HelloWorld'
    const cmp = await import(`../components/${name}.vue`)
    expect(cmp).toBeDefined()
  }, { timeout: 1000000 })
})
