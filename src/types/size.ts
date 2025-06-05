import { CssLength } from "@/types/length";

export type CSSSizeKeyword =
  | "auto"
  | "fit-content"
  | "max-content"
  | "min-content"
  | "inherit"
  | "initial"
  | "unset";

export type CssSize = CssLength | CSSSizeKeyword;
