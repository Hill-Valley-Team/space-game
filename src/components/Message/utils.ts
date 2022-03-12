export const getCursorPosition = (parent: Node) => {
  const selection = document.getSelection();
  const range = new Range();
  range.setStart(parent, 0);
  if (selection !== null && selection.anchorNode) {
    range.setEnd(selection.anchorNode, selection.anchorOffset);
  }
  return range.toString().length;
};

export const setCursorPosition = (parent: Node, position: number) => {
  let child = parent.firstChild;
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
