import { Variant } from "../types/interface";

export const findVariant = (
    variants: Variant[],
    color?: string,
    size?: string
  ) =>
    variants.find((v) => v.color === color && v.size === size) ??
    variants.find((v) => v.color === color) ??
    variants[0];