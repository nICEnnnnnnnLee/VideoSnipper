(function() {
  /**
   * Check and set a global guard variable.
   * If this content script is injected into the same page again,
   * it will do nothing next time.
   */
  if (window.hasRun) {
    return;
  }
  window.hasRun = true;

  function printVideoInfo(){
        var video = document.getElementsByTagName("video");
        //console.log('------------------1');
        //for(var i=0; i<video.length; i++){
        for(var i=0; i<1; i++){
            //console.log('------------------2');
            var urlLink = video[i].getAttribute("src");
            if( urlLink == null){
                //console.log('------------------3');
                urlLink = getElementsByTagName("source")[0].getAttribute("src");
            }
            console.log(urlLink);
            copyToClipboard(urlLink);
            downloadFile(urlLink);
        }
  }
  function downloadFile(url){
    browser.runtime.sendMessage({
        "action": "download",
        "value": {
            "url": url
        }
    });
  }
  function copyToClipboard (text) {
        var textArea = document.createElement("textarea");
          textArea.style.position = 'fixed';
          textArea.style.top = '0';
          textArea.style.left = '0';
          textArea.style.width = '2em';
          textArea.style.height = '2em';
          textArea.style.padding = '0';
          textArea.style.border = 'none';
          textArea.style.outline = 'none';
          textArea.style.boxShadow = 'none';
          textArea.style.background = 'transparent';
          textArea.value = text;
          document.body.appendChild(textArea);
          textArea.select();
          try {
            var successful = document.execCommand("Copy");
            if(successful){
                browser.runtime.sendMessage({
                    "action": "notify", 
                    "value": {
                        "title" : "The link is copied to clipboard!",
                        "content" : "The Video Link is:\r\n" + text,
                    }
                });
            }else{
                browser.runtime.sendMessage({
                    "action": "notify", 
                    "value": {
                        "title" : "The link is failed to be copied to clipboard!",
                        "content" : "The Video Link is:\r\n" + text,
                    }
                });
            }
          } catch (err) {
                browser.runtime.sendMessage({
                    "action": "notify", 
                    "value": {
                        "title" : "The link is failed to be copied to clipboard!",
                        "content" : "The Video Link is:\r\n" + text,
                    }
                });
          }
          document.body.removeChild(textArea);
    }
  /**
   * Listen for messages from the background script.
  */
  browser.runtime.onMessage.addListener((message) => {
    if (message.command === "printVideoInfo") {
      printVideoInfo();
    };
  });
  //printVideoInfo();
})();


