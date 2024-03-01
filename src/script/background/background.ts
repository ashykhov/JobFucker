function polling() {
  // console.log("polling");
  setTimeout(polling, 1000 * 30)
}

polling()

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'open_new_tab' && message.url) {
    chrome.tabs.create({ url: message.url });
  }
});

export { };
