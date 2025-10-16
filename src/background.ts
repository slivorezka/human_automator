chrome.runtime.onInstalled.addListener(() => {
  chrome.scripting.registerContentScripts([
    {
      id: 'human-automator',
      css: ['style.css'],
      js: ['index.js'],
      matches: ['*://*.human.ua/*'],
      runAt: 'document_idle',
    },
  ])
})

chrome.action.onClicked.addListener(async (tab: chrome.tabs.Tab) => {
  if (!tab.id) return

  await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      window.dispatchEvent(new CustomEvent('runHumanAutomator'))
    },
  })
})
