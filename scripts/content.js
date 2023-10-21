chrome.runtime.onMessage.addListener(messageReceived);

function messageReceived(message, sender, sendResponse) {
  if (message.onOrOff === 1) {
    // alert('ON: Event Listener Added')
    document.addEventListener('keydown', activateOnKeyStroke);
  }
  if (message.onOrOff === -1) {
    document.removeEventListener('keydown', activateOnKeyStroke);
    // alert('OFF: Event Listener Removed');
  }
  sendResponse(message.onOrOff *= -1);
}

function activateOnKeyStroke(event) {
  if (event.key === 'A' || event.key === 'a') {
    function playRandom() {
      const audio = new Audio();
      const randomIndex = Math.floor(Math.random() * soundFiles.length);
      const selectedSound = soundFiles[randomIndex];
      audio.src = chrome.runtime.getURL(selectedSound); //gets URL of the sound within extension, ensures that extension can access the file
      audio.play();
    }
    playRandom()
  }
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

// soundURLs = soundFiles.map(el => {
//     return chrome.runtime.getURL(el);
// });

// console.log(soundURLs);

    
// const audio = new Audio();


// const audioElement = document.createElement('audio');
// audioElement.setAttribute('id', 'audio-element')
// const soundURL = chrome.runtime.getURL('sounds/fart6.mp3');
// // const sound = new Audio(soundURL);
// // sound.play()
// audioElement.setAttribute('src', soundURL)
// audioElement.autoplay = true;
// const aTag = document.createElement('a');
// aTag.setAttribute('href', soundURL);
// audioElement.appendChild(aTag);
// document.head.appendChild(audioElement);
// audioElement.play();


// randomize played sounds
// function playRandom() {
//     const audio = new Audio();
//     const randomIndex = Math.floor(Math.random() * soundFiles.length);
//     const selectedSound = soundFiles[randomIndex];
//     audio.src = chrome.runtime.getURL(selectedSound); //gets URL of the sound within extension, ensures that extension can access the file
//     audio.play();
// }