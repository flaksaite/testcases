describe("Straight Test - Challlenge", () => {
  it("Selecting a task [challenge] and executing", async () => {
    await browser.url("https://www.saucedemo.com/");

    const userName = await $("#user-name");
    const password = await $("#password");
    const login = await $("#login-button");
    const button = await $("#react-burger-menu-btn");
    const logout = await $("#logout_sidebar_link");

    await userName.setValue("standard_user");
    await browser.pause(5000);
    await password.setValue("secret_sauce");
    await browser.pause(4000);
    await login.click();
    await browser.pause(4000);
    await button.click();
    await browser.pause(4000);
    await logout.click();
  });
});
