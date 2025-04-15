export const getImageUrl = (imageUrl: string): string => {
  // Перевіряємо, чи це зовнішній URL (починається з http:// або https://)
  if (/^https?:\/\//.test(imageUrl)) {
    return imageUrl;
  }
  // Для локальних шляхів додаємо базовий URL
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "";
  return `${baseUrl}${imageUrl}`;
};