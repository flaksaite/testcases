describe("Straight Test - Challlengelocked", () => {
  it("Selecting a task [challengellocked] and executing", async () => {
    await browser.url("https://www.saucedemo.com/");

    const userName = await $("#user-name");
    const password = await $("#password");
    const login = await $("#login-button");
    const message = await $(
      "#login_button_container > div > form > div.error-message-container.error > h3"
    );

    await userName.setValue("locked_out_user");
    await browser.pause(5000);
    await password.setValue("secret_sauce");
    await browser.pause(4000);
    await login.click();
    await browser.pause(4000);
    assert.equal(
      "Epic sadface: Sorry, this user has been locked out.",
      await message.getText()
    );
  });
});
