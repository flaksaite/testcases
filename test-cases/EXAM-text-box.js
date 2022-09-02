describe("Straight Test - Textbox", () => {
  it("Selecting a task [Textbox] and executing", async () => {
    await browser.url(
      "https://software-testers.gitlab.io/challenges/automation-challenges/"
    );

    const page = await $(
      "body > main > section > div > ul > li:nth-child(1) > a"
    );
    const name = await $("#first-name");
    const verifyButton = await $("#verify-btn");
    const errorMessage = await $("#conf-msg");

    //The 1st point//
    await page.click();
    await browser.pause(5000);
    await verifyButton.click();
    await browser.pause(5000);
    assert.equal(
      "No value entered in Name field!",
      await errorMessage.getText()
    );

    //The 2nd point//
    await browser.pause(5000);
    await name.setValue("A");
    await browser.pause(5000);
    await verifyButton.click();
    await browser.pause(5000);
    assert.equal(
      "Name has to have at least 2 letters!",
      await errorMessage.getText()
    );
    await name.clearValue("A");
    await browser.pause(5000);

    //The 3rd point//
    await browser.pause(5000);
    await name.setValue("12345");
    await browser.pause(5000);
    await verifyButton.click();
    assert.equal("Name can only have letters!", await errorMessage.getText());
    await browser.pause(5000);
    await name.clearValue("12345");
    await browser.pause(5000);

    //The 4th point//
    await browser.pause(5000);
    await name.setValue("ABCDEFGHILMNOPQLMNXYVaaaaabbbbccccc");
    await browser.pause(5000);
    await verifyButton.click();
    assert.equal(
      "Name cannot have more than 30 letters!",
      await errorMessage.getText()
    );
    await browser.pause(5000);
    await name.clearValue("ABCDEFGHILMNOPQLMNXYVaaaaabbbbccccc");
    await browser.pause(5000);

    //The 5th point//
    await browser.pause(5000);
    await name.setValue("Valda");
    await browser.pause(5000);
    await verifyButton.click();
    await browser.pause(5000);
  });
});
