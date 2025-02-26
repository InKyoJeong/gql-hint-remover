const toggleButton = document.getElementById("toggleButton");

chrome.storage.local.get(["hintEnabled"], function (result) {
  const hintEnabled = result.hintEnabled !== false;
  toggleButton.textContent = hintEnabled ? "Hide Hints" : "Show Hints";

  toggleButton.addEventListener("click", function () {
    const newHintEnabled = !hintEnabled;
    chrome.storage.local.set({ hintEnabled: newHintEnabled }, function () {
      toggleButton.textContent = newHintEnabled ? "Hide Hints" : "Show Hints";
      chrome.tabs.reload();
    });
  });
});
