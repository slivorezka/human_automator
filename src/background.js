chrome.action.onClicked.addListener(async (tab) => {
   chrome.scripting.executeScript({
    target: {tabId: tab.id},
    func: () => {
        // Check if the modal already exists
        if (document.getElementById('human-automator-modal')) {
            return;
        }

        const modal = document.createElement('div');
        modal.id = 'human-automator-modal';
        document.body.append(modal);
    },
  });

  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    files: [
      'dist/main.js',
    ]
  });
});
