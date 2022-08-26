export function setColors(newPrimaryColor, newTextColor, newBackgroundColor) {
  document.documentElement.style.setProperty(
    "--primary-color",
    newPrimaryColor
  );
  document.documentElement.style.setProperty("--primary-text", newTextColor);
  document.documentElement.style.setProperty(
    "--primary-background",
    newBackgroundColor
  );
}
