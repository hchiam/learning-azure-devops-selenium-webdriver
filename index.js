const {Builder, By, Key, util} = require('selenium-webdriver');

async function runTest() {
  let driver = await new Builder().forBrowser('firefox').build();
  await driver.get('https://www.google.com');
  await driver.findElement(By.name('q')).sendKeys('Selenium', Key.RETURN);
  driver.quit();
}

runTest();
