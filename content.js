chrome.storage.local.get(["hintEnabled"], function (result) {
  const hintEnabled = result.hintEnabled !== false;

  if (!hintEnabled) {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.removedNodes.length) {
          mutation.removedNodes.forEach((node) => {
            if (
              node.tagName === "UL" &&
              node.classList.contains("CodeMirror-hints")
            ) {
              if (!node.parentElement && mutation.target.parentElement) {
                mutation.target.parentElement.removeChild(mutation.target);
              }
            }
          });
        }
      });
    });

    observer.observe(document.body, {
      subtree: true,
      childList: true,
    });
  }
});
