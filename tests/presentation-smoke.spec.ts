import { expect, test } from '@playwright/test'

test('slide navigation works from keyboard and controls', async ({ page }, testInfo) => {
  await page.goto('/')

  await expect(page.locator('h1')).toContainText(
    'How an SEO project turns into business growth',
  )

  await page.keyboard.press('ArrowRight')
  await expect(page.locator('h1')).toContainText('What clients actually want from SEO')

  if (testInfo.project.name === 'desktop-chromium') {
    const slide = page.locator('.slide')
    const box = await slide.boundingBox()

    if (!box) {
      throw new Error('Slide bounding box missing')
    }

    await page.mouse.move(box.x + box.width * 0.78, box.y + box.height * 0.5)
    await page.mouse.down()
    await page.mouse.move(box.x + box.width * 0.18, box.y + box.height * 0.5, {
      steps: 14,
    })
    await page.mouse.up()

    await expect(page.locator('h1')).toContainText('In-depth analysis of SEO opportunities')
  } else {
    await page.locator('.nav-button--primary').click()
    await expect(page.locator('h1')).toContainText('In-depth analysis of SEO opportunities')
  }

  await page.locator('.progress-segment').nth(10).click()
  await expect(page.locator('h1')).toContainText('Launch of priority SEO assets')

  await expect(page.locator('.brand-logo')).toBeVisible()
  await expect
    .poll(async () => page.locator('.brand-logo').evaluate((img) => (img as HTMLImageElement).naturalWidth))
    .toBeGreaterThan(0)

  if (testInfo.project.name === 'desktop-chromium') {
    await expect(page.locator('.rail-visual-image')).toBeVisible()
    await expect(page.locator('.slide-brand-mark img')).toBeVisible()
  }
})
