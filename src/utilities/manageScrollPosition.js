const manageScrollPosition = () => {
  const scrollPosition = {};

  // load
  const loadScrollPosition = page => {
    if (scrollPosition[page] === undefined) {
    } else {
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }, 500);
    }
  };

  // save
  const saveScrollPosition = page => {
    const position = window.pageYOffset;
    scrollPosition[page] = position;
  };

  return {
    saveScrollPosition,
    loadScrollPosition
  };
};

export const { saveScrollPosition, loadScrollPosition } =
  manageScrollPosition();
