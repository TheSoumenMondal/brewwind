export const borderDirectionValues = {
  b: "borderWidth",
  bt: "borderTopWidth",
  br: "borderRightWidth",
  bb: "borderBottomWidth",
  bl: "borderLeftWidth",
  bx: ["borderLeftWidth", "borderRightWidth"],
  by: ["borderTopWidth", "borderBottomWidth"],
};

export const borderWidthValues = {
  none: "0",
  0: "0",
  1: "1px",
  2: "2px",
  4: "4px",
  8: "8px",
  sm: "1px",
  md: "2px",
  lg: "4px",
  xl: "8px",
};

export const roundedDirectionValues = {
  rounded: "borderRadius",
  "rounded-t": ["borderTopLeftRadius", "borderTopRightRadius"],
  "rounded-r": ["borderTopRightRadius", "borderBottomRightRadius"],
  "rounded-b": ["borderBottomRightRadius", "borderBottomLeftRadius"],
  "rounded-l": ["borderTopLeftRadius", "borderBottomLeftRadius"],
  "rounded-x": ["borderTopLeftRadius", "borderBottomRightRadius"],
  "rounded-y": ["borderTopRightRadius", "borderBottomLeftRadius"],
};

export const borderRadiusValues = {
  none: "0",
  sm: "0.125rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px",
};
