'use strict';

var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// src/types/length.ts
function isCssLength(value) {
  if (typeof value !== "string") return false;
  if (value === "0") return true;
  const cssUnitRegex = /^[0-9]+(\.[0-9]+)?(px|em|rem|%|vh|vw|vmin|vmax|ch|ex|cm|mm|in|pt|pc)$/;
  return cssUnitRegex.test(value);
}
__name(isCssLength, "isCssLength");

// src/types/display.ts
function isCssDisplayPrecomposedValues(value) {
  if (typeof value !== "string") return false;
  return value === "block" || value === "inline" || value === "inline-block" || value === "flex" || value === "inline-flex" || value === "grid" || value === "inline-grid" || value === "flow-root";
}
__name(isCssDisplayPrecomposedValues, "isCssDisplayPrecomposedValues");
function isCssDisplayBoxGeneration(value) {
  if (typeof value !== "string") return false;
  return value === "none" || value === "contents";
}
__name(isCssDisplayBoxGeneration, "isCssDisplayBoxGeneration");
function isCssDisplayMultiKeywordSyntax(value) {
  if (typeof value !== "string") return false;
  return value === "block flex" || value === "block flow" || value === "block flow-root" || value === "block grid" || value === "inline flex" || value === "inline flow" || value === "inline flow-root" || value === "inline grid";
}
__name(isCssDisplayMultiKeywordSyntax, "isCssDisplayMultiKeywordSyntax");
function isCssDisplayOtherValues(value) {
  if (typeof value !== "string") return false;
  return value === "table" || value === "table-row" || value === "list-item";
}
__name(isCssDisplayOtherValues, "isCssDisplayOtherValues");
function isCssDisplayGlobalValues(value) {
  if (typeof value !== "string") return false;
  return value === "inherit" || value === "initial" || value === "revert" || value === "revert-layer" || value === "unset";
}
__name(isCssDisplayGlobalValues, "isCssDisplayGlobalValues");
function isCssDisplay(value) {
  if (typeof value !== "string") return false;
  return isCssDisplayPrecomposedValues(value) || isCssDisplayBoxGeneration(value) || isCssDisplayMultiKeywordSyntax(value) || isCssDisplayOtherValues(value) || isCssDisplayGlobalValues(value);
}
__name(isCssDisplay, "isCssDisplay");

// src/types/gap.ts
function isCSSGapKeyword(value) {
  if (typeof value !== "string") return false;
  return value === "inherit" || value === "initial" || value === "revert" || value === "revert-layer" || value === "unset";
}
__name(isCSSGapKeyword, "isCSSGapKeyword");
function isCSSGap(value) {
  if (typeof value !== "string") return false;
  return isCSSGapKeyword(value) || isCssLength(value);
}
__name(isCSSGap, "isCSSGap");

// src/types/flex-direction.ts
function isCssFlexDirection(value) {
  if (typeof value !== "string") return false;
  return value === "row" || value === "row-reverse" || value === "column" || value === "column-reverse" || value === "inherit" || value === "initial" || value === "revert" || value === "revert-layer" || value === "unset";
}
__name(isCssFlexDirection, "isCssFlexDirection");

// src/types/flex-wrap.ts
function isCssFlexWrap(value) {
  if (typeof value !== "string") return false;
  return value === "nowrap" || value === "wrap" || value === "wrap-reverse" || value === "inherit" || value === "initial" || value === "revert" || value === "revert-layer" || value === "unset";
}
__name(isCssFlexWrap, "isCssFlexWrap");

// src/types/justify-content.ts
function isCssJustifyContent(value) {
  if (typeof value !== "string") return false;
  return (
    /* Positional alignment */
    value === "center" || value === "start" || value === "end" || value === "flex-start" || value === "flex-end" || value === "left" || value === "right" || /* Normal alignment */
    value === "normal" || /* Distributed alignment */
    value === "space-between" || value === "space-around" || value === "space-evenly" || value === "stretch" || /* Overflow alignment */
    value === "safe center" || value === "unsafe center" || /* Global values */
    value === "inherit" || value === "initial" || value === "revert" || value === "revert-layer" || value === "unset"
  );
}
__name(isCssJustifyContent, "isCssJustifyContent");

// src/types/align-content.ts
function isCssAlignContent(value) {
  if (typeof value !== "string") return false;
  return (
    /* Normal alignment */
    value === "normal" || /* Basic positional alignment */
    value === "start" || value === "center" || value === "end" || value === "flex-start" || value === "flex-end" || /* Baseline alignment */
    value === "baseline" || value === "first baseline" || value === "last baseline" || /* Distributed alignment */
    value === "space-between" || value === "space-around" || value === "space-evenly" || value === "stretch" || /* Overflow alignment */
    value === "safe center" || value === "unsafe center" || /* Global values */
    value === "inherit" || value === "initial" || value === "revert" || value === "revert-layer" || value === "unset"
  );
}
__name(isCssAlignContent, "isCssAlignContent");

exports.isCSSGap = isCSSGap;
exports.isCssAlignContent = isCssAlignContent;
exports.isCssDisplay = isCssDisplay;
exports.isCssDisplayBoxGeneration = isCssDisplayBoxGeneration;
exports.isCssDisplayGlobalValues = isCssDisplayGlobalValues;
exports.isCssDisplayMultiKeywordSyntax = isCssDisplayMultiKeywordSyntax;
exports.isCssDisplayOtherValues = isCssDisplayOtherValues;
exports.isCssDisplayPrecomposedValues = isCssDisplayPrecomposedValues;
exports.isCssFlexDirection = isCssFlexDirection;
exports.isCssFlexWrap = isCssFlexWrap;
exports.isCssJustifyContent = isCssJustifyContent;
exports.isCssLength = isCssLength;
//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map