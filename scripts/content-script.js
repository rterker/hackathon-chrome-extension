

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
    console.log('message received by content-script: ', message);
    console.log('sender received by content-script: ', sender);
    sendResponse({response: 'response being sent from content-script'})
}





//Use chrome.action API to create a toolbar button in chrome.
//need to add 'default_title', 'default_popup', and 'default_icon' to 'action' key
//in manifest json

//when you click on the icon, there will be a dropdown, which will be an html page
//assigned to 'default_popup' key in manifest.json. the html will have 1 button to start that toggles
//the functionality. when clicked, it will send a message to our content script to
//turn on the event listener for 'click'

//in our content-script, we will need to use Web Audio API to get sound from input node and play sound through output node.
//when there is a click (or the keyboard key is pressed), we can play the output and then change the input sound.
//we can create an array that stores our sounds and iterate through the array to choose the sound.
//extension: create a randomizer that chooses a key on the keyboard. this key will be used as the target for the listener

//we also need the ability to turn the functionality off when the chrome extension button is pressed again (toggle)



//when message received, inject some code into DOM to turn on event listener for 
//web page