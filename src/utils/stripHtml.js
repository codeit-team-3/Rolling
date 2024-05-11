export function stripHtml(html) {
  const newText = html.replace(/<\/p>/gi, '\n').replace(/<p>/gi, '').replace(/<[^>]*>/g, '');
  return newText;
}
