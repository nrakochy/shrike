/** @jsx jsx */
import React, { ComponentProps } from "react";
import { useThemeUI, jsx, Flex, Theme, ColorMode } from "theme-ui";

export interface ColorSwatchProps extends ComponentProps<"div"> {
  color: string;
  name: string;
  size?: string | number;
}

export interface ColorPaletteProps extends Partial<ColorMode> {
  raw?: Record<string, string>;
}

export const ColorSwatch = ({
  color,
  name,
  size = 64,
  ...props
}: ColorSwatchProps) => {
  return (
    <Flex sx={{ flexDirection: "row", alignItems: "center", paddingBottom: 2 }}>
      <div
        sx={{
          display: "flex",
          width: size,
          height: size,
          bg: color,
          py: 2,
          mr: 3,
          borderRadius: "50%",
        }}
      ></div>
      <div sx={{ display: "flex", justifyContent: "center" }}>{name}</div>
    </Flex>
  );
};

export const ColorPalette = (props: ColorPaletteProps = {}) => {
  const { theme } = useThemeUI();
  const { raw = {}, ...customizedColors } = props;
  const rawColors = raw.colors || {};
  const { colors } = theme;
  const palette = { ...colors, ...rawColors, ...customizedColors };
  return (
    <Flex sx={{ flexDirection: "row", justifyContent: "space-evenly" }}>
      <div sx={{ display: "flex", flexDirection: "column", mr: 5 }}>
        {Object.entries(palette!).map((entry) => {
          const [name, color]: [string, any] = entry;
          return <ColorSwatch name={name} color={color} />;
        })}
      </div>
      <div sx={{ display: "flex" }}>{JSON.stringify(palette, null, 4)}</div>
    </Flex>
  );
};
