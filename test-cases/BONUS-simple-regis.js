describe("Straight Test - Bonus", () => {
  it("Selecting a task [Bonus] and executing", async () => {
    await browser.url(
      "https://software-testers.gitlab.io/challenges/automation-challenges/"
    );

    const simpleForm = await $(
      "body > main > section > div > ul > li:nth-child(10) > a"
    );
    const firstName = await $("#first-name");
    const lastName = await $("#last-name");
    const email = await $("#email");
    const female = await $("#sex-female");
    const male = await $("#sex-male");
    const phoneNumber = await $("#mobile-number");
    const termsAndConditions = await $("#terms-checkbox");
    const submit = await $("#submit-btn");

    //SERIOUS LOGICAL DEFECT//
    await simpleForm.click();
    await firstName.setValue("Name");
    await browser.pause(5000);
    await lastName.setValue("Surname");
    await browser.pause(5000);
    await email.setValue("email@email.com");
    await browser.pause(5000);
    await female.click();
    await phoneNumber.setValue("-1111111111111111111111111111111");
    await browser.pause(5000);
    await termsAndConditions.click();
    await browser.pause(5000);
    await submit.click();
    await browser.pause(5000);
  });
});
