function onClickBtn() {
    browser.tabs.query({
        active: true,
        currentWindow: true
    }).then(sendSig);
}
function sendSig(tabs) {
    // get configs from local storage
    browser.storage.local.get("configs").then(results =>{
        browser.tabs.sendMessage(tabs[0].id, {
            command: "printVideoInfo",
            config: results.configs,
        });
    });
}

function onError(e) {
	console.log("oooooooooooops there is a error!");
    console.error(e);
}

function notify(msg) {
    if (msg.action == 'notify') {
        browser.notifications.create({
            "type": "basic",
            "iconUrl": browser.extension.getURL("icons/border-48.png"),
            "title": msg.value.title,
            "message": msg.value.content
        });

    } else if (msg.action == 'download') {
        var downloading = browser.downloads.download(msg.value);
	} else if (msg.action == 'openTab') {
	    var creating = browser.tabs.create(msg.value);
	}
}

browser.runtime.onMessage.addListener(notify);
browser.browserAction.onClicked.addListener(onClickBtn);