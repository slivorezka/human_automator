chrome.action.onClicked.addListener(async (tab: chrome.tabs.Tab) => {
  if (!tab.id) return

  const key = `human_automator_${tab.id}`
  const result = await chrome.storage.session.get(key)

  if (!result[key]) {
    await chrome.scripting.insertCSS({
      target: { tabId: tab.id },
      files: ['style.css'],
    })

    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['index.js'],
    })
  }

  await chrome.storage.session.set({ [key]: true })

  await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      window.dispatchEvent(new CustomEvent('destroyHumanAutomator'))
      window.dispatchEvent(new CustomEvent('runHumanAutomator'))
    },
  })
})
