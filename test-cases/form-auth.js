describe("Straight Test - Authentication", () => {
  it("Selecting a task [authentication] and executing", async () => {
    await browser.url("http://the-internet.herokuapp.com/");

    const authenticationForm = await $("#content > ul > li:nth-child(21) > a");
    const userName = await $("#username");
    const password = await $("#password");
    const login = await $("#login > button > i");
    const succesfullMsg = await $("#flash");
    const logout = await $("#content > div > a");

    await authenticationForm.click();
    await browser.pause(5000);
    await userName.setValue("tomsmith");
    await browser.pause(5000);
    await password.setValue("SuperSecretPassword!");
    await browser.pause(4000);
    await login.click();
    await browser.pause(4000);
    assert.equal(
      "You logged into a secure area!\n×",
      await succesfullMsg.getText()
    );
    await browser.pause(4000);
    await logout.click();
    await await browser.pause(4000);
  });
});
