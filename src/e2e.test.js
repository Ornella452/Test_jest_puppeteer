import puppeteer from "puppeteer";

describe("App.js", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  it("contains the welcome text", async () => {
    page.goto("http://localhost:5000");
    await page.waitForSelector(".App-welcome-text");
    const text = await page.$eval(".App-welcome-text", (e) => e.textContent);
    console.log('text:', text);
    expect(text).toContain("Edit src/App.js and save to reload.");

  });

  afterAll(() => browser.close());
});