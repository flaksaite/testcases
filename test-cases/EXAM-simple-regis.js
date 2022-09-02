describe("Straight Test - Registration", () => {
  it("Selecting a task [Registration] and executing", async () => {
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
    const errorMessage = await $("#conf-msg");

    //The first point//
    await browser.pause(5000);
    await simpleForm.click();
    await browser.pause(5000);
    await submit.click();
    assert.equal(
      "No value entered in First Name field!",
      await errorMessage.getText()
    );
    await browser.pause(5000);

    //The second point//
    await firstName.setValue("name123");
    await browser.pause(5000);
    await lastName.setValue("surname123");
    await browser.pause(5000);
    await email.setValue("email@email.com");
    await browser.pause(5000);
    await female.click();
    await submit.click();
    assert.equal(
      "No value entered in Mobile Phone field!",
      await errorMessage.getText()
    );
    await browser.pause(5000);
    await firstName.clearValue("name123");
    await browser.pause(5000);
    await lastName.clearValue("surname123");
    await email.clearValue("email@email.com");

    //The third point
    await firstName.setValue("name1234");
    await browser.pause(5000);
    await lastName.setValue("surname1234");
    await browser.pause(5000);
    await email.setValue("email");
    await browser.pause(5000);
    await phoneNumber.setValue("12345678");
    await submit.click();
    assert.equal("Email format is not valid!", await errorMessage.getText());
    await browser.pause(5000);
    await firstName.clearValue("name1234");
    await lastName.clearValue("surname1234");
    await email.clearValue("email");
    await phoneNumber.clearValue("12345678");

    //The fourth point
    await firstName.setValue("NAME");
    await browser.pause(5000);
    await lastName.setValue("Surname");
    await browser.pause(5000);
    await email.setValue("email@email.com");
    await browser.pause(5000);
    await phoneNumber.setValue("12345678");
    await termsAndConditions.click();
    await submit.click();
    await browser.pause(5000);
  });
});
