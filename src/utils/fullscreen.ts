export const toggleFullScreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}
export const setFullscreenListener = () => {
  document.addEventListener("keypress", function(e) {
    if (e.code === '121') {
      toggleFullScreen();
    }
  }, false);

}

