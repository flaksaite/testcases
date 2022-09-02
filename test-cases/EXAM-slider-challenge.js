describe("Straight Test - Slider", () => {
  it("Selecting a task [Slider] and executing", async () => {
    await browser.url(
      "https://software-testers.gitlab.io/challenges/automation-challenges/"
    );

    const page = await $(
      "body > main > section > div > ul > li:nth-child(8) > a "
    );
    //const range = document.getElementById("slider");
    const slider = await $("#slider");
    //const keys = await $("")
    const buttonverify = await $("#slider-verify-btn");
    const errorMessage = await $("#conf-msg");

    //The 1st point//
    await page.click();
    await slider.click();
    await browser.pause(1000);
    let i = 0;
    while (i < 10) {
      browser.keys(["ArrowRight"]);
      i++;
      await browser.pause(500);
    }
    //keys("ARROWRIGHT", 70);
    //it("slider set to max", () => {
    // $("slider").dragAndDrop({ x: 400, y: 0 });
    //});
    //await range.setValue(20);//
    await browser.pause(5000);
    await buttonverify.click();
    await browser.pause(5000);
    assert.equal(
      "You have NOT reached 100 yet, try harder!🤪",
      await errorMessage.getText()
    );

    //The 2nd point//
    await slider.click();
    await browser.pause(1000);
    let y = 0;
    while (y < 50) {
      browser.keys(["ArrowRight"]);
      y++;
      await browser.pause(500);
    }
    await browser.pause(5000);
    await buttonverify.click();
    await browser.pause(5000);
  });
});
