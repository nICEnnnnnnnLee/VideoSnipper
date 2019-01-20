/*
Default settings. Initialize storage to these values.
 */
var configs = {
	isAlert : true,
	isDown : true,
	isCopy : true
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
	if (!storedSettings.configs) {
		browser.storage.local.set({
			configs : configs
		});
	}
}

const gettingStoredSettings = browser.storage.local.get();
gettingStoredSettings.then(checkStoredSettings, onError);