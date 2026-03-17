import type { Product } from "../../../types/interface";

export const shouldShowRecent = (query: string, recent: Product[]) =>
  query.trim().length === 0 && recent.length > 0;
