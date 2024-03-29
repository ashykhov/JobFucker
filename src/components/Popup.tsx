import React, { useEffect } from 'react';

const Popup = () => {
    useEffect(() => {
        let scrapeEmails = document.getElementById('scrapeEmails');
        let list = document.getElementById('emailList');


        //Handler to receive message from content script
        chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {

            // Get emails
            let emails = request.emails;

            // Display emails in popup
            if (emails == null || emails.length == 0) {
                let li = document.createElement("li");
                li.innerText = "No emails found on this page";
                if (list) { list.appendChild(li); }
            } else {
                emails.forEach((email) => {
                    let li = document.createElement("li");
                    li.innerText = email;
                    if (list) { list.appendChild(li); }
                });
            }
        });

        if (scrapeEmails) {
            scrapeEmails.addEventListener("click", async () => {
                // Your code here

                // Get current active tab
                let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

                chrome.scripting.executeScript({
                    target: { tabId: tab.id || 0 },
                    func: scrapeEmailsFromPage
                });
            });
        }

        function scrapeEmailsFromPage() {
            let emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
            let emails = document.body.innerText.match(emailRegex);

            console.log(emails);
            chrome.runtime.sendMessage({ emails: emails });
        }
    }, []);

    return (
        <div className="center">
            <button id="scrapeEmails">Scrape Email</button>
            <ul id="emailList"></ul>
        </div>
    );
};

export default Popup;