'use strict';

async function mainLoop() {
  let iteration = 0;
  while (true) {
    iteration++;
    const notNowButton = document.querySelector('[aria-label="Not Now"]');
    notNowButton && notNowButton.click();
    await new Promise(resolve => setTimeout(resolve, 250));
  }
}

mainLoop();