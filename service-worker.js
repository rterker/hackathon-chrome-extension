



chrome.runtime.onMessage.addListener(gotMessage);

async function gotMessage(message, sender, sendResponse) {
    if (message.message === 'activate') {
        await chrome.scripting.executeScript({
            target: { tabId: message.id },
            files: ["scripts/content-script.js"]
          });
    }
    // console.log('message received by content-script: ', message);
    // console.log('sender received by content-script: ', sender);
    sendResponse({response: 'executed'})
}