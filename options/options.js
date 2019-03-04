const configBtns = document.getElementsByTagName('input');
const isAlertBtn = document.getElementsByName('isAlert');
const isDownBtn = document.getElementsByName('isDown');
const isCopyBtn = document.getElementsByName('isCopy');
const isOpenTabBtn = document.getElementsByName('isOpenTab');
const tabNumOption = document.getElementsByName('tabNum');
/*
 * Store the currently selected settings using browser.storage.local.
 */
function storeSettings() {
    browser.storage.local.set({
        configs: {
            isAlert: isAlertBtn[0].checked || false,
            isDown: isDownBtn[0].checked || false,
            isCopy: isCopyBtn[0].checked || false,
            isOpenTab: isOpenTabBtn[0].checked || false,
            maxTabNum: tabNumOption[0].value
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
    if (restoredSettings.configs.isOpenTab) {
    	isOpenTabBtn[0].checked = true;
    } else {
    	isOpenTabBtn[1].checked = true;
    }
    if (restoredSettings.configs.maxTabNum) {
    	tabNumOption[0].value = restoredSettings.configs.maxTabNum;
    } else {
    	tabNumOption[0].value = 3;
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
//init tabNumOption
tabNumOption[0].value = 3;

for (var i = 0; i < configBtns.length; i++) {
    configBtns[i].addEventListener("click", storeSettings);
    tabNumOption[0].addEventListener("change", storeSettings);
}
