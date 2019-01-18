# About VideoSnipper

## Brief
VideoSnipper is a Simple, Free Video Downloader basing on WebExtensions API. It caches the video source in the html page, and you can do follows through the Addon:  
* (Auto)Copy video source the to the system Clipboard, so you can do whatever you like, such as sharing the video source or downloading in other devices
* (Auto)Download the video source with FireFox default Downloader

## How to Use
* Step 1. Visit the page you enjoy the video
* Step 2. Play the video (Mostly unnessesary, just do this if failed in Step 3)  
* Step 3. Click/Tap the button of this Addon in tool bar( Top-right the FireFox Window on PC, in menu displayed after tap the Top-right Button on Phone)
* Step 4. You will receive a notice if source exists, and the link copied and download task auto set update-log

## Notice
* The Addon works only if: 
    * The video is played via video tag in HTML5
    * You have the permission of access to the video source (This avoids potential copyright invation)
    * It may partly work if the Firefox downloader cannot deal with the stream protocal, try to get it youself using the link copied in the Clipboard

* Since some page just display Preview Pics instead of Videos, you may need play the video first to let the javascript load the video source. 
* The Addon only catches **Single** video in one page, just get in the more detailed page if videos included.

## Pros & Cons 
* Pros
    * Free and Open Sourced
    * It's very simple and easy to understand for ABCs(Me, the Author, a ABC), so every Programmer can DIY it if unsatisfied. Any reasonable contribution is welcomed!  
    * Developed basing on WebExtensions API, it's easy to transformed to a Chrome extention and so on.
* Cons
    * Protocals such as RTMP, and streamings such as .m3u8 are not supported to download, and no plan to deal with it.
    * Not worked with video played with no video tag in HTML5. But may consider for customized analysis. It depends.

## Test
* 2019/01/17: The Addon test pass on the shared video link of "∂∂“Ù ”∆µ","øÏ ÷ ”∆µ","Œ¢≤© ”∆µ","√Î≈ƒ ”∆µ"(several popular apps in China)

## ToDos  
* Minimize the requied Permission "tabs" to "activeTab"
* Cut the Permission "notifications", using default js function "alert" instead
* Trans the url from to Relative URL to ABS URL
* Design a new icon for Addon