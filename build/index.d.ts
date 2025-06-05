type CssBreakpointUnit = "px" | "em" | "rem";
type CSSUnit = CssBreakpointUnit | "%" | "vh" | "vw" | "vmin" | "vmax" | "ch" | "ex" | "cm" | "mm" | "in" | "pt" | "pc";

type CssLength = "0" | `${number}${CSSUnit}`;
declare function isCssLength(value: any): value is CssLength;

type CssDisplayPrecomposedValues = "block" | "inline" | "inline-block" | "flex" | "inline-flex" | "grid" | "inline-grid" | "flow-root";
type CssDisplayBoxGeneration = "none" | "contents";
type CssDisplayMultiKeywordSyntax = "block flex" | "block flow" | "block flow-root" | "block grid" | "inline flex" | "inline flow" | "inline flow-root" | "inline grid";
type CssDisplayOtherValues = "table" | "table-row" | "list-item";
type CssDisplayGlobalValues = "inherit" | "initial" | "revert" | "revert-layer" | "unset";
type CssDisplay = CssDisplayPrecomposedValues | CssDisplayBoxGeneration | CssDisplayMultiKeywordSyntax | CssDisplayOtherValues | CssDisplayGlobalValues;
declare function isCssDisplayPrecomposedValues(value: any): value is CssDisplayPrecomposedValues;
declare function isCssDisplayBoxGeneration(value: any): value is CssDisplayBoxGeneration;
declare function isCssDisplayMultiKeywordSyntax(value: any): value is CssDisplayMultiKeywordSyntax;
declare function isCssDisplayOtherValues(value: any): value is CssDisplayOtherValues;
declare function isCssDisplayGlobalValues(value: any): value is CssDisplayGlobalValues;
declare function isCssDisplay(value: any): value is CssDisplay;

type CSSGapKeyword = "inherit" | "initial" | "revert" | "revert-layer" | "unset";
type Gap = CssLength | CSSGapKeyword;
declare function isCSSGap(value: any): value is Gap;

type CssFlexDirection = "row" | "row-reverse" | "column" | "column-reverse" | "inherit" | "initial" | "revert" | "revert-layer" | "unset";
declare function isCssFlexDirection(value: any): value is CssFlexDirection;

type CssFlexWrap = "nowrap" | "wrap" | "wrap-reverse" | "inherit" | "initial" | "revert" | "revert-layer" | "unset";
declare function isCssFlexWrap(value: any): value is CssFlexWrap;

type CssJustifyContent = "center" | "start" | "end" | "flex-start" | "flex-end" | "left" | "right" | "normal" | "space-between" | "space-around" | "space-evenly" | "stretch" | "safe center" | "unsafe center" | "inherit" | "initial" | "revert" | "revert-layer" | "unset";
declare function isCssJustifyContent(value: any): value is CssJustifyContent;

type CssAlignContent = "normal" | "start" | "center" | "end" | "flex-start" | "flex-end" | "baseline" | "first baseline" | "last baseline" | "space-between" | "space-around" | "space-evenly" | "stretch" | "safe center" | "unsafe center" | "inherit" | "initial" | "revert" | "revert-layer" | "unset";
declare function isCssAlignContent(value: any): value is CssAlignContent;

type CSSSizeKeyword = "auto" | "fit-content" | "max-content" | "min-content" | "inherit" | "initial" | "unset";
type CssSize = CssLength | CSSSizeKeyword;

export { type CSSUnit, type CssAlignContent, type CssBreakpointUnit, type CssDisplay, type CssDisplayBoxGeneration, type CssDisplayGlobalValues, type CssDisplayMultiKeywordSyntax, type CssDisplayOtherValues, type CssDisplayPrecomposedValues, type CssFlexDirection, type CssFlexWrap, type CssJustifyContent, type CssLength, type CssSize, type Gap, isCSSGap, isCssAlignContent, isCssDisplay, isCssDisplayBoxGeneration, isCssDisplayGlobalValues, isCssDisplayMultiKeywordSyntax, isCssDisplayOtherValues, isCssDisplayPrecomposedValues, isCssFlexDirection, isCssFlexWrap, isCssJustifyContent, isCssLength };
