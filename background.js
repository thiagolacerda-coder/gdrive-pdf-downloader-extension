chrome.action.onClicked.addListener((tab) => {
  if (tab.url.includes("drive.google.com") || tab.url.includes("docs.google.com")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['content.js']
    });
  } else {
    console.log("Esta extensão só funciona em páginas do Google Drive / Docs.");
  }
});