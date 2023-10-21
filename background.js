// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   if (message.action === 'popupReady') {
//     chrome.runtime.sendMessage({ action: 'backgroundReady' });
//     playRandom();
//   }
// });


chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
    if (message === 'playSound') {
        playRandom();
    }
    // console.log('message received by content-script: ', message);
    // console.log('sender received by content-script: ', sender);
    sendResponse({response: 'keyboard event received'});
}


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