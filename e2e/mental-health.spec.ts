import { test, expect } from '@playwright/test'

test.describe('Mental Health Starter - Non-demo mode', () => {
  test('homepage renders hero and stats from Drupal', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('h1')).toContainText('Your Journey to Wellness Starts Here')
    // Stats section
    await expect(page.getByText('5,000+')).toBeVisible()
    await expect(page.getByText('Clients Supported')).toBeVisible()
    // CTA section
    await expect(page.getByText('Take the First Step')).toBeVisible()
  })

  test('services listing shows all services', async ({ page }) => {
    await page.goto('/services')
    await expect(page.getByRole('heading', { name: 'Individual Therapy' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Couples Therapy' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Child & Adolescent Therapy' })).toBeVisible()
  })

  test('service detail page loads', async ({ page }) => {
    await page.goto('/services/individual-therapy')
    await expect(page.locator('h1')).toContainText('Individual Therapy')
    await expect(page.getByText('Session Format')).toBeVisible()
    await expect(page.getByText('In-person or Telehealth')).toBeVisible()
  })

  test('team listing shows therapists', async ({ page }) => {
    await page.goto('/team')
    await expect(page.getByText('Dr. Naomi Williams, PhD')).toBeVisible()
    await expect(page.getByText('Carlos Reyes, LCSW')).toBeVisible()
    await expect(page.getByText('Dr. Sarah Park, PsyD')).toBeVisible()
  })

  test('therapist detail page loads', async ({ page }) => {
    await page.goto('/team/dr-naomi-williams')
    await expect(page.locator('h1')).toContainText('Dr. Naomi Williams, PhD')
    await expect(page.getByText('Licensed Psychologist')).toBeVisible()
  })

  test('resources listing shows articles', async ({ page }) => {
    await page.goto('/resources')
    await expect(page.getByText('5 Evidence-Based Coping Strategies for Anxiety')).toBeVisible()
    await expect(page.getByText('Improving Communication in Your Relationship')).toBeVisible()
  })

  test('resource detail page loads', async ({ page }) => {
    await page.goto('/resources/coping-strategies-for-anxiety')
    await expect(page.locator('h1')).toContainText('5 Evidence-Based Coping Strategies for Anxiety')
  })

  test('about page loads', async ({ page }) => {
    await page.goto('/about')
    await expect(page.locator('h1')).toContainText('About Clearpath Counseling & Wellness')
  })

  test('navigation links work', async ({ page }) => {
    await page.goto('/')
    // Click Services link
    await page.click('a[href="/services"]')
    await expect(page).toHaveURL('/services')
    await expect(page.getByRole('heading', { name: 'Individual Therapy' })).toBeVisible()
  })
})
