import React from 'react';

export const getCursorPosition = (parent: React.RefObject<HTMLDivElement>) => {
  const selection = document.getSelection();
  const range = new Range();
  range.setStart(parent.current as Node, 0);
  if (selection !== null && selection.anchorNode) {
    range.setEnd(selection.anchorNode, selection.anchorOffset);
  }
  return range.toString().length;
};

export const setCursorPosition = (parent: React.RefObject<HTMLDivElement>, position: number) => {
  let child = (parent.current as Node).firstChild;
  while (position > 0 && child !== null && child.textContent) {
    const length = child.textContent.length;
    if (position > length) {
      position -= length;
      child = child.nextSibling;
    } else {
      if (child.nodeType == 3) {
        const selection = document.getSelection();
        if (selection !== null) {
          return selection.collapse(child, position);
        }
      }
      child = child.firstChild;
    }
  }
};
