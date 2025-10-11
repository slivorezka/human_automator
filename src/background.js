chrome.action.onClicked.addListener(async (tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => {
            const existingModal = document.getElementById('human-automator-modal-backdrop')

            if (!existingModal) {
                const backdrop = document.createElement('div');

                backdrop.id = 'human-automator-modal-backdrop';

                const modal = document.createElement('div');

                modal.id = 'human-automator-modal';

                backdrop.append(modal);

                document.body.append(backdrop);

                return { shouldLoadScript: true };
            }

            return { shouldLoadScript: false };
        },
    }).then((results) => {
       if (results && results[0]?.result?.shouldLoadScript) {
           chrome.scripting.insertCSS({
               target: {tabId: tab.id},
               files: [
                   'dist/assets/app.css',
               ]
           });

           chrome.scripting.executeScript({
               target: {tabId: tab.id},
               files: ['dist/main.js']
           });
       }
    });
});
