
document.body.style.backgroundColor = "orange";

// const audioElement = document.createElement('audio');
// audioElement.setAttribute('id', 'audio-element')
// const soundURL = chrome.runtime.getURL('sounds/fart6.mp3');
// const sound = new Audio(soundURL);
// sound.play()
// audioElement.setAttribute('src', sound)
// document.head.appendChild(audioElement);
// audioElement.play();

document.addEventListener('keydown', (event) => {
    if (event.key === 'A' || event.key === 'a') {
      //message to content script
      window.postMessage({type: 'FROM_PAGE'})
      
    }
  });