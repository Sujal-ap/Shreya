// checkScroll.js

import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3001/shreya-frontend');

  // Evaluate JavaScript on the page to gather scroll information
  const scrollableContainers = await page.evaluate(() => {
    // Define a function to check if an element is scrollable
    function isScrollable(element) {
      return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
    }

    // Get all elements in the document
    const elements = document.querySelectorAll('*');

    // Filter and map scrollable elements
    const scrollableElements = Array.from(elements).filter(element => isScrollable(element)).map(element => ({
      tagName: element.tagName,
      scrollHeight: element.scrollHeight,
      scrollWidth: element.scrollWidth,
      clientHeight: element.clientHeight,
      clientWidth: element.clientWidth,
      scrollTop: element.scrollTop,
      scrollLeft: element.scrollLeft
    }));

    return scrollableElements;
  });

  console.log('Scrollable Containers:');
  console.log(scrollableContainers);

  await browser.close();
})();
