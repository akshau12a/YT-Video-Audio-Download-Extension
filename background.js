chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'downloadVideo') {
    const quality = message.quality;
    // Here you would call a third-party API or service to download the video
    // For example, you could use youtube-dl or a similar service.
    console.log(`Downloading video with quality: ${quality}`);
  } else if (message.action === 'extractAudio') {
    // Here you would call a third-party API or service to extract the audio
    console.log('Extracting audio from video');
  }
});
