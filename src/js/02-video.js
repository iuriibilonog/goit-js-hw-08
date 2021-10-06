'use strict';
import vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const onPlay = function (data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data.seconds));
};

const currentTime = localStorage.getItem(STORAGE_KEY);

const parseCurrentTime = JSON.parse(currentTime);

if (currentTime) {
  player.setCurrentTime(parseCurrentTime.seconds);
} else {
  player.setCurrentTime(0);
}

player.on('timeupdate', throttle(onPlay, 1000));
