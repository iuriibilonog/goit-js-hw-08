'use strict';
import vimeo from '@vimeo/player';
import throttle from "lodash.throttle";

const STORAGE_KEY = "videoplayer-current-time";

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });


var onPlay = function (data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
   
};

player.on('timeupdate', throttle(onPlay, 1000));

const currentTime = localStorage.getItem(STORAGE_KEY) === null
      ? 0 : localStorage.getItem(STORAGE_KEY);

const parseCurrentTime = JSON.parse(currentTime);



player.setCurrentTime(parseCurrentTime.seconds);



