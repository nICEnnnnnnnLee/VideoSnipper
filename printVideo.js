(function() {
  /**
	 * Check and set a global guard variable. If this content script is injected
	 * into the same page again, it will do nothing next time.
	 */
  if (window.hasRun) {
    return;
  }
  window.hasRun = true;
  function toAbsURL(url){
        var a = document.createElement('a');
        a.href = url;
        return a.href;
    }
    
  function printVideoInfo(config){
        var video = document.getElementsByTagName("video");
        var urlLink;
        for(var i=0; i<video.length; i++){
            urlLink = video[i].getAttribute("src");
            if( urlLink == null){
                try{
                    urlLink = video[i].getElementsByTagName("source")[0].getAttribute("src");
                }catch(err){}
                
            }
            if( urlLink != null){
                urlLink = toAbsURL(urlLink);
                console.log(urlLink);
                console.log(config.isCopy);
                if(config.isCopy){
                	copyToClipboard(urlLink);
                }
                if(config.isAlert){
                	alert("The Video Link is:\r\n" + urlLink);
                }
                if(config.isDown){
                	downloadFile(urlLink);
                }
                break;
            }
        }
        
        if( urlLink == null && config.isAlert){
            alert("There is no video catched!");
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
          } catch (err) {
             // alert("Fail to Copy");
          }
          document.body.removeChild(textArea);
    }
    
    
  /**
	 * Listen for messages from the background script.
	 */
  browser.runtime.onMessage.addListener((message) => {
	if (message.command === "printVideoInfo") {
		// console.log(message.config);
	    printVideoInfo(message.config);
	};
  });
  // printVideoInfo();
})();


