import { CSSUnit } from "@/types/unit";

export type CssLength = "0" | `${number}${CSSUnit}`;

export function isCssLength(value: any): value is CssLength {
  if (typeof value !== "string") return false;

  // Check if it's "0"
  if (value === "0") return true;

  // Check if it matches the pattern ${number}${CSSUnit}
  const cssUnitRegex =
    /^[0-9]+(\.[0-9]+)?(px|em|rem|%|vh|vw|vmin|vmax|ch|ex|cm|mm|in|pt|pc)$/;
  return cssUnitRegex.test(value);
}
