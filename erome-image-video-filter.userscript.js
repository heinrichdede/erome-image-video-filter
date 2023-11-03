// ==UserScript==
// @name         Erome Image/Video Filter
// @namespace    http://tampermonkey.net/
// @version      0.2.0
// @description  Hide or show images and Videos
// @updateURL    https://raw.githubusercontent.com/heinrichdede/erome-image-video-filter/main/erome-image-video-filter.userscript.meta.js
// @downloadURL  https://raw.githubusercontent.com/heinrichdede/erome-image-video-filter/main/erome-image-video-filter.userscript.js
// @author       heinrichdede
// @match        https://www.erome.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    let imagesElement = document.querySelectorAll('.user-info .album-images');
    let videosElement = document.querySelectorAll('.user-info .album-videos');

    if (imagesElement[0]) {
        if (imagesElement[0].addEventListener) {
            imagesElement[0].addEventListener('click', toggleImageBodyClass, false);
        } else if (imagesElement[0].attachEvent) {
            imagesElement[0].attachEvent('onclick', toggleImageBodyClass);
        } else {
            imagesElement[0]['on.click'] = toggleImageBodyClass;
        }
    }

    if (videosElement[0]) {
        if (videosElement[0].addEventListener) {
            videosElement[0].addEventListener('click', toggleVideoBodyClass, false);
        } else if (videosElement[0].attachEvent) {
            videosElement[0].attachEvent('onclick', toggleVideoBodyClass);
        } else {
            videosElement[0]['on.click'] = toggleVideoBodyClass;
        }
    }

    //Defines the function to be called on click
    function toggleImageBodyClass() {
        document.body.classList.toggle("hd-hide-images");
    }

    function toggleVideoBodyClass() {
        document.body.classList.toggle("hd-hide-videos");
    }

    let homeElement = document.querySelectorAll('#main h1');

    if (homeElement[0]) {
        if (homeElement[0].addEventListener) {
            homeElement[0].addEventListener('click', toggleImageAlbumBodyClass, false);
        } else if (homeElement[0].attachEvent) {
            homeElement[0].attachEvent('onclick', toggleImageAlbumBodyClass);
        } else {
            homeElement[0]['on.click'] = toggleImageAlbumBodyClass;
        }
    }

    let imageAlbums = document.querySelectorAll('.album-bottom-right > span.album-images');
    let videoAlbums = document.querySelectorAll('.album-bottom-right > span.album-videos');
    console.log(imageAlbums);
    console.log(videoAlbums);
    for (let i = 0; i < imageAlbums.length; ++i) {
        imageAlbums[i].closest('.album').classList.add("image-albums");
    };
    for (let i = 0; i < videoAlbums.length; ++i) {
        videoAlbums[i].closest('.album').classList.add("video-albums");
    };

    function toggleImageAlbumBodyClass() {
        document.body.classList.toggle("hd-hide-image-albums");
    }

})();

// +-----+
// | CSS |
// +-----+
GM_addStyle(`

.hd-hide-images div[sty].img,
.hd-hide-images .media-group .img {
  display: none;
}
.hd-hide-images .user-info .album-images {
  text-decoration: line-through;
}
.hd-hide-videos .video {
  display: none;
  text-decoration: line-through;
}
.hd-hide-videos .user-info .album-videos {
  text-decoration: line-through;
}
.hd-hide-image-albums .image-albums:not(.video-albums) {
  display: none;
}
#main h1 {
  padding-right: 30px;
  padding-left: 30px;
}
.hd-hide-image-albums #main h1 {
  text-decoration: line-through;
}
`);
// End CSS section
