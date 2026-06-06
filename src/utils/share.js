/**
 * Global utility to handle native sharing or fallback to clipboard.
 * 
 * @param {Event} e - The click event (to prevent default navigation)
 * @param {string} title - The title of the content being shared
 * @param {string} [url] - The specific URL to share (defaults to current window.location.href)
 */
export const handleShare = async (e, title, url) => {
  e.preventDefault();
  
  // Resolve the full absolute URL
  let shareUrl = url;
  if (!shareUrl) {
    shareUrl = window.location.href;
  } else if (shareUrl.startsWith('/')) {
    // If it's a relative path, prepend the origin to make it an absolute URL for sharing
    shareUrl = window.location.origin + shareUrl;
  }

  const shareData = {
    title: title,
    text: `Check out: ${title}`,
    url: shareUrl
  };

  // Check if Web Share API is supported (mostly mobile + some modern desktop)
  if (navigator.share) {
    try {
      await navigator.share(shareData);
    } catch (err) {
      if (err.name !== 'AbortError') {
        console.error('Error sharing:', err);
      }
    }
  } else {
    // Fallback: Copy to clipboard
    try {
      await navigator.clipboard.writeText(shareData.url);
      alert('Link copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  }
};
