import { applyBgColor, applyTextColor } from "../properties/colors.js";
import { applyMargin, applyPadding, applyGap } from "../properties/spacing.js";
import {
  applyBorder,
  applyBorderColor,
  applyBorderRadius,
} from "../properties/border.js";
import { applyFontSize } from "../properties/fonts.js";
import { applyAlignment } from "../properties/alignment.js";
import { applyWidthHeight } from "../properties/sizing.js";
import { applyOffset, applyPositionType } from "../properties/position.js";

const getStyleType = (splittedClassName) => {
  if (!splittedClassName || splittedClassName.length < 2) {
    return "";
  }

  const baseStyle = splittedClassName[1];
  if (baseStyle === "rounded" && splittedClassName.length > 3) {
    return `rounded-${splittedClassName[2]}`;
  }

  if (baseStyle === "gap" && splittedClassName.length > 3) {
    return `gap-${splittedClassName[2]}`;
  }

  return baseStyle;
};

const applyStyles = (element, splittedClassName) => {
  const styleType = getStyleType(splittedClassName);
  switch (styleType) {
    case "bg":
      applyBgColor(element, splittedClassName);
      break;
    case "text":
      if (!applyAlignment(element, splittedClassName)) {
        applyTextColor(element, splittedClassName);
      }
      break;
    case "gap":
    case "gap-x":
    case "gap-y":
      applyGap(element, splittedClassName, styleType);
      break;
    case "w":
    case "h":
      applyWidthHeight(element, splittedClassName, styleType);
      break;
    case "p":
    case "px":
    case "py":
    case "pt":
    case "pr":
    case "pb":
    case "pl":
      applyPadding(element, splittedClassName);
      break;
    case "m":
    case "mx":
    case "my":
    case "mt":
    case "mr":
    case "mb":
    case "ml":
      applyMargin(element, splittedClassName);
      break;
    case "b":
    case "bt":
    case "br":
    case "bb":
    case "bl":
    case "bx":
    case "by":
      applyBorder(element, splittedClassName, styleType);
      break;
    case "border":
      applyBorderColor(element, splittedClassName);
      break;
    case "rounded":
    case "rounded-t":
    case "rounded-r":
    case "rounded-b":
    case "rounded-l":
    case "rounded-x":
    case "rounded-y":
      applyBorderRadius(element, splittedClassName, styleType);
      break;
    case "flex":
    case "inline":
    case "items":
    case "justify":
      applyAlignment(element, splittedClassName);
      break;
    case "font":
      applyFontSize(element, splittedClassName);
      break;
    case "static":
    case "fixed":
    case "absolute":
    case "relative":
    case "sticky":
      applyPositionType(element, styleType);
      break;
    case "top":
    case "right":
    case "bottom":
    case "left":
      applyOffset(element, splittedClassName, styleType);
      break;
    default:
      console.warn(`This style type is not supported yet: ${styleType}`);
  }
};

export default applyStyles;
