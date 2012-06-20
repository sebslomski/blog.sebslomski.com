---
layout: post
category: mobile-web-development
title:  Mobile web apps on Android
---

I'm a big fan of mobile app development with web technologies. The web is a great platform, the technology is well tested and it's cross device compatible. And nowadays it's easy to access native functionality with tools like trigger.io, phonegap, etc. and wrap them into a monetarisable app.

For me, the user experience is more important than features. Nobody (or only nerds) would use an app that has awesome features but is poorly done or lacks on user experience at all.

E.g. page switching: Smooth transitions while switching pages are standard in native apps and give the user the feeling of a smooth workflow.

With CSS3, these page transitions can be done easily. But apparently, the look and feel is only smooth on iOS. Android (I'm testing on a HTC Desire HD with Android 2.3.3, about a year ago _the_ Android flagship) sometimes skips the transitions or delays them, which makes the app look buggy and poorly done.

So, I've been looking on the web for solutions for this problem, but I haven't found any article about this problem yet. Some fellows on twitter told me that transitions can not yet been made smoothly on Android. I didn't believe it and tested it on my own.


## First test: CSS3 animations
My first test case looked like this:
At the beginning, there is only one page visible. When clicking on the next page button, I append the new page with a negative margin (screen width).
The slide transition is done with CSS3's ``translate3d``. The values of the X-axis of both, the old and the new page, are changed until the new page is visible and the old page is in the negative area.

This works great on my MacBook Air as well as on the iPhone, but buggy and bumpy on my Android.


## Second test: Javascript animations
Okay, CSS3 animations seem to behave not as smooth on Android. Because of this I switched to Javascript animations for my second test case:

Instead of doing the page slide transition with CSS I used Javascript for it (jQuery.animate). The result was even worse on the Android. For most of the time, there was no animation and only a delay.


## Conclusion
Slide animations on Android are not yet smoothly possible. 
I hope this will change with Android 4.
In the meantime I recommend to replace the animations on Android with a simple hide/show mechanism.
Tools like trigger.io's forge or phonegap offer variables to check which device you are an so that you can dynamically en-/disable the animation.

Further reading about the Android UI concept and why it isn't as fluid as iOS, WebOS and Windows Phone 7:
* http://blog.crazybob.org/2011/12/truth-about-android-ios-ui-performance.html
* https://plus.google.com/u/1/100838276097451809262/posts/VDkV9XaJRGS
