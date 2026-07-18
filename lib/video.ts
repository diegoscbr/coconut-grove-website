/**
 * Returns a URL usable as a <video> source, or null if the URL can't be played
 * inline (e.g. a YouTube/Vimeo watch page). Prevents pasted share links from
 * spamming media-load errors.
 *
 * - Local/asset paths and direct video files (.mp4/.webm/.ogg/.mov) pass through.
 * - Google Drive share links (/file/d/ID/...) convert to a direct-stream URL.
 *   Note: Drive is unreliable for large files; prefer a file in /public/assets
 *   or a real video host (Mux/Cloudflare/Vimeo) for production.
 */
export function toPlayableVideoUrl(
  raw?: string | null,
): string | null {
  if (!raw) return null;
  const url = raw.trim();
  if (!url) return null;

  // Local/relative asset path
  if (url.startsWith("/")) return url;

  // Direct video file
  if (/\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(url)) return url;

  // Google Drive share link → direct stream
  const drive = url.match(/drive\.google\.com\/file\/d\/([^/]+)/);
  if (drive) return `https://drive.google.com/uc?export=download&id=${drive[1]}`;

  // Unknown / non-playable (YouTube watch page, etc.)
  return null;
}
