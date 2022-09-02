describe("Straight Test - HamburgerMenu", () => {
  it("Selecting a task [HamburgerMenu] and executing", async () => {
    await browser.url(
      "https://software-testers.gitlab.io/challenges/automation-challenges/"
    );

    const HamburgerMenu = await $(
      "body > main > section > div > ul > li:nth-child(7) > a"
    );
    const menu = await $("body > section > div.topnav.container > a > i");
    const home = await $("#hamburger-menu-home");
    const homeErrorMessage = await $("#conf-msg");
    const about = await $("#hamburger-menu-about");
    const blog = await $("#hamburger-menu-blog");
    const contact = await $("#hamburger-menu-contact");
    const errorMessage = await $("#conf-msg");
    const verifyMe = await $("#hamburger-menu-verify");

    await HamburgerMenu.click(); //Verify Home
    await browser.pause(5000);
    await menu.click();
    await browser.pause(5000);
    await home.click();
    await browser.pause(5000);
    assert.equal(
      "You have selected other section than VERIFY ME!",
      await errorMessage.getText()
    );
    await browser.pause(5000);

    await menu.click(); // Verify About
    await menu.click();
    await browser.pause(5000);
    await about.click();
    await browser.pause(5000);
    assert.equal(
      "You have selected other section than VERIFY ME!",
      await errorMessage.getText()
    );
    await browser.pause(5000);
    await menu.click();

    await menu.click(); // Verify Blog
    await browser.pause(5000);
    await blog.click();
    await browser.pause(5000);
    assert.equal(
      "You have selected other section than VERIFY ME!",
      await errorMessage.getText()
    );
    await menu.click();
    await menu.click();

    await browser.pause(5000); //Verify Contact
    await menu.click();
    await menu.click();
    await browser.pause(5000);
    await contact.click();
    await browser.pause(5000);
    assert.equal(
      "You have selected other section than VERIFY ME!",
      await errorMessage.getText()
    );
    await menu.click();

    await menu.click(); //VERIFY ME
    await verifyMe.click();
  });
});
