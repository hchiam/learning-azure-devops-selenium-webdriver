Central place for my learning notes: <https://github.com/hchiam/learning-azure-devops#learning-azure-devops>

# Try cross-browser testing with Selenium WebDriver

For reference, here's a repo that runs Cypress instead: <https://dev.azure.com/hchiam/_git/test-cypress>

Try using `selenium-webdriver` in JavaScript to run a test in different browsers. In this example, I'll be testing in Firefox, but you can also test in Chrome and Internet Explorer.

## To try it out yourself locally

In `.bash_profile`:

```bash
export PATH=$PATH:/Users/<your-user-name>/Downloads/selenium-webdrivers
# Note: Replace `<your-user-name>` with your username.
# Note: Manually create the `selenium-webdrivers` folder beforehand.
```

Test that the webdriver can get called in CLI:

```bash
geckodriver # or ~/Downloads/selenium-webdrivers/geckodriver
```

I'm just using Gecko driver for Firefox. If you use another webdriver, edit the index.js file too.

Set up the project and run the test:

```bash
# cd into the project folder, and then:
npm install
node index # <- this will run index.js, which will build and run the chosen Selenium WebDriver
```

## References

<https://www.youtube.com/watch?v=fj0Ud16YJJw>

<https://www.npmjs.com/package/selenium-webdriver#installation>

<https://dev.azure.com/hchiam/test-cross-browser-testing/_git/test-cross-browser-testing-selenium?path=%2Fazure-pipelines.yml>
