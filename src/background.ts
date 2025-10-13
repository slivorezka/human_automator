chrome.action.onClicked.addListener(async (tab: chrome.tabs.Tab) => {
  if (!tab.id) return

  await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      const app = document.createElement('div')
      app.id = 'app'
      document.body.append(app)
    },
  })

  await chrome.scripting.insertCSS({
    target: { tabId: tab.id },
    files: ['dist/assets/index.css'],
  })

  await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['dist/index.js'],
  })
})
