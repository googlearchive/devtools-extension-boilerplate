
// Do something on change of focus
chrome.windows.onFocusChanged.addListener(function(windowId) {
	// send message to devtool.js.
	chrome.tabs.getSelected(null, function(tab) {
	  chrome.tabs.sendMessage(tab.id, {}, function(response) {
	  });
	});
});

