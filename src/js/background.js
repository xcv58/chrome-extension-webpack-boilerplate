import '../img/icon-16.png'
import '../img/icon-48.png'
import '../img/icon-128.png'

class Background {
  constructor () {
    chrome.runtime.onMessage.addListener(this.onMessage)
    this.actionMap = {
      background_action: this.logAction
    }
  }

  logAction = (request, sender, sendResponse) => {
    console.log(request, sender)
    sendResponse('success!')
  }

  onMessage = (request, sender, sendResponse) => {
    const { action } = request
    const func = this.actionMap[action]
    if (func && typeof func === 'function') {
      func(request, sender, sendResponse)
    } else {
      sendResponse(`Unknown action: ${action}`)
    }
  }
}

(() => new Background())()
