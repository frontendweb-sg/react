export type Color =
  | "primary"
  | "secondary"
  | "info"
  | "danger"
  | "warning"
  | "light"
  | "success";
export type Size = "xs" | "sm" | "md" | "lg" | "xl";
export type Align = "left" | "center" | "right" | "justify" | "inherit";
export type Display =
  | "block"
  | "inline-block"
  | "inline"
  | "flex"
  | "inline-flex"
  | "table"
  | "inline-table"
  | "table-caption"
  | "table-cell"
  | "table-column"
  | "table-column-group"
  | "grid"
  | "inline-grid"
  | "list-item"
  | "hidden";
export type Num =
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12";
export type CommonFlex = "start" | "end" | "center" | "stretch";
export type JustifyContent =
  | "normal"
  | "evenly"
  | "around"
  | "between"
  | CommonFlex;
export type JustifyItems = CommonFlex;
export type JustifySelf = "auth" | CommonFlex;
export type AlignContent = JustifyContent | "baseline";
export type AlignItems = "baseline" | CommonFlex;
export type AlignSelf = CommonFlex | "auto" | "baseline";
export type Flex = "1" | "auto" | "initial" | "none";
export type FlexGrow = "grow" | "grow-1";
export type FlexShrink = "shrink" | "shrink-1";
export type FlexOrder = "first" | "last" | "none" | Num;
export type GridColumn = Num | "none";
