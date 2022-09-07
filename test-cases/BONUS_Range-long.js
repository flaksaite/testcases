describe("Straight Test - Rang", () => {
  it("Selecting a task [Rang] and executing", async () => {
    await browser.url("https://www.range.co/");

    const product = await $(
      "#gatsby-focus-wrapper > div:nth-child(1) > div.Nav-module--nav--14qND > div > div > div > div > div:nth-child(3) > a"
    );
    const checkins = await $(
      "#gatsby-focus-wrapper > div:nth-child(1) > div.Nav-module--nav--14qND > div > div > div > div > div:nth-child(3) > div.Nav-module--dropdownFloater--DeKEe > div > div > div:nth-child(1) > div > div:nth-child(1) > a"
    );
    const remoteStandups = await $(
      "#gatsby-focus-wrapper > div:nth-child(1) > div.Nav-module--nav--14qND > div > div > div > div > div:nth-child(4) > div.Nav-module--dropdownFloater--DeKEe > div > div > div:nth-child(1) > div > div:nth-child(1) > a"
    );
    const useCases = await $(
      "#gatsby-focus-wrapper > div:nth-child(1) > div.Nav-module--nav--14qND > div > div > div > div > div:nth-child(4) > a"
    );
    const pricing = await $(
      "#gatsby-focus-wrapper > div:nth-child(1) > div.Nav-module--nav--14qND > div > div > div > div > div:nth-child(5) > a"
    );
    const resources = await $(
      "#gatsby-focus-wrapper > div:nth-child(1) > div.Nav-module--nav--14qND > div > div > div > div > div:nth-child(6) > a"
    );
    const requestADemo = await $(
      "#gatsby-focus-wrapper > div:nth-child(1) > div.Nav-module--nav--14qND > div > div > div > div > div:nth-child(6) > div.Nav-module--dropdownFloater--DeKEe > div > div > div:nth-child(1) > div > div:nth-child(3) > a"
    );

    await product.click();
    await browser.pause(5000);
    await checkins.click();
    await browser.pause(5000);
    await useCases.click();
    await browser.pause(5000);
    await remoteStandups.click();
    await browser.pause(5000);
    await pricing.click();
    await browser.pause(5000);
    await resources.click();
    await browser.pause(5000);
    await requestADemo.click();
    await browser.pause(5000);
  });
});
