const setHighlightColor = (
  highlight: boolean,
  defaultColor: string,
  highlightColor: string
): string => {
  if (highlight) {
    return highlightColor;
  }

  return defaultColor;
};

export default setHighlightColor;
