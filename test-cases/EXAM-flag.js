describe("Straight Test - Flag", () => {
  it("Selecting a task [Numberbox] and executing", async () => {
    await browser.url(
      "https://software-testers.gitlab.io/challenges/automation-challenges/"
    );

    const page = await $(
      "body > main > section > div > ul > li:nth-child(3) > a"
    );
    const yellow = await $("#simple-button-1");
    const green = await $("#simple-button-2");
    const red = await $("#simple-button-3");

    //The 1st point//
    await page.click();
    await browser.pause(3000);
    await green.getValue("disabled", true);
    await browser.pause(3000);

    //The 2nd ponit//
    await browser.pause(3000);
    await yellow.click();
    await browser.pause(3000);
    await red.getValue("disabled", true);
    await browser.pause(3000);

    //The 3rd point//
    await browser.pause(3000);
    await yellow.click();
    await browser.pause(3000);
    await green.click();
    await browser.pause(3000);
    await red.click();
    await browser.pause(3000);
  });
});
