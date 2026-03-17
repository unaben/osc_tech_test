import type { Variant } from "../types/interface";

export const uniqueSizes = (variants: Variant[], color?: string): string[] =>
    Array.from(
      new Set(
        variants
          .filter((v) => !color || v.color === color)
          .map((v) => v.size)
          .filter(Boolean)
      )
    ) as string[];