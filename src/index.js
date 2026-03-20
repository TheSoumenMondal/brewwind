import applyStyles from "./core/apply.js";
import { initMutationObserver } from "./core/observer.js";
import { splitClassName } from "./core/parser.js";
import { chaiClassScanner } from "./core/scanner.js";

const initStyles = () => {
  const chaiElements = chaiClassScanner();
  chaiElements.forEach((element) => {
    element.classList.forEach((className) => {
      if (!className.startsWith("chai-")) {
        return;
      }
      const classNameParts = splitClassName(className);
      if (!classNameParts) {
        return;
      }
      applyStyles(element, classNameParts);
    });
  });
};

export const initBrewWind = () => {
  if (typeof document === "undefined") {
    return null;
  }

  initStyles();
  return initMutationObserver();
};

if (typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initBrewWind, {
      once: true,
    });
  } else {
    initBrewWind();
  }
}
