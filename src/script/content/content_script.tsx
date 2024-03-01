// // content_script.js
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    alert(request.emails);
    // if (request.action === "scrapeEmailsFromPage") {
    //     alert("scrapeEmailsFromPage");

    //     let emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
    //     let emails = document.body.innerText.match(emailRegex);

    //     // Send a message back to Popup with the scraped emails
    //     chrome.runtime.sendMessage({ emails: emails });
    // }
});

export { };