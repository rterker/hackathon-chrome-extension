window.addEventListener('keydown', (event) => {
    if (event.key === 'A' || event.key === 'a') {
      //message to content script
      chrome.runtime.sendMessage({action: 'playSound'});
    }
  });