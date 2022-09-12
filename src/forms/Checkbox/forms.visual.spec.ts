/*
 * Do not modify this file directly.
 * This file was generated by: playwright.generate-tests.ts.
 * Regenerate using: npm run test:visual:generate
 */
import {test, expect} from '@playwright/test'

// eslint-disable-next-line i18n-text/no-en
test.describe('Visual Comparison: forms', () => {
  test('forms / Checkbox - Playground', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-forms-checkbox--playground&viewMode=story')

    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('forms / Checkbox - Variants', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-forms-checkbox--variants&viewMode=story')

    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('forms / w/ TextInput - Playground', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-forms-formcontrol--text-input-playground&viewMode=story'
    )

    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('forms / w/ Select - Playground', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-forms-formcontrol--select-playground&viewMode=story'
    )

    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('forms / w/ Checkbox - Playground', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-forms-formcontrol--checkbox-playground&viewMode=story'
    )

    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('forms / Select - Playground', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-forms-select--playground&viewMode=story')

    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('forms / TextInput - Playground', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-forms-textinput--playground&viewMode=story')

    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('forms / GitHub Enterprise sign up form', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-forms-examples--git-hub-enterprise&viewMode=story'
    )

    expect(await page.screenshot()).toMatchSnapshot()
  })
})
