/*
Default settings. Initialize storage to these values.
 */
var configs = {
	isAlert : true,
	isDown : true,
	isCopy : true,
	isOpenTab : true,
	maxTabNum : 1
}

/*
 * Generic error logger.
 */
function onError(e) {
	console.error(e);
}

/*
 * On startup, check whether we have stored settings. If we don't, then store
 * the default settings.
 */
function checkStoredSettings(storedSettings) {
	var temp = storedSettings.configs;
	browser.storage.local.set({
		configs : configs
	});
	if(temp){
		browser.storage.local.set({
			configs : temp
		});
	}
}

const gettingStoredSettings = browser.storage.local.get();
gettingStoredSettings.then(checkStoredSettings, onError);
