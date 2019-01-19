const configBtns = document.getElementsByTagName('input');
const isAlertBtn = document.getElementsByName('isAlert');
const isDownBtn = document.getElementsByName('isDown');
const isCopyBtn = document.getElementsByName('isCopy');
/*
 * Store the currently selected settings using browser.storage.local.
 */
function storeSettings() {
	browser.storage.local.set({
		configs : {
			isAlert : isAlertBtn[0].checked || false,
			isDown : isDownBtn[0].checked || false,
			isCopy : isCopyBtn[0].checked || false
		}
	});
}

/*
 * Update the options UI with the settings values retrieved from storage, or the
 * default settings if the stored settings are empty.
 */
function updateUI(restoredSettings) {
	if (restoredSettings.configs.isAlert) {
		isAlertBtn[0].checked = true;
	} else {
		isAlertBtn[1].checked = true;
	}
	if (restoredSettings.configs.isDown) {
		isDownBtn[0].checked = true;
	} else {
		isDownBtn[1].checked = true;
	}
	if (restoredSettings.configs.isCopy) {
		isCopyBtn[0].checked = true;
	} else {
		isCopyBtn[1].checked = true;
	}
	//isAlertBtn[0].checked = true;
}

function onError(e) {
	console.error(e);
}

/*
 * On opening the options page, fetch stored settings and update the UI with
 * them.
 */
const gettingStoredSettings = browser.storage.local.get();
gettingStoredSettings.then(updateUI, onError);

for(var i=0; i<configBtns.length; i++){
	configBtns[i].addEventListener("click", storeSettings);
}
