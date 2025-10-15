chrome.action.onClicked.addListener(async (e) => {
  e.id && (await chrome.scripting.executeScript({
    target: {
      tabId: e.id
    },
    func: () => {
      const i = document.createElement("div");
      i.id = "app", document.body.append(i);
    }
  }), await chrome.scripting.insertCSS({
    target: {
      tabId: e.id
    },
    files: ["dist/assets/index.css"]
  }), await chrome.scripting.executeScript({
    target: {
      tabId: e.id
    },
    files: ["dist/index.js"]
  }));
});
