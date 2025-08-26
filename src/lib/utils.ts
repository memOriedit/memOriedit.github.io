/**
 * Extract plain text from HTML content and create a meta description
 * @param htmlContent - The HTML content string
 * @param maxLength - Maximum length for the description (default: 155 characters)
 * @returns Truncated plain text suitable for meta description
 */
export function createDescriptionFromHtml(htmlContent: string, maxLength: number = 155): string {
  // Remove HTML tags
  const plainText = htmlContent
    .replace(/<[^>]*>/g, '') // Remove all HTML tags
    .replace(/&nbsp;/g, ' ') // Replace non-breaking spaces
    .replace(/&amp;/g, '&') // Replace HTML entities
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ') // Replace multiple whitespace with single space
    .trim();

  // If content is shorter than maxLength, return as is
  if (plainText.length <= maxLength) {
    return plainText;
  }

  // Truncate at word boundary to avoid cutting words in half
  const truncated = plainText.substring(0, maxLength);
  const lastSpaceIndex = truncated.lastIndexOf(' ');

  // If we can find a space to break at, use it; otherwise just truncate
  if (lastSpaceIndex > maxLength * 0.8) { // Don't break too early
    return truncated.substring(0, lastSpaceIndex) + '...';
  }

  return truncated + '...';
}