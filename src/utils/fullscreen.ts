export const toggleFullScreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

const onFullScreenKeyPress = (e: KeyboardEvent) => {

  if (e.key.toLowerCase() === 'f' || e.key.toLowerCase() === 'а') { // русская буква а
    toggleFullScreen();
  }
}

export const setFullscreenListener = () => {
  document.addEventListener("keydown", onFullScreenKeyPress, false);
}

export const removeFullscreenListener = () => {
  document.removeEventListener("keydown", onFullScreenKeyPress, false);
}
