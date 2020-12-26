export function setToken(value) {
  if (value) {
    window.localStorage.setItem("token", value);
  }
}

export function isToken() {
  const token = window.localStorage.getItem("token");

  return !!token;
}

export function getUserToken() {
  return window.localStorage.getItem("token");
}

export function setUserToken(token) {
  window.localStorage.setItem("token", token);
}

export function clearLocalStorage() {
  window.localStorage.clear();
}

export function removeItem(key) {
  window.localStorage.removeItem(key);
}

export function getLocalStorageValue(key) {
  return window.localStorage.getItem(key);
}

export function setLocalStorageValue(key, value) {
  window.localStorage.setItem(key, value);
}
