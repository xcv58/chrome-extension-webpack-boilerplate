import Mousetrap from 'mousetrap'
import 'chrome-extension-async'

Mousetrap.bind('ctrl+shift+t', async (e) => {
  const result = await chrome.runtime.sendMessage({ action: 'background_action' })
  console.log(result)
})
