describe("Straight Test - Numberbox", () => {
  it("Selecting a task [Numberbox] and executing", async () => {
    await browser.url(
      "https://software-testers.gitlab.io/challenges/automation-challenges/"
    );

    const page = await $(
      "body > main > section > div > ul > li:nth-child(2) > a"
    );
    const number = await $("#number-box");
    const verifyButton = await $("#number-verify");
    const errorMessage = await $("#conf-msg");

    //The 1st point//
    await page.click();
    await browser.pause(5000);
    await verifyButton.click();
    await browser.pause(5000);
    assert.equal("No number is entered!", await errorMessage.getText());

    //The 2nd point//
    await number.setValue("111");
    await browser.pause(5000);
    await verifyButton.click();
    await browser.pause(5000);
    assert.equal(
      "Entered number is NOT in range of 0-100!",
      await errorMessage.getText()
    );
    await number.clearValue("111");
    await browser.pause(5000);

    //The 3rd point//
    await number.setValue("-10");
    await browser.pause(5000);
    await verifyButton.click();
    await browser.pause(5000);
    assert.equal(
      "Entered number is NOT in range of 0-100!",
      await errorMessage.getText()
    );
    await number.clearValue("-10");
    await browser.pause(5000);

    //The 4th point//
    await number.setValue("99");
    await browser.pause(5000);
    await verifyButton.click();
    await browser.pause(5000);
  });
});
