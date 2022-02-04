export const pointerLock = (element: HTMLElement) => {
  element.requestPointerLock();
};

export const pointerUnlock = () => {
  document.exitPointerLock();
};

export const setPointerLockListener = (element: HTMLElement) => {
  element.addEventListener('click', () => pointerLock(element), false);
};

export const removePointerLockListener = (element: HTMLElement) => {
  element.removeEventListener('click', () => pointerLock(element), false);
  pointerUnlock();
};
