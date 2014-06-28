console.log("Hello from DevTools");

chrome.devtools.panels.create("DevTools panel","chrome.png", "panel.html", function(panel) { 
	console.log("Hello from callback"); 
});
                              