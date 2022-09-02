describe("Straight Test - ChalllengeB", () => {
  it("Selecting a task [challengeB] and executing", async () => {
    await browser.url("https://www.saucedemo.com/");

    const userName = await $("#user-name");
    const password = await $("#password");
    const login = await $("#login-button");
    const addToCart = await $("#add-to-cart-sauce-labs-fleece-jacket");
    const shoppingChart = await $("#shopping_cart_container > a");
    const checkout = await $("#checkout");
    const firstName = await $("#first-name");
    const lastName = await $("#last-name");
    const zip = await $("#postal-code");
    const buttonContinue = await $("#continue");
    const finish = await $("#finish");
    const totalPrice = await $(
      "#checkout_summary_container > div > div.summary_info > div.summary_total_label"
    );

    await userName.setValue("standard_user");
    await browser.pause(5000);
    await password.setValue("secret_sauce");
    await browser.pause(4000);
    await login.click();
    await browser.pause(4000);
    await addToCart.click();
    await browser.pause(4000);
    await shoppingChart.click();
    await browser.pause(4000);
    await checkout.click();
    await browser.pause(4000);
    await firstName.setValue("name");
    await browser.pause(4000);
    await lastName.setValue("surmname");
    await browser.pause(4000);
    await zip.setValue("12345");
    await browser.pause(4000);
    await buttonContinue.click();
    await browser.pause(4000);
    console.log(`Your text:`, await totalPrice.getText());
    await finish.click();
    await browser.pause(4000);
  });
});
