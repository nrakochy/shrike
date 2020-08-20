import React from "react";
import {
  Button as ThemeButton,
  ButtonProps as ThemeButtonProps,
} from "theme-ui";

export interface ButtonProps extends ThemeButtonProps {
  label: string;
}

export const Button: React.FC<ButtonProps> = ({ label, ...props }) => {
  return <ThemeButton {...props}>{label}</ThemeButton>;
};
