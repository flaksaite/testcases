const { elementToBeClickable } = require("wdio-wait-for");

describe("Straight Test - Dropdown list", () => {
  it("Selecting a task [Droptown] and executing", async () => {
    await browser.url("http://the-internet.herokuapp.com/");

    const dropdownLink = await $("#content > ul > li:nth-child(11) > a");
    const dropdownSelector = await $("#dropdown");
    const dropdownHeader = await $("#content > div > h3");

    await dropdownLink.click();

    await expect(await dropdownHeader.getText()).equals("Dropdown List");

    await dropdownSelector.selectByAttribute("value", 1);
    await browser.pause(3000);
    await dropdownSelector.selectByVisibleText("Option 2");
    await browser.pause(3000);
    await dropdownSelector.selectByVisibleText("Option 1");
    await browser.pause(3000);
    await dropdownSelector.selectByAttribute("value", 2);
    await browser.pause(3000);
  });
});
