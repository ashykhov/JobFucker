export function scrapeEmailsFromPage() {
    let emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
    let emails = document.body.innerText.match(emailRegex);

    console.log(emails);
    chrome.runtime.sendMessage({ emails: emails });
}