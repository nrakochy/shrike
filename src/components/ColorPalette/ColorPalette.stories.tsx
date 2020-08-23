import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { ColorPalette } from "./ColorPalette";
import { ColorMode } from "theme-ui";
import { getThemeEntry, theme } from "../../theme";

function argTypesForDynamicColors(initialResult = {}) {
  const colors: Record<string, string> = getThemeEntry("colors");
  return Object.entries(colors).reduce((result, [name, color]) => {
    return { ...result, [name]: { control: "color" } };
  }, initialResult);
}

const defaultColorArgs = argTypesForDynamicColors();

export default {
  title: "ColorPalette",
  component: ColorPalette,
  argTypes: defaultColorArgs,
} as Meta;

const Template: Story = (props: Partial<ColorMode>) => {
  return <ColorPalette {...props} />;
};

export const Palette = Template.bind({});
Palette.args = {
  raw: theme,
};
