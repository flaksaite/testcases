describe("Straight Test - Radiobutton", () => {
  it("Selecting a task [Radiobutton] and executing", async () => {
    await browser.url(
      "https://software-testers.gitlab.io/challenges/automation-challenges/"
    );

    const page = await $(
      "body > main > section > div > ul > li:nth-child(5) > a"
    );
    const qaTest = await $("#profession-tester");
    const developer = await $("#profession-developer");
    const analyst = await $("#profession-analyst");
    const writer = await $("#profession-writer");
    const confirm = await $("#confirm-radio-challenge");
    const message = await $("#conf-msg");

    //The 1st point//
    await page.click();
    await browser.pause(5000);
    await confirm.click();
    await browser.pause(5000);
    assert.equal("No option is selected!", await message.getText());

    //QA Test Engineer is selcted and message//
    await browser.pause(5000);
    await qaTest.click();
    await confirm.click();
    await browser.pause(5000);
    assert.equal("QA Test Engineer is selected!", await message.getText());

    //Sofware Developer is selcted and message//
    await browser.pause(5000);
    await developer.click();
    await confirm.click();
    await browser.pause(5000);
    assert.equal("Software Developer is selected!", await message.getText());

    //Sofware Developer is selcted and message//
    await browser.pause(5000);
    await analyst.click();
    await confirm.click();
    await browser.pause(5000);
    assert.equal("Business Analystic is selected!", await message.getText());

    //Technical Writer is selcted and message//
    await browser.pause(5000);
    await writer.click();
    await confirm.click();
    assert.equal("Technical Writer is selected!", await message.getText());
    await browser.pause(2000);
  });
});
