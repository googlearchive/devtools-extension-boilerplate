var pluginTitle="DevTools sidebar"

chrome.devtools.panels.elements.createSidebarPane(pluginTitle, function(sidebar) {
	sidebar.setPage("pane.html");

	// listen to a message send by the background page 
	// (when the chrome windows's focus changes) 
	chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
	  updateElementProperties();
	});
});
