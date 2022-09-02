describe("Straight Test - Login", () => {
  it("Selecting a task [Login] and executing", async () => {
    await browser.url(
      "https://software-testers.gitlab.io/challenges/automation-challenges/"
    );

    const loginChallenge = await $(
      "body > main > section > div > ul > li:nth-child(9) > a"
    );
    const userName = await $("#user-name");
    const password = await $("#password");
    const login = await $("#login-btn");
    const errorMessage1 = await $("#conf-msg");
    const errorMessage2 = await $("#conf-msg");
    const errorMessage3 = await $("#conf-msg");
    const errorMessage4 = await $("#conf-msg");
    //const blog = await $("#hamburger-menu-blog");
    // const contact = await $("#hamburger-menu-contact");
    // const verifyMe = await $("#hamburger-menu-verify")

    //The first point//
    await loginChallenge.click();
    await browser.pause(5000);
    await login.click();
    await browser.pause(5000);
    assert.equal(
      "You have NOT filled Username field",
      await errorMessage1.getText()
    );

    //The second point//
    await userName.setValue("name123");
    await browser.pause(5000);
    await login.click();
    assert.equal(
      "Either password is incorrect or not filled!",
      await errorMessage2.getText()
    );
    await userName.clearValue("name123");
    await browser.pause(5000);

    //The third point//
    await password.setValue("abcd1234");
    await browser.pause(5000);
    await login.click();
    assert.equal(
      "You have NOT filled Username field",
      await errorMessage3.getText()
    );
    await browser.pause(5000);

    //The fourth point//
    await password.clearValue("abcd1234");
    await browser.pause(5000);
    await userName.setValue("name123");
    await browser.pause(5000);
    await password.setValue("abcd12");
    await login.click();
    assert.equal(
      "Either password is incorrect or not filled!",
      await errorMessage4.getText()
    );

    //The fifth point//
    await userName.clearValue("name123");
    await browser.pause(5000);
    await password.clearValue("abcd12");
    await browser.pause(8000);
    await userName.setValue("name123");
    await browser.pause(8000);
    await password.setValue("abcd1234");
    await browser.pause(8000);
  });
});
