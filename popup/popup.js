const soundFiles = [
  'sounds/fart6.mp3',
  'sounds/fart2.mp3',
  'sounds/fart3.mp3',
  'sounds/fart4.mp3',
  'sounds/fart5.mp3',
  'sounds/fart7.mp3',
  'sounds/fart8.mp3',
  'sounds/fart9.mp3',
  'sounds/fart10.mp3',
  'sounds/fart11.mp3',
  'sounds/fart12.mp3',
  'sounds/fart13.mp3',
  'sounds/fart14.mp3',
];

const audio = new Audio();
//randomize played sounds
function playRandom() {
  const randomIndex = Math.floor(Math.random() * soundFiles.length);
  const selectedSound = soundFiles[randomIndex];
  audio.src = chrome.runtime.getURL(selectedSound); //gets URL of the sound within extension, ensures that extension can access the file
  audio.play();
}
//add event listener to play a sound on a click
document.addEventListener('click', () => {
  playRandom();
});

//add event listener for a key stroke

document.addEventListener('keydown', (event) => {
  if (event.key === 'A' || event.key === 'a') {
    playRandom();
  }
});
// document.addEventListener('DOMContentLoaded', () => {
//   const button = document.getElementById('button');

//   chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//     if (message.action === 'backgroundReady') {
//       button.addEventListener('click', () => {
//         chrome.runtime.sendMessage({ action: 'playSound' });
//       });
//     }
//   });
//   chrome.runtime.sendMessage({ action: 'popupReady' });
// });
