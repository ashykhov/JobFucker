export const openNewTab = (url: string) => {
    if (url) {
        // Отправка сообщения фоновому скрипту для открытия новой вкладки
        chrome.runtime.sendMessage({ action: 'open_new_tab', url }, (response) => {
            const tab = response.tab;
            document.body.style.backgroundColor = '#ada8c9'

            // if (tab.id !== undefined) { 
            // chrome.tabs.sendMessage(tab.id, { message: "get_page_title" }, function (response) {
            // Здесь мы больше не логируем ответ
            // });
            // }
        });
    }
};