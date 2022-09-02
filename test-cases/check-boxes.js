describe("Straight Test - Checkboxes", () => {
  it("Selecting a task [Checkboxes] and executing", async () => {
    await browser.url("http://the-internet.herokuapp.com/");

    // Defining web elements

    const checkboxesLink = await $("#content > ul > li:nth-child(6) > a");
    const checkbox1 = await $(
      "#checkboxes > input[type=checkbox]:nth-child(1)"
    );
    const checkbox2 = await $(
      "#checkboxes > input[type=checkbox]:nth-child(3)"
    );

    // Action with elements
    await checkboxesLink.click();
    await expect(await checkbox1.isSelected()).equals(false); // verifying that check-box is not selected
    await expect(await checkbox2.isSelected()).equals(true); // verifying that check-box is  selected

    await checkbox2.click();
    await browser.pause(3000);
    await checkbox1.click();
    await browser.pause(3000);
    await checkbox2.click();
    await browser.pause(3000);
    await checkbox1.click();
    await browser.pause(3000);
  });
});
