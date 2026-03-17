import type { Variant } from "../types/interface";

export const uniqueColors = (variants: Variant[]): string[] =>
    Array.from(new Set(variants.map((v) => v.color).filter(Boolean))) as string[];