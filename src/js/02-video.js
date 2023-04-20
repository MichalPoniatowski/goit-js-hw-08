import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframeEl = document.querySelector("iframe");
const player = new Player(iframeEl);

player.on(
  "timeupdate",
  throttle((event) => {
    localStorage.setItem("videoplayer-current-time", event.seconds);
  }, 1000)
);

const savedTime = localStorage.getItem("videoplayer-current-time");

player
  .setCurrentTime(savedTime)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case "RangeError":
        break;
      default:
        break;
    }
  });
