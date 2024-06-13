document.getElementById('downloadVideo').addEventListener('click', () => {
  const quality = document.getElementById('quality').value;
  chrome.runtime.sendMessage({ action: 'downloadVideo', quality: quality });
});

document.getElementById('extractAudio').addEventListener('click', () => {
  chrome.runtime.sendMessage({ action: 'extractAudio' });
});
