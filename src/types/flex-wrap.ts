//https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap
export type CssFlexWrap =
  | "nowrap"
  | "wrap"
  | "wrap-reverse"
  | "inherit"
  | "initial"
  | "revert"
  | "revert-layer"
  | "unset";

export function isCssFlexWrap(value: any): value is CssFlexWrap {
  if (typeof value !== "string") return false;

  return (
    value === "nowrap" ||
    value === "wrap" ||
    value === "wrap-reverse" ||
    value === "inherit" ||
    value === "initial" ||
    value === "revert" ||
    value === "revert-layer" ||
    value === "unset"
  );
}
