export function stripHtml(html) {
  let newText = html
    .replace(/<\/p>/gi, "\n")
    .replace(/<p>/gi, "")
    .replace(/<[^>]*>/g, "")

  newText = newText
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#34;/g, '"')

  return newText
}
