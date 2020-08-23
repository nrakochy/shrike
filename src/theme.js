export const theme = {
  breakpoints: ["40em", "52em", "64em"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [14, 18, 20, 24, 32, 48, 64, 96],
  fonts: {
    heading: "inherit",
    monospace: "Menlo, monospace",
    body: "GT_WalsheimRegular, Helvetica, sans-serif",
  },
  fontWeights: {
    body: 400,
    heading: 800,
    bold: 800,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: "#000",
    background: "#f0f8fa",
    primary: "#55BDCA",
    secondary: "#022449",
    accent: "#F27D42",
    highlight: "#96FFFF",
    muted: "#f6f6f6",
  },
  text: {
    heading: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    h1: {
      variant: "text.heading",
      fontSize: 5,
    },
    h2: {
      variant: "text.heading",
      fontSize: 4,
    },
    h3: {
      variant: "text.heading",
      fontSize: 3,
    },
    h4: {
      variant: "text.heading",
      fontSize: 2,
    },
    h5: {
      variant: "text.heading",
      fontSize: 1,
    },
    h6: {
      variant: "text.heading",
      fontSize: 0,
    },
    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit",
      },
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit",
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
  },
};

export function getThemeEntry(k) {
  const target = theme[k];
  if (!target) {
    throw Error(
      `Invoked a bad key name which does not exist in the theme object ${k}`
    );
  }
  return target;
}
