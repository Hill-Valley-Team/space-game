// webpack/mock/localStorage.mock.ts

// eslint-disable-next-line import/no-mutable-exports
let localStorage;

if (typeof window !== 'undefined') {
  localStorage = window.localStorage;
} else {
  localStorage = {
    setItem() {},
    getItem() {},
  };
}

export default localStorage;
