// const soundFiles = [
//   'sounds/fart6.mp3',
//   'sounds/fart2.mp3',
//   'sounds/fart3.mp3',
//   'sounds/fart4.mp3',
//   'sounds/fart5.mp3',
//   'sounds/fart7.mp3',
//   'sounds/fart8.mp3',
//   'sounds/fart9.mp3',
//   'sounds/fart10.mp3',
//   'sounds/fart11.mp3',
//   'sounds/fart12.mp3',
//   'sounds/fart13.mp3',
//   'sounds/fart14.mp3',
// ];


// const audio = new Audio();
// //randomize played sounds
// function playRandom() {
//   const randomIndex = Math.floor(Math.random() * soundFiles.length);
//   const selectedSound = soundFiles[randomIndex];
//   audio.src = chrome.runtime.getURL(selectedSound); //gets URL of the sound within extension, ensures that extension can access the file
//   audio.play();
// }
// //add event listener to play a sound on a click
// document.addEventListener('click', () => {
//   playRandom();
// });

// //add event listener for a key stroke

// document.addEventListener('keydown', (event) => {
//   if (event.key === 'A' || event.key === 'a') {
//     playRandom();
//   }
// });
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
//when button is clicked, send message to content script that button has been clicked


document.addEventListener('DOMContentLoaded', () => {
    const switcher = document.querySelector('.switch');
    const queryInfo = {active: true, currentWindow: true};
    const msg = {};
    chrome.storage.local.set({ 'onOrOff': 1 }).then(() => {
        console.log("Value is set");
      });
    switcher.addEventListener('change', async () => {
        const tabs = await chrome.tabs.query(queryInfo);
        const tabID = tabs[0].id;
        msg.id = tabID;
        function responseFunction(response) {
            // console.log('response before set in popup: ', response)
            chrome.storage.local.set({ 'onOrOff': response }).then(() => {
                // console.log('response after set in popup: ', response);
              });
            //not doing anything with return currently
            return response; 
        }
        chrome.storage.local.get(["onOrOff"]).then(async (result) => {
            // console.log('result from get in popup before sending to content: ', result);
            msg.onOrOff = result.onOrOff;
            // console.log(msg);
            const response = await chrome.tabs.sendMessage(tabID, msg, responseFunction);
          });
        })
    });


//retrieve response from storage
//send response to content script
//send response received from content script to storage

// chrome.storage.local.set({ key: value }).then(() => {
//     console.log("Value is set");
//   });
  
//   chrome.storage.local.get(["key"]).then((result) => {
//     console.log("Value currently is " + result.key);
//   });