import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { Button, ButtonProps } from "./Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    label: { control: "text" },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => {
  return <Button {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary",
  bg: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary",
  bg: "secondary",
};

export const Highlight = Template.bind({});
Highlight.args = {
  label: "Highlight",
  bg: "highlight",
};

export const Background = Template.bind({});
Background.args = {
  label: "Background",
  bg: "background",
};
