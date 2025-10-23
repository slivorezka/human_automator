chrome.runtime.onInstalled.addListener(() => {
  chrome.scripting.registerContentScripts([
    {
      id: 'human-automator',
      css: ['style.css'],
      js: ['index.js'],
      matches: ['*://*.human.ua/*'],
      runAt: 'document_end',
    },
  ])
})

chrome.webNavigation.onCompleted.addListener(async (details) => {
  if (details.frameId !== 0) return

  const logoUrl = chrome.runtime.getURL('icons/logo.svg')
  const response = await fetch(logoUrl)
  const svgContent = await response.text()

  await chrome.scripting.executeScript({
    target: { tabId: details.tabId },
    args: [svgContent],
    func: (svg) => {
      const humanAutomator = document.createElement('div')
      humanAutomator.id = 'human-automator'
      humanAutomator.innerHTML = svg
      document.body.appendChild(humanAutomator)

      humanAutomator.addEventListener('click', () => {
        window.dispatchEvent(new CustomEvent('destroyHumanAutomator'))
        window.dispatchEvent(new CustomEvent('runHumanAutomator'))
      })
    },
  })
})
