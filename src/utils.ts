export const removeAds = () => {
  const adSkip = document.querySelector('.ytp-ad-skip-button') as HTMLButtonElement;
  if (adSkip) adSkip.click();
  const modernAdSkip = document.querySelector('.ytp-ad-skip-button-modern') as HTMLButtonElement;
  if (modernAdSkip) modernAdSkip.click();
  const unskippableAd = document.querySelector('.ytp-ad-preview-container');
  if (unskippableAd) {
    const player = document.querySelector('.html5-main-video') as HTMLVideoElement;
    if (player) player.currentTime = 999;
  }
  const adRenderer = document.querySelector('.ytd-ad-slot-renderer');
  if (adRenderer) adRenderer.remove();
  const playerAds = document.querySelector('#player-ads');
  if (playerAds) playerAds.remove();
};

export const init = () => {
  removeAds();
  const observer = new MutationObserver(() => {
    removeAds();
  });
  observer.observe(document.body, { childList: true, subtree: true });
};
