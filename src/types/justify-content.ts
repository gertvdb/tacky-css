// https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content
export type CssJustifyContent =
  /* Positional alignment */
  | "center"
  | "start"
  | "end"
  | "flex-start"
  | "flex-end"
  | "left"
  | "right"

  /* Normal alignment */
  | "normal"

  /* Distributed alignment */
  | "space-between"
  | "space-around"
  | "space-evenly"
  | "stretch"

  /* Overflow alignment */
  | "safe center"
  | "unsafe center"

  /* Global values */
  | "inherit"
  | "initial"
  | "revert"
  | "revert-layer"
  | "unset";

export function isCssJustifyContent(value: any): value is CssJustifyContent {
  if (typeof value !== "string") return false;

  return (
    /* Positional alignment */
    value === "center" ||
    value === "start" ||
    value === "end" ||
    value === "flex-start" ||
    value === "flex-end" ||
    value === "left" ||
    value === "right" ||
    /* Normal alignment */
    value === "normal" ||
    /* Distributed alignment */
    value === "space-between" ||
    value === "space-around" ||
    value === "space-evenly" ||
    value === "stretch" ||
    /* Overflow alignment */
    value === "safe center" ||
    value === "unsafe center" ||
    /* Global values */
    value === "inherit" ||
    value === "initial" ||
    value === "revert" ||
    value === "revert-layer" ||
    value === "unset"
  );
}
