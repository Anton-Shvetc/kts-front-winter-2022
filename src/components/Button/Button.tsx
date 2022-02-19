import React from "react";
import { PropsWithChildren } from "react";
import "./Button.scss"

// function Button() {
//   return <div className="search__btn"><i className="fas fa-search"></i></div>;
// }

// export default Button;





export type ButtonProps = PropsWithChildren<{
  onClick?: (e: React.MouseEvent) => void;
  disabled?: boolean;
  className?: string;
}>;

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  disabled = false,
  className,
}) => (
  <button onClick={onClick} disabled={disabled} className={className}>
    {children}
  </button>
);

export default Button;