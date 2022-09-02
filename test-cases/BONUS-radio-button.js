describe("Straight Test - Radiobutton", () => {
  it("Selecting a task [Radiobutton] and executing", async () => {
    await browser.url(
      "https://software-testers.gitlab.io/challenges/automation-challenges/"
    );

    const page = await $(
      "body > main > section > div > ul > li:nth-child(5) > a"
    );
    const analyst = await $("#profession-analyst");
    const confirm = await $("#confirm-radio-challenge");
    const message = await $("#conf-msg");

    //Business Analyst IS WRITTEN WITH MISTAKE in message//
    await page.click();
    await browser.pause(5000);
    await analyst.click();
    await confirm.click();
    await browser.pause(5000);
    assert.equal("Business Analyst is selected!", await Message.getText());
    await browser.pause(5000);
  });
});
