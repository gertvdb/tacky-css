// https://developer.mozilla.org/en-US/docs/Web/CSS/gap
import { CssLength, isCssLength } from "@/types/length";
import {
  CssDisplayPrecomposedValues,
  isCssDisplayBoxGeneration,
  isCssDisplayGlobalValues,
  isCssDisplayMultiKeywordSyntax,
  isCssDisplayOtherValues,
  isCssDisplayPrecomposedValues,
} from "@/types/display";

type CSSGapKeyword =
  | "inherit"
  | "initial"
  | "revert"
  | "revert-layer"
  | "unset";

export function isCSSGapKeyword(
  value: any,
): value is CssDisplayPrecomposedValues {
  if (typeof value !== "string") return false;

  return (
    value === "inherit" ||
    value === "initial" ||
    value === "revert" ||
    value === "revert-layer" ||
    value === "unset"
  );
}

export type Gap = CssLength | CSSGapKeyword;

export function isCSSGap(value: any): value is Gap {
  if (typeof value !== "string") return false;
  return isCSSGapKeyword(value) || isCssLength(value);
}
