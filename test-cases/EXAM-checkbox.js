describe("Straight Test - box", () => {
  it("Selecting a task [Numberbox] and executing", async () => {
    await browser.url(
      "https://software-testers.gitlab.io/challenges/automation-challenges/"
    );

    const page = await $(
      "body > main > section > div > ul > li:nth-child(4) > a"
    );
    const checkbox1 = await $("#checkbox1");
    const checkbox2 = await $(
      "body > section > div.center.checkboxes > div.checkboxes-box > input.checkbox2"
    );
    const checkbox3 = await $(
      "body > section > div.center.checkboxes > div.checkboxes-box > input[type=checkbox]:nth-child(5)"
    );
    const checkbox4 = await $(
      "body > section > div.center.checkboxes > div.checkboxes-box > input[type=checkbox]:nth-child(7)"
    );
    const checkbox5 = await $("#ba");
    const confirm = await $("#confirm-btn");
    const errorMessage = await $("#conf-msg");

    //The 1st and 2nd point//
    await page.click();
    await expect(await checkbox1.isSelected()).equals(true); // verifying that check-box is selected
    await browser.pause(5000);
    await expect(await checkbox2.isSelected()).equals(false); // verifying that check-box is  not selected
    await browser.pause(5000);
    await expect(await checkbox3.isSelected()).equals(true); // verifying that check-box is selected
    await browser.pause(5000);
    await expect(await checkbox4.isSelected()).equals(false); // verifying that check-box is  not selected
    await browser.pause(5000);
    await expect(await checkbox5.isSelected()).equals(true); // verifying that check-box is selected
    await browser.pause(5000);

    //The 3rd point//
    await checkbox1.click();
    await browser.pause(5000);
    await checkbox3.click();
    await browser.pause(5000);
    await checkbox5.click();
    await browser.pause(5000);
    await confirm.click();
    assert.equal("No checkbox is selected!", await errorMessage.getText());
    await browser.pause(5000);

    //The 4th point//
    await checkbox2.click();
    await browser.pause(5000);
    await checkbox4.click();
    await browser.pause(5000);
    await checkbox5.click();
    await browser.pause(5000);
    await confirm.click();
    assert.equal(
      "The combination of selected profession(s) is NOT correct!",
      await errorMessage.getText()
    );
    await checkbox2.click();
    await checkbox4.click();
    await checkbox5.click();

    //The 5th point//
    await browser.pause(5000);
    await checkbox2.click();
    await browser.pause(5000);
    await checkbox3.click();
    await browser.pause(5000);
    await checkbox4.click();
    await browser.pause(5000);
    await confirm.click();
    await browser.pause(5000);
  });
});
