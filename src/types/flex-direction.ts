//https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction
export type CssFlexDirection =
    | "row"
    | "row-reverse"
    | "column"
    | "column-reverse"
    | "inherit"
    | "initial"
    | "revert"
    | "revert-layer"
    | "unset";

export function isCssFlexDirection(value: any): value is CssFlexDirection {
  if (typeof value !== "string") return false;

  return (
    value === "row" ||
    value === "row-reverse" ||
    value === "column" ||
    value === "column-reverse" ||
    value === "inherit" ||
    value === "initial" ||
    value === "revert" ||
    value === "revert-layer" ||
    value === "unset"
  );
}
