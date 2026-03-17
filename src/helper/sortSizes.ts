/**
 * sortSizes — handles two distinct size vocabularies:
 *   Numeric  "6", "6.5", "7", "8", "10", "12" …  (shoes / waist / chest)
 *   Alpha    "XS", "S", "M", "L", "XL", "XXL" … (apparel)
 * Detection: if every size in the set parses as a finite number → numeric sort.
 * Otherwise → canonical alpha-size order with unknown values falling to the end.
 * Labels are also capitalised so any lower-case "s" / "m" / "l" from the API
 * are normalised to their standard upper-case forms.
 */
const ALPHA_SIZE_ORDER = [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL",
    "XXXL",
    "2XL",
    "3XL",
    "ONE SIZE",
  ];
  
  export const sortSizes = (sizes: string[]): string[] => {
    const capitalised = sizes.map((s) => s.trim().toUpperCase());
    const allNumeric = capitalised.every((s) => Number.isFinite(parseFloat(s)));
    if (allNumeric) {
      return capitalised.sort((a, b) => parseFloat(a) - parseFloat(b));
    }
    return capitalised.sort((a, b) => {
      const ia = ALPHA_SIZE_ORDER.indexOf(a);
      const ib = ALPHA_SIZE_ORDER.indexOf(b);
      // Both known → canonical order
      if (ia !== -1 && ib !== -1) return ia - ib;
      // Only one known → known comes first
      if (ia !== -1) return -1;
      if (ib !== -1) return 1;
      // Both unknown → alphabetical
      return a.localeCompare(b);
    });
  };