import { expect, test } from '@playwright/test'

test('slide navigation works from keyboard and controls', async ({ page }, testInfo) => {
  await page.goto('/')

  await expect(page.getByRole('heading', { level: 1, name: /How an SEO project turns into business growth/i })).toBeVisible()

  await page.keyboard.press('ArrowRight')
  await expect(
    page.getByRole('heading', { level: 1, name: /What clients actually want from SEO/i }),
  ).toBeVisible()

  if (testInfo.project.name === 'desktop-chromium') {
    const slide = page.locator('.slide').last()
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

    await expect(
      page.getByRole('heading', { level: 1, name: /In-depth analysis of SEO opportunities/i }),
    ).toBeVisible()
  } else {
    await page.locator('.nav-button--primary').click()
    await expect(
      page.getByRole('heading', { level: 1, name: /In-depth analysis of SEO opportunities/i }),
    ).toBeVisible()
  }

  await page.locator('.progress-segment').nth(10).click()
  await expect(
    page.getByRole('heading', { level: 1, name: /Launch of priority SEO assets/i }),
  ).toBeVisible()

  await expect(page.locator('.brand-logo')).toBeVisible()
  await expect
    .poll(async () => page.locator('.brand-logo').evaluate((img) => (img as HTMLImageElement).naturalWidth))
    .toBeGreaterThan(0)

  if (testInfo.project.name === 'desktop-chromium') {
    const activeSlide = page.locator('.slide').last()
    await expect(activeSlide.locator('.rail-visual-image')).toBeVisible()
    await expect(activeSlide.locator('.slide-brand-mark img')).toBeVisible()
  }
})

test('iphone layout keeps the slide copy clear of the bottom info boxes', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'iphone-14-chromium')

  await page.goto('/')
  const progressSegments = page.locator('.progress-segment')
  const totalSlides = await progressSegments.count()

  for (let index = 0; index < totalSlides; index += 1) {
    await progressSegments.nth(index).click()
    await page.waitForTimeout(700)

    const metrics = await page.evaluate(() => {
      const rail = document.querySelector('.slide-rail')
      const lastBullet = document.querySelector('.slide-bullets li:last-child')
      const summary = document.querySelector('.slide-summary')
      const lastText = lastBullet ?? summary

      return {
        railTop: rail?.getBoundingClientRect().top ?? 0,
        lastTextBottom: lastText?.getBoundingClientRect().bottom ?? 0,
        slideBottom: document.querySelector('.slide')?.getBoundingClientRect().bottom ?? 0,
        viewportHeight: window.innerHeight,
      }
    })

    expect(
      metrics.lastTextBottom,
      `Slide ${index + 1} text should stay above the info boxes`,
    ).toBeLessThanOrEqual(metrics.railTop + 1.5)

    expect(
      metrics.slideBottom,
      `Slide ${index + 1} should stay inside the first viewport on iPhone`,
    ).toBeLessThanOrEqual(metrics.viewportHeight)
  }
})
