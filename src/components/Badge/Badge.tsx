import * as React from "react";
import { ReactElement, ReactNode } from "react";

export interface BadgeProps {
  text: string;
  children: ReactElement;
  color: string;
  iconStart?: ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ children, text }) => {
  return <div>{children}</div>;
};

export default Badge;
