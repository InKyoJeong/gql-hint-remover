chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.get(["hintEnabled"], function (result) {
    if (result.hintEnabled === undefined) {
      chrome.storage.local.set({ hintEnabled: false });
    }
  });
});
