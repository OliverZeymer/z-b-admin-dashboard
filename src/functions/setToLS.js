export function setToLS(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value));
}
