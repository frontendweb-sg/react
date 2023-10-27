import React, { forwardRef } from "react";

export type ButtonGroupProps = React.HtmlHTMLAttributes<HTMLDivElement> & {};

const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ children, ...rest }, ref) => {
    return (
      <div ref={ref} {...rest}>
        {children}
      </div>
    );
  },
);

export default ButtonGroup;
