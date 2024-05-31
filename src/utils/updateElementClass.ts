export const updateElementClass = (
    element: HTMLElement | null,
    isInViewport: boolean,
    classToAdd: string,
    classToRemove: string
) => {
    if (element) {
      if (isInViewport) {
        element.classList.add(classToAdd);
        element.classList.remove(classToRemove);
      } else {
        element.classList.remove(classToAdd);
        element.classList.add(classToRemove);
      }
    }
};
  