'use strict';

async function mainLoop() {
  console.log('YT Keep Watching Extension - mainLoop()');
  let iteration = 0;
  while (true) {
    iteration++;
    console.log('YT Keep Watching Extension - loop iteration #' + iteration);
    const notNowButton = document.querySelector('[aria-label="Not Now"]');
    notNowButton && notNowButton.click();
    await new Promise(resolve => setTimeout(resolve, 250));
  }
}

mainLoop();