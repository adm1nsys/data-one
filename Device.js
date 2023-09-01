function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (isMobileDevice() && window.location.pathname !== '/mindex.html') {
  window.location.href = 'mindex.html' + window.location.search;
} else if (!isMobileDevice() && window.location.pathname !== '/index.html') {
  window.location.href = 'index.html' + window.location.search;
}
