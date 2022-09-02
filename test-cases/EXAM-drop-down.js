describe("Straight Test - Registration", () => {
  it("Selecting a task [Registration] and executing", async () => {
    await browser.url(
      "https://software-testers.gitlab.io/challenges/automation-challenges/"
    );

    const dropdownLink = await $(
      "body > main > section > div > ul > li:nth-child(6) > a"
    );
    const dropdownSelector = await $("#country");
    const verifybutton = await $("#dropdown-verify-btn");
    const message = await $("#conf-msg");

    // const dropdownLink = await $("#content > ul > li:nth-child(11) > a");
    //const dropdownSelector = await $("#dropdown");
    //const dropdownHeader = await $("#content > div > h3");
    //await expect(await dropdownHeader.getText()).equals("Dropdown List");

    //The 1st message Verify Error message and Country
    await dropdownLink.click();
    await browser.pause(3000);
    await verifybutton.click();
    assert.equal(
      "Selected country is Afganistan, NOT Lithuania!",
      await message.getText()
    );
    await browser.pause(3000);

    //The 2nd point - selesct not Lithuania//

    await dropdownSelector.selectByVisibleText("Albania");
    await browser.pause(3000);
    await verifybutton.click();
    assert.equal(
      "Selected country is Albania, NOT Lithuania!",
      await message.getText()
    );
    await browser.pause(3000);
    await dropdownSelector.selectByVisibleText("Angola");
    await browser.pause(3000);
    await verifybutton.click();
    assert.equal(
      "Selected country is Angola, NOT Lithuania!",
      await message.getText()
    );
    await browser.pause(3000);
    await dropdownSelector.selectByVisibleText("Belgium");
    await browser.pause(3000);
    await verifybutton.click();
    assert.equal(
      "Selected country is Belgium, NOT Lithuania!",
      await message.getText()
    );
    await browser.pause(3000);

    //The 3rd point - Select Lithuania//
    await dropdownSelector.selectByVisibleText("Lithuania");
    await browser.pause(3000);
    await verifybutton.click();
  });
});
