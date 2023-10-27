import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Align, Display, JustifyContent, AlignItems } from "../types";
import { css, CSSObject } from "@emotion/react";

type ownProps<T extends React.ElementType> = {
  component?: T;
  sx?: CSSObject;
  align?: Align;
  display?: Display;
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
  children: React.ReactNode;
};

export type BoxProps<T extends React.ElementType> = ownProps<T> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof ownProps<T>>;

export type BoxRef<T extends React.ElementType> =
  React.ComponentPropsWithRef<T>["ref"];

const Box = forwardRef(
  <T extends React.ElementType = "div">(
    {
      align,
      sx,
      alignItems,
      component,
      display,
      justifyContent,
      children,
      className,
      ...rest
    }: BoxProps<T>,
    ref?: BoxRef<T>,
  ) => {
    const Component = component || "div";

    const classes = classNames(className);
    return (
      <Component ref={ref} css={css(sx)} className={classes} {...rest}>
        {children}
      </Component>
    );
  },
);

Box.propTypes = {
  component: PropTypes.node,
  children: PropTypes.node,
  sx: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  align: PropTypes.oneOf<Align>([
    "left",
    "center",
    "right",
    "justify",
    "inherit",
  ]),
  display: PropTypes.oneOf<Display>([
    "block",
    "inline-block",
    "inline",
    "flex",
    "inline-flex",
    "table",
    "inline-table",
    "table-caption",
    "table-cell",
    "table-column",
    "table-column-group",
    "grid",
    "inline-grid",
    "list-item",
    "hidden",
  ]),
};
export default Box as <T extends React.ElementType>(
  props: BoxProps<T> & { ref?: BoxRef<T> },
) => React.ReactElement;
