import { productImages } from "../productImages";
import { productImageMap } from "./productImageMap";

/**
So the flow is:
```
color + imageType  →  key  →  productImageMap[key]  →  imageKey  →  images[imageKey]  →  "/images/GreenHoodie01.webp"
"green"+"hoodie"     "green_hoodie"   "GreenHoodie01"              "/images/GreenHoodie01.webp"
*/

export const COLOR_MAP: Record<string, string> = {
  green: "#3d6b4f", red: "#b94040", clay: "#a0714f", ocean: "#3d7a8a",
  purple: "#6b4fa0", grey: "#808080", gray: "#808080",
  white: "#f5f5f5", black: "#1a1a1a", seethrough: "rgba(200,220,255,0.5)",
};

export const getPlaceholderImage = (color: string, imageType: string) => {
  const bg = COLOR_MAP[color] ?? "#cccccc";
  const label = imageType.charAt(0).toUpperCase() + imageType.slice(1);
  return `data:image/svg+xml,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
      <rect width="400" height="400" fill="#f0f0f0"/>
      <rect x="80" y="80" width="240" height="240" rx="12" fill="${bg}" opacity="0.25"/>
      <text x="200" y="195" font-family="Georgia,serif" font-size="18" fill="#555" text-anchor="middle" dominant-baseline="middle">${label}</text>
      <text x="200" y="220" font-family="Georgia,serif" font-size="13" fill="#888" text-anchor="middle" dominant-baseline="middle">${color}</text>
    </svg>
  `)}`;
};

export function resolveProductImage(color: string, imageType: string): string {
  const key = `${color.toLowerCase()}_${imageType.toLowerCase()}`;
  const imageKey = productImageMap[key];
  return imageKey ? productImages[imageKey] : getPlaceholderImage(color, imageType);
}


