//when button is clicked, send message to content script that button has been clicked


document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('#button');
    const queryInfo = {active: true, currentWindow: true};
    button.addEventListener('click', async () => {
        const tabs = await chrome.tabs.query(queryInfo);
        console.log(tabs)
        const tabID = tabs[0].id;
        const msg = {message: 'button was clicked!'};
        function responseFunction(response) {
            console.log('response: ', response);
        }
        const response = await chrome.tabs.sendMessage(tabID, msg, responseFunction);
        
        })
    });


