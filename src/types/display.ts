// https://developer.mozilla.org/en-US/docs/Web/CSS/display

export type CssDisplayPrecomposedValues =
  | "block"
  | "inline"
  | "inline-block"
  | "flex"
  | "inline-flex"
  | "grid"
  | "inline-grid"
  | "flow-root";

export type CssDisplayBoxGeneration = "none" | "contents";

export type CssDisplayMultiKeywordSyntax =
  | "block flex"
  | "block flow"
  | "block flow-root"
  | "block grid"
  | "inline flex"
  | "inline flow"
  | "inline flow-root"
  | "inline grid";

export type CssDisplayOtherValues = "table" | "table-row" | "list-item";

export type CssDisplayGlobalValues =
  | "inherit"
  | "initial"
  | "revert"
  | "revert-layer"
  | "unset";

export type CssDisplay =
  | CssDisplayPrecomposedValues
  | CssDisplayBoxGeneration
  | CssDisplayMultiKeywordSyntax
  | CssDisplayOtherValues
  | CssDisplayGlobalValues;

export function isCssDisplayPrecomposedValues(
  value: any,
): value is CssDisplayPrecomposedValues {
  if (typeof value !== "string") return false;

  return (
    value === "block" ||
    value === "inline" ||
    value === "inline-block" ||
    value === "flex" ||
    value === "inline-flex" ||
    value === "grid" ||
    value === "inline-grid" ||
    value === "flow-root"
  );
}

export function isCssDisplayBoxGeneration(
  value: any,
): value is CssDisplayBoxGeneration {
  if (typeof value !== "string") return false;

  return value === "none" || value === "contents";
}

export function isCssDisplayMultiKeywordSyntax(
  value: any,
): value is CssDisplayMultiKeywordSyntax {
  if (typeof value !== "string") return false;

  return (
    value === "block flex" ||
    value === "block flow" ||
    value === "block flow-root" ||
    value === "block grid" ||
    value === "inline flex" ||
    value === "inline flow" ||
    value === "inline flow-root" ||
    value === "inline grid"
  );
}

export function isCssDisplayOtherValues(
  value: any,
): value is CssDisplayOtherValues {
  if (typeof value !== "string") return false;

  return value === "table" || value === "table-row" || value === "list-item";
}

export function isCssDisplayGlobalValues(
  value: any,
): value is CssDisplayGlobalValues {
  if (typeof value !== "string") return false;

  return (
    value === "inherit" ||
    value === "initial" ||
    value === "revert" ||
    value === "revert-layer" ||
    value === "unset"
  );
}

export function isCssDisplay(value: any): value is CssDisplay {
  if (typeof value !== "string") return false;

  return (
    isCssDisplayPrecomposedValues(value) ||
    isCssDisplayBoxGeneration(value) ||
    isCssDisplayMultiKeywordSyntax(value) ||
    isCssDisplayOtherValues(value) ||
    isCssDisplayGlobalValues(value)
  );
}
