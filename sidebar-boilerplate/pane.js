var options = {
  useContentScriptContext: true // eval in the content script context
};

chrome.devtools.panels.elements.onSelectionChanged.addListener(function() {
    chrome.devtools.inspectedWindow.eval("$0", function (res) {

    }, options);
});
chrome.extension.onMessage.addListener(function (msg, _, sendResponse) {
    console.log(msg, _, sendResponse);
});
