// https://developer.mozilla.org/en-US/docs/Web/CSS/align-content
export type CssAlignContent =
    /* Normal alignment */
    | "normal"

    /* Basic positional alignment */
    | "start"
    | "center"
    | "end"
    | "flex-start"
    | "flex-end"

    /* Baseline alignment */
    | "baseline"
    | "first baseline"
    | "last baseline"

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

export function isCssAlignContent(value: any): value is CssAlignContent {
  if (typeof value !== "string") return false;

  return (
    /* Normal alignment */
    value === "normal" ||

    /* Basic positional alignment */
    value === "start" ||
    value === "center" ||
    value === "end" ||
    value === "flex-start" ||
    value === "flex-end" ||

    /* Baseline alignment */
    value === "baseline" ||
    value === "first baseline" ||
    value === "last baseline" ||

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