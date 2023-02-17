import { chromium, FullConfig } from '@playwright/test';

// WARNING - Use that as a test, currently headed mode for global setup is not available! (We need to fill captcha manually === we need headed mode).

async function globalSetup(config: FullConfig) {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    // Login into account (4pda)
    await page.goto('https://4pda.to/');
    await page.getByRole('link', { name: '⏎' }).click();
    await page.getByPlaceholder('логин', { exact: true }).click();
    await page.getByPlaceholder('логин', { exact: true }).fill('test_acc_mi@proton.me');
    await page.getByPlaceholder('пароль').click();
    await page.getByPlaceholder('пароль').fill('KFDHJGSFAB987');
    // !CAPTCHA! Fill Manually while pause is active.
    await page.waitForTimeout(15000);
    await page.getByRole('button', { name: 'Войти' }).click();
    // Save signed-in state to 'storageState.json'.
    await page.context().storageState({ path: 'storageState.json' });
    // Check that state is same and global config is working
    // console.log(await page.context().storageState());
    await browser.close();
}

export default globalSetup;