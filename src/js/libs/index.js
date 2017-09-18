export const setLocalCount = (count) => {
  chrome.storage.local.set({ count })
}

export const getLocalCount = async () => {
  const { count } = await chrome.storage.local.get({ count: 0 })
  return count
}
