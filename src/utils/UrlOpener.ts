export const openNewTab = (url: string) => {
    if (url) {
        // Отправка сообщения фоновому скрипту для открытия новой вкладки
        chrome.runtime.sendMessage({ action: 'open_new_tab', url: url });
    }
};