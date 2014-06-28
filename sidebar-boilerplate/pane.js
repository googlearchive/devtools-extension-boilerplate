chrome.devtools.panels.elements.onSelectionChanged.addListener(function() {
    chrome.devtools.inspectedWindow.eval("$0", function (res) {
       
    });
});
chrome.extension.onMessage.addListener(function (msg, _, sendResponse) {
    console.log(msg, _, sendResponse);
});