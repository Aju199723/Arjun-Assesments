import {  chromium, test } from "@playwright/test";

test (`Test to launch Browser`, async() =>{
  // Navigate to a URL

  const browser = await chromium.launch();
  const context = await browser.newContext(); 
    const page = await context.newPage();
  await page.goto("https://www.amazon.in/");

  const url=  page.url();
console.log(`The url of the page is ${url}`);
});
// TESTLEAF TRAINER 27-07-2025 05:10 PM • 


// import { chromium, test } from "@playwright/test";


// test(`Test to launch Browser`, async() => {


// const browser = await chromium.launch() // promise is resolved only when your browser launch is completed.
// // promise is rejected it will not move to your next step and throw timeout error


// const context = await browser.newContext() // promise should be resolved to move to create a page
// const page = await context.newPage();


// await page.goto("https://www.amazon.in/")


// const url = page.url()


// console.log(`The url of the page is ${url}`);






// })


