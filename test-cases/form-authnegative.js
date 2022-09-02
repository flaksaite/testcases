describe("Straight Test - AuthenticationNegative", () => {
  it("Selecting a task [authentication] and executing", async () => {
    await browser.url("http://the-internet.herokuapp.com/");

    const authenticationForm = await $("#content > ul > li:nth-child(21) > a");
    const userName = await $("#username");
    const password = await $("#password");
    const login = await $("#login > button > i");
    const message = await $("#flash");

    await authenticationForm.click();
    await browser.pause(5000);
    await userName.setValue("toms");
    await browser.pause(5000);
    await password.setValue("SuperSecret");
    await browser.pause(4000);
    await login.click();
    await browser.pause(4000);
    assert.equal("Your username is invalid!\n×", await message.getText());
    await userName.setValue("tomsmith");
    await browser.pause(4000);
    await login.click();
    await await browser.pause(4000);
    assert.equal("Your password is invalid!\n×", await message.getText());
  });
});
