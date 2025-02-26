chrome.runtime.onInstalled.addListener(() => {
  // 처음 설치될 때 기본값을 설정
  chrome.storage.local.get(["hintEnabled"], function (result) {
    if (result.hintEnabled === undefined) {
      chrome.storage.local.set({ hintEnabled: false });
    }
  });
});
