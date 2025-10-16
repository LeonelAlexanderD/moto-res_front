export const LocalStorage = {
  get(key) {
    return window.localStorage ? localStorage.getItem(key) || null : null;
  },

  set(key, value) {
    window.localStorage && localStorage.setItem(key, value);
  },

  remove(key) {
    window.localStorage && localStorage.removeItem(key);
  },

  clear() {
    window.localStorage && localStorage.clear();
  },
};
