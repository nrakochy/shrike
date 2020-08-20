import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Button, ButtonProps as ThemeButtonProps } from "theme-ui";

interface ButtonProps extends ThemeButtonProps {
  label: string;
}

export default {
  title: "Button",
  component: Button,
  argTypes: {
    label: { control: "text" },
    mr: { control: { type: "number", min: 0, max: 10 } },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => {
  const { label, ...rest } = args;
  return <Button {...rest}>{label}</Button>;
};

export const Primary = Template.bind({});
Primary.args = {
  label: "Button",
};
