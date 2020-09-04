'use strict';

const mainLoop = async function () {
  const notNowButton = document.querySelector('[aria-label="Not Now"]');
  notNowButton && notNowButton.click();
  await new Promise(resolve => setTimeout(resolve, 250));
}

mainLoop();