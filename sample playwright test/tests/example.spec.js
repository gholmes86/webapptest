// @ts-check
const { test, expect } = require('@playwright/test');

test('Verify answer retained after reload', async ({ page }) => {
  await page.goto('https://webapp4.aaron.rios.azure.e3labs.net/survey/haslc/page/haslc-eligible');
  await expect(page).toHaveTitle(/resources/);
  //clicking 5th element
  page.click('[class=\'pathfinder-number-picker__item\']>>nth=3')
  //verifying 5th picker is active
  await expect(page.locator('[class="pathfinder-number-picker__item active"]')).toHaveText('5')
  //reloading
  page.reload()
  await expect(page).toHaveTitle(/resources/);
  //verify 5th picker is still active
  await expect(page.locator('[class="pathfinder-number-picker__item active"]')).toHaveText('5')
});

test('Verify user selects dropdown', async ({ page }) => {
  await page.goto('https://webapp4.aaron.rios.azure.e3labs.net/survey/haslc/page/haslc-eligible');
  await expect(page).toHaveTitle(/resources/);
  await page.selectOption('[placeholder="Select Income from the List"]', '$37,251 - $40,250')

});


