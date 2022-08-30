export function setColors(
  newPrimaryColor,
  newTextColor,
  newBackgroundColor,
  newThemeColor
) {
  document.documentElement.style.setProperty(
    "--primary-color",
    newPrimaryColor
  );
  document.documentElement.style.setProperty("--primary-text", newTextColor);
  document.documentElement.style.setProperty(
    "--primary-background",
    newBackgroundColor
  );
  document.documentElement.style.setProperty(
    "--primary-theme",
    newThemeColor
  );
}
