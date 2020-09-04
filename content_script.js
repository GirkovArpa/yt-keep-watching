'use strict';

async function mainLoop() {
  while (true) {
    const notNowButton = document.querySelector('[aria-label="Not Now"]');
    notNowButton && notNowButton.click();
    await new Promise(resolve => setTimeout(resolve, 250));
  }
}

mainLoop();