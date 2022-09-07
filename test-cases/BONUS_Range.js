describe("Straight Test - Range", () => {
  it("Selecting a task [Range] and executing", async () => {
    await browser.url("https://www.range.co/");

    const product = await $(
      "#gatsby-focus-wrapper > div:nth-child(1) > div.Nav-module--nav--14qND > div > div > div > div > div:nth-child(3) > a"
    );
    const checkins = await $(
      "#gatsby-focus-wrapper > div:nth-child(1) > div.Nav-module--nav--14qND > div > div > div > div > div:nth-child(3) > div.Nav-module--dropdownFloater--DeKEe > div > div > div:nth-child(1) > div > div:nth-child(1) > a"
    );
    const getStartedNow = await $(
      "#gatsby-focus-wrapper > div:nth-child(2) > div > div:nth-child(2) > div.Welcome-module--container--F4168.Welcome-module--container--noMediaCTA--7ne0x.Welcome-module--container--noPadding--9Bu9E > div > div > div.Button-module--group--tVTVN.Button-module--groupCenter--MgLo6 > a"
    );
    const continueWithGoogle = await $(
      "#root > div > div > div.loginLayout__main > div.loginLayout__mainContent > div > div:nth-child(2) > div > div:nth-child(1) > button > span"
    );

    await product.click();
    await browser.pause(5000);
    await checkins.click();
    await browser.pause(5000);
    await getStartedNow.click();
    await browser.pause(5000);
    await continueWithGoogle.click();
  });
});
