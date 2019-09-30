---
title: Few RWD rules to remember
description: Remember these rules when implementing website to mobile devices
date: '2019-09-29'
image: 'picture.jpg'
tags: [front-end','ui']
---
More users browse internet via mobile devices than through computer screens. There is no argue in that statement, statistics say for themselves. As front-end developers we should honor the users choice and make sure that the website or app, that we are implementing, is accessible and readable for mobile users. Here are some rules I gathered to help You think in responsive terms.

**Basic rules:**
1. More people browse internet via mobile devices - adopt a mobile-first approach. Design and implement for smallest devices, then customize it for bigger screens.
1. Choose breakpoints according to the content instead specific device.  There are a lot of device screen sizes, Your website should be flexible enough to look fine on most of them.
1. Be careful with breakpoints. Only add one when the design breaks and the content dictates it.
1. Consider using relative units. If You are sure to use absolute unit(px), thats fine but keep in mind that they dont scale with browser width. Otherwise replace px with %, vh / vw, em / rem.
1. Use the meta viewport tag to control the width and scaling of the browser's viewport.
	```
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	```
1. Ensure your page is accessible by not disabling user scaling. If You want to disable it(tag below), be 500% sure about it.
	```
	<meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0" />
	```
1. Do not use large fixed width elements.
1. Be aware of the size of interactive elements. On the mobile device you use finger, not the mouse.
1. Use `max-width`values for layout. When You set up `max-width` to `1000px` and `width` to `100%`, then the content will fill the screen, but won't go over 1000px



**Images:**
1. Optimise the images. Remember that they are probably the heaviest elements, unoptimized images can drastically slow down Your website.
1. Lazy load images on the website
1. Consider using `max-width` css property. Max-width displays images at full size by default. When container shrinks the image also shrinks. Note - when container is bigger than img, image wont scale bigger that it originally is. When You just set `width` property, image will scale no matter its original size.
	```
	img {
	    max-width: 100%;
	}
	```


**Typography:**
1. If you use relative units, rem is more predictable than regular em.
1. When You use em unit, keep in mind that the font scales according to its containers font size.
1. Improve font loading performance
1. Keep lines of text to a maximum of around 70 or 80 characters (about 10 words) for readibility purposes.


**Performance:**

It's important to remember that mobile devices usually has slower internet connection and take more time to download website data. Thats why remembering about performance is crucial when adopting Responsive Web Design.
1. Enable gzipping for files
1. Consider using Content delivery networks (CDNs). They deliver your static content to users faster than your own server.
1. Enable SPDY(pronounced speedy) or HTTP2 protocol. [More here](https://www.linuxbabe.com/nginx/what-are-spdy-and-http2-and-how-to-enable-them-on-nginx)



**Sources**:
- https://www.creativebloq.com/rwd/pros-guide-responsive-web-design-71515692
- https://kyleschaeffer.com/responsive-layouts-using-css-media-queries
- https://developers.google.com/web/fundamentals/design-and-ux/responsive/?hl=en

