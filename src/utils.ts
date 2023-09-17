export const removeAds = () => {
  const adSkip = document.querySelector('.ytp-ad-skip-button') as HTMLButtonElement;
  if (adSkip) adSkip.click();
  const adRenderer = document.querySelector('.ytd-display-ad-renderer');
  if (adRenderer) adRenderer.remove();
};

export const init = () => {
  console.log('init');
  const observer = new MutationObserver(() => {
    removeAds();
  });
  observer.observe(document.body, { childList: true, subtree: true });
};
