export const siteUrl = "https://marllon.netlify.app";

export const defaultOpenGraphImage = `${siteUrl}/og-image.png`;

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}
