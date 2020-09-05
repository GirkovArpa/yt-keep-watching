'use strict';

const $ = document.querySelector.bind(document);

async function mainLoop() {
  while (true) {
    const continueWatchingButton = $('[aria-label="Yes"]');
    continueWatchingButton && continueWatchingButton.click();
    const notNowButton = $('[aria-label="Not Now"]');
    notNowButton && notNowButton.click();
    await new Promise(resolve => setTimeout(resolve, 250));
  }
}

mainLoop();